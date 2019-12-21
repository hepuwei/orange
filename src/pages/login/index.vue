<template>
        <div class="big_box3">

            <router-link class="box_one3 iconfont" :to="'/shouye'" tag="div">
                &#xe518;
            </router-link>

            <div class="box_two3">
                <img src="../../assets/logo1.png">
            </div>

            <div class="box_three3">
                <input class="three_one1" type="text" placeholder="请输入手机号/邮箱"> 
            </div>

            <div class="box_four3 iconfont">
                <input :type="showPass ? 'text' : 'password'" placeholder="请输入密码" class="four_ipt1">
                <span class="four_one1" v-show="!showPass" @click="showPass=!showPass">&#xe6ad;</span>
                <span class="four_one2" v-show="showPass" @click="showPass=!showPass">&#xe60b;</span>
            </div>

            <div class="box_five3">
                登 录
            </div>

            <div class="box_six3">
                <router-link class="six_one1" :to="'/resetPassword'" tag="span">忘记密码</router-link>
                <router-link class="six_one2" :to="'/passport'" tag="span">验证码登录/注册</router-link>
            </div>

            <div class="box_seven3">
                <span class="seven_one1">其他登陆方式</span>
            </div>

            <div class="box_eight3">
                <span class="eight_one1 iconfont">&#xe6be;</span>
                <span class="eight_one2 iconfont">&#xe701;</span>
            </div>

        </div>
</template>

<script>
export default {
    name:"big_box3",
    data(){
        return{
            showPass:false,
        }
        
    },

}
</script>

<style scoped>
    .big_box3{
        width:100%;
        height:100%;
    }
    .box_one3{
        width:100%;
        height:0.44rem;
        line-height:0.44rem;
        display:inline;
        font-size:0.25rem;
        margin-left:0.1rem;
    }
    .box_two3{
        width:100%;
        height:0.9rem;
    }
    .box_two3>img{
        width:1.6rem;
        height:0.5rem;
        margin:0.25rem 1.1rem;
    }
    .box_three3{
        width:3.11rem;
        height:0.5rem;
        border-bottom:1px solid #999;
        margin-left:0.3rem;
    }
    .box_three3 .three_one1{
        width:3.11rem;
        height:0.184rem;
        font-size:0.15rem;
        line-height:0.184rem;
        margin-top:0.16rem;
        border:none;
        outline-style: none ;
    }
    .box_four3{
        width:3.11rem;
        height:0.5rem;
        border-bottom:1px solid #999;
        margin-left:0.3rem;
        position:relative;
    }
    .box_four3 .four_ipt1{
        width:2.79rem;
        height:0.184rem;
        font-size:0.15rem;
        line-height:0.184rem;
        margin-top:0.16rem;
        border:none;
        outline-style: none ;
    }
    .box_four3 .four_one1{
        font-size:0.18rem;
        height:0.5rem;
        line-height:0.5rem;
        color:#000;
        float:right;
        background:#fff;
        border-top:1px solid #999;
        position:absolute;
        right:0;
        bottom:0;
    }
    .box_four3 .four_one2{
        font-size:0.18rem;
        height:0.5rem;
        line-height:0.5rem;
        border-top:1px solid #999;
        color:#000;
        float:right;
        background:#fff;
        position:absolute;
        right:0;
        bottom:0;
    }
    .box_five3{
        width:3.11rem;
        height:0.5rem;
        border-radius:0.25rem;
        font-size:0.18rem;
        line-height:0.5rem;
        text-align:center;
        color:#fff;
        background: linear-gradient(50deg, #ff9a34, #ff4d4a);
        margin:0.4rem 0 0 0.3rem;
        opacity: 0.4;
    }
    .box_six3{
        width:3.11rem;
        height:0.2rem;
        margin:0.2rem 0 0 0.3rem;
    }
    .box_six3 .six_one1{
        float:left;
        font-size:0.14rem;
        color:#666;
    }
    .box_six3 .six_one2{
        float:right;
        font-size:0.14rem;
        color:#666;
    }
    .box_seven3{
        width:2.35rem;
        height:0rem;
        margin-top:1.5rem;
        border-top:1px solid #888;
        margin-left:0.66rem;
        position:relative;
    }
    .box_seven3 .seven_one1{
        color:#999;
        width:1rem;
        height:0.25rem;
        background:#fff;
        font-size:0.13rem;
        line-height:0.25rem;
        text-align:center;
        position:absolute;
        top:-0.14rem;
        left:0.66rem;
    }
    .box_eight3{
        width:2.35rem;
        height:0.71rem;
        margin-left:0.66rem;
        margin-top:0.3rem;
    }
    .box_eight3 .eight_one1{
        width:1.175rem;
        height:0.71rem;
        font-size:0.35rem;
        color:#59d2ff;
        line-height:0.71rem;
        text-align:center;
        display:inline-block;
    }
    .box_eight3 .eight_one2{
        width:1.175rem;
        height:0.71rem;
        font-size:0.35rem;
        color:#ff6e6e;
        line-height:0.71rem;
        text-align:center;
        display:inline-block;
    }
</style>