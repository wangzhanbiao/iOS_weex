<template>
  <div class="wrapper">
    
    <text class="title">mudule-clipboard page</text>
    <text class="desc">url={{ url }}</text>     
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">clipboard模块示例</text> 
    <div class="buttons">
      <text class="button" @click="get">获取clipboard</text>
      <text class="button" @click="set">设置当前时间到clipboard</text> 
    </div>
    <text class="desc">clipboard内容：{{content}}</text> 
  </div>
</template>

<style>
  .wrapper { 
    align-items: center; 
    margin-top: 120px; 
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
  .buttons{
    height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .button{
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-left:20px!important;
    color:#111111; 
    background-color: #999999;
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
</style>

<script>
import { getEntryUrl } from "./utils";
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  const clipboard = weex.requireModule('clipboard')
  export default {
    data () {
      return {
        url: '',
        target: 'World',
        configObj:'',
        params:'',
        content:''
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      get(event){
        if(weex.config.env.platform == 'Web'){
          modal.toast({ message: 'web不支持', duration: 0.5 })
          return;
        }
        clipboard.getString(ret => {
          this.content = ret.data
        })
      },
      set(event){
        if(weex.config.env.platform == 'Web'){
          modal.toast({ message: 'web不支持', duration: 0.5 })
          return;
        }
        clipboard.setString(new Date())
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
