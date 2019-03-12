// console.log('paragraph_premo_tcm_latest.js');
$ = jQuery;
// console.log($().jquery);

var jsonUrl6 = 'https://api.tcm.com/tcmws/v1/vod/latest/6.json';
var targetEl = '.latest_six';


var jsonUrlCarousel = 'https://api.tcm.com/tcmws/v1/vod/latest/12.json';

$(init);

function init() {
	// console.log('init()');
	$.getJSON( jsonUrl6, processJson );




	$(".regular").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: false,
		centerMode: true
	});

	$.getJSON( jsonUrlCarousel, processJsonCarousel );


}


function processJsonCarousel(data) {


	// console.log('processJsonCarousel()');


	$.each(data.tcm.titles, addSlideMarkup);



}

function addSlideMarkup(index, title) {

	// console.log('-------------------------------------');
	// console.log('addSlideMarkup()');



	// console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageExploreThumb', true));
	// console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageExploreThumb'));


	// console.log('title.name : ' + title.name);
	// console.log('title.releaseYear : ' + title.releaseYear);
	// console.log('title.description : ' + title.description);





	// <div class='movie' >
	// 	<div class='content' >
	// 		<img src='https://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i346/TattooedStranger1950_92420_320x179_10092014022429.jpg' />
	// 		<div class='title_year' >
	// 			Broadway of a Melody 1940 (1940)
	// 		</div>
	// 	</div>
	// </div>




	var mu = '';
	mu += '';
	mu += '<div class=\'movie\' >';
	mu += '<div class=\'content\' >';
	mu += '';
	mu += '<img class=\'\' src=\'' + getCutByUsage(title.imageProfiles, 'homepageExploreThumb', true) + '\' alt=\'' + title.name + ' (' + title.releaseYear + ')' + '\' />';
	mu += '';
	mu += '<div class=\'title_year\' >';
	mu += '';
	mu += '';
	mu += title.name;
	mu += ' (';
	mu += title.releaseYear;
	mu += ')';
	mu += '';
	mu += '</div>';
	mu += '';
	mu += '';
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

	// $(targetEl).append(mu);

	$('.regular').slick('slickAdd', mu);


}


function processJson(data) {

	// console.log('processJson()');

	// console.log(data);

	$.each(data.tcm.titles, getTitleMarkup);


}

function getTitleMarkup(index, title) {

	// console.log('getTitleMarkup()');



	// console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageLiveImage', true));
	// console.log('cut : ' + getCutByUsage(title.imageProfiles, 'homepageLiveImage'));


	// console.log('title.name : ' + title.name);
	// console.log('title.releaseYear : ' + title.releaseYear);
	// console.log('title.description : ' + title.description);


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
