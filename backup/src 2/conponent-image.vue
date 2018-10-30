<template>
  <scroller>
    <div class="wrapper">
      <text class="title">conponent-image page</text>
      <text class="desc">url={{ url }}</text>  
      <text class="next" @click="back">返回上一页</text>  
      <text class="desc">&lt;image>标签示例</text>     
      <image style="width:200px;height:200px" src="https://vuejs.org/images/logo.png"/>
      <text>加载网络图片</text>
      
      <image style="width:200px;height:200px" src="https://www.baidu.com/img/bd_logo1.png" resize="stretch"/>
      <text>resize=stretch模式(默认)</text>
      <image style="width:200px;height:200px" src="https://www.baidu.com/img/bd_logo1.png" resize="cover"/>
      <text>resize=cover模式</text>
      <image style="width:200px;height:200px" src="https://www.baidu.com/img/bd_logo1.png" resize="contain"/>
      <text>resize=contain模式</text>

      
      <image style="width:200px;height:200px" src="drawable://ic_launcher"/>
      <text>加载本地drawable资源图片</text>
      <image style="width:200px;height:200px" src="mipmap://ic_launcher"/>
      <text>加载本地mipmap资源图片</text><!--  -->
      <image style="width:200px;height:200px" src="assets://ic_launcher.png"/>
      <text>加载本地assets资源图片</text>
      <image style="width:200px;height:200px" src="file://IMG_20181015_085335.jpg"/>
      <text>加载File图片</text>
    </div>
  </scroller>
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
    margin-top:10px!important;
    margin-bottom:10px!important;
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
