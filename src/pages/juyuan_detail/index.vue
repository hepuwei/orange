<template>
  <div class="juyuan_detail">
    <header>
      <div class="header_first" >
        <div class="bg_blur" :style="{'backgroundImage':'url('+movieList.pic+')','background-position':'center','backgroundSize':'cover','background-repeat':'no-repeat'}"></div>
        <div style="width:100%;height:5.6rem"></div>
        <div class="bar">
          <i class="iconfont">&#xe518;</i>
          <p>演出详情</p>
          <v-touch tag="i" @tap="shareClick();" class="iconfont" style='margin-left:0.1rem;'>&#xe642;</v-touch>
          <i class="iconfont" style='margin-left:0.1rem;'>&#xe626;</i>
        </div>
        <div class="cover">
          <div class="header_img">
            <img :src="movieList.pic"/>
          </div>
          <span class="header_text">
              <p>{{movieList.show_name}}</p>
              <p>￥{{movieList.price_range}}</p>
          </span>
        </div>
        <div class="show_time">
          <div class="start_time">
            <v-touch @tap="handleClick()">
              <time>
                {{statetime}} - {{stoptime}}
                <i class="iconfont" style="font-size:0.2rem">&#xe501;</i>
              </time>
            </v-touch>
            
          </div>
        <div class="show_address" >
          <span>
            <p>{{city}}丨{{showTheater}}</p>
            <p>{{showAddress}}</p>
          </span>
          <span>
            <i class="iconfont">&#xe694;</i>
          </span>
          </div>
          <v-touch class="orangeVIP_plus_card" @tap="hrefVIP()">
              <div>橙PLUS卡</div>
              <div>开通送￥100 最高省88元</div>
              <div>立即开卡<i class="iconfont" style="font-size:0.22rem">&#xe501;</i></div>
          </v-touch>
        </div>
        
        <ul class="ticketing_mode">
          <v-touch @tap='hrefVIP()' tag="li">
            <p>VIP+</p>
            <b>:</b>
            <strong>V+会员享<i style="color:#FF6743">国内免邮 + 双倍积分</i><i class="iconfont" style='margin-left:0.6rem;font-size:0.23rem;color:#999'>&#xe501;</i></strong>
          </v-touch>
          <li>
            <p>入场</p>
            <b>:</b>
            <strong>{{children}}</strong>
          </li>
          <li>
            <p>支持</p>
            <b>:</b>
            <strong style='color:#999'>{{free_shipping}}</strong>
          </li>
        </ul>

        <div class="detailed_introduction"> <!--详情介绍 -->
          <div class='detailed_introduction_box' :style="style">
            <div style="margin-top:0.1rem;font-size:0.2rem;font-weight:bold">演出介绍</div>
            <div v-html="Details" class="details" >
            </div>
            <div class="open_detailed_filter"></div>
            
            <div class="open_detailed_introduction" @click='expand_all()' v-show="btn">
              <p>展开全部</p>
              <span class="one"></span>
            </div>
          </div>
        </div>

        <v-touch class="reminder" @tap="handlereminder()">
          <div class="reminder_box">
            温馨提醒<i class="iconfont">&#xe501;</i>
          </div>
          <ul class="reminder_box_list" >
            <li v-for="(re,index) of remind" :key="index">·{{re.title}}</li>
          </ul>
        </v-touch>
        <transition name="box" >
            <div class="reminderclickbox"  v-if="reminderclick">
              <div class="reminderclickbox_text">
                温馨提醒<v-touch class="iconfont " @tap="handlereminder()" >&#xe660;</v-touch>
              </div>
              <ul class="reminderclickbox_list">
                <li v-for="(re,index) of remind" :key="index">
                  <b><i>●</i> {{re.title}}</b>
                  <p>{{re.desc}}</p>
                </li>
              </ul>
              
            </div>
        </transition>
        <v-touch @tap="handlereminder()">
          <transition name="blackbox">
            <div class="reminderclickbox_" v-if="reminderclick" >
              
            </div>  
          </transition>
        </v-touch>
        <div class="recommend">
          <div class="recommend_h1">
            相关推荐
          </div>
          <ul class="recommend_list">
            <li v-for="text of movieText" :key="text.schedular_id" >
              <span>
                <img :src='text.pic'>
              </span>
              <span>
                <time>2019/{{text.show_time_top}}</time>
                <h3>{{text.name}}}</h3>
                <p>{{text.city_name}} | {{text.venue_name}}</p>
                <br>
                <b v-for="(sd,index) of text.support_desc" :key="index">{{sd}}</b>
                <i>￥{{text.min_price}}<strong>起</strong> </i>
              </span>
            </li>
          </ul>
        </div>
        <div class="look">
          查看更多演出<i class="iconfont">&#xe501;</i>
        </div>
      </div>
    </header>
    <transition name="share">
      <nav class="share" v-if="shareshow">
        <div class="share_box">
          <div>使用浏览器的分享功能<br>把演出分享出去</div>
          <v-touch @tap="shareClick()">知道了</v-touch>
        </div>
      </nav>
    </transition>
       
     
    
    




























    <footer>
      <div class="icon_box">
        <i class="iconfont icon">&#xe8de;</i>
        <p>客服</p>
      </div>
      <div class="btn_box">
        <v-touch @tap="handleClick()" class="btn">立刻购买</v-touch>
      </div>
      <transition name="bg"><!--背景颜色-->
        <v-touch class="bg" @tap="handleClick();cancel();clear();clearDate()" ref="mybutton" v-if="isShow"></v-touch>
    </transition>
      <transition name="btn_top">
        <div v-if="isShow" class="btn_top" style="color:#000">
          <div class="shop_time">
            <v-touch ref="mybutton" class="iconfont" @tap="handleClick();cancel();clear();clearDate()" style='float:right;'>&#xe660;</v-touch>
            <div class="shop_time_box">
              <div>
                <p>选择日期</p>
                <div class="shop_timeData">
                  <v-touch  @tap="shop_btnclick(data.data_id);cancel();clear()"
                  ref="mybutton"
                  :class="{clickstyle:changcolor == data.data_id}"  
                  v-for='data of movieData' 
                  :key="data.data_id">{{data.data}}</v-touch>
                </div>
              </div>
              <div>
                <p>选择场次</p>
                <div class="shop_timeData">
                  <v-touch 
                  @tap="shop_btnclick_two(scene.scene_id)"
                  :class="{clickstyle:changcolor_two == scene.scene_id}"
                  v-for='scene of movieScene' 
                  :key="scene.scene_id">{{scene.scene}}</v-touch>
                </div>
              </div>
              <div>
                <p>选择价格</p>
                <div class="shop_timeData">
                  <v-touch
                  ref="mybutton"  
                  @tap="shop_btnclick_three(money.money_id,money); buy()"
                  :class="{clickstyle:changcolor_three == money.money_id}"
                  v-for='money of movieMoney'
                  :key="money.money_id">{{money.money}}</v-touch>
                  
                </div>
                
              </div>
              <div class="manyTickets YN" ref="YN" >
                <p>选择张数</p>
                <div class="Calculator">
                  <div class="Calculator_box">
                    <span>{{ticketsmoney*count}}元</span>
                    <span>
                      <v-touch @tap="jisuan($event)" :class="count ==1 ? 'bg_black':'reduce'">-</v-touch>
                    </span>
                    <span>{{count}}</span>
                    <span>
                        <v-touch  @tap="jisuan($event)" class="add">
                          +
                        </v-touch>
                      </span>
                  </div>
                </div>
                <div class="buy YN">
                  <p>立即购买</p>
                </div>
              </div>
             
              
            </div>
            
          </div>
        </div>
      </transition>
      <transition name="share_bg1">
          <div class="share_bg" v-if="shareshow"></div>
      </transition>
    </footer>
  
  </div>
  
