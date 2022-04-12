/**********************
 Loading
***********************/
window.onload = () => {
	const element = {
		loading: document.getElementById('loading'),
		body: document.querySelector('body')
	};

	element.body.style.overflow = 'auto';

	element.loading.classList.add('ah_loading--loaded');
}

/**********************
 Scroll Animation
***********************/
window.addEventListener('DOMContentLoaded', () => {
	const element = {
		trigger: document.getElementById('slideAnimation')
	};

	window.addEventListener('scroll', () => {
		let position = {
			trigger: {
				rect: element.trigger.getBoundingClientRect()
			},
			scroll: {
				top: window.scrollY
			},
			window: {
				height: window.innerHeight
			}
		};

		if (position.scroll.top + position.window.height > position.trigger.rect.top ) {
			element.trigger.classList.add('slideIn');
		}
	});
});

/**********************
 Navigation
***********************/
window.addEventListener('scroll', () => {
	const element = {
		navigation: document.getElementById('Navigation'),
		trigger: document.getElementById('About')
	};

	let position = {
		trigger: {
			rect: element.trigger.getBoundingClientRect()
		},
		scroll: {
			top: window.scrollY
		}
	};

	if (position.scroll.top > position.trigger.rect.top) {
		element.navigation.classList.add('ah_navigation--show');
	} else {
		element.navigation.classList.remove('ah_navigation--show');
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