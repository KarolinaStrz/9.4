var n ;
function drawTree(n) {
	
	for (i=0;i<=n;i++) {
		var star=" ";
			for(var j = 0; j < (n - i); j++) {
      			star += " ";}
     			 for(var k = 0; k <= i*2; k++) {
        			star+= "*";}
    
		console.log(star);
		}
}
drawTree(5)