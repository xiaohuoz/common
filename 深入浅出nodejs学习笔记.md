#深入浅出nodejs学习笔记

##第一章 简介

###nodejs特点

 1. 异步I/O
 2. 事件及事件回调
 3. 单线程
 4. 跨平台
 
###nodejs应用场景

 1. I/O密集型
 2. 是否擅长CPU密集型业务</br>
 	nodejs在进行CPU密集计算时是十分高效的，CPU密集型应用问题主要在于：由于javascript单线程的原因，如果长时间进行运算（如大循环），将会导致cpu时间片不能释放，使后续io无法发起。但适当调节和分解大型任务为多个小任务，使运算能适时释放，不阻塞io调用发起，既可以同时享受并行io的好处，又能充分利用cpu。
 3. 与遗留系统和平共处</br>
 	旧有的系统持续提供传统网站服务，同时作为数据源供nodejs使用。
 4. 分布式

##第二章 模块机制

###CommonJS规范
####出发点
	commonJS规范提出是为了弥补javascript没有标准的缺陷，以达到具备开发大型应用的基础能力。目前已包含：模块，二进制，Buffer，字符集编码，IO流，进程环境，文件系统，套接字，单元测试，web服务器网管接口，包管理等。

	浏览器实现包含了ECMA语法和BOM和DOM，Node实现包含了了ECMA语法和CommonJS规范。
####CommonJS模块规范
	1.模块引用
		require
	2.模块定义
		exports用于导出当前模块的变量或常量，module对象代表模块本身，exports对象是module的属性。
	3.模块标识
		require的参数
###Node的模块实现
	路径分析——>文件定位——>编译执行
	分类{核心模块（node提供），文件模块（用户编写）}
####路径分析
		核心模块——>文件路径——>自定义模块（沿路径向上递归，直到找到目录下的node_modules）
####文件定位
		CommonJS模块规范允许标识符中不包括文件扩展名。Node会按js，json，node的次序补充扩展名
		Tip:node和json文件加上扩展名可以加快速度，同步配合缓存，可以大幅度缓解Node单线程阻塞式调用缺陷。
		如果没有匹配到对应文件但匹配到文件目录，首先会在当前目录下查找package.json，从中取出main属性指定文件名进行定位。如果main错误或没有main或没有package.json,将index作为默认文件名，依次补充js，json，node扩展名。
####模块编译
	1. .js文件  
		编译过程中，Node对获取的javascript文件内容进行头尾封装function(exports,require,module,__filename,__dirname){\n

		\n};
	2. .node文件 
	3. .json文件
	4. 其他 
###todo:C++扩展模块
###包与npm
	全局模式安装：实际上-g是将一个包安装为全局可用的可执行命令。它根据包描述文件的bin字段配置，将实际脚本链接到与Node执行文件相同的路径下。
###兼容AMD&CMD规范的写法
##第三章 异步IO
	