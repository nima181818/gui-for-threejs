export class Light {
	constructor(ast, body,typename) {
		this.ast = ast;
		this.body = body;
		this.ast.typename = typename
	
			this.astInit();
			this.publicmethods = new Publicmethods();
			this.publicmethods.initThis(this);
			this.rendMethods();
			this.ctorParamparse();
			this.propertyParse();
			this._id = idgenerator.generate();
			this.generate3Dobjects();
	

	}
	astInit() {

		this.ast.param = [];
		this.ast.property = {}
	}
	//构造参数，属性的值均已经成功解析，先需要新建起对应的3D对象
	generate3Dobjects(){
		let ambientlight = new THREE[this.ast.typename](...this.ast.param);
		
		for(let j in this.ast.property){
			ambientlight[j] = this.ast.property[j]
		}
		    
	}
}