<template>
    <div  class="passport">
        <router-link class="passport_one3 iconfont" :to="'/shouye'" tag="div">
            &#xe518;
        </router-link>

        <div class="passport_two3">
            <img src="../../assets/logo1.png">
        </div>
        <div class="passport_three">
           <span class="passportthree_span1">+86</span> 
           <input type="text" placeholder="请输入手机号" class="passportipt_three1">
        </div>
        <div class="passport_four">
            <input type="text" placeholder="请输入图形验证码" class="passportipt_four1">
            <span class="passportfour_span1"></span>
       </div>
       <div class="passportbox_four3">
        未注册的手机号将自动创建会员账号
       </div>
       <div class="passportbox_five3">
            获取短信验证码
        </div>

        <div class="passportbox_six3">
            <router-link class="passportsix_one1" :to="'/register'" tag="span">邮箱注册</router-link>
            <router-link class="passportsix_one2" :to="'/login'" tag="span">密码登录</router-link>
        </div>

        <div class="passportbox_seven3">
            <span class="passportseven_one1">其他登陆方式</span>
        </div>

        <div class="passportbox_eight3">
            <span class="passporteight_one1 iconfont">&#xe6be;</span>
            <span class="passporteight_one2 iconfont">&#xe701;</span>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .passport{
        width:100%;
        height:100%;
    }
     .passport_one3{
        width:100%;
        height:0.44rem;
        line-height:0.44rem;
        display:inline;
        font-size:0.25rem;
        margin-left:0.1rem;
    }
    .passport_two3{
        width:100%;
        height:0.9rem;
    }
    .passport_two3>img{
        width:1.6rem;
        height:0.5rem;
        margin:0.25rem 1.1rem;
    }
    .passport_three{
        width:3.11rem;
        height:0.52rem;
        border-bottom:1px solid #eee;
        margin-left:0.3rem;
        line-height:0.52rem;
    }
    .passport_three .passportthree_span1{
        color:#ff6743;
        font-size:0.15rem;
        margin-right:0.05rem
    }
    .passport_three .passportipt_three1{
        width:2.76rem;
        height:0.25rem;
        font-size:0.15rem;
        border:none;
        outline-style: none ;
    }

    .passport_four{
        width:3.11rem;
        height:0.52rem;
        border-bottom:1px solid #eee;
        margin-top:0.12rem;
        margin-left:0.3rem;
        line-height:0.52rem;
        position:relative;
    }
    .passport_four .passportipt_four1{
        width:100%;
        height:0.25rem;
        font-size:0.15rem;
        border:none;
        outline-style: none ;
    }
    .passport_four .passportfour_span1{
        width:0.7rem;
        height:0.3rem;
        position:absolute;
        right:0rem;
        top:0.1rem;
        background-image: url("https://api.juooo.com/passport/captcha/index?gid=27641720-22d9-11ea-9db7-f97734297ceb");
        display: block;
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .passportbox_four3{
        width:100%;
        height:0.31rem;
        margin-left:0.3rem;
        color:#aaa;
        margin-top:0.18rem;
    }

    .passportbox_five3{
        width:3.11rem;
        height:0.5rem;
        border-radius:0.25rem;
        font-size:0.18rem;
        line-height:0.5rem;
        text-align:center;
        color:#fff;
        background: linear-gradient(50deg, #ff9a34, #ff4d4a);
        margin:0.3rem 0 0 0.3rem;
        opacity: 0.4;
    }
    .passportbox_six3{
        width:3.11rem;
        height:0.2rem;
        margin:0.2rem 0 0 0.3rem;
    }
    .passportbox_six3 .passportsix_one1{
        float:left;
        font-size:0.14rem;
        color:#666;
    }
    .passportbox_six3 .passportsix_one2{
        float:right;
        font-size:0.14rem;
        color:#666;
    }
    .passportbox_seven3{
        width:2.35rem;
        height:0rem;
        margin-top:1.22rem;
        border-top:1px solid #888;
        margin-left:0.66rem;
        position:relative;
    }
    .passportbox_seven3 .passportseven_one1{
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
    .passportbox_eight3{
        width:2.35rem;
        height:0.51rem;
        margin-left:0.66rem;
        margin-top:0.3rem;
    }
    .passportbox_eight3 .passporteight_one1{
        width:1.175rem;
        height:0.51rem;
        font-size:0.35rem;
        color:#59d2ff;
        line-height:0.51rem;
        text-align:center;
        display:inline-block;
    }
    .passportbox_eight3 .passporteight_one2{
        width:1.175rem;
        height:0.51rem;
        font-size:0.35rem;
        color:#ff6e6e;
        line-height:0.51rem;
        text-align:center;
        display:inline-block;
    }
</style>