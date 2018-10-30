<template>
  <scroller class="scroller">
    <div class="wrapper">
      <text class="title">weex 组件 demo</text>
      <text class="next" @click="jumpSecond">跳转到第二页</text>
      <text class="next" @click="jumpSecondWithParam">跳转到第二页(附带参数){{ JSON.stringify(params)}}</text>
      <text class="next" @click="jumpConponentA">跳转到&lt;a>标签示例</text>
      <text class="next" @click="jumpConponentWeb">跳转到&lt;web>标签示例</text>
      <text class="next" @click="jumpConponentImage">跳转到&lt;image>标签示例</text>
      <text class="next" @click="jumpConponentInput">跳转到&lt;input>标签示例</text>
      <text class="next" @click="jumpConponentSlide">跳转到&lt;slide>和&lt;indicator>标签示例</text>
      <text class="next" @click="jumpConponentList">跳转到&lt;list>和&lt;cell>标签示例</text>
      <text class="next" @click="jumpConponentScroller">跳转到&lt;scroller>标签示例</text>
      <text class="next" @click="jumpConponentRefresh">跳转到&lt;refresh>标签示例</text>
      <text class="next" @click="jumpConponentLoading">跳转到&lt;loading>标签示例</text>
      <text class="title">weex 模块 demo</text>
      <text class="next" @click="jumpAnimation">animation模块</text>
      <text class="next" @click="jumpClipboard">clipboard模块</text>
      <text class="next" @click="jumpDom">dom模块</text>
      <text class="next" @click="jumpModal">modal模块</text>
      <text class="next" @click="jumpPicker">picker模块</text>
      <text class="next" @click="jumpStream">stream模块</text>
      <text class="desc">
        设备信息：{{ configObj }}
      </text>
    </div>
  </scroller>
</template>

<style>
  .wrapper { 
    align-items: center; 
    padding-top: 120px; 
    flex-direction: column;
    justify-content: center;
  }
  .scroller{
    align-items: center; 
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
     width: 700px;
     height: 400px;
  }
  .next{
    height: 80px;
    line-height: 80px;
    margin-top:20px!important;
    margin-bottom:20px!important;
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
    background-color: #999;
    color: #111111;
    font-size: 32px;
  }
</style>

<script>
import { getEntryUrl } from "./utils";
var storage = weex.requireModule('storage')
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
export default {
    data () {
      return {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        configObj:'',
        params:{name:'zhangsan'}
      }
    },
    methods: {
      jumpSecond(event) {
          modal.toast({ message: 'jumpSecond '+getEntryUrl("second"),duration: 1.0 })
          navigator.push({
            url: getEntryUrl("second"),
            animated: "true"
          }, event => {
            modal.toast({ message: 'callback: ' + event })
          })
      },
      jumpSecondWithParam(event) {
          navigator.push({
            //url: getEntryUrl("second-with-param"),
            url: getEntryUrl("second-with-param","name=zhangsan"),
            animated: "true"
          })
      },
      jumpConponentA(event){
          navigator.push({
            url: getEntryUrl("conponent-a"),
            animated: "true"
          })
      },
      jumpConponentWeb(event){
          navigator.push({
            url: getEntryUrl("conponent-web"),
            animated: "true"
          })
      },
      jumpConponentImage(event){
          navigator.push({
            url: getEntryUrl("conponent-image"),
            animated: "true"
          })
      },
      jumpConponentInput(event){
         navigator.push({
            url: getEntryUrl("conponent-input"),
            animated: "true"
          })
      },
      jumpConponentSlide(event){
        navigator.push({
            url: getEntryUrl("conponent-slide"),
            animated: "true"
          })
      },
      jumpConponentList(event){
        navigator.push({
            url: getEntryUrl("conponent-list"),
            animated: "true"
          })
      },
      jumpConponentScroller(event){
        navigator.push({
            url: getEntryUrl("conponent-scroller"),
            animated: "true"
          })
      },
      jumpConponentRefresh(event){
        navigator.push({
            url: getEntryUrl("conponent-refresh"),
            animated: "true"
          })
      },
      jumpConponentLoading(event){
        navigator.push({
            url: getEntryUrl("conponent-loading"),
            animated: "true"
          })
      },
      jumpAnimation(event){
        navigator.push({
            url: getEntryUrl("module-animation"),
            animated: "true"
          })
      },
      jumpClipboard(event){
        navigator.push({
            url: getEntryUrl("module-clipboard"),
            animated: "true"
          })
      },
      jumpDom(event){
        navigator.push({
            url: getEntryUrl("module-dom"),
            animated: "true"
          })
      },
      jumpModal(event){
        navigator.push({
            url: getEntryUrl("module-modal"),
            animated: "true"
          })
      },
      jumpPicker(event){
        navigator.push({
            url: getEntryUrl("module-picker"),
            animated: "true"
          })
      },
      jumpStream(event){
        navigator.push({
            url: getEntryUrl("module-stream"),
            animated: "true"
          })
      },

    },
    mounted: function () {
      console.log('url:', weex.config.bundleUrl);
      this.configObj = JSON.stringify(weex.config);
      modal.toast({ message: weex.config.bundleUrl })
    },
}
</script>
