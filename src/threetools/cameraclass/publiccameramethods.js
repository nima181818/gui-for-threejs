export class Publiccamera{
	
	initThis(that){
    	this.that = null;
    }
	  //绑定相机的各种解析函数
    bindsFunctions(){
    	for(let j=0;j<arguments.length;j++){
    		this.that[arguments[j]] = this[arguments[j]]
    	}
    }
	//解析相机的视场角
	parsecameraFov(){
		let fovmatcher = /\s{0,}set\s{0,}fov\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(fovmatcher)) {
				let fov = this.body[j].replace(fovmatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(fov)
				this.ast.property.fov = fov
			}
		}
	}
	//解析长宽比
	parsecameraAspect(){
		let aspectmatcher = /\s{0,}set\s{0,}aspect\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(aspectmatcher)) {
				let aspect = this.body[j].replace(aspectmatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(aspect)
				this.ast.property.aspect = aspect
			}
		}
	}
	//解析近端
	parsecameraNear(){
		let nearmatcher = /\s{0,}set\s{0,}aspect\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(nearmatcher)) {
				let near = this.body[j].replace(nearmatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(near)
				this.ast.property.near = near
			}
		}
	}
	//解析远端
	parsecameraFar(){
		let farmatcher = /\s{0,}set\s{0,}aspect\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(farmatcher)) {
				let far = this.body[j].replace(farmatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(far)
				this.ast.property.far = far
			}
		}
	}
	//解析缩放比例
	parsecameraZoom(){
		let zoommatcher = /\s{0,}set\s{0,}zoom\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(zoommatcher)) {
				let zoom = this.body[j].replace(zoommatcher, '').replace(/\s{0,}/g, '');
				
				this.ast.property.zoom = zoom
			}
		}
	}
	//用于立体视觉和景深效果的物体的距离  focus 
	parsecameraFocus(){
		let focusmatcher = /\s{0,}set\s{0,}zoom\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(focusmatcher)) {
				let focus = this.body[j].replace(focusmatcher, '').replace(/\s{0,}/g, '');
				this.ast.property.focus = focus
			}
		}
	}
}
