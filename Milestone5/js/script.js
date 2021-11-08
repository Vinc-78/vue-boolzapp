Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    currentChat: {},
    
    nuovoMessDiTesto: "",

    utenteDaCercare: "",

    classepopUP:"",

    timestamp:"",
    
    messRisposta: {
      text: "Tutto Ok",
      timestamp: "",
      status: "sent"
    },
    
    iconMess: "fas fa-microphone",

    chatList: [
      {
        name: "Luca",
        avatar: "img/avatar_1.jpg",
        messages: [
          {
            text: "Ciao",
            timestamp: "2021-11-03 09:55:00",
            status: "sent"
          },
          {
            text: "Ciao, come va ?",
            timestamp: "2021-11-03 09:58:00",
            status: "received"
          }

        ]
      },
      {
        name: "Marco",
        avatar: "img/avatar_2.jpg",
        messages: [
          {
            text: "Ciao, mi prendi il latte",
            timestamp: "2021-12-24 12:55:00",
            status: "sent"
          },
          {
            text: "Scusa ma chi sei ?",
            timestamp: "2021-12-24 13:00:00",
            status: "received"
          }

        ]
      },
      {
        name: "Michele",
        avatar: "img/avatar_3.jpg",
        messages: [
          {
            text: "Hai portato a spasso il cane?",
            timestamp: "10/01/2020 15:30:55",
            status: "sent"
          },
          {
            text: "Ricordati di dargli da mangiare",
            timestamp: "10/01/2020 15:50:00",
            status: "sent"
          },
          {
            text: "Tutto fatto!",
            timestamp: "10/01/2020 16:15:22",
            status: "received"
          }

        ]
      },
      {
        name: "Fabio",
        avatar: "img/avatar_4.jpg",
        messages: [
          {
            text: "Ciao come stai?",
            timestamp: "10/01/2020 16:30:00",
            status: "sent"
          },
          {
            text: "Bene grazie! Stasera ci vediamo?",
            timestamp: "10/01/2020 15:50:00",
            status: "received"
          },
          {
            text: "Mi piacerebbe ma devo andare a fare la spesa.'",
            timestamp: "10/01/2020 16:15:22",
            status: "sent"
          }

        ]
      },
      {
        name: "Luisa",
        avatar: "img/avatar_6.jpg",
        messages: [
          {
            text: "Ciao usciamo?",
            timestamp: "20/08/2020 16:30:00",
            status: "sent"
          },
          {
            text: "Si volentieri, dove si va ?",
            timestamp: "20/08/2020 16:50:00",
            status: "received"
          },
          {
            text: "Che ne dici di un film e cena fuori ?",
            timestamp: "20/08/2020 17:15:22",
            status: "sent"
          }

        ]
      }


    ]


  },

  methods: {

    getLastMessage(testo) {
      // esistono messaggi?
      if (testo.length === 0) {
        return "";
      }

      const message = testo[testo.length - 1].text;

      return `${message.slice(0, 30)}...`;
    },

    attivaChat(chatDaAttivare) {

      this.currentChat = chatDaAttivare;
    },

    changeIcon() {
      this.iconMess = "fas fa-paper-plane"
    },

    orario(){
      this.timestamp = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  
      console.log("orario mess attuale ",this.timestamp)
  
      return this.timestamp
      },

    sendNewMessage() {

      let nuovoMess = {
        text: this.nuovoMessDiTesto,
        timestamp: this.orario(),
        status: "sent"

      }

      this.currentChat.messages.push(nuovoMess);
      this.iconMess = "fas fa-microphone";
      this.nuovoMessDiTesto = "";

      setTimeout(() => {
        this.currentChat.messages.push( 
          
          this.messRisposta = {
            text: "Tutto Ok",
            timestamp: this.orario(),
            status: "received"
          }
        );
      }, 1000);
    },

    ricerca() {


      return this.chatList.filter(elemento => {
        return elemento.name.toLowerCase().includes(this.utenteDaCercare.toLowerCase().trim())
      })


    },
    azzeraRicerca() {
      this.utenteDaCercare = "";
    },

    cancellaMessaggio(indice) {
      this.currentChat.messages.splice(indice, 1);
      this.classepopUP="";
    },
   

    attiva(index){
      this.classepopUP="display: inline-block;"
    },

    


  },

  

  beforeMount(u) {
    this.currentChat = this.chatList[0];

    

  }

});




