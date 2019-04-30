<template>
  <div class="Taskpage">
    <div class="thead">
    </div>

       <h2 class="text-center"><span class="welcomet">Welcome {{user}}</span></h2>
      
         <h1 class="text-right" id="o" v-on:click="off()"><i class="fa fa-power-off"></i></h1>


     <div class="top_pad">
          <h4 class="here_task">Here are your Tasks: </h4>

       <div id="user_tasks">
         <h4 v-if="tasks.length === 0 || tasks[0].length === 0" id="la">Please add your tasks ...</h4>
          
          <div v-for="task in tasks" class="tasks_c"><h5>{{task["description"]}}<span class="text-right"></span></h5>

            <button type="button" class="btn btn-danger" id="butt" v-on:click="deletes(task , tasks)">Delete</button>
    
          </div>

      </div>             
 

       </div>
     
  </div>
</template>

<style>
 
  .thead{
  width: 100%;
  height: 3rem;
  background-color: #303030;
} 

.welcomet{
font-family: 'Inconsolata', monospace;

}

.tasks_c{
  padding:0rem;
  margin-bottom: 2rem;

}

.top_pad{

  margin-top: 5rem;
  padding:1rem;
}

#butt {

   margin-left: 80%;

   margin-top: -4%;
}
#user_tasks{
}
#la{

  font-family: 'Dancing Script', cursive;

}

.here_task{
  margin-bottom: 2rem;
  font-family: 'Cuprum', sans-serif;

}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 550px) {
   html{
      font-size: 12px;
     }

     #butt {

   margin-left: 82%;
   border:0.1rem solid grey;
   margin-top: -9%;
}

  #user_tasks{
    margin-top: 3%;
  }



} 

@media only screen and (min-width: 550px) {

   html{
      font-size: 15px;
     }

     #butt {

   margin-left: 90%;
    border:0.1rem solid grey;
   margin-top: -7%;
}


} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

   html{
      font-size: 15px;
     }

     #butt {

   margin-left: 90%;
border:0.1rem solid grey;
   margin-top: -7%;
}


} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
   html{
      font-size: 15px;
     }
#butt {

   margin-left: 90%;
border:0.1rem solid grey;
   margin-top: -7%;
}



} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

     html{
      font-size: 15px;
     }
#butt {

   margin-left: 90%;
border:0.1rem solid grey;
   margin-top: -5%;
}



} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

    
     html{
      font-size: 15px;
     }

#butt {

   margin-left: 90%;
border:0.1rem solid grey;
   margin-top: -4%;
}



}

body{
  overflow-x: hidden;
}




</style>

<script>

 var axios = require("axios");

export default {
  data: function() {
    return {
      message: "This is the Task Page!!",
      user: "",
      tasks: []

    };
  },
  created: function() {

     axios.get("http://localhost:3000/currentuser").then(function(response){

         console.log(response.data["User"]["name"]);
         this.user = response.data["User"]["name"]

   }.bind(this));



     axios.get("http://localhost:3000/cusertasks").then(function(response){
           
            console.log(response.data["tasks"]);
            this.tasks = response.data["tasks"];

     }.bind(this))


  },
  methods: {
     
     deletes: function(task , tasks){
        
         var id = task.id ;
         var array = tasks;


           axios
        .delete("http://localhost:3000/deltask/" + task.id)
        .then(function(response) {
          console.log(response.data);

            var index = array.indexOf(task);
            array.splice(index, 1);

          console.log(array);
       
        }.bind(this));


     },

       off: function(){
        this.$router.push("/");
    }


  },
  computed: {}
};
</script>