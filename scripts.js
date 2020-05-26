$( ()=> {
	$('#calc').click(calc);
	$('input').change(calc);
	$('input').val(0);
	$('#x1').select();
});

function calc() {
	let vals = {};
	for(let key of 'x1 y1 x2 y2 x3 y3'.split(' ') ) {
		vals[key] = parseFloat($('#'+key).val() );
	}
	({x1, y1, x2, y2, x3, y3} = vals);

	// https://stackoverflow.com/a/717833/4907950
	let denom = (x1 - x2) * (x1 - x3) * (x2 - x3);
	let A     = (x3 * (y2 - y1) + x2 * (y1 - y3) + x1 * (y3 - y2) ) / denom;
	let B     = (x3*x3 * (y1 - y2) + x2*x2 * (y3 - y1) + x1*x1 * (y2 - y3) ) / denom;
	let C     = (x2 * x3 * (x2 - x3) * y1 + x3 * x1 * (x3 - x1) * y2 + x1 * x2 * (x1 - x2) * y3) / denom;

	let xv = -B / (2*A);
	let yv = C - B*B / (4*A);

	$('#out').html(`y = ${A}x<sup>2</sup> + ${B}x + ${C}<br>Vertex: (${xv},${yv})`);
}