function curry(fn){
	return function(){
		if(fn.length > arguments.length){
			var slice = Array.prototype.slice;
			var args = slice.apply(arguments);
			return function(){
				return fn.apply(null, args.concat(slice.apply(arguments)));
			};
		}
		return fn.apply(null, arguments);
	};
}

var get = curry(function(prop, obj){
	return obj[prop];
});

var compose = curry(function(f, g, x){
	return f(g(x));
});

var fork = curry(function(lastly, f, g, x){
	return lastly(f(x), g(x));
});

module.exports = {
	curry: curry,
	get: get,
	compose: compose,
	fork: fork
};