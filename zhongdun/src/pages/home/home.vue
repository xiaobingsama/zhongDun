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
     <div class="module_block home-last">
      <tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('course')">课程精选</tab-item>
        <tab-item  @on-item-click="onClick('video')">免费试听</tab-item>
      </tab>
      <div class="grid-demo" v-if="active_tab=='news'">
        <div class="news_list">
          <div class="news_title">
            <h3>行业新闻</h3>
            <span>全部></span>
          </div>
          <ul>
            <li class="news_list_li">
              <p class="ellipsis">
                特种作业人员安全技术培训考核管理规定
              </p>
              <div class="news_imfor_box">
                <span class="news_imfor_txt">安培教育</span>
                <span class="news_time">2019.01.09</span>
              </div>
            </li>
            <li class="news_list_li">
              <p class="ellipsis">
                特种作业人员安全技术培训考核管理规定
              </p>
              <div class="news_imfor_box">
                <span class="news_imfor_txt">安培教育</span>
                <span class="news_time">2019.01.09</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="news_list">
          <div class="news_title">
            <h3>行业新闻</h3>
            <span>全部></span>
          </div>
          <ul>
            <li class="news_list_li">
              <p class="ellipsis">
                特种作业人员安全技术培训考核管理规定
              </p>
              <div class="news_imfor_box">
                <span class="news_imfor_txt">安培教育</span>
                <span class="news_time">2019.01.09</span>
              </div>
            </li>
            <li class="news_list_li">
              <p class="ellipsis">
                特种作业人员安全技术培训考核管理规定
              </p>
              <div class="news_imfor_box">
                <span class="news_imfor_txt">安培教育</span>
                <span class="news_time">2019.01.09</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="novice-demo" v-if="active_tab=='course'">
       <div>
         <div class="news_title">
            <h3>课程列表</h3>
            <span>全部></span>
          </div>
       </div>
      </div>
       <div class="novice-demo" v-if="active_tab=='video'">
        sp
      </div>
    </div>
    <div class="footer_nav">
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>报名</span>
      </section>
       <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>学习</span>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item" style="padding: 0;">
        <div class="home-img">
          <img src="../../images/banner.png" alt="">
        <span>首页</span>
        </div>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>发现</span>
      </section>
      <section @click = "gotoAddress({path: '/', query: {geohash}})" class="footer_nav_item">
        <img src="../../images/banner.png" alt="">
        <span>我的</span>
      </section>
    
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
      },
    gotoAddress(path){
        this.$router.push(path)
      }
    }
}
</script>

<style scoped>
  body{
    background: #f4f4f4;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
   .news_list{
   }
   .news_title{
    width: 100%;
    padding: 10px 1rem;
    line-height: 1.5rem;
    text-align: left;
   }
   .news_title h3{
    display: inline-block;
    font-size: 1rem;
    padding:0 5px;
    color: #fff;
    background: #5ebf83;
    border-radius: 4px;
   }
   .news_title span{
    float: right;
    color: #656565;
    font-size: .8rem;
   }
   .news_list_li{
    padding: 10px 1rem;
    border-bottom: 1px solid #e6e6e6;
   }
   .news_list_li p{
    width: 100%;
    color: #343434;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;;
   }
   .news_imfor_box{
    margin-top: .52rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .8rem;
    color: #333;
   }
   .news_imfor_txt{
    color: #666;
   }
   .news_time{
    color: #666;
   }
   .home-last{
    margin-bottom: 3rem; 
   }
   .footer_nav{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 4rem;
    background: url(../../images/footer_navBg.png) no-repeat center;
    background-size: 100% 100%;
   }
   .footer_nav_item{
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 1rem;
   }
  .footer_nav_item img{
    width: 1rem;
    height: 1rem;
    margin-top: .3rem;
    fill: #ccc;
  }
  .footer_nav_item span{
    font-size: .45rem;
    color: #656565;
    line-height: 1.5rem;
  }
  .footer_nav_item .home-img{
   background: #5ebf83;
    margin-top: .5rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

  }
  .footer_nav_item .home-img img{
    display: block;
    margin: 0 auto;
    padding-top: .5rem;
  }
  .footer_nav_item .home-img span{
    color: #fff;
  }
</style>
