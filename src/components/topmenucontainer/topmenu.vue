<template>
  <div class="topmenu">
    
     <div class="menulist">
         <div class="items" v-for="(item,index) in topmenulist" :key="index">{{item.name}}</div>
     </div>
  </div>
</template>

<script src="./topmenu.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import url('./topmenu.less');

</style>
