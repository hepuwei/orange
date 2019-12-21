<template>
  <div class="page">
    <div class="search">
      <div class="search_ipt">
        <span class="iconfont">&#xe623;</span>
        <form action="javascript:void 0">
          <input type="text" class="sousuo" placeholder="搜索热门演出" ref="sou"  @keyup.13="tapToSearch"/>
        </form>
        <span class="iconfont" @click="handleClear()">&#xe660;</span>
      </div>
      <span class="cancel" @click="handleBack()">取消</span>
    </div>
    <div class="history" v-if="historyList.length">
      <h3 class="title">
        <span class="left">历史搜索</span>
      </h3>
      <ul class="list">
          <li v-for="(item,index) in historyList" :key="index">{{item}}</li>
        </ul>
    </div>
    <section class="default">
      <h3 class="title">
        <span class="left">热门搜索</span>
      </h3>
      <ul class="list">
        <li v-for="(item,index) in searchHot" :key="index">{{item}}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import { searchHot } from "../../api/search.js";
export default {
  name: "Search",
  data() {
    return {
      searchHot: [],
      historyList: []
    };
  },
  created() {
    this.handleGetSearchHot("6.0.9", 2);
  },
  methods: {
    async handleGetSearchHot(version, referer) {
      let data = await searchHot(version, referer);
      this.searchHot = data.data;
    },
    handleClear() {
      this.$refs.sou.value = "";
    },
    handleBack() {
      this.$router.back();
    },
    tapToSearch(){
        this.historyList.push(this.$refs.sou.value);
    }
  }
};
</script>

<style>
.search {
  height: 0.5rem;
  line-height: 0.5rem;
}
.search_ipt {
  width: 80%;
  height: 0.3rem;
  background-color: #f5f5f5;
  border-radius: 0.2rem;
  box-sizing: border-box;
  padding: 0 0 0 0.15rem;
  border: solid 1px #ebebeb;
  display: flex;
  align-items: center;
  margin: 0.1rem 0 0 0.15rem;
  float: left;
}
.search_ipt span {
  color: #ccc;
}
.search_ipt .sousuo {
  height: 0.2rem;
  line-height: 0.2rem;
  width: 2rem;
  font-size: 0.12rem;
  letter-spacing: 0px;
  color: #232323;
  margin-left: 0.1rem;
  border: none;
  outline: none;
  background-color: #f5f5f5;
}
.search_ipt span:nth-child(3) {
  margin-left: 0.2rem;
}
.search .cancel {
  margin-left: 0.15rem;
  font-size: 0.14rem;
  color: #aaa;
}
.default,.history {
  padding: 0.2rem 0.2rem 0;
}
.default .title,.history .title {
  display: block;
  font-weight: bold;
  color: #aaa;
  width: 100%;
  height: 0.5rem;
}
.default .title .left ,.history .title .left{
  font-weight: normal;
  color: #666;
  float: left;
  display: block;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.14rem;
}
.default .list ,.history .list{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.1rem;
}
.default .list li ,.history .list li{
  font-family: "PingFang-SC-Medium";
  padding: 0 0.2rem;
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.14rem;
  color: #232323;
  background-color: #f5f5f5;
  border-radius: 0.08rem;
  margin-right: 0.15rem;
  margin-bottom: 0.15rem;
}
</style>