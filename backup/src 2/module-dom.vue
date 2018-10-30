<template>
  <div>
    <div class="wrapper">
      <text class="title">module-dom page</text>
      <text class="desc">url={{ url }}</text>     
      <text class="next" @click="back">返回上一页</text>
      <text class="desc">dom模块示例</text> 
    </div>
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index" :key="index">
        <text class="row-item" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
    <div class="group">
      <text @click="goto10" class="button">Go to 10</text>
      <text @click="goto20" class="button">Go to 20</text>
    </div>
  </div>
</template>

<style>
  .wrapper { 
    align-items: center; 
    margin-top: 120px; 
  }
  .scroller{
    width: 700px;
    height: 600px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
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
  .row {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
  }
  .row-item {
    font-size: 45px;
    color: #666666;
  }
  .group {
    flex-direction: row;
    /*justify-content: space-around;*/
    justify-content: center;
    margin-top: 60px;
  }
  .button {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    margin-left: 30px!important;
    margin-right: 30px!important;
    text-align: center;
    color: #41B883;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>

<script>
import { getEntryUrl } from "./utils";
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    data () {
      return {
        url: '',
        target: 'World',
        configObj:'',
        params:'',
        rows: []
      }
    },
    methods: {
      back(event) {
        //modal.toast({ message: weex.config.bundleUrl })
          navigator.pop()
      },
      goto10 (count) {
        const el = this.$refs.item10[0]
        dom.scrollToElement(el, {})
      },
      goto20 (count) {
        const el = this.$refs.item20[0]
        dom.scrollToElement(el, { offset: 0 })
      }
    },
    created () {
      for (let i = 0; i < 30; i++) {
        this.rows.push('row ' + i)
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
