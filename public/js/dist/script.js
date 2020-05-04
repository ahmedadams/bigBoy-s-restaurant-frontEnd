//set variables here
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const sliderTrack =	document.querySelector('#slider-container');

function prev(){
		document.getElementById('slider-container').scrollLeft -= 280;
}

function next(){
		document.getElementById('slider-container').scrollLeft += 280;
}
