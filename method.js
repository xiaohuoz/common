Function.prototype.addMethod = function(name,fn){
	this.prototype[name] = fn;
	return this;
};
var Method = function(){
	this.name = "cwh";
	this.age = 23;
}
Method.addMethod('showName',function(){
	console.log(this.name);
	return this;
}).addMethod('showAge',function(){
	console.log(this.age);
	return this;
})
var method = new Method();
method.showName().showAge();