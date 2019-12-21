<template>
  <div class="page" @scroll.passive="handleScroll($event)">
    <header :class="searchBarFixed==true?'head_bg head_box':'head_box'">
      <div class="head_address">
        <i :class="searchBarFixed==true?'iconfont head_icon_bg':'iconfont'">&#xe694;</i>
        <p>全国</p>
      </div>
      <router-link to="/search" tag="div" class="head_search">
        <i class="iconfont">&#xe623;</i>
        <p>搜索热门演出</p>
      </router-link>
      <div class="head_calend">
        <i class="iconfont">&#xe615;</i>
      </div>
    </header>
    <swiper :options="swiperOption" class="showSwiper">
    　　<swiper-slide v-for="(item,index) in swiperPic" :key="index" class="showPic"><img :src="item"></swiper-slide>
    　　
    　　<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    
    <!-- <nav>
      <div class="advance">
        <div class="advance_box">
          <span>
            <b>优先购票</b> VIP+会员尊享权益
          </span>
          <span style="margin-left:0.3rem;">99元/年&gt;</span>
        </div>
        <div class="advance_bottom">
          <span>
            <img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" />
          </span>
          <span>
            <p>聚橙出品 | 百老汇现象级原版音乐剧《来自远方》-北京站</p>
            <b>北京 | 天桥艺术中心-大剧场</b>
            <time>
              <strong>12/19 15:00</strong>
              <i style="font-style:normal;">开始</i>
              <button>开售提示</button>
            </time>
          </span>
        </div>
      </div>
    </nav> -->
    <div class="advertion_wrap">
        <div class="label_item">
            <div class="label_item_block">
                <div class="label_item_block_column" v-for="item in labelItemBlock.classify_list" :key="item.id">
                    <img :src="item.pic" class="label_item_block_column_icon">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 热门演出 -->
    <div class="hot_block">
        <div class="hot_block_lab">
            <h3 class="hot_block_title">热门演出</h3>
            <a href="" class="iconfont hot_block_icon">&#xe501;</a>
        </div>
        <div class="hot_block_list">
            <div class="hot_container">
                <div class="hot_container_block" v-for="(item,index) in getHotsList" :key="index" v-if="index<10">
                    <div class="hot_container_block_Pic">
                        <img :src="item.pic">
                    </div>
                    <div class="hot_container_block_title">
                        {{item.show_name}}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- 巡回演出 -->
    <div class="tour_block">
        <littleHeader/>
        <div class="tour_block_list">
            <div class="tour_container">
                <div class="tour_container_block" v-for="(item,index) in getTourList" :key="index"  v-if='index<6'>
                    <div class="tour_container_block_Pic">
                        <img :src="item.pic">
                    </div>
                    <div class="tour_container_block_title">
                        {{item.show_name}}
                    </div>
                    <div class="tour_container_block_num">
                      {{item.schedular_num}}场巡演
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 类型分类 -->
    <div class="category_block">
      
      <div class="category_block_list" v-for="(item,index) in getFloorList" :key="index">
          <littleHeader :title="item.title"/>
          <div class="category_block_list_row"  v-for="(items,idex) in item.list" :key="idex" v-if="idex<1">
              <div class="row_bg">
                  <a class="category_block_list_row_wrap">
                      <div class="category_block_list_row_item">
                          <img :src="items.pic">
                      </div>
                  </a>
                  <div class="category_block_list_row_info">
                    <p>{{(items.display_show_time).replace(/(\s[0-9:?]+)/,'')}}<span>{{items.week}}{{(items.display_show_time).replace(/([0-9.]+)/,'')}}</span></p>
                    <h3 class="top">
                        {{items.schedular_name}}
                    </h3>
                    <h4 class="bot">
                        {{items.city_name}} | {{items.venue_name}}
                    </h4>
                  </div>
              </div>
          </div>
          <div class="item_container">
              <div class="item_container_list">
                  <div class="item_container_list_block" v-for="(mov,iex) in item.list" :key="iex" v-if="iex>0">
                      <div class="item_container_list_block_pic">
                          <img :src="mov.pic">
                      </div>
                      <h3 class="splace">
                          {{mov.schedular_name}}
                      </h3>
                      <p>
                        ￥{{mov.low_price}}<span> 起</span>                      
                      </p>
                  </div>
              </div>
          </div>

      </div>
      
    </div>  
    <!-- 热门场馆 -->
    <div class="hot_venue">
        <littleHeader title="热门场馆"/>
        <div class="hot_venue_block">
            <div class="hot_venue_container">
              <div class="hot_venue_wrapper">
                  <div class="hot_venue_active" v-for="(item,index) in getTheatreList" :key="index" v-if="item.count>0">
                      <div class="venue_block_info">
                          <div class="venue_icon">
                              <img :src="item.pic">
                          </div>
                          <div class="venue_con">
                              <p>{{item.name}}</p>
                              <p>{{item.count}}场在售演出</p>
                          </div>
                          <span class="iconfont dian">&#xe53f;</span>
                      </div>
                      <div class="venue_data">
                          <p v-for="(iem,ind) in item.showList" :key="ind">
                            <span>{{iem.show_time}}</span>
                            <span></span>
                          </p>
                      </div>
                        <ul class="block_list">
                            <li  v-for="(iem,ind) in item.showList" :key="ind">
                              <a>
                                <img :src="iem.pic">
                              </a>
                            </li>
                        </ul>
                  </div>
              </div>
            </div>
        </div>
    </div>
     <!-- 为你推荐 -->
     <div class="recommend">
          <div class="recommend_wrap">
            <h3>为你推荐</h3>
          </div>
          <div class="recommend_block">
              <div class="recommend_block_list" v-for="(item,index) in getShowList" :key="index">
                  <div class="recommend_list_pic">
                      <img :src="item.pic">
                  </div>
                  <div class="recommend_list_container">
                      <p class="recommend_container_data">
                        {{(item.start_show_time).replace(/(.[0-9]+)(.[0-9]+)(\s[0-9:?]+)/,'')}}.{{(item.show_time_top).replace(/\//g,".")}}
                      </p>
                      <div class="recommend_container_title">
                          <p class="recommend_container_title_name">
                              {{item.name}}
                          </p>
                      </div>
                      <p class="recommend_container_splace">
                          {{item.city_name}} | {{item.venue_name}}
                      </p>
                      <ul>
                          <li v-for="(ite,idx) in item.support_desc" :key="idx">
                              {{ite}}
                          </li>
                      </ul>
                      <p class="recommend_container_price">
                          ￥{{item.min_price}}<span>起</span>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import littleHeader from '../../common/components/littleHeader/index'
import {labelItem,getHotsRecommendList,getTourRecommendList,getFloorRecommendList,getHotTheatreList,getShowList} from '../../api/shouye.js'
import Swiper from 'swiper'
import { async } from 'q'
export default {
  name: "shouye",
  components:{
    littleHeader
  },
  data() {
      return {
          swiperPic:[
              'https://image.juooo.com/group1/M00/04/06/rAoKNV3tv4uAe2bcAADolgfr9pY017.jpg',
              'https://image.juooo.com/group1/M00/03/5C/rAoKmV3qDlGAJCRNAAITx0EL_IM034.jpg',
              'https://image.juooo.com/group1/M00/03/CD/rAoKNV2eopmAWAq5AAFgaTUu0hI903.jpg',
              'https://image.juooo.com/group1/M00/03/4A/rAoKmV3TunKAQzPLAAEfY4_2LDE240.jpg',
              'https://image.juooo.com/group1/M00/03/F5/rAoKNV3VC56AX7_5AADW39DflpQ692.jpg',
              'https://image.juooo.com/group1/M00/03/BE/rAoKNV2B46GAM6TMAAE2152MCko633.jpg',
              'https://image.juooo.com/group1/M00/03/79/rAoKNV0jZFiAMZvgAADEb0qSIBI830.png',
              'https://image.juooo.com/group1/M00/02/CE/rAoKmV0fA7eAausmAAC-CJOo7k8325.jpg',
              'https://image.juooo.com/group1/M00/03/FC/rAoKNV3gfvyADQedAACbynWSyG0362.jpg',
          ],

          swiperOption: {
        　　pagination: {
        　　　　el: '.swiper-pagination',
        　　　　clickable: true // 允许点击小圆点跳转
        　　},
        　　autoplay: {
        　　　　delay: 3000,
        　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        　　},
        　　loop: true,
        },
        labelItemBlock:[],
        getHotsList:[],
          getTourList:[],
          getFloorList:[],
          getTheatreList:[],
          getShowList:[],
          searchBarFixed:false
      }
  },
    created(){
        this.labelGetItem(0,'','6.0.9',2);
        this.getHotsGetList(0,'6.0.9',2);
        this.getTourGetList(0,'6.0.9',2);
        this.getFloorGetList(0,'6.0.9',2);
        this.getHotTheatreList('6.0.9',2);
        this.getShowItemList(0,1,'6.0.9',2);
    },
  mounted(){
      window.addEventListener('scroll', this.handleScroll,true)
  },
  methods:{
     async labelGetItem(city_id,abbreviation,version,referer){
          let data =await labelItem(city_id,abbreviation,version,referer);
          this.labelItemBlock=data.data;
      },
      async getHotsGetList(city_id,version,referer){
          let data = await getHotsRecommendList(city_id,version,referer)
          this.getHotsList=data.data.hots_show_list;   
      },
       async getTourGetList(city_id,version,referer){
          let data = await getTourRecommendList(city_id,version,referer)
          this.getTourList=data.data.tour_show_list;   
          
      },
      
      async getFloorGetList(city_id,version,referer){
          let data = await getFloorRecommendList(city_id,version,referer)
          this.getFloorList=data.data;   
      },
      async getHotTheatreList(version,referer){
          let data = await getHotTheatreList(version,referer)
          this.getTheatreList=data.data.theatre_list;   
      },
      async getShowItemList(city_id,page,version,referer){
          let data = await getShowList(city_id,page,version,referer)
          this.getShowList=data.data.list;   
      },
      handleScroll(event) {
        // 滚动条距离底部的距离scrollBottom
        let scrollBottom =
          event.target.scrollHeight -
          event.target.scrollTop -
          event.target.clientHeight;
          if(scrollBottom<7300){
            this.searchBarFixed=true;
          }else{
            this.searchBarFixed=false;
          }
      }
  },
  destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
  },
}
  

</script>

<style scope>
.page {
  position: relative;
  overflow-y:auto; 
  height: 100%;
}
.head_box {
  width: 100%;
  height: 0.4rem;
  font-size: 0.25rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;
}
.head_bg{
  background-color: #fff;
}
.head_icon_bg{
  color:#f90;
}
.head_address {
  display: flex;
  margin-left: 0.15rem;
  height: 0.3rem;
  width: 0.6rem;
  align-items: center;
  color:#fff;
  background-color: #000;
  opacity: 0.2;
  border-radius: 17px;
    padding: 0 0.05rem;
}
.head_address p {
  font-size: 0.14rem;
  margin-left: 0.05rem;
  font-weight: bold;
}
.head_search {
  display: flex;
  width: 2.05rem;
  height: 0.3rem;
  align-items: center;
  margin-left: 0.23rem;
  background: #000;
  border-radius: 0.2rem;
  border: none;
  padding-left: 0.15rem;
  opacity: 0.3;
}
.head_search p {
  font-size: 0.14rem;
  font-weight: bold;
  margin-left: 0.05rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color:#fff;
}
.head_search i {
  font-weight: bold;
  color:#fff;
}
.head_calend {
  height: 0.4rem;
  width: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
}
.head_calend i {
  font-size: 0.21rem;
}
nav {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0.4rem;
}
nav .advance {
  width: 90%;
  height: 2rem;
  border: 0.003rem solid #f90;
}
nav .advance .advance_box {
  font-size: 0.15rem;
  height: 0.5rem;
  width: 100%;
  border-bottom: 0.01rem dashed #f90;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.advance_bottom {
  height: 1.45rem;
  width: 100%;
  font-size: 0.2rem;
  display: flex;
}
.advance_bottom span:nth-child(1) {
  display: flex;
  width: 1.5rem;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.advance_bottom span:nth-child(1) img {
  width: 0.7rem;
  height: 1.05rem;
}
.advance_bottom span:nth-child(2) {
  padding-top: 0.15rem;
  width: 100%;
  height: 100%;
  margin-right: 0.2rem;
}
.advance_bottom span:nth-child(2) p {
  font-size: 0.13rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
  line-height: 0.2rem;
}
.advance_bottom span:nth-child(2) b {
  font-size: 0.13rem;
  color: #666;
}
.advance_bottom span:nth-child(2) time {
  display: inline-block;
  color: orange;
  margin-top: 0.15rem;
  font-size: 0.12rem;
  font-weight: bold;
}
.advance_bottom span:nth-child(2) time i {
  color: #666;
}
.advance_bottom span:nth-child(2) time button {
  border: 0.01rem solid #ff6743;
  color: #ff6743;
  border-radius: 0.2rem;
  width: 0.85rem;
  height: 0.25rem;
  margin-left: 0.3rem;
  background: #fff;
}
.showSwiper{
    width: 100%;
    height: 1.96rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
}
.showSwiper .showPic{
    width:100%;
    height: 100%;
}
.showSwiper .showPic img{
    width:100%;
    height: 100%;
}
.advertion_wrap{
    width:100%;
    height: 1.52rem;
    padding:0.1rem 0.17rem 0;
    margin-bottom: 0.2rem;
}
.advertion_wrap .label_item{
    display: flex;
    margin-bottom: 0.2rem;
    width:100%;
    height: 100%;
}
.advertion_wrap .label_item .label_item_block{
    width: 100%;
    height: 100%;
    margin-bottom: 0.08rem;
    display: flex;
    flex-wrap: wrap;

}
.advertion_wrap .label_item .label_item_block .label_item_block_column{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:20%;
}
.advertion_wrap .label_item .label_item_block .label_item_block_column .label_item_block_column_icon{
    width:0.51rem;
    height: 0.51rem;
}
.advertion_wrap .label_item .label_item_block .label_item_block_column span{
     font-size: 0.13rem;
    color: #232323;
    margin-top: 0.02rem;
}
   
.hot_block{
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    padding-bottom: 0.4rem;
    width:100%;
    height: 2.86rem;
}
.hot_block .hot_block_lab{
    width:100%;
    height: 0.23rem;
    line-height: 0.23rem;
    padding-right: 0.05rem;
}
.hot_block .hot_block_lab .hot_block_title{
    font-size: 0.2rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    float: left;
}
.hot_block .hot_block_lab .hot_block_icon{
    font-size: 0.27rem;
    float: right;
}
.hot_block .hot_block_list{
    width:100%;
    height: 2.01rem;
    background-color: #fff;
    position: relative;
    
}
.hot_block .hot_block_list .hot_container{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top:0.2rem;
    z-index: 1;
    width:100%;
    display: flex;
    height: 100%;
    overflow-x:auto;
}
.hot_block .hot_block_list .hot_container::-webkit-scrollbar {
    display:none
}
.hot_block .hot_block_list .hot_container .hot_container_block{
  width:1.16rem;
  height: 2.02rem;
  background-color: #fff;
  margin-right: 0.1rem;
  display: inline-block;
}
.hot_block .hot_block_list .hot_container .hot_container_block .hot_container_block_Pic{
     width: 1.16rem;
    height: 1.56rem;
    border-radius: 0.10667rem;
    overflow: hidden;
    border: solid 1px #ebebeb;
}
.hot_block .hot_block_list .hot_container .hot_container_block .hot_container_block_Pic img{
  width:100%;
  height: 100%;
}
.hot_block .hot_block_list .hot_container .hot_container_block .hot_container_block_title{
  font-size: 0.14rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.tour_block{
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    padding-bottom: 0.4rem;
    width:100%;
    height: 2.71rem; 
}
.tour_block .tour_block_list{
    width:100%;
    height:2rem;
    position: relative;
}
.tour_block .tour_block_list .tour_container{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top:0.2rem;
    z-index: 1;
    width:100%;
    display: flex;
    height: 100%;
    padding-left: 0.7rem;
    overflow-x:auto;
}
.tour_block .tour_block_list .tour_container::-webkit-scrollbar {
    display:none
}
.tour_block .tour_block_list .tour_container .tour_container_block{
  width:2.45rem;
  height: 1.94rem;
  background-color: #fff;
  margin-right: 0.2rem;
  display: inline-block;
  
}
.tour_block .tour_block_list .tour_container .tour_container_block .tour_container_block_Pic{
     width: 2.45rem;
    height: 1.4rem;
    overflow: hidden;
}
.tour_block .tour_block_list .tour_container .tour_container_block .tour_container_block_Pic img{
  width:100%;
  height: 100%;
}
.tour_block .tour_block_list .tour_container .tour_container_block .tour_container_block_title{
  font-size: 0.14rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  height: 0.3rem;
  line-height: 0.4rem;
  text-align: center;
}
.tour_block .tour_block_list .tour_container .tour_container_block .tour_container_block_num{
    font-size: 0.12rem;
    height: 0.23333rem;
    line-height: 0.23333rem;
    color: #666;
    text-align: center;
}

.category_block{
  margin-bottom:0.15rem;
  margin-top:0.15rem;
  overflow:hidden;
}
.category_block .category_block_list{
  margin-bottom:0.28rem;
}
.category_block .category_block_list .category_block_list_row{
  margin-top:0.15rem;
}
.category_block .category_block_list .category_block_list_row .row_bg{
  width:3.75rem;
  height:1.66rem;
  background-color: rgba(0,0,0,0.2);
    background: rgb(220, 216, 216);

  overflow:hidden;
  padding: 0.18333rem 0 0.18333rem 0.2rem;
    display:flex;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_wrap{
  width:1.1rem;
  height:1.38rem;
  float:left;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_wrap .category_block_list_row_item{
    width: 1rem;
    height: 1.36rem;
    border-radius: 0.06rem;
    border: solid 1px #ebebeb;
    overflow: hidden;
    position: relative;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_wrap .category_block_list_row_item img{
    width:100%;
    height:100%;
}

.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_info{
  width:2.3rem;
  height:1.38rem;
  float:left;
  color:#fff;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_info p{
      font-size: 0.15rem;
      width:100%;
      height: 0.32rem;
      line-height: 0.32rem;
      letter-spacing: 1px;
      margin-left:0.05rem;
      overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_info .top{
    height:0.48rem;
    width: 90%;
    line-height:0.25rem;
    font-size: 0.15rem;
    max-height: 0.6rem;
    min-height: 0.3rem;
    margin-top: 0.1333rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.category_block .category_block_list .category_block_list_row .row_bg .category_block_list_row_info .bot{
    width: 100%;
    font-size: 0.12rem;
    height: 0.32rem;
    line-height: 0.32rem;
    margin-top: 0.1333rem;
}
.category_block .category_block_list .item_container{
  padding: 0.2rem 0 0 0.2rem;
  width:100%;
  height:2.41rem;
  position:relative;
}
.category_block .category_block_list .item_container .item_container_list{
    width:100%;
    height:100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display:flex;
    overflow-x: auto;
}
.category_block .category_block_list .item_container .item_container_list::-webkit-scrollbar {
    display:none
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block {
  width:1.07rem;
  height:2.21rem;
  float:left;
  margin-right:0.1rem;
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block .item_container_list_block_pic{
  width:1.07rem;
  height:1.46rem;
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block .item_container_list_block_pic img{
  width:100%;
  height:100%;
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block .splace{
    width: 100%;
    min-height: 0.2rem;
    font-size: 0.16rem;
    color: #232323;
    margin-top: 0.02rem;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height:0.2rem;
    margin-top:0.13rem;
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block p{
  color:#ff6743;
  font-size:0.15rem;
  font-weight:bold;
}
.category_block .category_block_list .item_container .item_container_list .item_container_list_block p span{
  color:#999;
  font-size:0.1rem;
}
.hot_venue{
    margin-bottom: 0.251rem;
    padding-left: 0.1rem;
}
.hot_venue .hot_venue_block{
  margin-top:0.2rem;

}
.hot_venue .hot_venue_block .hot_venue_container{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper{
  width:100%;
  height:2.97rem;
  overflow-x:auto;
  display:flex;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper::-webkit-scrollbar{
  display:none;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active{
    width: 2.63rem;
    margin-right: 20px;
    height: 2.8rem;
    border-radius: 0.05667rem;
    border: solid 1px #ebebeb;
    padding: 0.15333rem 0.15333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info{
  width:2.27rem;
  height:0.51rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .venue_icon{
  width:0.52rem;
  height:0.52rem;
  float:left;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .venue_icon img{
  width:100%;
  height:100%;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .venue_con{
  width:1.25rem;
  height:0.49rem;
  float:left;
  margin-left:0.1rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .venue_con p:nth-child(1){
    margin-top: 0.0333rem;
    font-size: 0.14rem;
    color: #232323;
    height: 0.2rem;
    line-height: 0.2rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .venue_con p:nth-child(2){
    margin-top: 0.04rem;
    font-size: 0.12rem;
    color: #666;
    height: 0.2rem;
    line-height: 0.2rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_block_info .dian{
  float:right;
  display:block;
  height:0.52rem;
  line-height:0.52rem;
  font-size:0.3rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_data{
    width: 100%;
    height: 0.4rem;
    float:left;
    margin-bottom:0.2rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_data p{
    width: 50%;
    height: 0.4rem;
    float:left;
    text-align:center;
    line-height:0.4rem;
    color:#aaa;
    border-bottom:1px solid #aaa;
    position:relative;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .venue_data p span:nth-child(2){
  width:0.07rem;
  height:0.07rem;
  border-radius:50%;
  display:block;
  background:#aaa;
  position:absolute;
  left:50%;bottom:-0.04rem;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .block_list{
  width:2.27rem;
  height:1.48rem;
  display:flex;
  
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .block_list li{
    width: 1.08rem;
    height: 1.46rem;
    border-radius: 0.04rem;;
    border: solid 1px #ebebeb;
    overflow: hidden;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .block_list li:nth-child(2){
  margin-left:0.1rem;
}

.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .block_list li a{
  display: block;
    width: 100%;
    height: 100%;
}
.hot_venue .hot_venue_block .hot_venue_container .hot_venue_wrapper .hot_venue_active .block_list li a img{
  width:100%;
  height:100%;
}
.recommend{
  padding: 0 0.2rem;
    margin-top: 0.1rem;
}
.recommend .recommend_wrap{
  width:100%;
  height:0.3rem;
}
.recommend .recommend_wrap h3{
  font-size:0.18rem;
}
.recommend .recommend_block{
  margin-top:0.1rem;
}
.recommend .recommend_block .recommend_block_list{
  width:100%;
  height:1.44rem;
  margin-bottom:0.2rem;
  display:flex;
}

.recommend .recommend_block .recommend_block_list .recommend_list_pic{
  width:1.05rem;
  height:1.44rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_pic img{
  width:100%;
  height:100%;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container{
  width:2.23rem;
  height:1.44rem;
  margin-left:0.1rem;
}

.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_data{
  height:0.16rem;
  font-size:0.16rem;
  font-weight:bold;
  margin-top:0.05rem;
  width:100%;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_title{
  width:100%;
  height:0.56rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_title .recommend_container_title_name{
  width:100%;
  height:100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size:0.16rem;
      overflow: hidden;
    text-overflow: ellipsis;
font-weight:bold;
line-height:0.26rem;
padding-top:0.05rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_splace{
  font-size:0.12rem;
  color:#aaa;
  margin-top:0.07rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container ul{
  width:100%;
  margin-top:0.06rem;
  height:0.18rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container ul li{
  float:left;
  display:block;
  color:#ff6743;
  background:#fff1ef;
  margin-right:0.06rem;
  border-radius:10px;
  padding:0 0.04rem;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_price{
  font-size:0.17rem;
  width:100%;
  height:0.18rem;
  float:left;
  color:#ff6743;
}
.recommend .recommend_block .recommend_block_list .recommend_list_container .recommend_container_price span{
  font-size:0.11rem;
  color:#aaa;
  margin-left:0.05rem;
}
  </style>

