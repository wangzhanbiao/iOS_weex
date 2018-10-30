<template>
  <scroller class="scroller">
    <div class="wrapper">
      <text class="title">conponent-loading page</text>
      <text class="desc">url={{ url }}</text>
      <text class="next" @click="back">返回上一页</text>
      <text class="desc">&lt;loading>标签示例</text>
    </div>
    <div class="cell" v-for="(num,index) in lists" :key="index">
      <div class="panel">
        <text class="text" @click="jumpDetail(num)">{{num}}</text>
      </div>
    </div>
    <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
      <text class="indicator-text">Loading ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </loading>
  </scroller>
</template>

<style>
  .wrapper {
    align-items: center;
    padding-top: 120px;
  }
  .scroller{
    margin-left: 0;
    margin-right:0;
    margin-top: 0;
    margin-bottom: 0;
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
  .loading {
    width: 750;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: blue;
  }
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
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
        params:'',
        loadinging: false,
        lists: ['金秋核桃', '猕猴桃', '橘子', '冰糖梨', '巨峰葡萄','三红蜜柚', '水蜜桃', '泰国椰青', '奇异果', '香蕉']
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      jumpDetail(src){
        modal.toast({ message: '点击了：'+src,duration: 1.0 })
      },
      onloading (event) {
        modal.toast({ message: 'Loading', duration: 1 })
        this.loadinging = true
        setTimeout(() => {
          this.loadinging = false
        }, 2000)
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
