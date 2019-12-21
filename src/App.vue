<template>
  <div id="app">

    <router-view/>
    <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from './common/components/tabBar/index'
export default {
  name:"App",
  components:{
    TabBar
  }

}
</script>

<style>
.page{
  position: absolute;
  top:0;
  padding:0;
  left:0;
  right: 0;
  padding-bottom:0.48rem;
}
</style>
