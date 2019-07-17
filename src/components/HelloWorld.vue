<template>
  <div class="hello">

    <hello-son>
       <template v-slot="{user}">
         {{user.prop}}
       </template>

    </hello-son>
    <hr>
    {{model}}
    <k-form :model="model" :rules="rules" ref="kForm">
      <k-form-item label="用户名" prop="userName">
        <k-input v-model="model.userName"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </k-form-item>
      <k-form-item>
        <k-button @click.native="submit('kForm')">提交</k-button>
      </k-form-item>
    </k-form>

    <input type="text" v-model="valuelist[item-1].value" v-for="item in 5" :key="item.id" @input="change(item)">
    <van-cell title="单元格" icon="location-o" />
    <van-checkbox
     v-model="checked"
    checked-color="#07c160"
    >
    复选框
    </van-checkbox>
    <van-checkbox-group v-model="result" bind:change="onChange">
      <van-checkbox
        v-for="item in list"
        :key="item.id"
        :name="item"
      >
        复选框 {{ item }}
      </van-checkbox>
    </van-checkbox-group>
    <button @click="cli">dianwo</button>
    <van-tabs type="card">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
    </van-tabs>
    <van-button size="large">大号按钮</van-button>
    <button @click="clime">再次点我</button>
    <!--<van-action-sheet-->
      <!--v-model="show"-->
      <!--:actions="actions"-->
      <!--cancel-text="取消"-->
      <!--@close="onClose"-->
    <!--&gt;</van-action-sheet>-->
    <van-popup
     v-model="show"
    position="bottom"

    >
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
  import { Cell,Checkbox,CheckboxGroup,Toast,Tabs,Tab,Button,ActionSheet,Popup,Picker } from 'vant'
export default {
  name: 'HelloWorld',
  components:{
    [Cell.name]:Cell,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [Tabs.name]:Tabs,
    [Tab.name]:Tab,
    [Button.name]:Button,
    [ActionSheet.name]:ActionSheet,
    [Popup.name]:Popup,
    [Picker.name]:Picker
  },
  data () {
    return {
      columns: [{text:'杭州',value:1},{text:'宁波',value:2} , {text:'温州',value:3}, {text:'嘉兴',value:3}, {text:'湖州',value:3}],
      show:false,
      actions: [
        {
          name: '选项'
        },
        {
          name: '分享',
          subname: '描述信息',
          openType: 'share'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
      ],
      valuelist:[{value:""},{value:''},{value:''},{value:''},{value:''}],
      msg: 'Welcome to Your Vue.js App',
      model:{
        userName:'',
        password:''
      },
      checked:true,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      rules:{
        userName:[{required:true,message:'请输入用户名'}],
        password:[{required:true,message:'请输入密码'}]
      },
    }
  },
  methods:{
    onConfirm(event){
      console.log(event)
    },
    onCancel(){},
    onChange(){

    },
    clime(){
      this.show=true
      console.log(this.show)
    },
    onClose(){

    },
    cli(){
//      Toast({
//        message:'123',
//        duration:1000
//      })
      Toast.loading({
        message:'123',
        duration:2000,
        mask:true
      })
    },
    change(item){
//      this.$set(this.valuelist,item-1,{value:this.valuelist[item-1].value.replace(/[^\d]/g,'')})
      this.valuelist[item-1].value=this.valuelist[item-1].value.replace(/[^\d]/g,'')
    },
    submit(form){
      this.$refs[form].validate(valid=>{
        console.log(valid)
        if(valid){
          this.$http.get('/static/data/data.json').then(res=>{
            if(res.data.auth=='ok'){
              localStorage.setItem('data',JSON.stringify(this.model))
              this.$router.push({name:'welcome',params:this.model})
            }
          })
        }else{
          alert('提交失败')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
