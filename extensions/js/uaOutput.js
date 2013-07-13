var output;
function uaOutput(){
	output = undefined;
	var version = document.getElementsByClassName('version');
	for (var i = 0; i<version.length; i++) {
		updateOutput(version[i]);
	}
	exOutput = ('if (' + output + '){var e = document.getElementsByName("browserUpdate")[0].content;RegExp("\\b" + e + "\\b").test(window.location.href) || (window.location.href = e)}');
	Rainbow.color(exOutput, 'javascript', function(highlighted_code) {
		document.getElementById('output').innerHTML = highlighted_code;
	});
}

function updateOutput(i) {
	var browserName = i.id;
	var browserVersion = i.options[i.selectedIndex].value;
	var ua = 'navigator.userAgent.match(/',
		uaReg = 'RegExp.$1 <= ',
		uaMo = '/Mobile/i.test(navigator.userAgent) && ',
		uaNMo = '!' + uaMo;
	if (browserName == 'js-ie') {
		var uaIE = ua + 'MSIE (\\d+\\.\\d+);/) && ' + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaIE;
		output = uaIE;
	}
	else if (browserName == 'js-ff') {
		var uaFF = ua + 'Firefox.(\\d+\\.\\d+)/) && ' + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaFF;
		else output = uaFF;
	}
	else if (browserName == 'js-ch') {
		var uaCH = ua + 'Chrome\\/(\\d+)./) && ' + uaNMo + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaCH;
		else output = uaCH;
	}
	else if (browserName == 'js-chM') {
		var uaCHM = ua + 'Chrome\\/(\\d+)./) && ' + uaMo + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaCHM;
		else output = uaCHM;
	}
	else if (browserName == 'js-sf') {
		var uaSF = ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaNMo + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaSF;
		else output = uaSF;
	}
	else if (browserName == 'js-sfM') {
		var uaSFM = ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaMo + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaSFM;
		else output = uaSFM;
	}
	else if (browserName == 'js-op') {
		var uaOP = ua + 'Opera.(\\d+\\.?\\d+)/) && ' + uaNMo + uaReg + browserVersion;
		if (output !== undefined) output += ' || ' + uaOP;
		else output = uaOP;
	}
}