document.getElementById('addFilter').addEventListener('click', 
	function () {
		var optionList = document.getElementById('browser');
		var selected = optionList.options[optionList.selectedIndex].value;
			if (selected == 'ie'){
				selectName = 'Internet Explorer';
				versions = '5/6/7/8/9/10';
			}
			else if (selected == 'ch'){
				selectName = 'Chrome';
				versions = '22/23/24/25/26/27';
			}
			else if (selected == 'chM'){
				selectName = 'Chrome Mobile';
				versions = '5/6/7/8/9/10';
			}
			else if (selected == 'ff'){
				selectName = 'Firefox';
				versions = '5/6/7/8/9/10';
			}
			else if (selected == 'sf'){
				selectName = 'Safari';
				versions = '5/6/7/8/9/10';
			}
			else if (selected == 'sfM'){
				selectName = 'Safari Mobile';
				versions = '5/6/7/8/9/10';
			}
			else if (selected == 'op'){
				selectName = 'Opera';
				versions = '5/6/7/8/9/10';
			}

		if (0 === document.getElementsByClassName(selected).length) {
			var filter = document.createElement('div')
			filter.innerHTML = '<p>' + selectName + ':</p><select name="' + selected + 'Version" class="version" id="js-' + selected + '"></select><input value="remove" class="removeFilter" type="button">';
			filter.className = 'filter ' + selected;
			document.getElementById('js_filter').appendChild(filter);
			// create a option for every version Number
			var newSel = 'js-' + selected;
			versions.split('/').forEach(createOption);
			function createOption (i){
				var options = document.createElement('option');
				options.value = i;
				options.innerHTML = i;
				document.getElementById('js-' + selected).appendChild(options);
			}
			uaOutput();
			filter.getElementsByClassName('version')[0].addEventListener('change',function(){uaOutput()}, false);
			removeFilter();
			window.setTimeout(show, 0);
			function show () {
				document.getElementsByClassName(selected)[0].className += ' animate';
			};
		} 
		else{alert('You already have a filter for ' + selectName)};
	}
);


function removeFilter () {
	var removeFilterButton = document.getElementsByClassName('removeFilter');
	for (var i = 0; i<removeFilterButton.length; i++) {
		removeFilterButton[i].addEventListener('click', function() {
				var parent = this.parentNode;
				parent.classList.remove('animate');
				window.setTimeout(remove, 300);
				function remove () {
					parent.remove();
				}
				uaOutput();
			}
		);
	}
}