<template>
  <div class="leftmesh">
    
     <div class="leftmenulist">
         <div class="items" @contextmenu.prevent="handleRightclick(item.name)" v-for="(item,index) in menulist" :key="index">{{item.name}}</div>
     </div>
     <div class="flymenus"></div>
  </div>
</template>

<script src="./leftmesh.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import url('./leftmesh.less');

</style>
