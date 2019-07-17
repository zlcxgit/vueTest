<template>
  <div>
    <h1> 欢迎{{name}}登陆...</h1>
    <div @click="login">登出</div>
  </div>
</template>


<script>
  export default {
    data(){
      return {
         name:''
      }
    },
    mounted(){
       console.log(this.$route.params)
       this.name=JSON.parse(localStorage.getItem('data')).userName
    },
    methods:{
      login(){
        this.$router.push('/helloSon')
      }
    }
  }
</script>


<style>

</style>
