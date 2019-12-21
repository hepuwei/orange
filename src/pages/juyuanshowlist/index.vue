<template>
    <div class="showlist">
        <div class="box_top1">
            <div class="top_box1">
                <span class="span_one iconfont">&#xe623;</span>
                     <router-link  class="ipt_one" type="text" placeholder="搜索热门演出" :to="'/search'" tag="input"></router-link>
                
                <router-link class="span_two iconfont" :to="'/search'" tag="span">&#xe660;</router-link>
            </div>
            <router-link class="top_box2" :to="'/juyuan'" tag="div">取消</router-link>
        </div>
        <div class="box_bottom1">
            <div class="box_big1">
                <router-link class="bottom_box1" v-for="showlist of  juyuanshowlist" :to="'./juyuan_detail?schedular_id='+showlist.schedular_id" tag="div">
                 
                 
                    <div class="bottom_box_left1">
                        <img v-bind:src="showlist.pic">
                    </div>


                    <div class="bottom_box_right1">
                        <div class="right_one1">
                            <span class="one_one1">{{(showlist.start_show_time).replace(/..\d.\d+\s+\d+\W\d+/g,'')}}/{{showlist.show_time_top}}</span>
                            <span class="one_two1">{{showlist.show_time_bottom}}</span>
                        </div>
                        <div class="right_two1">{{showlist.name}}</div>
                        <div class="right_three1">{{showlist.city_name}} | {{showlist.venue_name}}</div>
                        <div class="right_four1" >
                            <span class="four_one1" v-for="support of  showlist.support_desc">{{support}}</span>
                        </div>
                        <div class="right_five1">￥{{showlist.min_price}}<span class="five_one1">起</span></div>
                    </div>
                
                
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {showApi} from '../../api/juyuan';
export default {
    name:"showlist",
    data(){
        return{
            venue:'',
            juyuanshowlist:[]
        }
    },
    created(){
        
         let venue_id=this.$route.query;
        this.venue=venue_id;
        this.getjuyuanshowList('',this.venue.venue_id,1,1,'6.0.9',2);  
    },
    methods:{
        async getjuyuanshowList(keywords,venue_id,page,sort_type,version,referer){
            let data= await showApi(keywords,venue_id,page,sort_type,version,referer);
            this.juyuanshowlist=data.data.list;
        },
    },
}

</script>

<style scoped>
    .box_top1{
        width:100%;
        height:0.5rem;
        display:flex;
        flex-direction:row;
        align-items :center;
    }
    .top_box1{
        width:3.02rem;
        height:0.3rem;
        border:1px solid #dedede;
        border-radius:0.15rem;
        background:#f5f5f5;
        margin-left:0.1rem;
        display:flex;
        flex-direction:row;
        justify-content :center;
        align-items :center;
        position:relative;
    }
    .top_box1 .ipt_one{
        
        width:2.35rem;
        height:0.2rem;
        border:none;
        background:none;
        display:inline-block;
        outline-style: none ;
    }
    .top_box1 .span_one{
        width:0.02rem;
        height:0.02rem;
        position:absolute;
        left:0.13rem;
        top:0.065rem;
        color:#bbb;
    }
    .top_box1 .span_two{
        width:0.02rem;
        height:0.02rem;
        position:absolute;
        right:0.25rem;
        top:0.06rem;
        color:#bbb;
    }
    .top_box2{
        font-size:0.15rem;
        margin-left:0.1rem;
        color:#666;
    }
    .box_bottom1{
        position:absolute;
        top:0.5rem;
        left:0;
        right:0;
        bottom:0;
        overflow:auto;
    }
    .box_big1{
        width:3.45rem;
        margin-top:0.18rem;
        margin-left:0.14rem;
    }
    .bottom_box1{
        width:3.45rem;
        height:1.44rem;
        margin-bottom:0.3rem;
    }
    .bottom_box_left1{
        width:1.05rem;
        height:1.44rem;
        float:left;
    }
    .bottom_box_left1 img{
        width:1.05rem;
        height:1.44rem;
        border-radius:0.06rem;
    }
    .bottom_box_right1{
        width:2.25rem;
        height:1.44rem;
        float:left;
        margin-left:0.15rem;
    }
    .right_one1{
        width:2.1rem;
        height:0.16rem;
        margin-top:0.05rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .right_one1 .one_one1{
        font-size:0.16rem;
        height:0.16rem;
        line-height:0.16rem;
        font-weight:600;
    }
    .right_one1 .one_two1{
        font-size:0.12rem;
        height:0.16rem;
        margin-left:0.03rem;
    }
    .right_two1{
        width:2.1rem;
        height:0.56rem;
        margin-top:0.06rem;
        font-size:0.16rem;
        font-weight:600;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        line-height:0.26rem;
    }
    .right_three1{
        width:2.1rem;
        height:0.14rem;
        font-size:0.12rem;
        color:#666;
        line-height:0.14rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .right_four1{
        width:2.1rem;
        height:0.2rem;
        margin-top:0.06rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .right_four1 .four_one1{
        border-radius:0.09rem;
        margin-right:0.08rem;
        color: #ff6743;
        padding:0.01rem 0.06rem;
        background-color: #fff1ef;
    }
    .right_five1{
        width:100%;
        height:0.18rem;
        font-size:0.14rem;
        color:#ff6743;
    }
    .right_five1 .five_one1{
        padding-left:0.03rem;
        color:#999;

    }
</style>