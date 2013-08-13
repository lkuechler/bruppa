document.getElementById('addFilter').addEventListener('click',
	function () {
		var optionList = document.getElementById('browser'),
			selected = optionList.options[optionList.selectedIndex].value,
			selectName = dbBrowser[selected].name,
			versions = dbBrowser[selected].versions;

		if (0 === document.getElementsByClassName(selected).length) {
			var filter = document.createElement('div');
			filter.innerHTML = '<p>' + selectName + ':</p><select name="' + selected + 'Version" class="version" id="' + selected + '"></select><input value="remove" class="removeFilter" type="button"><input value="custom" class="customFilter" type="button">';
			filter.className = 'filter ' + selected;
			document.getElementById('js_filter').appendChild(filter);
			// create a option for every version Number
			var newSel = selected;
			versions.forEach(createOption);
			function createOption (i){
				var options = document.createElement('option');
				options.value = i;
				options.innerHTML = '≤ ' + i;
				document.getElementById(selected).appendChild(options);
			}
			uaOutput();
			filter.getElementsByClassName('version')[0].addEventListener('change',function(){uaOutput();}, false);
			initFilter();
			window.setTimeout(show, 0);
			function show () {
				document.getElementsByClassName(selected)[0].className += ' animate';
			}
		} 
		else{alert('You already have a filter for ' + selectName);}
	}
);


function initFilter () {
	var removeFilterButton = document.getElementsByClassName('removeFilter');
	for (var i = 0; i<removeFilterButton.length; i++) {
		removeFilterButton[i].addEventListener('click', function() {
				var parent = this.parentNode;
				parent.classList.remove('animate');
				window.setTimeout(remove, 300);
				function remove () {
					parent.remove();
					uaOutput();
				}
			}
		);
	};
	var customFilterButton = document.getElementsByClassName('customFilter');
	for (var i = 0; i<customFilterButton.length; i++) {
		customFilterButton[i].addEventListener('click', function() {
				var parent = this.parentNode;
				var filter = parent.getElementsByTagName('select');
				var filterId = filter[0].id;
				var textarea = document.createElement('input');
				textarea.className = 'version';
				textarea.id = filterId;
				var repFilter = document.getElementById(filterId);
				parent.replaceChild(textarea, repFilter);
				textarea.addEventListener('change', function() {
					uaOutput();
				})
			}
		);
	}
}