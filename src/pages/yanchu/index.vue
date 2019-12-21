<template>
  <div class="yanchu">
    <Header title="演出" icon_left icon_right></Header>
    <!-- <transition>
            <div class="mengban" v-show="isShow" @click="handleHidden()"></div>
    </transition>-->
    <div class="categoryList">
      <ul class="categoryListUl">
        <li v-for="showCategory in showCategoryList" :key="showCategory.id" @click="handleToggle()">{{ showCategory.name }}</li>
      </ul>
    </div>
    <div class="showList">
      <div class="showListUl">
        <router-link tag="div" :to="show.url" class="showListLi" v-for="show in showList" :key="show.schedular_id">
          <div class="showPic">
            <a href>
              <img :src="show.pic" />
            </a>
            <div class="icon_div" v-html="show.tag_icon"></div>
          </div>
          <div class="showMsg">
            <a href>
              <p class="showTime">
                <span class="date">{{show.start_show_time}}</span>&nbsp;
                <span class="week">{{show.show_time_bottom}}</span>
              </p>
              <p class="showTitle">
                <span>{{show.name}}</span>
              </p>
              <p class="showAddress">
                  <span>{{show.city_name}}</span> |
                  <span>{{show.venue_name}}</span>
              </p>
              <div class="showIcon" v-if="show.support_desc == ''?false:true">
                <span v-for="(icon, index) in show.support_desc" :key="index">{{icon}}</span>
              </div>
              <p class="showPrice">
                <span>{{`￥` + show.min_price}}</span> 起
              </p>
            </a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getShowCategoryList, getShowList } from "../../api/yanchu.js";

export default {
  name: "juyuan",
  data() {
    return {
      showCategoryList: [],
      showList: [],
      showCategoryId: undefined,
      showId: undefined,
      getShowTimeDate: '',
      getShowTime: ''
    };
  },
  created() {
    /*  this.$observer.$on("handleToggle", (params) => {
            // console.log(params);
            this.isShow = params;
        }); */
    this.handleGetCategoryList("6.0.9", 2);
    this.handleGetShowList(0, 0, 1, "", "6.0.9", 2);
  },
  methods: {
    /*  handleHidden(){
            this.isShow = false;
            // console.log(this.isShow);
        }, */
    async handleGetCategoryList(version, referer) {
      let data = await getShowCategoryList(version, referer);
      this.showCategoryList = data.data;
      this.showCategoryList.unshift({name: '全部'});
      // console.log(this.showCategoryList);
      /* let len = this.showCategoryList.length;
      for(let i = 0; i <= len; i++){
        this.showCategoryId = this.showCategoryList[i].id;
        // console.log(this.showCategoryId);
      } */
    },
    async handleGetShowList(
      category,
      city_id,
      page,
      keywords,
      version,
      referer
    ) {
      let data = await getShowList(
        category,
        city_id,
        page,
        keywords,
        version,
        referer
      );
      this.showList = data.data.list;
      // console.log(this.showList);
      /* let len = this.showList.length;
      for(let i = 0; i <= len; i++){
        // console.log(this.showList[i].start_show_time);
        this.getShowTimeDate = this.showList[i].start_show_time.substring(0, 10);
      } */
      /* let len = this.showList.length;
      for(let i = 0; i <= len; i++){
        this.showId = this.showList[i].cate_parent_id;
        // console.log(this.showId);
      } */
    },
    handleToggle(){
      
    }
  }
};
</script>

<style scope>
.yanchu {
  width: 100%;
  height: 100%;
}
/*  .mengban{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.4);
        z-index: 999;
    }
    .mengban-enter, .mengban-leave-to{
        left: -9999rem;
    }
    .mengban-enter-active,.mengban-leave-active{
        transition: all .1s;
    } */
.categoryList {
  height: 0.5rem;
  padding: 0 0.1rem;
}
.categoryList .categoryListUl {
  display: flex;
  width: 100%;
  overflow-y: hidden;
  align-items: center;
}
.categoryList .categoryListUl li {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.15rem;
  margin-right: 0.15rem;
  white-space: nowrap;
}

.showList {
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
  overflow: scroll;
}
.showList .showListUl {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}
.showList .showListUl .showListLi {
  display: flex;
  height: 1.5rem;
  font-size: 0.15rem;
  margin-bottom: 0.3rem;
}

.showPic {
  width: 1.1rem;
  display: inline-block;
  position: relative;
}
.showPic a img {
  width: 100%;
}
.logo_i{
  position: absolute;
  top: -0.01rem;;
  left: .02rem;;
  width: .3rem;
  height: .4rem;
  background: url('../../../public/img/juooo.png') center center no-repeat;
  background-size: 100%;
  z-index: 10;
}
.showMsg {
  display: inline-block;
  flex: 1;
  margin-left: 0.1rem;
}
.showMsg>a{
    display: block;
    width: 100%;
    height: 100%;
}
.showTime>.date{
    color: black;
    font-weight: bold;
    font-size: .18rem;
}
.showTitle{
    width: 100%;
    min-height: .4rem;
    font-weight: bold;
    color: black;
    font-size: .18rem;
    margin-bottom: .05rem;
}
.showTitle>span{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.showAddress{
    font-size: .1rem;
    margin-bottom: .1rem;
}
.showIcon{
    margin-bottom: .05rem;
}
.showIcon span{
    font-size: .1rem;
    background-color: #fff1ef;
    color: #ff6743;
    padding: 0 .1rem;
    border-radius: 8px;
    margin-right: .1rem;
}
.showPrice{
    font-size: .05rem;
}
.showPrice span{
    font-size: .2rem;
    color: #ff6743;
}
</style>