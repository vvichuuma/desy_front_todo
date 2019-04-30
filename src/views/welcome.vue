
<template>
  <div class="welcome">
    <div id="heading">
       
    </div>

    <h2>Welcome {{user}}</h2>
    
  </div>
</template>

<style>

#heading{
  width: 100%;
  height: 3rem;
  background-color: #303030;
}



</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome Vish",
      user: ""
    };
  },
  created: function() {

    axios.get("http://localhost:3000/")


  },
  methods: {},
  computed: {}
};
</script>