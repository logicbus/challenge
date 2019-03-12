console.log('paragraph_premo_tcm_latest.js');
$ = jQuery;
console.log($().jquery);

var jsonUrl = 'https://api.tcm.com/tcmws/v1/vod/latest/6.json';
var targetEl = '.latest_six';

$(init);

function init() {
	console.log('init()');
	$.getJSON( jsonUrl, processJson );
}


function processJson(data) {

	console.log('processJson()');

	console.log(data);

	$.each(data.tcm.titles, getTitleMarkup);


}

function getTitleMarkup(index, title) {

	console.log('getTitleMarkup()');



	console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageLiveImage', true));
	// console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageLiveImage'));


	console.log('title.name : ' + title.name);
	console.log('title.releaseYear : ' + title.releaseYear);
	console.log('title.description : ' + title.description);


	var mu = '';
	mu += '';
	mu += '<div class=\'film\' >';
	mu += '';
	mu += '<img class=\'\' src=\'' + getCutByUsage(title.imageProfiles, 'homepageLiveImage', true) + '\' alt=\'' + title.name + ' (' + title.releaseYear + ')' + '\' />';
	mu += '';
	mu += '<div class=\'text_area\' >';
	mu += '';
	mu += '<div class=\'title\' >';
	mu += '';
	mu += title.name;
	mu += '';
	mu += '<span class=\'year\' >';
	mu += ' (';
	mu += title.releaseYear;
	mu += ')';
	mu += '</span>';
	mu += '';
	mu += '</div>';
	mu += '';
	mu += '';
	mu += '<div class=\'description\' >';
	mu += title.description;
	mu += '</div>';
	mu += '';
	mu += '';
	mu += '</div>';
	mu += '';
	mu += '';
	mu += '';
	mu += '';
	mu += '';
	mu += '</div>';
	mu += '';
	mu += '';


	// return mu;

	$(targetEl).append(mu);


}

function getCutByUsage(imageProfiles, usage, forceSecure = false) {
	// console.log('--------------------------------');
	// console.log('getCutByUsage()');
	// console.log(imageProfiles);
	// console.log('usage : ' + usage);
	// console.log('forceSecure : ' + forceSecure);

	var ret = '';

	$.each(imageProfiles, function(index, value) {
		// console.log('value.usage : ' + value.usage);
		if (value.usage == usage) {
			// console.log('usage match');
			ret = value.url;
			if (forceSecure) {
				ret = ret.replace('http://', 'https://');
			}
		}
	});

	// console.log('ret : ' + ret);
	return ret;


}
