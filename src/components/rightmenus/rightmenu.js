import selectionplugin from  './plugins/selectionplugin/selectionplugin.vue'
import inputplugin from  './plugins/inputplugin/inputplugin.vue'
export default{
	name:'rightmenu',
	data(){
		return {
			operationconfig:{}
		}
	},
	components:{
		selectionplugin,
		inputplugin
	},
	mounted(){
		setTimeout(()=>{
			this.settempmesh(this);
		})
		  
	},
	methods:{
		modelchanges(v){
			for(let k=0;k<this.operationconfig.sub.length;k++){
				if(this.operationconfig.sub[k].name==v[1]){
					this.operationconfig.sub[k].value= v[0]
				}
			}
			console.log(this.operationconfig)
		},
		handleMeshtype(){
			if(this.operationconfig.name=='相机'){
				
			}
			if(this.operationconfig.name=='光源'){
				
			}
			if(this.operationconfig.name=='平面'){
				
			}
			if(this.operationconfig.name=='球体'){
				
			}
			if(this.operationconfig.name=='其他'){
				
			}
		}
	}
}
