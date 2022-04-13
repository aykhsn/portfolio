let element = {};
let position = {};

/**********************
 Event
***********************/
window.addEventListener('DOMContentLoaded', () => {
	element.loading = document.getElementById('loading');
	element.body = document.querySelector('body');
	element.barGraph = document.getElementById('barGraph');
	element.navigation = document.getElementById('Navigation');
	element.about = document.getElementById('About');
});

window.onload = () => {
	// 読み込み完了後にローディング画面を閉じる
	closeLoadingScreen();
}

window.addEventListener('scroll', () => {
	position.scrollTop = window.scrollY;
	position.windowHeight = window.innerHeight;

	// グラフが画面に入ったらアニメーションを開始する
	const slideAnimationTriggerRect = element.barGraph.getBoundingClientRect();
	startSlideAnimation(slideAnimationTriggerRect);

	// Aboutが画面に入る位置でナビゲーション表示を切り替える
	const mobileNavigationTriggerRect = element.about.getBoundingClientRect();
	switchMobileNavigation(mobileNavigationTriggerRect);
});

/**********************
 Loading Screen
***********************/
const closeLoadingScreen = () => {
	element.body.style.overflow = 'auto';
	element.loading.classList.add('loaded');
};

/**********************
 Slide Animation
***********************/
const startSlideAnimation = (triggerRect) => {
	const startPosition = position.scrollTop + position.windowHeight;
	startPosition > triggerRect.top && element.barGraph.classList.add('slideIn');
};

/**********************
 Mobile Navigation
***********************/
const switchMobileNavigation = (triggerRect) => {
	position.scrollTop > triggerRect.top ? element.navigation.classList.add('show') : element.navigation.classList.remove('show');
};

/**********************
 Vue.js
***********************/
const vm = new Vue ({
	el : '#vm',

	data: {
		isEn : true,
		navigationItems : ['About', 'Skills', 'Works', 'Other', 'Contact']
	},

	methods: {
		switchLang: function(isEn) {
			this.isEn = isEn;
		},

		scrollToTarget: function(id) {
			const targetElement = document.getElementById(id);
			const targetElementRect = targetElement.getBoundingClientRect();
			const offset = window.innerWidth > 768 ? 0 : 36; 
			const targePositionTop = targetElementRect.top + window.pageYOffset - offset;

			window.scrollTo({
				top: targePositionTop,
				behavior: 'smooth',
			});
		}
	}
});