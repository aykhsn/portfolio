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
 Smooth scroll
***********************/
const smoothScrollTriggerEl = document.querySelectorAll('.scrollButton');

const scrollToTarget = (target) => {
	window.scrollTo({
		top: target,
		behavior: 'smooth',
	});
};

for (let i = 0; i < smoothScrollTriggerEl.length; i++) {
	smoothScrollTriggerEl[i].addEventListener('click', (e) => {
		e.preventDefault();

		let value = smoothScrollTriggerEl[i].getAttribute('value');
		let targetElement = document.getElementById(value);
		const rect = targetElement.getBoundingClientRect().top;
		const offset = window.pageYOffset;
		const target = rect + offset;

		scrollToTarget(target);
	});
}

/**********************
 Vue.js
***********************/
const vm = new Vue ({
  el : '#vm',

  data: {
    isEn : false
  },

  methods: {
  	switchLang: function(isEn) {
  		this.isEn = isEn;
  	}
  }
});
