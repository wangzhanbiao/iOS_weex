<template>
  <scroller class="scroller">
    <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
      <text class="indicator-text">Refreshing ...</text>
    </refresh>
    <div class="wrapper">
      <text class="title">conponent-refresh page</text>
      <text class="desc">url={{ url }}</text>
      <text class="next" @click="back">返回上一页</text>
      <text class="desc">&lt;refresh>标签示例</text>
    </div>
    <div class="cell" v-for="(num,index) in lists" :key="index">
      <div class="panel">
        <text class="text" @click="jumpDetail(num)">{{num}}</text>
      </div>
    </div>
  </scroller>
</template>

<style>
  .scroller{
    margin: 0px;
  }
  .refresh {
    width: 750px;
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
        refreshing: false,
        lists: ['金秋核桃', '猕猴桃', '橘子', '冰糖梨', '巨峰葡萄','三红蜜柚', '水蜜桃', '泰国椰青', '奇异果', '香蕉']
      }
    },
    methods: {
      back(event) {
           //modal.toast({ message: weex.config.bundleUrl })
           navigator.pop()
      },
      onrefresh (event) {
        modal.toast({ message: 'Refreshing', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 1000)
      },
      gopullingdownload (event) {
        console.log("dy: " + event.dy)
        console.log("pullingDistance: " + event.pullingDistance)
        console.log("viewHeight: " + event.viewHeight)
        console.log("type: " + type)
      },
      jumpDetail(src){
        modal.toast({ message: '点击了：'+src,duration: 1.0 })
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
