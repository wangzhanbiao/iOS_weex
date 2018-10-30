<template>
  <div class="wrapper">
    <text class="title">module-stream page</text>
    <text class="desc">url={{ url }}</text>     
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">stream模块示例</text> 
    <div class="buttons">
      <text class="button" @click="getHttp">get请求</text>
      <text class="desc">请求结果：{{getResult}}</text>
    </div>
    <div class="buttons">
      <text class="button" @click="postHttp">post请求</text>
      <text class="desc">请求结果：{{postResult}}</text>
    </div>
    <div class="buttons">
      <text class="button" @click="putHttp">put请求</text>
      <text class="desc">请求结果：{{putResult}}</text>
    </div>
    <div class="buttons">
      <text class="button" @click="patchHttp">patch请求</text>
      <text class="desc">请求结果：{{patchResult}}</text>
    </div>
     
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
    width:750px;
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
  var stream = weex.requireModule('stream')
  var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
  var GET_URL = 'http://httpbin.org/get';
  var POST_URL = 'http://httpbin.org/post';
  var PUT_URL = 'http://httpbin.org/put';
  var DELETE_URL = 'http://httpbin.org/delete';
  var HEAD_URL = 'http://httpbin.org/status/418';
  var PATCH_URL = 'http://httpbin.org/patch';
  export default {
    data () {
      return {
        url: '',
        target: 'World',
        configObj:'',
        params:'',
        getResult:'',
        postResult:'',
        putResult:'',
        patchResult:''
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      getHttp(event) {
        var me=this
        stream.fetch({
            method: 'GET',
            url: GET_URL,
            type:'json'
          }, function(ret) {
            if(!ret.ok){
              me.getResult = "request failed";
            }else{
              console.log('get:'+ret);
              me.getResult = JSON.stringify(ret.data);
            }
          },function(response){
            console.log('get in progress:'+response.length);
            me.getResult = "bytes received:"+response.length;
          });
      },
      postHttp(event) {
        var me=this
        stream.fetch({
            method: 'POST',
            url: POST_URL,
            type:'json'
          }, function(ret) {
            if(!ret.ok){
              me.postResult = "request failed";
            }else{
              console.log('get:'+JSON.stringify(ret));
              me.postResult = JSON.stringify(ret.data);
            }
          },function(response){
            console.log('get in progress:'+response.length);
            me.postResult = "bytes received:"+response.length;
          });
      },
      putHttp(event) {
        var me=this
        stream.fetch({
            method: 'PUT',
            url: PUT_URL,
            type:'json'
          }, function(ret) {
            if(!ret.ok){
              me.putResult = "request failed";
            }else{
              console.log('get:'+JSON.stringify(ret));
              me.putResult = JSON.stringify(ret.data);
            }
          },function(response){
            console.log('get in progress:'+response.length);
            me.putResult = "bytes received:"+response.length;
          });
      },
      patchHttp(event) {
        var me=this
        stream.fetch({
            method: 'PATCH',
            url: PATCH_URL,
            type:'json'
          }, function(ret) {
            if(!ret.ok){
              me.patchResult = "request failed";
            }else{
              console.log('get:'+JSON.stringify(ret));
              me.patchResult = JSON.stringify(ret.data);
            }
          },function(response){
            console.log('get in progress:'+response.length);
            me.patchResult = "bytes received:"+response.length;
          });
      },
       
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
