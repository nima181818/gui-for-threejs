<template>
  <div class="rightmenu">
    <div class="menucontainers">
    	
    	<div class="items" v-for="(item,index) in operationconfig.sub">
           <span>{{item.name}}</span>
           &nbsp;
           <selectionplugin v-if="item.type=='selection'"></selectionplugin>
            <inputplugin v-if="item.type=='input'" :initvalue="item.value.toString()" :name="item.name" @change="modelchanges(arguments)"></inputplugin>
    	</div>
    </div>
   
  </div>
</template>

<script src="./rightmenu.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import url('./rightmenu.less');

</style>
