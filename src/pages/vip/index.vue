<template>
    <div class="vip">
        <header>
            <v-touch class="iconfont" @tap="vipreturn()">&#xe518;</v-touch>
            <div>{{orangeCard.name}}</div>
            <v-touch class="iconfont" @tap='clickmin()'>&#xe53f;</v-touch>
            
        </header>
        <v-touch class="bg" v-if='show' @tap='clickmin()'></v-touch>
        <nav>
            
            <div class="goldCard">
                <div class="cdCard">
                    <v-touch @tap="clickbg()" class="rules">
                        使用规则
                    </v-touch>
                    <div id="logo">{{orangeCard.name}}</div>
                    <div class="openCard">
                        <span>开卡999</span>
                        <span>送</span>
                        <span>100</span>
                        <span>储存卡</span>
                    </div>
                    <div class="line"></div>
                    <div></div>
                    <div class='line_bottom'>
                        <span>赠送VIP+会员</span>
                        <span>年</span>
                        <span>尊享10大权益</span>
                    </div>
                </div>
                <div class="cloth"></div>
            </div>
            <div class="justjoin_box">
                <div class='justjoin'>立即开卡</div>
            </div>
            <div class="benefit">
                <div class='benefit_box'>
                    <div class="benefit_title">VIP+尊享10大权益</div>
                    <div class="quanyi">
                        <div class="List" v-for="(list,index) of Card.equity_list" :key="index">
                            <div class="iconfont icon">&#xe6e9;</div>
                            <p class="iconText">{{list.benefits_name}}</p>
                        </div>
                    </div>
                    <div class="nine">
                        <div class="nine_box">
                            立即开通￥<b>99</b>/年
                        </div>
                    </div>
                </div>
                <div class='mine' v-if="show">
                    <div class="triangle"></div>
                    <div class='home'>
                        <i class="iconfont">&#xe626;</i>
                        <p>主页</p>
                    </div>
                    <div class='home my'>
                        <i class="iconfont">&#xe60d;</i>
                        <p>我的聚橙</p>
                    </div>
                </div>
            </div>
            <div class="img">
                <img src="https://m.juooo.com/static/img/save.e6e7f69.png">
            </div>
            <transition name='bottom_on'>
                <div class="bottom_on"  v-if='isShow'>
                    <div class="rule">
                        <b>使用规则</b>
                        <v-touch class="iconfont" @tap="clickbg()">&#xe660;</v-touch>
                    </div>
                    <div class="rule_text" v-html='orangeCard.instruction'>
                        {{orangeCard.instruction}}
                    </div>
                </div>
            </transition>
            <transition name='bg'>
                <v-touch class='bg' v-if='isShow' @tap="clickbg()">
                </v-touch>
            </transition>
        </nav>
        <footer>
            <div>开卡限时送<p>￥100</p></div>
            <div>立即开卡</div>
            
        </footer>
    </div>
</template>

<script>
 
import {vipCard,orange} from '../../api/juyuan_detail.js';

export default {
    name:'vip',
    data(){
        return{
            Card:[],
            orangeCard:[],
            isShow:false,
            show:false,
        }
    },
    created(){
        this.vip(1,'6.0.9',2);
        this.orangevip('6.0.9',2)
    },
    methods:{
        clickbg(){
            this.isShow = !this.isShow;
        },
        clickmin(){
            this.show = !this.show;
        },
        vipreturn(){    //返回上一页
            this.$router.back();
        },
        //vip 内容
        async vip(vip_rule_id,version,referer){
            let data= await vipCard(vip_rule_id,version,referer);
            this.Card=data.data.vip_rule_data;
        },
        // vip 内容2
        async orangevip(version,referer){
            let data= await orange(version,referer);
            this.orangeCard=data.data.basic_info;
        },
       
    }
}
</script>

