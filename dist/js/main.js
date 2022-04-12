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