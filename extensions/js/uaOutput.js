var output;
function uaOutput() {
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
	if (i.tagName == 'SELECT') {
		var browserVersion = i.options[i.selectedIndex].value;
	} else {
		var browserVersion = i.value;
	};
	var ua = dbBrowser[browserName].userAgent + browserVersion;
	if (output !== undefined) {
		output += ' || ' +ua;
	} else if (output = true) {
		output = ua;
	}
}