</template>



<script>
import {movieNowApi,movieRecommend,moviemoney} from '../../api/juyuan_detail.js';
export default {
  name: "juyuan_detail",
  data() {
    return {
      btn:true,
      isShow: false,
      shareshow:false,
      movieList:[],
      statetime:'', //演出开始时间
      stoptime:'', //演出结束时间
      showAddress:'',   //演出地址
      showTheater:'',   //演出剧院
      city:'' ,        //演出城市
      children:'' , //孩子不让进
      free_shipping:'' ,  //包邮
      style:{
        'height':'7rem',
      },
      Details:'',  //详细信息
      remind:'',  //温馨提醒
      reminderclick : false,  //点击温馨提示弹出来的元素
      movieText:[],  //相关推荐
      show_id:[],   //show_id
      movieData:[
        {data_id:'00' , data:'2020.05.08 周五'},
        {data_id:'01' , data:'2020.05.09 周六'}
      ],              //演出日期
      movieScene:[
        {scene_id:'00',scene:'19：30'}
      ],              //演出场次
      movieMoney:[
        {money_id:'00',money:'180元'},
        {money_id:'01',money:'280元'},
        {money_id:'02',money:'480元'},
        {money_id:'03',money:'680元'},
        {money_id:'04',money:'880元'}
      ],              //金额
      changcolor:0,
      changcolor_two:0,
      changcolor_three:null,
      buyTickets:true,
      ticketsmoney:'',  //钱
      count:1,
    }
  },
    created(){
      this.juyuan_detail(111284,'6.0.9',2);
      this.juyuan_Recommend(this.show_id,11,'6.0.9',2);
      this.juyuan_moviemoney(this.show_id,'6.0.9',2);
    },
    methods: {
        //点击跳转
        hrefVIP(){
          this.$router.push({path:'../vip'})
        },

        handleClick() {
            this.isShow = !this.isShow;
        },
        handlereminder(){
            this.reminderclick = !this.reminderclick;
            this.changcolor_three = null;
        },
        //分享
        shareClick(){
          this.shareshow = !this.shareshow;
        },
        expand_all(){
          this.style = {};
          this.btn =false;
        },
        shop_btnclick(index) {
            this.changcolor = index;
        },
        shop_btnclick_two(index) {
            this.changcolor_two = index;
        },
      
        shop_btnclick_three(index,item,event) {
            this.changcolor_three = index;
            this.ticketsmoney = Number(item.money.replace('元',''));
            this.count =1;
            
        },
        clear(){
          this.changcolor_three = null;
        },
        clearDate(){
          this.changcolor = 0;
          this.changcolor_two = 0;
        },
        buy(){    //点击购买
          this.$refs.YN.style.display = 'block';
        },
        cancel(){   //取消显示购买
          this.$refs.YN.style.display = 'none';
        
        },
        jisuan(event){ //计算
            if(event.target.className == 'reduce' ){
              if(this.count !=1){
                this.count--;
              }
            }
            if(event.target.className == 'add'){
              this.count++;
            }
        },




        //获取id
        async juyuan_detail(schedular_id,version,referer){
            let data= await movieNowApi(schedular_id,version,referer);
            this.movieList=data.data.static_data;
        //演出结束时间
        this.stoptime = this.movieList.show_time_data.show_time_end_display.substring(5);
        this.stoptime = this.stoptime.replace(/(\s[0-p:]+)/,'')
        //演出开始时间
        this.statetime =this.movieList.show_time_data.show_time_start_display.replace(/(\s[0-p:]+)/,'')
      
        //演出地址
        this.showAddress = this.movieList.venue.venue_address;
        //演出剧院
        this.showTheater = this.movieList.venue.venue_name;
        // 演出城市
        this.city = this.movieList.city.city_name;
        //孩子不让进
        this.children = this.movieList.tips.desc;
        //满两百
        this.free_shipping = this.movieList.support.list[0];
        //小广告
        this.Details = this.movieList.show_desc.desc
        //温馨提醒
        this.remind = this.movieList.show_notice.list
        //拿到show_id
         this.show_id = this.movieList.show_id
      },
      // 相关内容
      async juyuan_Recommend(category,city_id,version,referer){
        let data= await movieRecommend(category,city_id,version,referer);
        this.movieText=data.data.list;
        
      },
      //购票获取价格内容
      async juyuan_moviemoney(schedular_id,version,referer){
        let data= await moviemoney(schedular_id,version,referer);
        this.movieShop=data.data.list;
        
      },
  },
 
  
  
  
};
</script>


