import {Publicmethods} from './publicLightmethods.js'
/*
 平行光源
 * 
 * */
class DirectionalLight extends Light{
	
	
	rendMethods(){
		this.publicmethods = new Publicmethods()
		this.publicmethods.bindsFunctions('colorParse','intensityParse','parseLighthasshadow')
		
	}
	//构造函数参数获取
	ctorParamparse() {

		this.colorParse();
		this.intensityParse();

	}
	//属性解析函数
	propertyParse(){
		this.parseLighthasshadow();
	}
	
}
