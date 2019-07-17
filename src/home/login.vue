<template>
   <div>
     <form>
       <div>
         <lable>
           <span>用户名</span>
           <input type="text" v-model="value" @blur="validor(value)">
         </lable>
       </div>
       <p v-if="ss">请输入用户名</p>
       <div>
         <lable>
           <span>密码</span>
           <input type="password" v-model="word" @blur="validor(word)">
         </lable>
       </div>
       <p v-if="ss">请输入密码</p>
       <div>提交</div>
     </form>
   </div>
</template>


<script>

   export default {
     data(){
       return {
         value:'',
         word:""
       }
     },
     methods:{
        validor(value){
          if(value){

          }
        }
     },
     mounted(){

     }
   }
</script>


<style>

</style>
