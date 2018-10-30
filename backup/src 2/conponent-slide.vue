<template>
  <div class="wrapper">
    
    <text class="title">conponent-slide page</text>
    <text class="desc">url={{ url }}</text>    
    <text class="desc">&lt;slide>和&lt;indicator>标签示例</text>     
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="(img,index) in imageList" :key="index">
        <image class="image" resize="cover" @click="jumpDetail(img.src)" :src="img.src"/>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
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
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 320px;
    border-width: 0px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 320px;
    position: relative;
  }
  .image {
    width: 700px;
    height: 320px;
  }
  .indicator {
    item-color: #999999;
    item-selected-color: #ff4444;
    item-size: 20px;
    width: 700px;
    height: 40px; 
    position: absolute;
    top:250px;
    left: 0px; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
        imageList: [
          { src: 'https://oh6dt6vbt.qnssl.com/miResourceMgr/group1/M00/06/7E/CmiWa1rqvbmAOtZOAAG0X66LBvs398.jpg?width=750&height=326'},
          { src: 'https://oh6dt6vbt.qnssl.com/miResourceMgr/group1/M00/0B/F4/CmiWiFvO8MaASBHwAAMME_SCWQU865.jpg?width=750&height=326'}
        ]
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      jumpDetail(src){
        modal.toast({ message: '点击了：'+src,duration: 1.5 })
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
