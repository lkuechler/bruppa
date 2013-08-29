var ua = 'navigator.userAgent.match(/',
	uaReg = 'RegExp.$1 <= ', // is the version smaller or equal
	uaMo = '/Mobile/i.test(navigator.userAgent) && ', // testing for...
	uaNMo = '!' + uaMo; // ...and against mobile
	// good for testing regex's: http://leaverou.github.io/regexplained/
var dbBrowser = {
	ie: {
		name: 'Internet Explorer',
		versions: [5, 6, 7, 8, 9, 10],
		userAgent: ua + 'MSIE (\\d+\\.\\d+);/) && ' + uaReg
	},
	ch: {
		name: 'Chrome',
		versions: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
		userAgent: ua + 'Chrome\\/(\\d+)./) && ' + uaNMo + uaReg
	},
	chM: {
		name: 'Chrome Mobile',
		versions: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
		userAgent: ua + 'Chrome\\/(\\d+)./) && ' + uaMo + uaReg
	},
	ff: {
		name: 'Firefox',
		versions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
		userAgent: ua + 'Firefox.(\\d+\\.\\d+)/) && ' + uaReg
	},
	sf: {
		name: 'Safari',
		versions: [3, 4, 5, 6, 7, 8, 9, 10],
		userAgent: ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaNMo + uaReg
	},
	sfM: {
		name: 'Safari Mobile',
		versions: [5, 6, 7, 8, 9, 10],
		userAgent: ua + 'Version.(\\d+.\\d+).{0,10}Safari/) && ' + uaMo + uaReg
	},
	op: {
		name: 'Opera',
		versions: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		userAgent: ua + 'Opera.(\\d+\\.?\\d+)/) && ' + uaNMo + uaReg
	}
}