$(document).ready(function() {
	$('#wrapper').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 500,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['California', 'Chicago', 'New York', 'London', 'India', 'Japan']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.time-section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
let caliTime = document.querySelector('#cal-time'),
    caliActivity = document.querySelector('.cal-activity'),

    chiTime = document.querySelector('#chi-time'),
    chiActivity = document.querySelector('.chi-activity'),

    nycTime = document.querySelector('#nyc-time'),
    nycActivity = document.querySelector('.nyc-activity'),

    lonTime = document.querySelector('#lon-time'),
    lonActivity = document.querySelector('.lon-activity'),

    indiaTime = document.querySelector('#india-time'),
    indiaActivity = document.querySelector('.india-activity'),

    japanTime = document.querySelector('#japan-time'),
    japanActivity = document.querySelector('.japan-activity');

const morningActivities = [
	'ready for the day',
	'eating breakfast',
	'needing a coffee',
	'listening to a podcast'
];

const noonActivities = [
	'eating lunch',
	'sleeping late',
	'grabbing a bite',
	'taking a nap'
];

const eveningActivities = [
	'eating some good food',
	'watching tv',
	'browsing the internet',
	'reading a book'
];

const nightActivities = [
	'sleeping',
	'binge watching Netflix',
	'still browsing the internet',
	'listening to music'
];

function updateAct() {
	let now = moment();
	let calH = parseInt(now.tz('America/Los_Angeles').format('H')),
			chiH = parseInt(now.tz('America/Chicago').format('H')),
			nycH = parseInt(now.tz('America/New_York').format('H')),
			lonH = parseInt(now.tz('Europe/London').format('H')),
			indiaH = parseInt(now.tz('Asia/Colombo').format('H')),
			japanH = parseInt(now.tz('Asia/Tokyo').format('H'));

			console.log(chiH);
	// California Activities
	if (calH >= 5 && calH <= 10) {
		caliActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (calH >= 11 && calH <= 15) {
		caliActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (calH >= 16 && calH <= 22) {
		caliActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((calH >= 23 && calH <= 24) || (calH >= 0 && calH <= 4)) {
		caliActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
	// Chicago Activities
	if (chiH >= 5 && chiH <= 10) {
		chiActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (chiH >= 11 && chiH <= 15) {
		chiActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (chiH >= 16 && chiH <= 22) {
		chiActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((chiH >= 23 && chiH <= 24) || (chiH >= 0 && chiH <= 4)) {
		chiActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
	// NYC Activities
	if (nycH >= 5 && nycH <= 10) {
		nycActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (nycH >= 11 && nycH <= 15) {
		nycActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (nycH >= 16 && nycH <= 22) {
		nycActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((nycH >= 23 && nycH <= 24) || (nycH >= 0 && nycH <= 4)) {
		nycActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
	// London Activities
	if (lonH >= 5 && lonH <= 10) {
		lonActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (lonH >= 11 && lonH <= 15) {
		lonActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (lonH >= 16 && lonH <= 22) {
		lonActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((lonH >= 23 && lonH <= 24) || (lonH >= 0 && lonH <= 4)) {
		lonActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
	// India Activities
	if (indiaH >= 5 && indiaH <= 10) {
		indiaActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (indiaH >= 11 && indiaH <= 15) {
		indiaActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (indiaH >= 16 && indiaH <= 22) {
		indiaActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((indiaH >= 23 && indiaH <= 24) || (indiaH >= 0 && indiaH <= 4)) {
		indiaActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
	// Japan Activities
	if (japanH >= 5 && japanH <= 10) {
		japanActivity.innerHTML = morningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (japanH >= 11 && japanH <= 15) {
		japanActivity.innerHTML = noonActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if (japanH >= 16 && japanH <= 22) {
		japanActivity.innerHTML = eveningActivities[Math.floor(Math.random() * morningActivities.length)];
	} else if ((japanH >= 23 && japanH <= 24) || (japanH >= 0 && japanH <= 4)) {
		japanActivity.innerHTML = nightActivities[Math.floor(Math.random() * morningActivities.length)];
	}
}

function updateTime() {
	let now = moment();
	caliTime.innerHTML = now.tz('America/Los_Angeles').format('hh:mm A');
	chiTime.innerHTML = now.tz('America/Chicago').format('hh:mm A');
	nycTime.innerHTML = now.tz('America/New_York').format('hh:mm A');
	lonTime.innerHTML = now.tz('Europe/London').format('hh:mm A');
	indiaTime.innerHTML = now.tz('Asia/Colombo').format('hh:mm A');
	japanTime.innerHTML = now.tz('Asia/Tokyo').format('hh:mm A');
}
updateTime();
updateAct();
setInterval(updateTime,1000);
