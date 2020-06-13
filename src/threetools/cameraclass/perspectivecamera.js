/*
 * 透视相机 最常用的相机
 * 
 */
import { Publiccamera } from './publicLightmethods.js'
import {Camera} from './camera.js'
class PerspectiveCamera{
	
	
	//'租赁函数'
	rendMethods(){
		this.publiccamera = new Publiccamera();
		//构造函数相关
		this.publiccamera.bindsFunctions('parsecameraFov','parsecameraAspect','parsecameraNear','parsecameraFar');
		
		//属性值相关
		this.publiccamera.bindsFunctions('parsecameraZoom','parsecameraFocus')
	}
	//构造函数参数获取
	ctorParamparse(){
		/*
		  fov
		 *aspect
		 *near
		 *far
		 * */
		this.parsecameraFov();
		this.parsecameraAspect();
		this.parsecameraNear();
		this.parsecameraFar();
	}
	//属性解析函数
	propertyParse() {
		this.parsecameraZoom();
		this.parsecameraFocus();
	}
}
