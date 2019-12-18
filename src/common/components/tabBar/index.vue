<template>
  <div id="footer">
    <ul>
      <router-link :to="item.path" tag="li" v-for="item in navs" :key="item.id">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          text: "首页",
          icon: "&#xe626;",
          path: "/shouye"
        },
        {
          id: 1,
          text: "剧院",
          icon: "&#xe8c0;",
          path: "/juyuan"
        },
        {
          id: 2,
          text: "票夹",
          icon: "&#xe617;",
          path: "/piaojia"
        },
        {
          id: 3,
          text: "我的",
          icon: "&#xe60d;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style>
#footer {
  width: 100%;
  height: 0.5rem;
  background-color: #fefefe;
  box-shadow: 0px 0px 0.06667rem #ebebeb;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 201;
  padding-bottom: 0.1rem;
}
#footer ul,
#footer ul li {
  width: 100%;
  height: 100%;
}
#footer ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#footer ul .router-link-active {
  color: #ff6743;
}

#footer ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#footer ul li i {
  font-size: 0.25rem;
}
#footer ul li span {
  font-size: 0.12rem;
}
</style>