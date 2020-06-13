export default{
	name:'inputplugin',
	data(){
		return {
			values:null
		}
	},
	props:{
		name:{
			type:String,
			default:''
		},
		initvalue:{
			type:String,
			default:''
		}
	},
	watch:{
		initvalue:{
			immediate:true,
			handler:function(cv,ov){
			setTimeout(()=>{
				
				this.values = cv;
			})
			
		}
		},
		values:function(cv,ov){
			this.$emit('change',cv,this.name)
		}
	},
	mounted(){
		
		  
	}
}
