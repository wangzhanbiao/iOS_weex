<template>
  <div class="wrapper">
    
    <text class="title">conponent-input page</text>
    <text class="desc">url={{ url }}</text>    
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">&lt;input>标签示例</text>     
    <input class="input" type="text" placeholder="请输入账号" maxlength="10"/>
    <input class="input" type="password" placeholder="请输入密码" maxlength="10"/>
    <input class="input" type="number" placeholder="请输入年龄" maxlength="3"/>
    <input class="input" type="date" placeholder="日期"/>
    <input class="input" type="time" placeholder="时间"/>
    <textarea class="textarea" placeholder="备注" rows="10"/>
    <text class="desc">更多属性参见：</text>
    <a href="http://weex.apache.org/cn/references/components/input.html">
      <text class="blue">http://weex.apache.org/cn/references/components/input.html</text>
    </a>      
    
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
    margin-top:10px!important;
    margin-bottom:10px!important;
    color:#1515f3; 
    font-size: 30px;
  }
  .input{
    margin-top:10px!important;
    width: 400px;
    height: 70px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #555;
    padding-left: 10px;
    font-size: 30px;
  }
  .textarea{
    margin-top:10px!important;
    width: 400px;
    height: 200px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #555;
    padding: 10px;
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
