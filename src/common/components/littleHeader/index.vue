<template>
        <div class="hot_block_lab">
            <h3 class="hot_block_title">{{title}}</h3>
            <a href="" class="iconfont hot_block_icon">&#xe501;</a>
        </div>
</template>

<script>
export default {
    name:"LittelHeader",
    props:{
        title:{
            type:String,
            default:"巡回演出"
        }
    }
}
</script>

<style>
    .hot_block_lab{
        width:100%;
        padding-left:0.1rem;
        height: 0.23rem;
        line-height: 0.23rem;
        padding-right: 0.05rem;
    }
    .hot_block_lab .hot_block_title{
        font-size: 0.2rem;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        float: left;
    }
    .hot_block_lab .hot_block_icon{
        font-size: 0.27rem;
        float: right;
    }
</style>