<style scoped>
    .SY{
      background:none;
      color:black;
    }
    i,b{
      font-style:normal;
      font-weight:normal;
    }
    header{
        width: 100%;
        height: 100%;
        overflow-y:auto;
        overflow-x:hidden;
        position: absolute;
        bottom:0.01rem;
    }
    .header_first {
        width: 100%;
        height: 2rem;
    }
    .header_first .bar {
        width: 100%;
        height: 0.5rem;
        display: flex;
        align-items: center;
        font-size: 0.5rem;
        color:#fff;
        position:absolute;
        top:0;
    }
    .bg_blur{
        width: 100%;
        height: 2rem;
        filter:blur(0.07rem);
        position:absolute;
    }
    .bar p {
        display: inline-block;
        width: 2.4rem;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        font-size: 0.18rem;
        font-weight: bold;
        margin-left: 0.25rem;
    }
    .bar i {
        font-size: 0.25rem;
    }
    .btn_top {
        width: 100%;
        height: 4.5rem;
        background-color: #fff;
        z-index: 100;
        position: absolute;
        bottom: 0;
        left: 0;
        padding:0.2rem 0.1rem 0 0.1rem;
        border-radius:0.07rem;
        overflow-y:auto;
        
    }
    .btn_top-enter, .btn_top-leave-to {
        bottom: -4.5rem;
    }
    .btn_top-enter-active,.btn_top-leave-active {
        transition: all 0.2s;
    }
    .bg {
        width: 100%;
        height: 90%;
        background-color: #000;
        opacity: 0.2;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 98;
    }
    .bg-enter,.bg-leave-to {
        opacity: 0;
    }
    .bg-enter-active,.bg-leave-active {
        transition: all 0.2s;
    }
    .juyuan_detail {
        font-size: 0.3rem;
        width: 100%;
        height: 100%;
    }
    footer {
        display: flex;
        width: 100%;
        height: 0.6rem;
        position: fixed;
        bottom:0;
        left: 0;
        border-top: 0.01rem solid #f0f0f0;
        background: #fefefe;
    }
    .icon {
        font-size: 0.25rem;
    }
    .icon_box {
        color: #797979;
        width: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 0.1rem;
    }
    .icon_box p {
        font-size: 0.115rem;
        font-weight: bold;
    }
    .btn{
        width:2.7rem;
        height:0.35rem;
        line-height:0.35rem;
        text-align:center;
        font-size:0.18rem;
        font-weight:bold;
        color:#fff;
        border-radius:0.5rem;
        background-image: linear-gradient(50deg, #ff9a34, #ff4d4a);
    }
    .btn_box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn_box button {
        width: 3.1rem;
        height: 0.43rem;
        color: #fff;
        font-size: 0.18rem;
        font-weight: bold;
        border-radius: 0.3rem;
        border: none;
        background-image: linear-gradient(50deg, #b6b3b1, #ff4d4a);
    }
    .cover{
      width:100%;
      height:1.5rem;
      display:flex;
      top:0.5rem;
       position:absolute;
    }
    .header_img{
      width:0.93333rem;
      height:1.3rem;
      margin-left:0.2rem;
    }
    .header_img img{
      width:100%;
      height:100%;
      border-radius:0.05rem;
    }
    .header_text{
      font-size:0.17rem;
      font-weight:bold;
      color:#fff;
      margin-left:0.2rem;
      width:2.3rem;
      padding:0.05rem 0 0.2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .header_text p:nth-child(1){
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
      overflow: hidden;
    }
    .show_time{
      width:100%;
      height:2rem;
      background:#fff;
      top:1.9rem;
      position: absolute;
    }
    .show_time .start_time{
      width:94%;
      height:0.3rem;
      margin:0.15rem 0.1rem 0;
      font-size:0.2rem;
      font-weight:bold;
      line-height:0.3rem;
    }
    .show_time .show_address{
      width:94%;
      height:0.6rem;
      margin:0.15rem 0.1rem 0;
      display:flex;
      align-items: center;
      justify-content: space-between;
    }
    .show_time .show_address span p:nth-child(1){
      font-weight:bold;
      font-size:0.17rem;
    }
     .show_time .show_address span p:nth-child(2){
      font-size:0.13rem;
      margin-top:0.1rem;
    }
    .show_time .show_address span:nth-child(2){
      width:0.46rem;
      height:0.46rem;
      background:#EDEDED;
      text-align: center;
      border-radius:50%;
      line-height:0.46rem;
    }
    .show_time .show_address span:nth-child(2) i{
      font-size:0.27rem;
      color:#FF8839;
    }
    .orangeVIP_plus_card{
      width:94%;
      height:0.5rem;
      margin:0.15rem 0.1rem 0;
      font-size:0.125rem;
      display:flex;
      align-items: center;
      justify-content: space-around;
      color:#f5dea9;
      background-image: linear-gradient(-4deg, #1e1e1e, #464542);
      border-radius:0.07rem;
    }
    .orangeVIP_plus_card div:nth-child(1){
      background-image: linear-gradient(0deg, #f5dea9, #f8d583);
      color:black;
      font-size:0.1rem;
      width:0.5rem;
      height:0.17rem;
      text-align: center;
      line-height:0.17rem;
      border-radius:0.007rem;
    }
    .orangeVIP_plus_card div:nth-child(2){
      margin-left:-0.32rem;
      font-size:0.14rem;
    }
     .orangeVIP_plus_card div:nth-child(3){
       font-size:0.1rem;
       display:flex;
       align-items: center;
     }

     .ticketing_mode{
       width:100%;
       height:1.5rem;
       position:absolute;
       top:3.9rem;
       font-size:0.15rem;
       padding:0 0.2rem;
       border-top:0.2rem solid #F5F5F5;
      
     }
     .ticketing_mode li{
       border-bottom:0.01rem solid #EBEBEB;
       height:33%;
       width:100%;
       line-height:0.5rem;
       display:flex;
     }
      .ticketing_mode li:nth-child(3){
        border:none;
      }
      .ticketing_mode li p{
        display:inline-block;
        width:0.5rem;
        height:100%;
        text-align: justify;
        -moz-text-align-last: justify;
        text-align-last: justify;
        color:#999;
      }
      .ticketing_mode li b{
        margin-right:0.1rem;
      }
      .ticketing_mode li strong{
        display:flex;
        justify-content: space-between;
        width:2.7rem;
        font-size:0.105rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

      }
    .reminder{
      width:100%;
      height:1.2rem;
      margin-top:0.2rem;
      font-size:0.2rem;
      font-weight:bold;
      border-top: 0.2rem solid #F5F5F5;
      
    }
    .reminder .reminder_box{
      width:100%;
      height:0.45rem;
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 0.1rem;
    }
    .reminder .reminder_box i{
      font-size:0.23rem;
      font-weight:bold;
      color: rgb(153, 153, 153);
    }
    .reminder_box_list{
      width:100%;
      height:0.45rem;
      display:flex;
      font-size:0.135rem;
      justify-content: space-between;
      padding:0 0.1rem;
      align-items: center;
      color:#999;

    }
    .reminderclickbox{
      width:100%;
      height:5rem;
      background:#fff;
      position:fixed;
      left:0;
      bottom:0rem;
      z-index: 100;

    }
    .reminderclickbox_text{
      width:100%;
      height:0.5rem;
      font-size:0.2rem;
      font-weight: bold;
      display:flex;
      padding: 0 0.1rem;
      justify-content: space-between;
      align-items: center;
    }
    .reminderclickbox_list{
      font-size:0.13rem;
      line-height:0.2rem;
    }
    .reminderclickbox_list li b{
      margin:0.1rem;
      font-size:.17rem;
      font-weight:bold;
      
    }
    .reminderclickbox_list li b i {
      color:#999;
    }
    .reminderclickbox_list li p{
      color:#999;
      margin:0.1rem 0 0.1rem 0.25rem;
    }
    .box-enter , .box-leave-to{
      bottom:-7.3rem;
    }
    .box-enter-active , .box-leave-active{
      transition: all 0.2s;
    }
    .reminderclickbox_{
       width: 100%;
        height: 90%;
        background-color: #000;
        opacity: 0.2;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 98;
        
    }
    .blackbox-enter , .blackbox-leave-to{
      opacity: 0;
    }
    .blackbox-enter-active , .blackbox-leave-active{
      transition: all 0.2s;
    }

    /* 相关推荐 */
    .recommend{
      width:100%;
      height:5.4rem;
      border-top: 0.2rem solid #F5F5F5;
      overflow:hidden;
    }
    .recommend .recommend_h1{
      width:100%;
      height:0.45rem;
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:0 0.1rem;
      font-size: 0.2rem;
      font-weight:bold;
    }

    .recommend_list{
      width:100%;
      min-height:1.6rem;
    }
    .recommend_list li span:nth-child(1){
      display:inline-block;
      width:1rem;
      height:1.4rem;
      margin:0.1rem ;
      
    }
    .recommend_list li{
      display:flex;
    }
    .recommend_list li span:nth-child(1) img{
       width:100%;
       height:100%;
       border-radius: 0.06rem;
     }
     .recommend_list li span:nth-child(2){
       font-size:0.125rem;
       width:2.3rem;
       height:1.4rem;
       margin:0.1rem ;
     }
     .recommend_list li span:nth-child(2) time{
        display: inline-block;
        font-weight:bold;
        height: 0.237rem;
        line-height: 0.237rem;
        font-size: 0.15rem;
     }
      .recommend_list li span:nth-child(2) h3{
        font-size: 0.17rem;
        display: inline-block;
        font-weight: bold;
        color: #232323;
        height: 0.45rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
     }
     .recommend_list li span:nth-child(2) p{
       display: inline;
       font-size: 0.12rem;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .recommend_list li span:nth-child(2) b{
        display:inline-block;
        margin-right: 0.1rem;
        border-radius: 0.12rem;
        text-align:center;
        padding: 0.01rem;
        color: #ff6743;
        font-size: 0.05rem;
        background-color: #fff1ef;
      }
      .recommend_list li span:nth-child(2) i{
        display:flex;
        font-size: 0.12rem;
        font-weight: bold;
        color: #ff6743;
        margin-top:0.1rem;
        
      }
      .recommend_list li span:nth-child(2) i strong{
        color:black;
        font-weight:bold;
        margin-left:0.05rem;

      }

     .look{
      width: 1.8rem;
      height: 0.4rem;
      border-radius: 0.10667rem;
      border: 1px solid #ff6743;
      margin-bottom:1rem;
      margin-top:0.3rem;
      margin-left:0.9rem;
      font-size:0.15rem;
      display:flex;
      justify-content: center;
      align-items: center;
      color:#ff6743;
     }
     .look i{
       font-size:0.25rem;
     }
    
</style>
<style scoped>
    .bg_black{
      color:#ccc;
    }
    .YN{
      display:none;
    }
  .shop_time {
      font-size: 0.13rem;
      font-weight: bold;
      color: #232323;
      line-height: initial;
      min-height:5rem;
      position:relative;
    }
    .shop_time p{
      font-size:0.15rem;  
    }
    .shop_time .shop_timeData{
      width:100%;
      min-height:0.7rem;
      margin:0.1rem 0;
      align-items: center;
      
    }
    .shop_time .shop_timeData div{
      display:inline-block;
      margin:0.13rem 0 0 0.13rem;
      padding: 0 0.1rem;
      min-width:1rem;
      height:0.4rem;
      background:#F5F5F5;
      text-align: center;
      line-height:0.4rem;
      border-radius:0.06rem;
      cursor: pointer;
      color:#232323;
    }
    .shop_time_box .shop_timeData .clickstyle{
      color:#FF947A;
      background-color:#FEF2EF;
    }
    .buy{
      width:100%;
      height:0.6rem;
      position:fixed;
      background:#fff;
      bottom:0;
      left:0;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: -0.01rem;
    }
    .buy p{
      width:3.5rem;
      height:0.4rem;
      font-size:0.2rem;
      font-weight:bold;
      border-radius: 0.5rem;
      line-height:0.4rem;
      text-align: center;
      color:#fff;
      background-image: linear-gradient(50deg, #ff9a34, #ff4d4a);
    }
    .Calculator{
      width:100%;
      height:2rem;

    }
    .Calculator .Calculator_box{
      width:93%;
      height:0.45rem;
      background:#F5F5F5;
      margin:0.2rem 0.1rem;
      display:flex;
      align-items: center;
      padding:0 0.4rem;
      border-radius: 0.06rem;
    }
    .Calculator .Calculator_box span:nth-child(1){
      width:2.4rem;
      height:100%;
      display:flex;
      align-items: center;
      font-size:0.16rem;
    }
    .Calculator .Calculator_box span:nth-child(2) , .Calculator .Calculator_box span:nth-child(4){
      width:0.2rem;
      height:0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:0.2rem;
      border: 1px solid #cccccc;
    }
    .Calculator .Calculator_box span:nth-child(2){
      color:black;
    }
    .Calculator .Calculator_box span:nth-child(3){
       width:0.6rem;
       height:100%;
       display:flex;
       align-items: center;
       justify-content: center;
    }
    
</style>

<style>
  /* 点击查看更多 */
  .detailed_introduction{
        width:100%;
        min-height:7rem;
        border-top:0.2rem solid #F5F5F5;
        padding:0 0.1rem;
      }


      .open_detailed_introduction{
        top:12.3rem;
        position: absolute;
        left: 0;
        right: 0;
        height: 0.6rem;
        background-color: white;
        color: #ff6743;
        font-size: 0.15rem;
        line-height: 0.37333rem;
        text-align: center;
        padding-top:0.1rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

    }
    .open_detailed_introduction .one{
      filter:blur(0.2rem);
      display:inline-block;
      width:100%;
      height:100%;
      background:#fff;
      position:absolute;
      top:-0.4rem;
      left:0;
    }
    
    .detailed_introduction_box{
      width:100%;
      overflow:hidden;
    }
    .details img{
      border-color: transparent;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    }
    .details span{
      font-size:0.15rem;
      border: none;
    }
</style>

<style>
  /* 分享 */
.share{
  width:100%;
  height:100%;
  position:fixed;
  z-index:1;
}
.share .share_box{
  width:3rem;
  height:1.5rem;
  background:#fff;
  position: fixed;
  top: 37%;
  left: 11%;
  z-index:2;
  overflow: hidden;
  border-radius: 0.08rem;
  font-size:0.15rem;
  font-weight:400;
}
.share .share_box div:nth-child(1){
  width:100%;
  height:70%;
  display:flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: inherit;
  
}
.share_bg{
  width:100%;
  height:100%;
  background:black;
  opacity: 0.7;
  position:fixed;
  top:0;
  left:0;
}
.share_bg1-enter , .share_bg1-leave-to {
  opacity: 0;
}
.share_bg1-enter-active , .share_bg1-leave-active {
  transition: all 0.2s;
}
.share .share_box div:nth-child(2){
  width:100%;
  height:30%;
  display:flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: inherit;
  color:rgb(255, 50, 0);
}

.share-enter-active {
  animation: bounce-in .2s;
}
.share-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>