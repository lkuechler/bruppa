var ciu = document.getElementById('ciu');
var ciuDisplay = document.getElementById('ciuDisplay');
ciu.addEventListener('click',
	function (i) {
		var ciu_att = document.getElementById('ciu_att').value;
		ciuDisplay.setAttribute('data-feature', ciu_att);
		canIUse.render('ciuDisplay');
	}
);