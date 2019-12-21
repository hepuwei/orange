<template>
    <div class="resetpassword">
       <router-link class="password_one  iconfont" :to="'/shouye'" tag="div">&#xe518;</router-link>
       <div class="password_two">找回密码</div>
       <div class="password_three">
            <input type="text" placeholder="请输入手机号/邮箱" class="ipt_three1">
       </div>
       <div class="password_four">
            <input type="text" placeholder="请输入图形验证码" class="ipt_four1">
            <span class="four_span1"></span>
       </div>
       <div class="password_five">下一步</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .resetpassword{
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
    }
    .password_one{
        width:100%;
        height:0.5rem;
        display:inline;
        font-size:0.25rem;
        line-height:0.5rem;
        margin-left:0.1rem;
    }
    .password_two{
        width:100%;
        height:0.328rem;
        margin-top:0.5rem;
        margin-left:0.3rem;
        font-size:0.25rem;
        font-weight:600;
        line-height:0.328rem;
    }
    .password_three{
        width:3.11rem;
        height:0.52rem;
        border-bottom:1px solid #eee;
        margin-top:0.55rem;
        margin-left:0.3rem;
        line-height:0.52rem;
    }
    .password_three .ipt_three1{
        width:100%;
        height:0.25rem;
        font-size:0.15rem;
        border:none;
        outline-style: none ;
    }
    .password_four{
        width:3.11rem;
        height:0.52rem;
        border-bottom:1px solid #eee;
        margin-top:0.12rem;
        margin-left:0.3rem;
        line-height:0.52rem;
        position:relative;
    }
    .password_four .ipt_four1{
        width:100%;
        height:0.25rem;
        font-size:0.15rem;
        border:none;
        outline-style: none ;
    }
    .password_four .four_span1{
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
    .password_five{
        width:3.11rem;
        height:0.49rem;
        margin-top:0.5rem;
        text-align:center;
        margin-left:0.3rem;
        line-height:0.49rem;
        color:#fff;
        border-radius:0.245rem;
        font-size:0.15rem;
        background: linear-gradient(50deg, #ff9a34, #ff4d4a);
        opacity:0.4;
    }
</style>