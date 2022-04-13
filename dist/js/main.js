const navigation = {
	current: 'Top',
	items: ['About', 'Skills', 'Works', 'Other', 'Contact']
};
let element = {};
let position = {
	items: {}
};

/**********************
 Event
***********************/
window.addEventListener('DOMContentLoaded', () => {
	element.loading = document.getElementById('loading');
	element.body = document.querySelector('body');
	element.navigationButton = document.querySelectorAll('#Navigation button');
	element.barGraph = document.getElementById('barGraph');
	element.navigation = document.getElementById('Navigation');
	element.about = document.getElementById('About');
});

window.onload = () => {
	// 読み込み完了後にローディング画面を閉じる
	closeLoadingScreen();

	// 指定要素の位置を判定する
	setElementPosition();

	window.addEventListener('scroll', () => {
		position.scrollTop = window.scrollY;
		position.windowHeight = window.innerHeight;

		// グラフが画面に入ったらアニメーションを開始する
		const slideAnimationTriggerRect = element.barGraph.getBoundingClientRect();
		startSlideAnimation(slideAnimationTriggerRect);

		// Aboutが画面に入る位置でナビゲーション表示を切り替える
		const mobileNavigationTriggerRect = element.about.getBoundingClientRect();
		switchMobileNavigation(mobileNavigationTriggerRect);

		// ナビゲーションの現在位置を切り替える
		switchNavigationButton(navigation.current);
	});
};

window.addEventListener('resize', () => {
	// 指定要素の位置を判定する
	setElementPosition();

	// ナビゲーションの現在位置を切り替える
	switchNavigationButton(navigation.current);
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
 Navigation
***********************/
const switchMobileNavigation = (triggerRect) => {
	position.scrollTop > triggerRect.top ? element.navigation.classList.add('show') : element.navigation.classList.remove('show');
};

const setElementPosition = () => {
	for(let item of navigation.items) {
		const targetElement = document.getElementById(item);
		const targetElementRect = targetElement.getBoundingClientRect();
		const offset = 340;
		const targePositionTop = targetElementRect.top + window.pageYOffset - window.innerHeight + offset;

		position.items[item] = targePositionTop;
	}
};

const setCurrentPosition = () => {
	for (let key of Object.keys(position.items)) {
		if(position.scrollTop > position.items[key]) {
			navigation.current = key;
		}
	}

	if (position.scrollTop < 10) {
		navigation.current = 'Top';
	}
};

const switchNavigationButton = (currentId) => {
	setCurrentPosition();

	element.navigationButton.forEach(function (element) {
	    element.classList.remove('active');
	});

	document.getElementsByName(currentId)[0].classList.add('active');
}

/**********************
 Vue.js
***********************/
const vm = new Vue ({
	el : '#vm',

	data: {
		isEn : true,
		navigationItems : navigation.items
	},

	methods: {
		switchLang: function(isEn) {
			this.isEn = isEn;
		},

		/**********************
		 Scroll Event
		***********************/
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