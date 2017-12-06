var n ;
function drawTree(n) {
	
	for (i=0;i<=n;i++) {
		var star;
			for(j=0; j<=i; j++) {
				star = star += '*';
			}
		console.log(star);
		}
}
drawTree(5)