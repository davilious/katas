
var sumMultipleof3and5 = (function(){
	var numA = 3, 
	    numB = 5, 
	    limit = 1000;
    
	this.sumMultiples = function(){
		var sum = 0;
		for(var i = 0; i < limit; i++){
			if( (i % numA == 0) || (i % numB == 0)){
				sum = sum + i;
			}
		}
		return sum;
	}


	return {
		init : sumMultiples
	}

})();