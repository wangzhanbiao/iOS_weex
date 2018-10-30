<template>
  <div class="wrapper">
    <text class="title">module-modal page</text>
    <text class="desc">url={{ url }}</text>     
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">modal模块示例</text> 
    <div class="buttons">
      <text class="button" @click="toast">toast提示</text>
      <text class="button" @click="alert">alert提示框</text> 
      <text class="button" @click="confirm">confirm确认框</text>
      <text class="button" @click="prompt">prompt输入框</text>
    </div>
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
      toast(event) {
         modal.toast({
            message: '邮件草稿已保存',
            duration: 0.5
         })
      },
      alert(event) {
        modal.alert({
            message: '提现申请成功',
            okTitle: '我知道了'
        }, function (value) {
            console.log('alert callback', value)
        })
      },
      confirm(event) {
        modal.confirm({
            message: '确认要删除该文件吗?',
            okTitle: '删除',
            cancelTitle: '取消'
        }, function (value) {
            console.log('confirm callback', value)
            if('删除' == value){
              modal.toast({
                  message: '已删除',
                  duration: 0.5
              })
            } 
        })
      },
      prompt(event) {
        modal.prompt({
            message: '请输入手机领取优惠券',
            okTitle: '确定',
            cancelTitle: '取消'
        }, function (ret) {
            console.log('confirm callback', ret)
            if('确定' == ret.result){
              if(ret.data != null && ret.data != ''){
                modal.toast({
                    message: '已领取',
                    duration: 0.5
                })
              }else{
                modal.toast({
                    message: '输入不正确',
                    duration: 0.5
                })
              }
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
