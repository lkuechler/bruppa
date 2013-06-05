function uaOutput(){
	$('.version').change(updateOutput);
	function updateOutput() {
		var ie = $('.version.js-ie').val(),
			ch = $('.version.js-ch').val(),
			chM = $('.version.js-chM').val(),
			ff = $('.version.js-ff').val(),
			sf = $('.version.js-sf').val(),
			sfM = $('.version.js-sfM').val(),
			op = $('.version.js-op').val(),

			ua = 'navigator.userAgent.match(/',
			uaReg = 'RegExp.$1 <= ',
			uaMo = '/Mobile/i.test(navigator.userAgent) && ',
			uaNMo = '!' + uaMo,

			uaIE = ua + 'MSIE (\\d+\\.\\d+);/) && ' + uaReg + ie, // IE11 will not have "MSIE" in its UA
			uaFF = ua + 'Firefox.(\\d+\\.\\d+)/) && ' + uaReg + ff,
			uaCH = ua + 'Chrome\\/(\\d+)./) && ' + uaNMo + uaReg + ch,
			uaCHM = ua + 'Chrome\\/(\\d+)./) && ' + uaMo + uaReg + chM,
			uaSF = ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaNMo + uaReg  + sf,
			uaSFM = ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaMo + uaReg + sfM,
			uaOP = ua + 'Opera.(\\d+\\.?\\d+)/) && ' + uaNMo + uaReg + op,

			output = undefined;
		if (ie !== undefined) {
			output = uaIE;
		}
		if (ff !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaFF;
			else output = uaFF;
		}
		if (ch !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaCH;
			else output = uaCH;
		}
		if (chM !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaCHM;
			else output = uaCHM;
		}
		if (sf !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaSF;
			else output = uaSF;
		}
		if (sfM !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaSFM;
			else output = uaSFM;
		}
		if (op !== undefined) {
			if (output !== undefined) output = output + ' || ' + uaOP;
			else output = uaOP;
		}
		$('.output').val('if (' + output + '){var e = document.getElementsByName("browserUpdate")[0].content;RegExp("\\b" + e + "\\b").test(window.location.href) || (window.location.href = e)}');
	}
	updateOutput();
}