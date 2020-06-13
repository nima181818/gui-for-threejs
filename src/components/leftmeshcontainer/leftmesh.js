let id=0;
export default{
    name:'topmenucontainer',
    data(){
        return{
          menulist:[{
              name:'相机',
              id:id++,
              sub:[{
              	name:'类型',
              	value:'透视相机',
              	list:[{
              		name:'透视相机',
              		value:''
              	},{
              		name:'正交相机'
              	}],
              	type:'selection'
              },{
              	name:'视场角',
              	value:45, //其他推荐值 60 90
              	type:'input'
              },{
              	name:'长宽比',
              	value:window.innerWidth/window.innerHeight, //其他推荐值 60 90
              	type:'input'
              },{
              	name:'近面',
              	value:0.1, //其他推荐值 60 90
              	type:'input'
              },{
              	name:'远面',
              	value:1000, //其他推荐值 60 90
              	type:'input'
              },{
              	name:'指向',
              	value:'0,0,0', //
              	type:'input'
              }],
            on:false
          },{
              name:'光源',
               id:id++,
              on:false
              
          },{
              name:'平面',
               id:id++,
               on:false
             
          },{
              name:'球体',
               id:id++,
               on:false
          },{
              name:'其他',
               id:id++,
               on:false
          }]
        }
    },
    mounted(){
   
    },
    methods:{
        handleRightclick(name){
            console.log(name)
            let rightmenu = this.gettempmesh()
            for(let j=0;j<this.menulist.length;j++){
            	if(this.menulist[j].name==name){
            		this.menulist[j].on = true;
            		if(this.menulist[j].id!=rightmenu.operationconfig.id){
            			rightmenu.operationconfig = this.menulist[j]
            		}else{
            			//do nothing
            		}
            	}else{
            		this.menulist[j].on = false;
            	}
            }
            this.$forceUpdate();
        }
    }
}