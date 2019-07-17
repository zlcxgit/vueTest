<template>
   <div>


       <input type="text" :value="value" @input="onInput" :type="type">

   </div>
</template>


<script>
  export default {
    props:{
      value:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      }
    },
    data(){
      return{

      }
    },
    methods:{
      onInput(e){
        //当值改变时 派发给父组件
        this.$emit('input',e.target.value)
        //当值改变时 执行校验规则
        this.$parent.$emit('validate')
      }
    }
  }
</script>


<style scoped>

</style>
