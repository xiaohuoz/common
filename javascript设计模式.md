#第一章
##tip1：用对象收编函数
	`var User = {
		showName:function(){},
		showAge:function(){}
	}`
##tip2: 将对象收编函数作为方法的返回值返回新对象以实现互不影响
	`var User = funcion(){
		return {
			showName:function(){},
			showAge:function(){}
		}
	}`
	`var user = User();
	user.showName();`
##tip3：用类实现收编函数
	`var User = function(){
		this.showName=function(){};
		this.showAge=function(){};
	}`
	`var user = new User();
	a.showName();`
##tip4：使用prototype减少消耗
	`var User = function(){};
	User.prototype = {
		showName:function(){},
		showAge:function(){}
	}`
##tip5:return this;链式调用
	`var User = function(){};
	User.prototype = {
		showName:function(){return this;},
		showAge:function(){return this;}
	}`
	`var user = new User();
	user.showName.showAge();`
##tip6:在Function中添加addMethod方法
	`Function.prototype.addMethod = function(name,fn){
		this.prototype[name] = fn;
		return this;
	};`
	`var Method = function(){}
	Method.addMethod('showName',function(){
		return this;
	}).addMethod('showAge',function(){
		return this;
	});`
	`var method = new Method();
	method.showName().showAge();`
#第二章
##tip：闭包实现静态私有变量和私有方法
	
##tip2：安全创建对象
	`非安全
	var Book = function(title,time,type){
		this.title = title;
		this.name = name;
		this.type = type;
	};
	var book = Book('javascript','2014','js');
	console.log(book)//undefined`
	`安全
	var Book = function(title,time,type){
		if(this instanceof Book)
		{
			this.title = title;
			this.name = name;
			this.type = type;
		}else{
			return new Book(title,time,type);
		}
	};
	var book = Book('javascript','2014','js');
	console.log(book)//undefined`