<style scoped>
    .vip{
        font-size:0.25rem;
        width:100%;
        height:100%;
    }
    header{
        width:100%;
        height:0.4rem;
        background:#fff;
        display:flex;
        position:fixed;
        top:0;
        left:0;

    }
    header div:nth-child(1), header div:nth-child(3){
        width:0.35rem;
        height:0.4rem;
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:0.28rem
    }
    header div:nth-child(2){
        width:3rem;
        height:0.4rem;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:0.18rem;
    }
    .mine{
        width:1.25rem;
        height:0.9rem;
        position: fixed;
        top:0.43rem;
        right:0.05rem;
        z-index:301;
        border-radius: 0.1rem;

    }
    /*  */
    .triangle{
        width:0;
        height:0;
        border:0.1rem solid;
        border-color: transparent  transparent  #fff transparent ;
        position:absolute;
        top:-0.2rem;
        right:0.1rem;
    }
    .home{
        width:100%;
        height:50%;
        border-radius: 0.05rem 0.05rem 0 0;
        border-bottom: 0.02rem solid #f2f2f2;
        background:#fff;
        display:flex;
        align-items: center;
    
    }
    .home i{
        font-size:0.2rem;
        padding:0 0.1rem;
    }
    .home p{
        font-size:0.16rem;
    }
    .my{
        border-radius:0 0 0.05rem 0.05rem;
        border-bottom:none;
        position: absolute;
        top:0.43rem;
    }












    nav{
        width:100%;
        height:90%;
        background:#F5F5F5; 
        overflow-y:auto;
        overflow-x:hidden;
        margin:.4rem 0 0.53rem 0;
    }
    .cloth{
        width:100%;
        height:100%;
        background:#1e1e1e;
        opacity: 0.2;
        position:absolute;
    
    }
    nav .goldCard{
        width:90%;
        height:2.4rem;
        background: linear-gradient(-4deg, #1e1e1e, #31302f);
        margin:0.2rem;
        position: relative;
    }
    nav .goldCard .cdCard{
        width:90%;
        height:2rem;
        position:absolute;
        top:0.2rem;
        left:0.2rem;
        border: 0.01rem solid #f0e0ae;
        display:flex;
        align-items: center;
        flex-direction: column;
    }
    nav .goldCard .cdCard .rules{
        position:absolute;
        top:0.1rem;
        right:0.1rem;
        font-size:0.12rem;
        text-decoration:underline; 
        color: #F0E0AE;
        z-index:300;
    }
    #logo{
        width: 1.2rem;
        height:0.4rem;
        background: linear-gradient(0deg, #f5dea9, #f8d583);
        border-radius:0.02rem;
        font-size:0.2rem;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:0.3rem;
        color: #454341
    }
    .openCard{
        color: #F0E0AE;
        margin-top:0.06rem;
        
    }
    .openCard span:nth-child(1){
        font-size:0.18rem;
        margin-right:0.1rem;
    }
    .openCard span:nth-child(2){
        font-size:0.2rem;
        margin-right:0.07rem;
    }
    .openCard span:nth-child(3){
        font-size:0.24rem;
        font-weight:bold;
        margin-right:0.05rem;
    }
    .openCard span:nth-child(4){
        display:inline-block;
        font-size:0.08rem;
        background:black;
        width:0.35rem;
        height:0.15rem;
        line-height:0.15rem;
        text-align: center;
    }
    .line{
        width:2.15rem;
        height:0.01rem;
        border-bottom:0.001rem solid #F0E0AE;
        margin-top:0.17rem;
    }
    .line_bottom{
        margin-top:0.1rem;
        font-size:0.15rem;
        font-weight:bold;
        color: #F0E0AE;
    }
    .line_bottom span:nth-child(2){
        margin-left:0.1rem;
        margin-right:0.15rem;
        font-size:0.13rem;
        font-weight:500;
        color:black;
        display:inline-block;
        width:0.17rem;
        height:0.17rem;
        background: #bd8c5a;
        line-height:0.17rem;
        align-items: center;
    }
    .justjoin_box{
        width:100%;
        height:0.45rem;
        display:flex;
        justify-content: center;
    }
    .justjoin{
        height:0.45rem;
        width:86%;
        background: linear-gradient(90deg,#FECE9D,#D79A62);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:0.18rem;
        font-weight:bold;
        color:#fff;
        border-radius:0.4rem;
    }
    .benefit{
        width:100%;
        height:4.5rem;
        margin-top:0.2rem;
        padding:0.1rem;
        background:#fff;
    }
    .benefit .benefit_box{
        width:100%;
        height:4.2rem;
        background:url('https://m.juooo.com/static/img/plus_icon_1.35460df.png') no-repeat center;
        border-radius: 0.08rem;
        border:0.01rem solid #896039;
       
    }
    .benefit .benefit_box .benefit_title{
        width:100%;
        height:0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:0.2rem;
        font-weight:bold;
        color: #896039;
    }
    .quanyi{
        width:3.55rem;
        height:3rem;
        padding-left:0.17rem;
    }
    .quanyi .List{
        display:inline-block;
        margin:0.14rem 0.05rem;
        width:0.7rem;
        height:0.7rem;
        color:#D5A370;
    
    }
    .quanyi .List .iconText{
        font-size:0.15rem;
        text-align: center;
        color:#514843;
    }
    .icon{
        font-size:0.35rem;
        text-align: center;
        margin-bottom:0.05rem;
    }
    .nine{
        width:100%;
        height:0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nine .nine_box{
        width:2.4rem;
        height:0.4rem;
        text-align: center;
        border-radius: 0.2rem;
        font-size:0.175rem;
        line-height:0.4rem;
        font-weight:bold;
        color: #6B4218;
        background: #ffe8cf;
    }
    /*  */
    .img{
        width:100%;
        height:2rem;
    }
    .img img{
        width:3.2rem;
        margin-top:0.3rem;
        margin-left:0.28rem;
    }
    .bottom_on{
        width:100%;
        height:4.5rem;
        background:#FEFEFE;
        position: fixed;
        z-index:2;
        bottom:0.001rem;
        border-radius: 0.05rem;
    }
    .rule{
        width:100%;
        padding:0.1rem;
        height:0.7rem;
        border-radius: 0.05rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size:0.2rem;
        position: absolute;
        top:0;
    }
    .rule i{
         font-size:0.25rem;
    }
    .bg{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .rule_text{
        width:100%;
        height:90%;
        position: absolute;
        top:0.8rem;
        overflow-y:auto;
        padding:0 0.1rem;
        line-height:0.2rem;
    }
    .bottom_on-enter, .bottom_on-leave-to {
        bottom: -4.5rem;
    }
    .bottom_on-enter-active , .bottom_on-leave-active {
        transition: all 0.2s;
    }
    .bg-enter, .bg-leave-to {
        opacity: 0;
    }
    .bg-enter-active , .bg-leave-active {
        transition: all 0.2s;
    }

























    footer{
        width:100%;
        height:0.53rem;
        background:#fff;
        display:flex;
        position:fixed;
        bottom:0;
        left:0;
        
        
    }
    footer div:nth-child(1){
       font-size:.135rem;
       width:45%;
       height:0.53rem;

    }
    footer div{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    footer div:nth-child(1) p{
        color:#ff6743;
        font-weight:bold;
        display: inline;
    }
    footer div:nth-child(2){
        font-size:0.18rem;
        width:55%;
         height:0.53rem;
        font-weight:bold;
        color:#fff;
        background: linear-gradient(90deg,#FECE9D,#D79A62);
    }

</style>