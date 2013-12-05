/* Dados dos números enteros positivos 
   a <= b, generar la lista de los dobles 
   de todos los impares x tales que a <= x <= b. 
 * ====================== */  
function GenerateDoubles(a, b){
	this.a = a,
	this.b = b,
	this.arr = [];
}
GenerateDoubles.prototype = {
	isPositiveAndGreater : function(){
		return ( this.a < this.b ) && ( this.a > 0 && this.b > 0 );
	},
	takeOdds : function(){
		for( var i = this.a; i <= this.b; i ++ ){
			if( i % 2 !== 0 ){
				this.arr.push(i);
			}
		}
		return this.arr.map( function(num){ return num * 2 } );
	},
	init : function(){
	   	if( this.isPositiveAndGreater() ){
			return this.takeOdds();
		}else{
			throw "Error, los numeros han de ser positivos y el primer numero mayor que el segundo";
		}	
	}
}

