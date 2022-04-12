/**********************
 Loading
***********************/
window.onload = () => {
	const loadingEl = document.getElementById('loading');
	const bodyEl = document.querySelector('body');

	bodyEl.style.overflow = 'auto';

	loadingEl.classList.add('ah_loading--loaded');
}

/**********************
 Scroll Animation
***********************/
window.addEventListener('DOMContentLoaded', () => {
	const slideAnimationTriggerEl = document.getElementById('slideAnimation');
	const triggerRect = slideAnimationTriggerEl.getBoundingClientRect();
	const triggerPosition = triggerRect.top;

	window.addEventListener('scroll', () => {
		let scrollTopPosition = window.scrollY;
		let windowYOffset = window.pageYOffset;
		let windowHeight = window.innerHeight;

		if (scrollTopPosition + windowHeight > triggerPosition ) {
			slideAnimationTriggerEl.classList.add('slideIn');
		}
	});
});

/**********************
 Navigation
***********************/
window.addEventListener('scroll', () => {
	const navigationEl = document.getElementById('Navigation');
	const triggerEl = document.getElementById('About');
	const triggerRect = triggerEl.getBoundingClientRect();
	const triggerPosition = triggerRect.top;

	let scrollTopPosition = window.scrollY;

	if (scrollTopPosition > triggerPosition) {
		navigationEl.classList.add('ah_navigation--show');
	} else if(scrollTopPosition < triggerPosition) {
		navigationEl.classList.remove('ah_navigation--show');
	}
});

/**********************
 Vue.js
***********************/
const vm = new Vue ({
  el : '#vm',

  data: {
    isEn : true
  },

  methods: {
  	switchLang: function(isEn) {
  		this.isEn = isEn;
  	}
  }
});