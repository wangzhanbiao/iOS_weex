<template>
  <div class="wrapper">
    <text class="title">module-picker page</text>
    <text class="desc">url={{ url }}</text>     
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">picker模块示例</text> 
    <div class="buttons">
      <text class="button" @click="pick">pick</text>
      <text class="button" @click="pickDate">pickDate</text> 
      <text class="button" @click="pickTime">pickTime</text>
    </div>
    <text class="desc">{{value}}</text>
  </div>
</template>

<style>
  .wrapper { 
    align-items: center; 
    padding-top: 120px; 
  }
  .title { 
    margin-top:40px; 
    margin-bottom: 40px; 
    font-size: 48px; 
  }
  .desc { 
     margin-top:30px!important;
     margin-bottom:30px!important;
     color:#555; 
     font-size: 30px;
  }
  .next{
    margin-top:30px!important;
    margin-bottom:30px!important;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    background-color: #999;
  }
  .buttons{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button{
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-top:30px!important;
    color:#111111; 
    background-color: #999999;
    font-size: 30px;
  }
</style>

<script>
import { getEntryUrl } from "./utils";
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  var picker = weex.requireModule('picker')
  var arrays = ['金秋核桃', '猕猴桃', '橘子', '冰糖梨', '巨峰葡萄','三红蜜柚', '水蜜桃', '泰国椰青', '奇异果', '香蕉']
  export default {
    data () {
      return {
        url: '',
        target: 'World',
        configObj:'',
        params:'',
        value: ''
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      pick () {
        if(weex.config.env.platform == 'Web'){
          modal.toast({ message: 'web不支持', duration: 0.5 })
          return;
        }
        picker.pick({
          index:0,
          items:arrays,
          textColor:'#333',
          selectionColor:'#ff4444',
          confirmTitle:'确定',
          cancelTitle:'取消',
          confirmTitleColor:'#666',
          cancelTitleColor:'#999',
          title:'选择一个水果类型',
          titleColor:'#000',
          titleBackgroundColor:'#fff'
        }, event => {
          if (event.result === 'success') {
            this.value = arrays[event.data]
          }
        })
      },
      pickDate () {
        if(weex.config.env.platform == 'Web'){
          modal.toast({ message: 'web不支持', duration: 0.5 })
          return;
        }
        picker.pickDate({
          value: this.value
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
          }
        })
      },
      pickTime () {
        if(weex.config.env.platform == 'Web'){
          modal.toast({ message: 'web不支持', duration: 0.5 })
          return;
        }
        picker.pickTime({
          value: this.value
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
          }
        })
      }
    },
    mounted: function () {
      this.url = weex.config.bundleUrl;
      this.configObj = JSON.stringify(weex.config);
      //storage.getItem('params', event => {
          //this.params = event.data
        //})
    },
  }
</script>
