<template>
    <div>
        <div class="header2">剧院</div>
        <div class="border2">

            <div v-for="(item,index) of juyuanList"  :style="item.count>0?'display:block':'display:none'" >
                <div class="big_box2" >
                    <router-link class="box_top2" :to="'/juyuanshowlist?venue_id='+item.vid" tag="div">
                        <div class="top_left2">
                            <img v-bind:src="item.pic"  >
                        </div>
                        <div class="top_center2" >
                            <p class="center_top2" >{{item.name}}</p>
                            <p class="center_bottom2" >{{item.count}}场在售演出</p>
                        </div>
                        <div class="iconfont" >
                            &#xe53f;
                        </div>
                    </router-link>

                    
                    <div class="box_bottom2">
                        <div class="bottom_box2" >
                            <div v-for="(items,index) of item.showList" class="bottom_left2" :style="index>8?'display:none':'display:inline-block'">
                               <div class="bottom_top2" :style="index>7?'visibility:hidden;':'visibility:visible'">
                                    {{items.show_time}}
                                    <div class="loadingppp2" :style="index>7?'visibility:visible;':'visibility:hidden'"></div>
                                   
                               </div>
                               <span></span>
                               <div class="bottom_bottom2">
                                    <img v-bind:src="items.pic" :style="index>7?'display:none':'display:block'">

                                    <router-link  class="loadingPic2" :to="'/juyuanshowlist?venue_id='+item.vid" tag="div"  :style="index>7?'display:block':'display:none'">查看更多></router-link>

                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    <div class="page">
        juyuan

    </div>
</template>

<script>
    import {juyuanApi} from '../../api/juyuan';
    export default {
        name:"juyuan",
        data(){
            return{
                juyuanList:[],
            }

        },
       created(){
            this.getjuyuanList(1,'6.0.9',2);
        },
        methods:{
            async getjuyuanList(page,version,referer){
                let data= await juyuanApi(page,version,referer);
                this.juyuanList=data.data.theatre_list;
            },
        },
    }
</script>


<style scoped>
    .header2{
        font-size:0.19rem;
        text-align:center;
        height:0.44rem;
        line-height:0.44rem;
    }
    .border2{
        position:absolute;
        top:0.44rem;
        left:0;
        right:0;
        bottom:0.5rem;
        overflow-y:auto;
        background:#efefef;
    }
    .border2>div{
        width:3.5rem;
        height:3rem;
        border:1px solid #ebebeb;
        margin-top:0.2rem;
        margin-left:0.13rem;
        background:#fff;
        border-radius:0.05rem;
    }
    .big_box2{
        width:3.1rem;
        height:2.55rem;
        margin:0.2rem 0.2rem;
    }
    .big_box2 .box_top2{
        width:3.1rem;
        height:0.5rem;
        display:block;
    }
    .box_top2 .top_left2{
        float:left;
        width:0.5rem;
        height:0.5rem;
    }
    .box_top2 .top_left2 img{
        width:0.5rem;
        height:0.5rem;
        border-radius:0.1rem;
    }
    .box_top2 .top_center2{
        height:0.5rem;
        float:left;
        width:2rem;
        margin-left:0.1rem;
    }
    .box_top2 .top_center2 .center_top2{
        font-size:0.17rem;
        font-weight:600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top:0.05rem;
    }
    .box_top2 .top_center2 .center_bottom2{
        font-size:0.12rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top:0.02rem;
        color:#666;
    }
    .box_top2 .iconfont{
        float:right;
        width:0.24rem;
        height:0.5rem;
        line-height:0.5rem;
        font-size:0.3rem;
    }
    .big_box2 .box_bottom2{
        width:3.1rem;
        height:1.93rem;
        margin-top:0.12rem;
        white-space:nowrap;
        box-sizing: content-box;
        
    }
    .big_box2 .box_bottom2 .bottom_box2{
        height:100%;
        overflow-x:auto;
        white-space:nowrap;
    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2{
        display:inline-block;
        width:1.14rem;
        height:1.93rem;
        position:relative;
    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2 .bottom_top2{
        width:100%;
        height:0.3rem;
        padding-left:0.24rem;
        color:#ccc;
        font-size:0.14rem;
        border-bottom:2px solid #eee;
    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2 .bottom_top2 .loadingppp2{
        height: 0.3rem;
        border-bottom: 2px solid #eee;
        margin-left: -0.25rem;
        margin-top: -0.192rem;
    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2  span{
        width:0.07rem;
        height:0.07rem;
        background:#bbb;
        display:block;
        border-radius:50%;
        position:absolute;
        left:45%;
        top:0.25rem;
    }

    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2 .bottom_bottom2{
        width:100%;
        height:1.46rem;
        margin-top:0.17rem;

    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2 .bottom_bottom2 img{
        width:1.07rem;
        height:1.46rem;
    }
    .big_box2 .box_bottom2 .bottom_box2 .bottom_left2 .bottom_bottom2  .loadingPic2{
        width:1.07rem;
        height:1.46rem;
        background:#efefef;
        color:#777;
        position:absolute;
        text-align:center;
        line-height:1.46rem;
        left:0;
        bottom:0;
        font-size:0.15rem;
        font-weight:500;
    }
