<template>
  <div id="home">
    <div class="banner"></div>
    <div class="module_block">
      <div class="module_block_list">
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
         <router-link to="/enter" class="module_block_a">About</router-link>
      </div>
    </div>
    <div class="module_block hot_module">
      <div class="hot_title">
        <h2>
          热门中心
        </h2>
        <router-link to="/enter" class="more_link">全部></router-link>
      </div>
      <div class="module_block_list hot_module_list">
        <router-link to="/enter" class="hot_module_a">About</router-link>
        <router-link to="/enter" class="hot_module_a">About</router-link>
        <router-link to="/enter" class="hot_module_a">About</router-link>
      </div>
    </div>
     <div class="module_block">
      <tab :line-width="1" active-color='#5ebf83' :custom-bar-width="getBarWidth" v-model="index">
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('')">课程精选</tab-item>
        <tab-item>免费试听</tab-item>
      </tab>
      <div class="grid-demo" v-if="active_tab=='idemo'">
      </div>
      <div class="novice-demo" v-if="active_tab=='vile'">
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
import news from '@/page/home/news'
const list = () => ['推荐', '课程精选', '免费试听']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      index01: 0,
      list2: list(),
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods:{
    change:function(x){     
      for(var i=0;i<this.active.length;i++){
          this.active[i]=false;
          this.active[x]=true;
          this.who=this.tab[x].func;
      }
      console.log(this.active);
      // console.log(x);
      this.$set(this.active, 3, 0);
    }
  }
}
</script>

<style scoped>
  body{
    background: #f4f4f4;
  }
  .banner{
    width: 100%;
    height: 13rem;
    background: url(../../images/banner.png) no-repeat;
    background-size: 100% 100%;
  }
  .module_block{
 /*   padding: 0 20px;*/
    background: #fff;
  }
  .module_block_list{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 1rem;
   
   }
   .module_block_a{
    width: 25%;
    padding: .3rem 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
   }
  .hot_title{
    padding: 10px 1rem;
    border-bottom: 1px solid #e9e9e9;
    line-height: 1.5rem;
  }
  .hot_title h2{
    display: inline-block;
    font-size: 1rem;
    border-left: 3px solid #5ebf83;
    padding-left: 5px;
    color: #343434;
  }
   .hot_module_a{
    width: 33.33%;
    padding: .3rem 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
   }
   .more_link{
    float: right;
    color: #656565;
    font-size: .8rem;
   }
</style>
