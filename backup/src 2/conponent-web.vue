<template>
  <div class="wrapper">
    <text class="title">conponent-web page</text>
    <text class="desc">url={{ url }}</text>   
    <text class="next" @click="back">返回上一页</text> 
    <text class="desc">&lt;web>标签示例</text>   
    <div class="buttons">
      <text class="button" @click="pre">上一页</text>
      <text class="button" @click="reload">刷新</text>
      <text class="button" @click="next">下一页</text>
    </div>  
    <web style="width: 730px; height: 1000px" ref="myweb" src="https://www.baidu.com"
      v-on:pagestart="start"  @pagefinish="finish" @error="error"
    ></web>
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
  var webview = weex.requireModule('webview')
  export default {
    data () {
      return {
        url: '',
        target: 'World',
        configObj:'',
        params:''
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      pre(e){
        webview.goBack(this.$refs.myweb)
      },
      reload(e){
        webview.reload(this.$refs.myweb)
      },
      next(e){
        webview.goForward(this.$refs.myweb)
      },
      start:function(e){
        modal.toast({ message: "page start", duration: 0.3 })
      },
      finish:function(e){
        modal.toast({ message: "page finish", duration: 0.5 })
      },
      error:function(e){
        modal.toast({ message: "page error", duration: 0.5 })
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
