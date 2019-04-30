<template>
  <div class="home">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" style="color: white"><span class="vichu">Vishnu's Todolist</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#/login" style="color: white"><span class="link">Login</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/signup" style="color: white"><span class="link">SignUp</span></a>
      </li>
     </ul>
    </div>


     </nav>


    <div class="container-fluid">
       <h2 id="todo">Welcome To Vishnu's TodoList</h2>
       <div><h4 id="plan">Plan yourself ahead!</h4></div>
    </div>
   

  </div>
</template>

<style>

*{
  margin:0;
  padding:0;
}

.nav-link{
  margin-right: 2rem;
  cursor: pointer;

}

.link:hover{
  color: red;
}

#todo{
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.5rem;
}


.vichu{
font-family: 'Inconsolata', monospace;

}

.container-fluid{
  text-align: center;

  padding:10%;
}

#plan{
  font-family: 'BioRhyme Expanded', serif;

}

body{
  overflow-x: hidden;
}

</style>

<script>
export default {


  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {
      
   

  },
  methods: {


  goLogin: function(){

    
    
  }


  },
  computed: {}
};


</script>