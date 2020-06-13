


import {Publicmethods} from './publicLightmethods.js'
/*
  聚光灯
 * */
class SpotLight extends Light {

	
	
	rendMethods(){
		this.publicmethods = new Publicmethods()
		//构造函数的_包含部分属性
		this.publicmethods.bindsFunctions('colorParse','intensityParse','parseLightdistance','parseLightangle')
		
		//属性的
		this.publicmethods.bindsFunctions('parseLightposition')
	}
	//构造函数参数获取
	ctorParamparse() {
         /*
          * color 
            intensity
            distance 
            angle - 光线散射角度，最大为Math.PI/2。
            penumbra - 聚光锥的半影衰减百分比。在0和1之间的值。默认为0。 //TODO
             decay - 沿着光照距离的衰减量。//TODO
          */
		this.colorParse();
		this.intensityParse();
		this.parseLightdistance();
		this.parseLightangle();

	}
	//属性解析函数
	propertyParse(){
		this.parseLightposition();
	}
		//构造参数，属性的值均已经成功解析，先需要新建起对应的3D对象
	generate3Dobjects(){
		let ambientlight = new THREE[this.ast.typename](...this.ast.param);
		    
	}
	
}