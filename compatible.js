(function(name,definition){
	var hasDefine = typeof define === 'function',
		hasExports = typeof module !== 'undefined' && module.exports;
	if(hasDefine){
		define(definition);
	}else if(hasExports){
		module.exports = definition();
	}else{
		this[name] = definition();
	}
})("$",function(){
	var $ = {
		log:function(){
			var args = arguments,
			l = args.length,
			i = 0,
			str = '';
			if(args.length==2){
				console.log(args[0]+':'+args[1]);
			}else{
				while(i<l){
					str+=args[i++].toString();
				}
				console.log(str);
			}
		}
	};
	return $;
});