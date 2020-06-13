import { Publicmethods } from './publicLightmethods.js'
/*
 点光源
 * */
class PointLight extends Light{

	
	
	rendMethods() {
		this.publicmethods = new Publicmethods()
		this.publicmethods.bindsFunctions('colorParse', 'intensityParse', 'parseLighthasshadow', 'parseLightdistance')

	}
	//构造函数参数获取
	ctorParamparse() {
		/*color - (可选参数)) 十六进制光照颜色。 缺省值 0xffffff (白色)。
          intensity - (可选参数) 光照强度。 缺省值 1。 
          distance - 这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失(距离无穷大)。缺省值 0.
          decay - 沿着光照距离的衰退量。缺省值 1。 在 physically correct 模式中，decay = 2。
          */
		this.colorParse();
		this.intensityParse();
		this.parseLightdistance();

	}
	//属性解析函数
	propertyParse() {
		this.parseLightdistance();
	}
		

}