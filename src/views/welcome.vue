
<template>
  <div class="welcome">
    <div id="heading">
       
    </div>

    <h2 class="text-center"><span class="welcome_user">Welcome {{user}}</span></h2>

    <h1 class="text-right" id="o" v-on:click="off()"><i class="fa fa-power-off"></i></h1>

    <div class="lefting">
        <h3><span class="welcome_user">What do you want to do today?</span></h3>
          
          <div class="inner_buttons">
            <button type="button" class="btn btn-secondary" v-on:click="addingTask()" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" >Add_Tasks</button>
          </div>

          <div class="inner_buttons">
            <button type="button" class="btn btn-secondary"  v-on:click="jobs()">View_Tasks</button>
          </div>

    </div>


  <!-- Adding a Task modal -->
 
   <div class="modal fade" id="smally" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add_Task!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Please Add a Task To Continue!</h5>
      </div>
      <div class="modal-footer">
      
      </div>
    </div>
  </div>
</div>
<!-- 
  adding a task end modal -->



  <!-- Success Task modal -->
 
   <div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Success</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Task added Successfully!</h5>
      </div>
      <div class="modal-footer">
      
      </div>
    </div>
  </div>
</div>
<!-- 
  Success Task modal -->


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Task : </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group" id="tasking_block">
            <label for="recipient-name" class="col-form-label">Enter Task here :</label>
            <input type="text" class="form-control" id="recipient-name" v-model="task">
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addingTasksBackend()">Add_it up!</button>
      </div>
    </div>
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

  padding:1rem;
  margin-top: 1rem;
}

.inner_buttons{

  padding:1rem;
}

.welcome_user{
font-family: 'Inconsolata', monospace;


}

#tasking_block{

  margin-top: -1rem;
}

#o{
  margin-top: -2.3rem;
  color: red;
  cursor: pointer;
}

body{
  overflow-x: hidden;
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
      user: "",
      task: ""
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
      
    },

    addingTask: function(){
      console.log("Code works");
    },

    addingTasksBackend: function(){

       
       if(this.task === ""){


             $('#exampleModal').modal('hide');
            $('#smally').modal('show');

       }else{
  

        var params = {
           description: this.task 
        };

  
        axios.post("http://localhost:3000/ctask" , params).then(function(response){
               
               console.log(response.data);
         
           $('#exampleModal').modal('hide');
           $('#success').modal('show');

        }.bind(this));

          
          this.task = "";
    
      }


      
    },

    off: function(){
        this.$router.push("/");
    }

 

  },
  computed: {}
};
</script>