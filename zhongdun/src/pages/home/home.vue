<template>
  <div id="home">
    <div class="banner"></div>
    <div class="module_block">
      <div class="module_block_list">
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
         <router-link to="/enter" class="module_block_a">
            <img src="../../images/banner.png" alt="">
            <p>在线报名</p>
         </router-link>
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
        <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
        <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
         <router-link to="/enter" class="hot_module_a">
            <p>在线报名</p>
           <img src="../../images/banner.png" alt="">
        </router-link>
      </div>
    </div>
     <div class="module_block">
      <tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('course')">课程精选</tab-item>
        <tab-item  @on-item-click="onClick('video')">免费试听</tab-item>
      </tab>
      <div class="grid-demo" v-if="active_tab=='news'">
        <ul>
          <li>qq</li>
        </ul>
      </div>
      <div class="novice-demo" v-if="active_tab=='course'">
        kc
      </div>
       <div class="novice-demo" v-if="active_tab=='video'">
        sp
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem} from 'vux'


export default {
  components: {
    Tab,
    TabItem,
  },
  data () {
    return {
      active_tab: 'news',
    }
  },
  methods:{
    onClick(state){
        this.active_tab = state;
      }
    },
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
    padding-bottom: 1rem;

   }
   .module_block_a{
    width: 25%;
    padding-top: 1rem;
   /* display: -ms-flexbox;
    display: flex;*/
    -ms-flex-pack: center;
    justify-content: center;
   }
   .module_block_a img{
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
   }
   .module_block_a p{
    font-size: .8rem;
    color: #343434;
    line-height: 1.5rem;
   }
  .hot_title{
    padding: 10px 1rem;
    border-bottom: 1px solid #e9e9e9;
    line-height: 1.5rem;
    text-align: left;
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
   }
   .hot_module_a img{
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 0 auto;
   }
   .hot_module_a p{
    font-size: 1rem;
    color: #343434;
    line-height: 2.5rem;
   }
   .more_link{
    float: right;
    color: #656565;
    font-size: .8rem;
   }
</style>
