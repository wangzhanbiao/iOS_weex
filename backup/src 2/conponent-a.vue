<template>
  <div class="wrapper">
    
    <text class="title">conponent-a page</text>
    <text class="desc">url={{ url }}</text>    
    <text class="desc">&lt;a>标签示例（用于实现页面间的跳转）</text>     
    <a href="http://www.baidu.com">
      <text class="blue">http网站跳转</text>
    </a> 
    <a href="http://192.168.6.45:8081/dist/second.js">
      <text class="blue">weex-> weex跳转</text>
    </a>
    <a href="local://second.js">
      <text class="blue">weex-> native跳转</text>
    </a>
    <text class="next" @click="back">返回上一页</text>
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
  .blue{
    margin-top:20px!important;
    margin-bottom:20px!important;
    color:#1515f3; 
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
  var storage = weex.requireModule('storage')
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
