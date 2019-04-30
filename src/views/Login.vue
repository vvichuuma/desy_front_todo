<template>
  <div class="Login">
   
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <a class="navbar-brand" href="#" style="color: white"><span class="vichu">Login_Page!</span></a> 
      <span class="home "><a href="#/"><img src="../assets/hommy.png" alt=""></a></span>
     </nav>

     <div id="login">
     <form action="">


        <div class="form-group ">
           
           <div class="inner_content">
          <label for="exampleInputEmail1">Email : </label>
          <div class="form-group row">
             <div class="col-lg-12">
         <input type="email" class="form-control" id="email_1" aria-describedby="emailHelp" v-model="email" placeholder="Enter email" >
             </div>
          </div>

          <label for="inputPassword">Password : </label>
          <div class="form-group row">
             <div class="col-lg-12">
         <input type="password" class="form-control" v-model="password" id="pass"  placeholder="Enter password">
             </div>
          </div>
          
          <div class="btn_class">
          <button type="submit" class="btn btn-primary" id="login_btn" v-on:click="logs()">Login</button></div>
          </div>
        </div>


     </form>

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

#login{

  margin-top: 12%;
  
}

.inner_content{

  width: 35%;
  margin:0 auto;
}



.btn_class{

}

.btn_class button{
  margin:0 40%;
}

body{
  overflow-x: hidden;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .inner_content{

  width: 90%;
  margin:0 auto;
}


} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .inner_content{

  width: 60%;
  margin:0 auto;
}


} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

   .inner_content{

  width: 44%;
  margin:0 auto;
}

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

  .inner_content{

  width: 40%;
  margin:0 auto;
}

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

.inner_content{

  width: 36%;
  margin:0 auto;
}



}
</style>

<script>

  var axios = require("axios")
  
export default {
  data: function() {
    return {
      message: "Welcome to Login",
      email: "",
      password: ""
    };
  },
  created: function() {},
  methods: {
    logs: function(){

     var params = {
        email: this.email,
        password: this.password
     }

     axios
        .post("http://localhost:3000/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/welcome");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
           this.email = "";
          this.password = "";
        });

    } 

  },
  computed: {}
};
</script>