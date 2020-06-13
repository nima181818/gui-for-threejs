/*
   光源的公共方法
 * */
export class Publicmethods {
	
    initThis(that){
    	this.that = null;
    }
    //绑定各种光源的函数
    bindsFunctions(){
    	for(let j=0;j<arguments.length;j++){
    		this.that[arguments[j]] = this[arguments[j]]
    	}
    }
    //颜色解析
	colorParse() {
		let colormatcher = /\s{0,}set\s{0,}color\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(colormatcher)) {
				let color = this.body[j].replace(colormatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(color)
				this.ast.property.color = color //TODO 此处要处理为threejs的color对象
			}
		}
	}
	//光密度解析
	intensityParse() {
		let intensitymatcher = /\s{0,}set\s{0,}intensity\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(intensitymatcher)) {
				let intensity = this.body[j].replace(intensitymatcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(intensity)
				this.ast.property.intensity = intensity
			}
		}

	}
	//光源阴影解析
	parseLighthasshadow() {
		let shadowmatcher = /\s{0,}set\s{0,}shadow\s{1,}/g
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(shadowmatcher)) {
				let intensity = this.body[j].replace(shadowmatcher, '').replace(/\s{0,}/g, '');
				this.ast.property.castShadow = hasShadow == 'true';
			}
		}

	}
	//光线散射角度解析
	parseLightangle(){
		let anglematcher = /\s{0,}set\s{0,}angle\s{1,}/g;
		for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(anglematcher)) {
				let angle = this.body[j].replace(anglematcher, '').replace(/\s{0,}/g, '');
				this.ast.param.push(angle)
				this.ast.property.angle = angle
			}
		}
	}
	//光源衰减解析？
   parseLightdecay(){
   	
   }
   //光源位置解析
   parseLightposition(){
   	  let positionmatcher = /\s{0,}set\s{0,}p\s{0,}/g
   	  for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(positionmatcher)) {
				let position = this.body[j].replace(positionmatcher, '').replace(/\s{0,}/g, '');
				this.ast.property.position = position;
			}
		}
   }
   //光源距离解析
   parseLightdistance(){
   	let distancematcher = /\s{0,}set\s{0,}distance\s{0,}/g
   	 for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(distancematcher)) {
				let distance = this.body[j].replace(distancematcher, '').replace(/\s{0,}/g, '');
				if(this.ast.typename=='PointLight'||this.ast.typename=='SpotLight'){
					this.ast.param.push(distance)
				}
					
					this.ast.property.distance = distance;
				
				
			}
		}
   }
   //光源目标解析
   parseLighttarget(){
   	let targemather = /\s{0,}set\s{0,}target\s{0,}/g
   	for(let j = 0; j < this.body.length; j++) {
			if(this.body[j].match(targemather)) {
				let target = this.body[j].replace(targemather, '').replace(/\s{0,}/g, '');
				this.ast.property.target = target; //target可能要处理一下 new THREE.Object3D();
			}
		}
   }
}
