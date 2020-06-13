import {Publicmethods} from './publicLightmethods.js'
import {Light} from './light.js'
/*
  环境光源
 * */
class Ambientlight extends Light {
	rendMethods(){
		this.publicmethods = new Publicmethods()
		this.publicmethods.bindsFunctions('colorParse','intensityParse','parseLighthasshadow');
		
      
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