<template>
  <div class="Taskpage">
    <div class="thead">
    </div>

       <h2 class="text-center"><span class="welcomet">Welcome {{user}}</span></h2>



     <div class="top_pad">
          <h4>Here are your tasks : </h4>

       <div id="user_tasks">
          
          <div v-for="task in tasks" class="tasks_c"><h5>{{task["description"]}}<span class="text-right"></span></h5>

            <button type="button" class="btn btn-danger" id="butt">Delete</button>
    
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
  padding:0.5rem;
  border:1px solid grey;
}

.top_pad{
  border:1px solid red;
  margin-top: 5rem;
  padding:1rem;
}

#butt {

   margin-left: 80%;
   border:1px solid red;
   margin-top: -4%;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
   html{
      font-size: 13px;
     }

     #butt {

   margin-left: 80%;
   border:1px solid red;
   margin-top: -8%;
}




} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

   html{
      font-size: 15px;
     }

     #butt {

   margin-left: 80%;
   border:1px solid red;
   margin-top: -5%;
}


} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
   html{
      font-size: 15px;
     }
#butt {

   margin-left: 80%;
   border:1px solid red;
   margin-top: -4%;
}



} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

     html{
      font-size: 15px;
     }
#butt {

   margin-left: 90%;
   border:1px solid red;
   margin-top: -4%;
}



} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

    
     html{
      font-size: 15px;
     }

#butt {

   margin-left: 90%;
   border:1px solid red;
   margin-top: -4%;
}



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
  methods: {},
  computed: {}
};
</script>