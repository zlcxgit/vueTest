<template>
  <div>
    <div>我是第一个儿子</div>
    <slot :user="user"></slot>
  </div>
</template>


<script>
  export default {
    data(){
      return {
          user:{
            message:'作用域插槽',
            success:'成功替换',
            prop:'porp解构'
          }
      }
    }
  }
</script>


<style scoped>

</style>
