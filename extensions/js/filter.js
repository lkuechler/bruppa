$('.addFilter').click(function() {
	var selected = $('.browser :selected').val();
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

	var	select = '<div class="filter ' + selected + '"><p>' + selectName + ':</p><select name="' + selected + 'Version" class="version js-' + selected + '"></select><input value="remove" class="removeFilter" type="button"></div>';

	$('.config').append(select);

	// create a option for every version Number
	versions.split('/').forEach(createOption);
	function createOption (i){
		var newSel = '.js-' + selected;
		$(newSel).append('<option value="' + i + '">' + i + '</option>');
	}
	uaOutput();
	removeFilter();
});

function removeFilter () {
	$('.removeFilter').click(function() {
		$(this).parent().remove();
		uaOutput();
	});
}