<template>
  <div id="app">
   <topmenu></topmenu>
    <div class="bottomcontainer">
      <leftmesh></leftmesh>
      <rightwrapper></rightwrapper>
      <rightmenu></rightmenu>
    </div>
  </div>
</template>

<script>
import topmenu from './components/topmenucontainer/topmenu.vue'
import leftmesh from './components/leftmeshcontainer/leftmesh.vue'
import rightwrapper from './components/rightwrapper/rightwrapper.vue'
import rightmenu from './components/rightmenus/rightmenu.vue'
export default {
  name: 'App',
  components:{
    topmenu,
    leftmesh,
    rightwrapper,
    rightmenu
  },
  mounted(){
    
  }
}
</script>

<style lang="less">
*{
  margin:0;
  padding: 0;
}
.bottomcontainer{
  display: flex;
}
</style>
