<template>
  <div class="wrapper">
    
    <text class="title">module-animation page</text>
    <text class="desc">url={{ url }}</text>     
    <text class="next" @click="back">返回上一页</text>
    <text class="desc">animation模块示例</text>  
    <div ref="test" @click="move" class="box"></div>
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
  .box {
    width: 200px;
    height: 200px;
    background-color: #DDD;
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
  const animation = weex.requireModule('animation')
  var i = 0;
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
      move () {
        i++;
        if(i%2==0){
          this.small()
        }else{
          this.big()
        }

      },
      big(){
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            backgroundColor: '#FF0000',
            transform: 'translate(0px, 0px) scale(1.5)',
            transformOrigin: 'center center'
          },
          duration: 800, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          modal.toast({ message: 'animation finished.', duration: 0.3 })
        })
      },
      small(){
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            backgroundColor: '#dddddd',
            transform: 'translate(0px, 0px) scale(1)',
            transformOrigin: 'center center'
          },
          duration: 800, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          modal.toast({ message: 'animation finished.', duration: 0.3 })
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
