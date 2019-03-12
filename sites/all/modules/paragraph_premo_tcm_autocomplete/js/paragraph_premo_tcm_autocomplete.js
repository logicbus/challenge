

// console.log('paragraph_premo_tcm_autocomplete.js');


// console.log(movieData);


$ = jQuery;
// console.log($().jquery);

// if (typeof jQuery.ui !== 'undefined') {
// 	console.log('UI!');
// } else {
// 	console.log('no UI :(');
// }


$(init);

function init() {
	// console.log('init()');

	// $('input#movie_search').enable();

	$('input#movie_search').prop('disabled', false);

	$('input#movie_search').autocomplete({
		source : handleAutocomplete,
		select : clickAutocomplete,
		minLength : 1
	});
}



// $('#movie_search').autoComplete({
//     resolverSettings: {
//         url: 'testdata/test-list.json'
//     }
// });

function clickAutocomplete(event, ui) {

	event.preventDefault();

	// console.log('clickAutocomplete()');

	// console.log(event);
	// console.log(ui);

	// console.log(ui.item.value);




	$.each(movieData, function(index, value) {
		// console.log('---------------------');
		// console.log(value.name);
		// console.log(request.term);

		var film = {
			"label": "",
			"value": ""
		};

		// console.log(nameLc.indexOf(termLc));

		if (value.id == ui.item.value) {
			// console.log('match');

			var runtimeMinutes = 0;
			var readRuntime = '';
			var readHours = 0;
			var readMinutes = 0;

			runtimeMinutes = parseInt(value.runtimeMinutes);


			readHours = Math.floor(runtimeMinutes / 60);
			readMinutes = runtimeMinutes % 60;

			if (readHours > 0) {
				if (readHours > 1) {
					readHours = '' + readHours + ' hours ';
				} else {
					readHours = '' + readHours + ' hour ';
				}
			} else {
				readHours = '';
			}

			if (readMinutes > 0) {
				if (readMinutes > 1) {
					readMinutes = '' + readMinutes + ' minutes';
				} else {
					readMinutes = '' + readMinutes + ' minute';
				}
			} else {
				readMinutes = '';
			}

			readRuntime = readHours + readMinutes;


			// console.log('readHours : ' + readHours);
			// console.log('readMinutes : ' + readMinutes);

			var imageUrlToUse = value.profileImageUrl;
			// imageUrlToUse = imageUrlToUse.replace('http://', 'https://');


			$('.movie_viewer .image_area').html('<img src=\'' + imageUrlToUse + '\' />');

			$('.movie_viewer .title_data').html(value.name);
			$('.movie_viewer .title_id_data').html(value.titleId);
			$('.movie_viewer .runtime_data').html(readRuntime);
			$('.movie_viewer .synopsis_data').html(value.synopsis);

			$('.movie_viewer').removeClass('empty');


		}

	});





}


function handleAutocomplete(request, response) {
	// console.log('handleAutcomplete()');
	// console.log(request);
	// console.log(response);

	var ret = [];

	$.each(movieData, function(index, value) {
		// console.log('---------------------');
		// console.log(value.name);
		// console.log(request.term);

		var nameLc = value.name.toLowerCase();
		var termLc = request.term.toLowerCase();

		var film = {
			"label": "",
			"value": ""
		};

		// console.log(nameLc.indexOf(termLc));

		if (nameLc.indexOf(termLc) !== -1) {
			// console.log('match');

			film.label = value.name;
			film.value = value.id;

			ret.push(film);

		}

	});

	// console.log(ret);

	response(ret);

}
