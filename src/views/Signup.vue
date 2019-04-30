<template>
  <div class="Signup">
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" style="color: white"><span class="vichu">SignUp_Page!</span></a>
       <span class="home "><a href="#/"><img src="../assets/hommy.png" alt=""></a></span> 
     </nav>


      <div class="form-group " >


       <div class="formy">
       <div class="inner_content">
        <div class="paddy">
        <label for="exampleInputEmail1">Enter Name : </label>
        <input type="text" class="form-control col-lg-12  " id="name" aria-describedby="emailHelp" placeholder="Enter name" v-model="name">
        </div>



         <div class="paddy">
           <label for="exampleInputEmail1">Enter email : </label>
        <input type="email" class="form-control col-lg-12  " id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
         </div>


          <div class="paddy">
           <label for="exampleInputEmail1">Enter Password : </label>
        <input type="password" class="form-control col-lg-12  " id="pass" aria-describedby="emailHelp" placeholder="Enter password" v-model="password">
          </div>


        <div class="paddy">
          <label for="exampleInputEmail1">Confirm Password : </label>
        <input type="password" class="form-control col-lg-12  " id="pass_c" aria-describedby="emailHelp" placeholder="Confirm password" v-model="password_c">
         </div>

         <div class="paddy">
          <div class="center_button">
          <button type="submit" class="btn btn-primary" id="login_btn" v-on:click="zigs()">Signup!</button></div>

           </div>

         </div>
       </div>
       
      </div>


  </div>
</template>

<style>



.vichu{
font-family: 'Inconsolata', monospace;

}
.home img{

  height: 3rem;
}

.home{
  margin:0 auto;
}

.form-group{

  margin-top: 7%;

}

.formy{

  width: 30%;
  margin: 0 auto;

}

.paddy{

  padding:1rem;
}

.center_button{



}

.center_button button{
  width: 20%;
  margin:0 40%;
}

body{
  overflow-x: hidden;
}




/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
 
 .formy{

  width: 90%;
  margin: 0 auto;

}

.center_button button{
  width: 50%;
  margin:0 25%;
}


} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

 .formy{

  width: 70%;
  margin: 0 auto;

}

.center_button button{
  width: 50%;
  margin:0 25%;
}


} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
 .formy{

  width: 70%;
  margin: 0 auto;

}

.center_button button{
  width: 50%;
  margin:0 25%;
}

 
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

 
 .formy{

  width: 70%;
  margin: 0 auto;

}

.center_button button{
  width: 50%;
  margin:0 25%;
}



} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

 .formy{

  width: 70%;
  margin: 0 auto;

}

.center_button button{
  width: 50%;
  margin:0 25%;
}


}


</style>

<script>
  var axios = require("axios");
export default {
  data: function() {
    return {
      message: "Welcome to Signup",
      name: "",
      email: "",
      password: "",
      password_c: ""

    };
  },
  created: function() {




  },
  methods: {

    zigs: function(){
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_c: this.password_c
      }

     axios
        .post("http://localhost:3000/cUser", params)
        .then(response => {
            console.log(response);
            this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });

    }

  },
  computed: {}
};
</script>