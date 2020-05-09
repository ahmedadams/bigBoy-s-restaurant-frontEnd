//mobile side-menu variables
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mobile-links");
const links = document.querySelectorAll(".nav-item");



//food-slider variables
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const sliderTrack =	document.querySelector('#slider-container');

//food-slider
function prev(){
		document.getElementById('slider-container').scrollLeft -= 280;
}

function next(){
		document.getElementById('slider-container').scrollLeft += 280;
}

//hamburger menu function
hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");

	links.forEach(link => {
		link.classList.toggle('fade');
	});
});
