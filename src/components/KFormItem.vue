<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error" style="color:red">
      <!--错误信息的展示-->
      {{error}}
    </p>
  </div>
</template>


<script>
  import Schema from 'async-validator'
  export default {
    inject:['form'],
    props:{
      label:{
        type:String,
        default:''
      },
      prop:{
        type:String
      }
    },
    data(){
      return{
        error:''
      }
    },
    mounted(){
      //监听校验事件
      this.$on('validate',this.validate)
    },
    methods:{
      validate(){
        //获取校验规则
        const rules=this.form.rules[this.prop]
        // 获取校验模型
        const value=this.form.model[this.prop]
        //校验对象
        const descriptor={[this.prop]:rules}
        //创建校验器
        const schema=new Schema(descriptor)
        //校验
        schema.validate({[this.prop]:value},errors=>{
          if(errors){
            this.error=errors[0].message
            this.form.$emit('errored',false)
          }else{
            this.error=''
          }
        })
      },

    }
  }
</script>

<style>

</style>
