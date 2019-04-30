
<template>
  <div class="welcome">
    <div id="heading">
       
    </div>

    <h2 class="text-center"><span class="welcome_user">Welcome {{user}}</span></h2>

    <div class="lefting">
        <h3><span class="welcome_user">What do you want to do today?</span></h3>
          
          <div class="inner_buttons">
            <button type="button" class="btn btn-secondary">Add_Tasks</button>
          </div>

          <div class="inner_buttons">
            <button type="button" class="btn btn-secondary"  v-on:click="jobs()">View_Tasks</button>
          </div>

    </div>
  </div>
</template>

<style>

#heading{
  width: 100%;
  height: 3rem;
  background-color: #303030;
}

.lefting{
  border:1px solid red;
  padding:1rem;
  margin-top: 1rem;
}

.inner_buttons{
  border:1px solid red;
  padding:1rem;
}

.welcome_user{
font-family: 'Inconsolata', monospace;


}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
   html{
      font-size: 13px;
     }

} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

   html{
      font-size: 15px;
     }

} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
   html{
      font-size: 15px;
     }



} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

     html{
      font-size: 15px;
     }



} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

    
     html{
      font-size: 15px;
     }



}




</style>

<script>

  var axios = require("axios");

export default {
  data: function() {
    return {
      message: "Welcome Vish",
      user: ""
    };
  },
  created: function() {

   axios.get("http://localhost:3000/currentuser").then(function(response){

         console.log(response.data["User"]["name"]);
         this.user = response.data["User"]["name"]

   }.bind(this))


  },
  methods: {

    jobs: function(){

      this.$router.push("/tasks");
      
    }


  },
  computed: {}
};
</script>