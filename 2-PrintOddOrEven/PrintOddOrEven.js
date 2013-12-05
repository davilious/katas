//imprima los números impares del 0 hasta n, 
// que muestres cuantos pares e impares hay.
function PrintOddOrEven( number ){
	this.number = number;
	this.arr = {
		'odd' : [],
		'even': []
	}
}

PrintOddOrEven.prototype.run = function(){
	for(var i = 0; i < this.number; i ++){
		// impar
		if( i % 2 != 0){
			this.arr['odd'].push(i);	
		}else{
			this.arr['even'].push(i);
		}
		
	}
	return this.arr;
}
PrintOddOrEven.prototype.count = function( which ){
	which = which || 'odd';
	return 'The '+which+' numbers are ' + this.arr['odd'].length;
}

