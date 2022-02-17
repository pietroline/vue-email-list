const vue = new Vue(

    {
        el:"#app",
        data:{
            emailArray: [],
            erroreVerificato: false,
            message: "",
            info: false,
        },

        methods:{

            createEmailArray(){

               if(this.emailArray.length == 0){
                    for(let i=0; i<10; i++){
                        axios.get('https://flynn.boolean.careers/exercises/api/random/mailergrgegrege')
                            .then(response => {
                                this.emailArray.push(response.data.response);
                            })
                            .catch(errore => this.erroreVerificato = true);
                    }
                    this.message = "Hai generato un array di email";
               }else{
                   this.message = "Hai già generato un array di email";
                   this.info = true;
                   setTimeout(() => {
                       this.message = "Hai generato un array di email";
                       this.info = false;
                   },1000);
               }
              

            },
        }
        
    }

);



