// Click Watcher
let Watch = function(event) {
	let object = this.constructor.prototype;
	for (const key in object) {
		object[key](event);
	}
}
let watch = {}

document.body.addEventListener('click', function(e) {
	new Watch(e);
	for (const key in watch) {
		watch[key](e);
	}
})

// SLIDER
// MAIN FUNCTION
let FgSlider = function(fgContainer) {
	let This = this;
	this.fgContainer = document.querySelector(`${fgContainer}`) || document.querySelector('.fg-slider');
	this.setup = arguments[1];
	this.setup && this.setup.parallax ? this.fgContainer.classList.add('fg-parallax') : false;
	this.isParallax = this.setup && this.setup.parallax === true ? true : false;
	
	// video slide
	this.currentPlayedVideo;

	this.stopCurrentVideo = function() {
		if (This.currentPlayedVideo && !This.currentPlayedVideo.paused) {
			This.currentPlayedVideo.pause();
		}

		document.querySelector('.fg-video-slide-cover') ? fg('.fg-video-slide-cover').removeClass('active') : false;
	}

	this.sliderItems = this.fgContainer.querySelectorAll('img');
	this.current = 0;
	this.total = this.sliderItems.length;
	this.createdSlides = [];
	this.bulletArr = [];
	this.isTrue = false;
	this.fgTextContent = this.fgContainer.querySelectorAll('.slider-content') || null;
	this.globalInterval = null;

	// loader container
	this.loaderCont = document.createElement('div');
	this.loaderCont.classList.add('sk-folding-cube');

	// run the slider
	this.imageItems();

	// slider setup
	
	// run autoplay by default
	this.autoplay();
}

// CREATE SLIDER ITEMS
FgSlider.prototype.imageItems = function() {
	let This = this;
	let fgContainer = this.fgContainer;
	fgContainer.innerHTML = '';

	// loading animation container
	This.loaderCont.innerHTML = '<div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div>';
	fgContainer.appendChild(This.loaderCont);

	// create buttons
	let arrowContainer = document.createElement('div')
	arrowContainer.classList.add('arrow-container')

	// left arrow
	let leftArr = document.createElement('div');
	arrowContainer.appendChild(leftArr);
	leftArr.classList.add('left-arrow');
	leftArr.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>';

	// right arrow
	let rightArr = document.createElement('div');
	arrowContainer.appendChild(rightArr);
	rightArr.classList.add('right-arrow');
	rightArr.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
	
	fgContainer.appendChild(arrowContainer);

	// create bullets
	let bulletContainer = document.createElement('div');
	bulletContainer.classList.add('bullet-container');
	fgContainer.appendChild(bulletContainer);
	
	// create slides & bullets. Loop
	
	for (let i = 0; i < This.sliderItems.length; i++) {
		// create slides
		let slides = document.createElement('div');
		if (This.fgTextContent[i]) {
			slides.appendChild(This.fgTextContent[i])
		}
		
		if (This.sliderItems[i].src.match('mp4')) {
			slides.classList.add('slider-item');
			slides.classList.add('video-slide');
			slides.innerHTML = `
				<div class="fg-video-slide-container">
					<div class="fg-video-slide-cover">
						<div class="fg-play-control"><?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 124.512 124.512" xml:space="preserve"><g><g><path d="M113.956,57.006l-97.4-56.2c-4-2.3-9,0.6-9,5.2v112.5c0,4.6,5,7.5,9,5.2l97.4-56.2   C117.956,65.105,117.956,59.306,113.956,57.006z" data-original="#000000" class="active-path" data-old_color="#FDFDFD"/> </g></g> </svg></div>
					</div>
					<video width="100%" height="100%" loop="true"><source src="${This.sliderItems[i].src}#t=10" type="video/mp4"></video>
				</div>`;


			slides.onclick = function(e) {
				if (find(e.target, 'class=fg-play-control')) {
					This.currentPlayedVideo = this.querySelector('video');
					this.querySelector('.fg-video-slide-cover').classList.add('active');
					This.currentPlayedVideo.play();
					This.autoplay(false);
				}
			}
		} else {
			if (This.isParallax === true) {
				slides.classList.add('slider-item');
				slides.style.background = `url(${This.sliderItems[i].src}) no-repeat fixed`;
				slides.style.backgroundSize = 'cover';
				const pr = () => {
					let x = This.fgContainer.getBoundingClientRect().top / 5;
					let y = Math.round(x * 100) / 100;
					slides.style.backgroundPosition = 'center ' + y + 'px';
					slides.style.transition = 'none'
				}
				pr();
				window.addEventListener('scroll', pr);
			} else {
				slides.classList.add('slider-item');
				slides.style.background = `url(${This.sliderItems[i].src}) no-repeat`;
				slides.style.backgroundSize = 'cover';
				slides.style.backgroundPosition = 'center center';
			}
		}
		fgContainer.appendChild(slides);
		This.createdSlides.push(slides);
		
		// create bullets
		if (This.setup.bullets) {
			let bullets = document.createElement('div');
			bullets.setAttribute('slide-index', i);
			bulletContainer.appendChild(bullets);
			This.bulletArr.push(bullets);
		
			// bullets add event listener
			bullets.addEventListener('click', function() {
				// change current item index
				This.current = parseInt(this.getAttribute('slide-index'));
				
				let bulletIndex = parseInt(this.getAttribute('slide-index'));
				This.clearInterval(This.globalInterval);
				This.slide(bulletIndex);
				This.autoplay();
			
				This.stopCurrentVideo();
			});
		}
	}; // end of the loop

	// event listeners
	// next & back event listeners
	rightArr.addEventListener('click', function() {
		This.clearInterval(This.globalInterval);
		This.nextFunc();
		This.autoplay();

	});
	leftArr.addEventListener('click', function() {
		This.clearInterval(This.globalInterval);
		This.prevFunc();
		This.autoplay();
	});
	
	// items loading function
	let sliderInterval = setInterval(function() {
		This.loaderCont.classList.add('active');
		if (fgContainer.querySelector('.slider-item')) {
			clearInterval(sliderInterval);
			This.loaderCont.classList.remove('active');
			
			// make active first alide and first bullet
			This.createdSlides[0].classList.add('active');
			This.bulletArr.length ? This.bulletArr[0].classList.add('active') : false;
		}

		// add animation effect to the slider
		if (This.setup.effect) {
			fgContainer.classList.add(This.setup.effect);
		} else {
			fgContainer.classList.add('fade');
		}

		// add slider size
		if (This.setup.size) {
			(This.setup.size.width) ? This.fgContainer.style.width = This.setup.size.width : false;
			(This.setup.size.height) ? This.fgContainer.style.height = This.setup.size.height : false;
		}
	}, 100);
}

// AUTOPLAY
FgSlider.prototype.autoplay = function(isTrue = true) {
	let This = this;

	if (!isTrue) {
		clearInterval(This.globalInterval);
		sliderDuration = 0;
		return;
	}

	if (this.setup.autoplay && this.setup.autoplay === true) {
		let sliderDuration = (this.setup.duration) ? this.setup.duration : 5000;
		This.globalInterval = setInterval(function() {
			This.nextFunc();
		}, sliderDuration);
	}
}

// CLEAR INTERVAL
FgSlider.prototype.clearInterval = function(x) {
	clearInterval(x);
	this.globalInterval = 0;
}

// NEXT AND PROVIOUS FUNCTIONA
FgSlider.prototype.nextFunc = function() {
	(this.current === this.total - 1) ? this.current = 0 : this.current +=1;
	this.slide(this.current);
	this.stopCurrentVideo();

	this.createdSlides.forEach(items => {
		items.style.transition = 'all .7s ease'
	})
}
FgSlider.prototype.prevFunc = function() {
	(this.current === 0 ) ? this.current = this.total - 1 : this.current -= 1;
	this.slide(this.current);
	this.stopCurrentVideo();

	this.createdSlides.forEach(items => {
		items.style.transition = 'all .7s ease'
	})
}

// SELECT SLIDE & NONE OTHERS
FgSlider.prototype.slide = function (index) {	
	let This = this;
	if (index >= 0 && index <= this.total - 1) { 
		for (var s = 0; s <= this.total - 1; s++) {
			if (s === index) {
				this.createdSlides[s].classList.add('active'); 
				this.bulletArr.length ? this.bulletArr[s].classList.add('active') : false;
			} else {
				this.createdSlides[s].classList.remove('active');
				this.bulletArr.length ? this.bulletArr[s].classList.remove('active') : false;
				this.createdSlides[s].style.transition = 'all .7s ease';
			}
		}
	}
};




function iconsFunc(icon) {
	let ico = document.createElement('i');
	ico.className = `fa ${icon}`;
	return ico;
}

//parallax
function simpleParallax(selector, modifier) {
	document.querySelectorAll(selector).forEach(function(parallax) {
		const sp = () => {
			let x = parallax.getBoundingClientRect().top / modifier;
			let y = Math.round(x * 100) / 100;
			parallax.style.backgroundPosition = 'center ' + y + 'px';
		}
		sp();
		window.onscroll = function() {
			sp();
		}
	});
}
// Convert image to background image
function convertImage() {
	if (document.querySelector('.parallax img')) {
		get('.parallax img', function(parallax) {
			let parallaxContainer = findParent(parallax, 'parallax');
			parallaxContainer.style.background = `url(${parallax.src}) repeat-y center`;
			parallaxContainer.style.backgroundSize = 'cover';
			parallaxContainer.style.backgroundAttachment = 'fixed';
			simpleParallax('.parallax', 5);
			parallax.remove();
		});	
	}
}
// Find parallax html class
waitingFor('.parallax', function() {
	if (document.querySelector('.parallax') && window.innerWidth > 768) {
		convertImage();
		simpleParallax('.parallax', 5);
	} else if (document.querySelector('.parallax') && window.innerWidth < 768) {
		convertImage();
		get('.parallax', function(parallax) {
			parallax.style.backgroundSize = 'cover';
			parallax.style.backgroundPosition = 'center';
			parallax.style.backgroundAttachment = 'scroll';
		})
	}
});

// info, warning, success boxes
var msgStyles = {
	info: function() {
		var infoBox = document.querySelectorAll('.info');
		for (i = 0; i < infoBox.length; i++) {
			var boxIconx = document.createElement('i');
			boxIconx.classList.add('fa', 'fa-info-circle');
			infoBox[i].appendChild(boxIconx);
			if (document.querySelector('.info.close')) {
				var closeBtn = document.createElement('div');
				infoBox[i].appendChild(closeBtn);
				closeBtn.classList.add('close-btn');
				closeBtn.insertBefore(iconsFunc('fa-times'), closeBtn.childNodes[0]);				
				closeBtn.addEventListener('click', function() {
					var parent = this.parentNode.parentNode;
					parent.removeChild(this.parentNode);
				});
			}
		}
	},
	error: function() {
		var warningBox = document.querySelectorAll('.alert-error');
		for (i = 0; i < warningBox.length; i++) {
			warningBox[i].appendChild(iconsFunc('fa-exclamation-triangle'));
			if (document.querySelector('.alert-error.alert')) {
				var closeBtn = document.createElement('div');
				warningBox[i].appendChild(closeBtn);
				closeBtn.classList.add('close-btn');
				closeBtn.insertBefore(iconsFunc('fa-times'), closeBtn.childNodes[0]);				
				closeBtn.addEventListener('click', function() {
					var parent = this.parentNode.parentNode;
					parent.removeChild(this.parentNode);
				});
			}
		}
	},
	warning: function() {
		var warnBox = document.querySelectorAll('.warning');
		for (i = 0; i < warnBox.length; i++) {
			var boxIconx = document.createElement('i');
			boxIconx.classList.add('fa', 'fa-exclamation-triangle');
			warnBox[i].appendChild(boxIconx);
			if (document.querySelector('.warning.close')) {
				var closeBtn = document.createElement('div');
				warnBox[i].appendChild(closeBtn);
				closeBtn.classList.add('close-btn');
				closeBtn.insertBefore(iconsFunc('fa-times'), closeBtn.childNodes[0]);				
				closeBtn.addEventListener('click', function() {
					var parent = this.parentNode.parentNode;
					parent.removeChild(this.parentNode);
				});
			}
		}
	},
	success: function() {
		var success = document.querySelectorAll('.success');
		for (i = 0; i < success.length; i++) {
			var boxIconx = document.createElement('i');
			boxIconx.classList.add('fa', 'fa-check-circle');
			success[i].appendChild(boxIconx);
			if (document.querySelector('.success.close')) {
				var closeBtn = document.createElement('div');
				success[i].appendChild(closeBtn);
				closeBtn.classList.add('close-btn');
				closeBtn.insertBefore(iconsFunc('fa-times'), closeBtn.childNodes[0]);				
				closeBtn.addEventListener('click', function() {
					var parent = this.parentNode.parentNode;
					parent.removeChild(this.parentNode);
				});
			}
		}
	}
}
if (document.querySelector('.info')) {
	msgStyles.info();
}
if (document.querySelector('.warning')) {
	msgStyles.warning();
}
if (document.querySelector('.success')) {
	msgStyles.success();
}
if (document.querySelector('.alert-error')) {
	msgStyles.error();
}

// checked ul icons
if (document.querySelector('.check')) {
var ulCheck = document.querySelectorAll('ul.check li');
	for (var i = 0; i < ulCheck.length; i++) {
		var checkIcon = document.createElement('i');
		checkIcon.classList.add('fa', 'fa-check');
		checkIcon.style.marginRight = '10px';
		ulCheck[i].insertBefore(checkIcon, ulCheck[i].childNodes[0]);
	}
}

// TABS
window.onload = function() {
	if (document.querySelector('.tabs')) {
		waitingFor('.tabs', function() {
			get('.tabs', function(tabs, i) {
				
				let tabBtns = Array.from(tabs.firstElementChild.children);
				let bodyElements =  Array.from(tabs.firstElementChild.nextElementSibling.children);

				tabBtns.forEach(function(items, i) {
					items.id = i;
					items.onclick = function() {
						tabBtns.forEach(function(items, i) {
							items.classList.remove('active');
							bodyElements[i].classList.remove('active');
						})
						this.classList.add('active');
						bodyElements[this.id].classList.add('active')
					}
				})
			})
		})
	}
}



// CONVERT IMAGE TO BACKGROUND IMAGE
if (document.querySelector('.get-back')) {
	var getBack = document.querySelectorAll('.get-back');
	getBack.forEach((getBack) => {
		getBack.setAttribute('data-width', getBack.firstElementChild.naturalWidth);
		getBack.setAttribute('data-height', getBack.firstElementChild.naturalHeight);
		var normalImageLink = getBack.firstElementChild.src;
		getBack.style.background = 'url(' + normalImageLink + ') no-repeat center center / cover';
		getBack.removeChild(getBack.firstElementChild);
	});
}

// DRAW FUNCTION
if (document.querySelector('.draw')) {
	var draw = document.querySelectorAll('.draw');
	draw.forEach(function(drawing, s) {
		var configArray = drawing.className.match(/\w+/gi);

		drawing.style.width = configArray[configArray.indexOf("width") + 1].toString() + 'px';
		drawing.style.height = configArray[configArray.indexOf("height") + 1] + 'px';
		drawing.style.backgroundColor = "#" + configArray[configArray.indexOf("background") + 1];
		drawing.style.color = "#" + configArray[configArray.indexOf("color") + 1];
		drawing.style.fontSize = configArray[configArray.indexOf("fontsize") + 1] + 'px';
		drawing.style.lineHeight = configArray[configArray.indexOf("lineheight") + 1] + 'px';
		drawing.style.letterSpacing = configArray[configArray.indexOf("letterspacing") + 1] + 'px';
	});
};

// SINGLE IMAGE POPUP
(function() {
	watch.popImage = function(e) {
		if (find(e.target, 'class=image-popup')) {
			popupImage();
		}
	}

	// Popup image
	function popupImage() {
		console.log(event.target.tagName);
		
		let image = event.target.tagName === 'IMG' ? event.target : event.target.querySelector('img'),
				getBody = el('body');
		fg(getBody).addClass('dark');
		
		fg(getBody).append(`<div class="image-popup-container"><div class="flex center-xy popup-back"><img src="${image.src}"/></div><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.333 348.334" xml:space="preserve"> <g> <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/> </g> </svg></span></div>`);

		waitingFor('.image-popup-container img', function(elem) {
			window.addEventListener('resize', function() {
				imagePopResize();
			})

			function imagePopResize() {
				if (elem.naturalWidth < window.innerWidth && elem.naturalHeight < window.innerHeight ) {
					fg(elem).css({ width: 'auto', height: 'auto' })
				} 

				if (elem.offsetWidth > window.innerWidth) {
					fg(elem).css({ width: '80%', height: 'auto' })
				}

				if (elem.offsetHeight > window.innerHeight) {
					fg(elem).css({ width: 'auto', height: '80%' })
				}
			}

			imagePopResize();

			let removeFunc = function() {
				fg(getBody).removeClass('dark');
				fg('.image-popup-container').remove();
			}
		
			// Close image by clicking on body, pressing on esc button and clicking on close icon
			document.body.onclick = function(e) {
				if (e.target.getAttribute('class') && e.target.className.match('popup-back')) {
					removeFunc();
				}
			}
			el('.image-popup-container span').onclick = function() {
				removeFunc();
			}
			document.body.onkeyup = function(e) {
				if (e.keyCode === 27) {
					removeFunc();
				}
			}
		})
	}
})(); // end

// TEXT LIMITATION
function limitText(tSource, tLength) {
	document.querySelectorAll(`${tSource}`).forEach(function(ts) {
		var limitedText = ts.innerText.substring(0, tLength);
		ts.innerHTML = '';
		ts.innerHTML += `<span>${limitedText}...</span>`;
	})
}

// COLLAPSE
Watch.prototype.collapse = function(e) {
	let element = e.target;

	if (findParent(element, 'collapse-btn') ) {
		let collapseBtn = findParent(element, 'collapse-btn');
		
		let isTrue = toggleClass(`#${collapseBtn.getAttribute('collapse-id')}`)
		let elemHeight = el(`#${collapseBtn.getAttribute('collapse-id')}`).firstElementChild.offsetHeight;
		let elem = el(`#${collapseBtn.getAttribute('collapse-id')}`);
		elem.style.display = 'block';

		// Toggling 'yes' class to collapse button
		toggleClass(element);
		
		if (isTrue) {
			elem.style.height = `${elemHeight}px`;
		} else {
			elem.style.height = '0px';
		}
	}
}

// MODAL CONTENT / MODAL BOX
Watch.prototype.fgModal = function(e) {
	let element = e.target;
	if (element.getAttribute('data-toggle') === 'modal') {
		let This = element;

		// Find target
		let modalTarget = This.getAttribute('data-target');
		let modalBody = document.getElementById(modalTarget);
		let isOpen = modalBody.classList.add('open');
		// Make body darker
		document.body.classList.add('dark');
		let closeButton;
		if (!isOpen) {
			// Close button
			closeButton = document.createElement('span');
			closeButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
			closeButton.classList.add('modal-close');
			modalBody.insertBefore(closeButton, modalBody.childNodes[0]);
		}
		let oldBodyContent = modalBody.innerHTML;
		// Close modal
		closeButton.onclick = function() {
			closeFunc()
			modalBody.removeChild(modalBody.childNodes[0])
		}
		document.querySelector('.dark').onclick = function(e) {
			let dark = e.target.className === 'dark';
			if (dark) {
				closeFunc()
				modalBody.removeChild(modalBody.childNodes[0])
			}
		}
		function closeFunc() {
			document.body.classList.remove('dark');
			modalBody.classList.remove('open');
			modalBody.innerHTML = oldBodyContent;
		}
	}
}

// CLOSE ALL
function closeAll(x, callback) {
	let nm = 0;
	document.addEventListener('click', function(e) {
		nm++;
		if (e.target !== x && nm > 1) {
			callback();
			nm = 0;
		}
	});
}

// HEADING
if (document.querySelector('.heading')) {
	(function() {
		let headingFunc = function() {
			this.headingText = document.querySelectorAll('.heading > *');
			this.heading = document.querySelectorAll('.heading');
			this.loopHeads();
		}
		
		// creating header dependences
		headingFunc.prototype.loopHeads = function() {
			let heads = this.heading;
			for (let i = 0; i < heads.length; i++) {
				let headWrapper = document.createElement('div');
				headWrapper.classList.add('head-wrapper');
				headWrapper.innerHTML = `<span class="heading-left-line"></span><h3>${this.headingText[i].innerText}</h3><span class="heading-right-line"></span>`;
				heads[i].innerHTML = '';
				heads[i].appendChild(headWrapper);
			}
		}
		new headingFunc();
	})();
}


// MOBILE MENU COMPONENT
//////////////////////////////////////////// ********* MOBILE MENU ********* ////////////////////////////////////////////
let navCreation = function() {
	// film for the body while menu is opened
	this.bodyCover = document.createElement('div');
	this.bodyCover.classList.add('body-cover');
	document.body.appendChild(this.bodyCover);

	// open menu button
	this.openBtn = document.querySelector('.mobile-menu');
	this.menuIco = document.createElement('span');
	this.menuIco.id = 'mobile-menu-open'
	this.openBtn.appendChild(this.menuIco);
	this.menuIco.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';

	// create main container
	this.createContainer = document.createElement('div');
	this.createContainer.classList.add('mobile-menu-container');
	document.body.appendChild(this.createContainer);

	// close button
	this.closeBtn = document.createElement('div');
	this.closeBtn.classList.add('menu-close');
	this.closeBtn.innerHTML = '<div class="menu-close"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.333 348.334" xml:space="preserve"> <g> <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/> </g> </svg></div>'
	this.createContainer.appendChild(this.closeBtn);
	
	this.createContainer.style.right = '-' + this.createContainer.offsetWidth + 'px';

	// menu nest
	this.menuNest;
	(this.openBtn.querySelector('ul')) ? this.dropToggle() : false;

	let This = this;
	this.openBtn.onclick = function() {
		This.openCloseMenu();
	}
	this.closeBtn.onclick = function() {
		This.createContainer.classList.remove('active');
		This.createContainer.style.right = '-' + This.createContainer.offsetWidth + 'px'
		This.bodyCover.classList.remove('active');
	}
	this.bodyCoverFunc();

	// menu content section
	if (this.openBtn.querySelector('.menu-content')) {
		this.menuContent =  this.openBtn.querySelector('.menu-content');
		this.createContainer.appendChild(this.menuContent);
	}
}

// OPEN / CLOSE MENU
navCreation.prototype.openCloseMenu = function() {
	this.createContainer.classList.toggle('active');
	this.createContainer.className.match(/active/) ? this.bodyCover.classList.add('active') : this.bodyCover.classList.remove('active');
	this.createContainer.className.match(/active/) ? this.createContainer.style.right = 0 : this.createContainer.style.right = '-' + this.createContainer.offsetWidth + 'px';
}

// DROP DOWN MENU TOGGLE
navCreation.prototype.dropToggle = function() {
	let This = this;
	this.menuNest = this.openBtn.querySelector('ul');
	this.createContainer.appendChild(this.menuNest);

	// first dropdown
	if (this.menuNest.querySelectorAll('ul > li > ul')) {

		let dropDownOne = this.menuNest.querySelectorAll('ul > li > ul');
		// loop
		dropDownOne.forEach(function(dropOne) {
			// create drop down open menu button
			let openDrop = document.createElement('div');
			openDrop.classList.add('open-drop');
			openDrop.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';

			// insert drop down open button to the 'li' tag 
			dropOne.classList.add('drop-one')
			dropOne.parentElement.insertBefore(openDrop, dropOne.parentElement.childNodes[0]);
			
			// click to button
			openDrop.addEventListener('click', function() {
				dropOne.classList.toggle('active');
				this.classList.toggle('active');
			});
		});
	}
	
	// seconod dropdown
	if (this.menuNest.querySelectorAll('ul > li > ul > li > ul')) {
		let dropDownTwo = this.menuNest.querySelectorAll('ul > li > ul > li > ul');
		dropDownTwo.forEach(function (dropTwo) {
			dropTwo.classList.add('drop-two');
		});
	}
}

navCreation.prototype.bodyCoverFunc = function() {
	let This = this;
	this.bodyCover.onclick = function() {
		this.classList.remove('active');
		This.createContainer.style.right = '-' + This.createContainer.offsetWidth + 'px'
		This.createContainer.classList.remove('active');
	}
}

waitingFor('.mobile-menu', function() {
	new navCreation()
})

// Smooth scrolling 'SC-LINNK / SCROLLABLE LINK'
if (document.querySelector('.sc-link')) {
	// Get scrollable links
	get('.sc-link', function(scLinks) {
		scLinks.onclick = function(e) {
			e.preventDefault();

			if (this.hash.match('home')) {
				scroll('body');
			} else {
				scroll(this.hash);
			}
		};
	});
}


/////////////////////////////////////////////// UTILITIES / TOOLS ///////////////////////////////////////////////

Array.prototype.last = function() {
	return this[this.length - 1];
}
Array.prototype.arrLast = function() {
	return this[this.length - 1];
}

// Global fg object of all utilities
var Fg = function(arg) {
	this.arg = arg;

	// Get elements
	this.get = function(callback) {
		if (this.arg.nodeType) {
			return callback(this.arg);
		}
		if (this.arg[0].nodeType && el.length > 1) {
			this.arg.forEach(function(items, i) {
				return callback(items, i);
			})
		} else {
			document.querySelectorAll(this.arg).forEach(function(items, i) {
				return callback(items, i);
			})
		}
	}

	// Event listener
	this.on = function(event, callback) {
		this.get(function(elem) {
			elem.addEventListener(event, callback)
		})
	}

	// Get array last item
	this.arrLast = function() {
		return this.arg[this.arg.length - 1];
	}

	// Get element width
	this.width = function() {
		if (this.arg.nodeType) {
			return this.arg.offsetWidth;
		} else {
			return document.querySelector(this.arg).offsetWidth;
		}
	}

	// Get element height
	this.height = function() {
		if (this.arg.nodeType) {
			return this.arg.offsetHeight;
		} else {
			return document.querySelector(this.arg).offsetHeight;
		}
	}

	// Get word
	this.markText = function(text) {
		this.get(function(txt) {
			var inputText = txt;
			var innerHTML = inputText.innerHTML;
			var index = innerHTML.indexOf(text);
			if (index >= 0) { 
				innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
				inputText.innerHTML = innerHTML;
			}
		});
	}

	// On screen / if element is on screen
	this.onscreen = function() {
		let el, isTrue;
		this.get(function(element) {
			var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
			el = element.parentNode
			// Check if bottom of the element is off the page
			if (rect.bottom < 0) return false
			// Check its within the document viewport
			if (top > document.documentElement.clientHeight) return false
			do {
				rect = el.getBoundingClientRect()
				if (top <= rect.bottom === false) return false
				// Check if the element is out of view due to a container scrolling
				if ((top + height) <= rect.top) return false
				el = el.parentNode
			} while (el != document.body)
			isTrue = true;
		})
		return isTrue;
	}

	// Hide elements
	this.hide = function() {
		this.get(function(items) {
			items.classList.add('hide');
		})
	}

	// Show elements
	this.show = function() {
		this.get(function(items) {
			items.classList.remove('hide');
			items.style.display = '';
		})
	}

	// Styles for elements css
	this.css = function() {
		let styleObj = arguments[0]
		for (const key in styleObj) {
			this.get(function(items) {
				items.style[key] = styleObj[key]
			})
		}
	}

	// Put html
	this.html = function(html) {
		this.get(function(elem) {
			elem.innerHTML = html;
		});
	}

	// Append element
	this.append = function(elem) {
		let element;
		if (string2node(elem) !== null) {
			element = string2node(elem);
		} else if (elem.nodeType) {
			element = elem;
		} else if (string2node(elem) === null) {
			element = document.querySelector(elem);
		}

		this.get(function(item) {
			item.appendChild(element)
		});
	};

	// Prepend enement
	this.prepend = function(elem) {
		let element;
		if (string2node(elem) !== null) {
			element = string2node(elem);
		} else if (elem.nodeType) {
			element = elem;
		} else if (string2node(elem) === null) {
			element = document.querySelector(elem);
		}

		this.get(function(item) {
			item.insertBefore(element, item.childNodes[0])
		});
	}

	// Find parent element
	this.findParent = function(elementAttr) {
		var This = this.arg;
		This = This.nodeType ? This : document.querySelector(This);
		if (This.getAttribute('class') !== null && This.className.match(elementAttr) || This.getAttribute('id') !== null && This.id.match(elementAttr)) {
			return This;
		} else {
			for (This && This === document.body; This = This.parentElement;) {
				if (This.getAttribute('class') && This.className.match(elementAttr) || This.getAttribute('id') && This.id.match(elementAttr) ) {
					return This;
				} else if (This.tagName === 'BODY') {
					break;
				}
			}
		}
	}
	// Find next sibling
	this.nextSibling = function(elementAttr) {
		var This = this.arg;
		if (This.getAttribute('class') !== null && This.className.match(elementAttr) || This.getAttribute('id') !== null && This.className.match(elementAttr)) {
			return This;
		} else {
			for (This && This === null; This = This.nextElementSibling;) {
				if (This.className.match(elementAttr) || This.id.match(elementAttr) ) {
					return This;
				} else if (This.nextElementSibling === null) {
					break;
				}
			}
		}
	};

	// FIND PERVIOUS SIBLING
	this.prevSibling = function(elementAttr) {
		var This = this.arg;
		if (This.getAttribute('class') !== null && This.className.match(elementAttr) || This.getAttribute('id') !== null && This.className.match(elementAttr)) {
			return This;
		} else {
			for (This && This === null; This = This.previousElementSibling;) {
				if (This.className.match(elementAttr) || This.id.match(elementAttr) ) {
					return This;
				} else if (This.previousElementSibling === null) {
					break;
				}
			}
		}
	};

	// FIND NEXT SIBLING
	this.nextSibling = function(This, elementAttr) {
		var This = this.arg;
		if (This.getAttribute('class') !== null && This.className.match(elementAttr) || This.getAttribute('id') !== null && This.className.match(elementAttr)) {
			return This;
		} else {
			for (This && This === null; This = This.nextElementSibling;) {
				if (This.className.match(elementAttr) || This.id.match(elementAttr) ) {
					return This;
				} else if (This.nextElementSibling === null) {
					break;
				}
			}
		}
	};

	// Node two string
	this.node2string = function() {
		return document.querySelector(this.arg).outerHTML;
	}

	// Text to node (element)
	this.string2node = function() {
		return document.createRange().createContextualFragment(this.arg).firstElementChild
	}

	// Waiting function
	this.waitingFor = function(callback, delay) {
		let el = this.arg;
		let counter = 0;
		
		let interval = setInterval(function() {
			counter++;
			if (document.querySelector(el)) {
				clearInterval(interval);
				callback(document.querySelector(el));
			}
			if (counter === 500) {
				clearInterval(interval);
			}
		}, delay)
	}

	// Parent Element
	this.parent = function() {
		let element;
		this.get(function(elem) {
			element = elem
		})
		return element.parentElement;
	}

	// First child element
	this.child = function() {
		let element;
		this.get(function(elem) {
			element = elem
		})
		return element.firstElementChild;
	}

	// Fade in
	this.fadeIn = function(transition) {
		let el = this.arg;
		let count = 0;

		transition ? transition : transition = 0;
		get(el, function(elem) {
			elem.style.display = 'none';
			elem.style.opacity = '0';
		});

		let interval = setInterval(function() {
			count++
			let opacityCount = count / 100
			get(el, function(elem) {elem.style.opacity = opacityCount;})
			if (count === 100) {
				clearInterval(interval);
			}
			if (count === 1) {
				get(el, function(elem) {elem.style.display = 'block';})
			}
		}, transition);
	}

	// Fade out
	// fadeOut( '.element', 'stay time', 'transition time (how fast...) ' )
	this.fadeOut = function(delay, transition) {
		let el = this.arg;
		let count = 100;
		transition ? transition : transition = 0;
		delay ? delay : delay = 1000;
		
		get(el, function(elem) {
			elem.style.opacity = '1';
			elem.style.display = 'block';
		})

		setTimeout(function() {
			let interval = setInterval(function() {
				count--
				let opacityCount = count / 100
				get(el, function(elem) {elem.style.opacity = opacityCount;})
				if (count === 0) {
					clearInterval(interval);
					get(el, function(elem) {elem.style.display = 'none';})
				}
			}, transition);
		}, delay);
	}

	// Toggle class
	// toggleClass(element, 'on', 'off');
	this.toggleClass = function(classOne, classTwo) {
		let el = this.arg;
		let elem = el.nodeType ? el : document.querySelector(el);
		let toggle = elem.classList.toggle('yes');
		classTwo === '' ? classTwo = null : classTwo
		classOne === '' ? classOne = null : classOne
		if (toggle === true) {
			elem.classList.remove(classOne);
			elem.classList.add(classTwo);
			return true;
		} else {
			elem.classList.remove(classTwo)
			elem.classList.add(classOne);
			return false;
		}
	}

	// Adding class
	this.addClass = function(cls) {
		this.get(function(elem) {
			elem.classList.add(cls)
		})
	}

	// Input value
	this.val = function(Val) {
		var Val = Val === undefined ? null : Val;
		let elem = this.arg.nodeType ? this.arg : document.querySelector(this.arg);
		return Val !== null ? elem.value = Val : elem.value
	}

	// Focus
	this.focus = function() {
		this.get(function(elem) {
			elem.focus();
		})
	}

	// Remove class
	this.removeClass = function(cls) {
		this.get(function(elem) {
			elem.classList.remove(cls)
		})
	}

	// Add attribute
	this.addAttr = function(one, two) {
		this.get(function(elem) {
			elem.setAttribute(one, two);
		})
	}

	// Remove attribute
	this.removeAttr = function(attr) {
		this.get(function(elem) {
			elem.removeAttribute(attr);
		})
	}

	// Remove element
	this.remove = function() {
		this.get(function(elem) {
			elem.remove()
		})
	}

	// Toggle HTML elements
	this.toggleHTML = function(newHTML) {
		let isTrue = false;
		this.get(function(elem) {
			if (elem.children.length > 1) {
				isTrue = elem.classList.toggle('yes');
			} else {
				elem.appendChild(string2node(newHTML))
			}

			if (isTrue) {
				elem.firstElementChild.style.display = '';
				elem.lastElementChild.style.display = 'none';
			} else {
				elem.firstElementChild.style.display = 'none';
				elem.lastElementChild.style.display = '';
			}
		});

		return isTrue;
	}

	// Make element fullscreen
	this.fullScreen = function() {
		this.get(function(elem) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) { /* Firefox */
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE/Edge */
				elem.msRequestFullscreen();
			}
		})
	}
	
	// Exit fullscreen
	this.exitFullscreen = function() {
		if (document.exitFullscreen) {
		  	document.exitFullscreen();
		} else if (document.mozCancelFullScreen) { /* Firefox */
		  	document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		  	document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) { /* IE/Edge */
		  	document.msExitFullscreen();
		}
	}

	// Time converter
	this.second2time = function() { 
		let s = Math.floor(this.arg);
		var hour = Math.floor(s / 3600);
		var min = Math.floor((s % 3600) / 60);
		var sec = s % 60;

		if (hour < 10) {
			hour = '0' + hour;
		}
		if (min < 10) {
			min = '0' + min;
		}
		if (sec < 10) {
			sec = '0' + sec;
		}

		return hour + ':' + min + ':' + sec;
	};


	this.scroll = function() {
		let This = this;
		// Scroll through document
		function currentYPosition() {
			// Firefox, Chrome, Opera, Safari
			if (self.pageYOffset) return self.pageYOffset;
			// Internet Explorer 6 - standards mode
			if (document.documentElement && document.documentElement.scrollTop)
				return document.documentElement.scrollTop;
			// Internet Explorer 6, 7 and 8
			if (document.body.scrollTop) return document.body.scrollTop;
			return 0;
		}
		function elmYPosition() {
			console.log(This.arg);
			
			var elm = document.querySelector(This.arg);
			var y = elm.offsetTop;
			var node = elm;
			while (node.offsetParent && node.offsetParent != document.body) {
				node = node.offsetParent;
				y += node.offsetTop;
			} return y;
		}
	
		var startY = currentYPosition();
		var stopY = elmYPosition(This.arg);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			scrollTo(0, stopY); return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for ( var i=startY; i<stopY; i+=step ) {
				setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for ( var i=startY; i>stopY; i-=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}

}
let fg = (function() {
	return function(arg) {
		return new Fg(arg)
	}
})()

// Time converter
function timeConverter(sec) { 
	let s = Math.floor(sec);
    var hour = Math.floor(s / 3600);
    var min = Math.floor((s % 3600) / 60);
    var sec = s % 60;

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    return hour + ':' + min + ':' + sec;
};

// Adding global css styles
function style(object) {
	fg('head').append('<style id="fg-custom-style"></style>');
	let fgCustomstyle = el('#fg-custom-style');
	for (const key in object) {
		let INobject = object[key]
		fgCustomstyle.innerHTML += `${key} { `;
		for (const INkey in INobject) {
			fgCustomstyle.innerHTML += `${INkey}: ${INobject[INkey]}; `;
		}
		fgCustomstyle.innerHTML += `} `;
	}
};

// Get array last item
function arrLast(arr) {
	return arr[arr.length - 1];
}

// FIND PARENT ELEMENT BY CLASS NAME
function findParent(This, elementAttr) {
	var This = This.nodeType ? This : document.querySelector(This);
	if (This.getAttribute('class') && This.className.match(elementAttr) || This.getAttribute('id') && This.id.match(elementAttr)) {
		return This;
	} else {
		for (This && This === document.body; This = This.parentElement;) {
			if (This.getAttribute('class') && This.className.match(elementAttr) || This.getAttribute('id') && This.id.match(elementAttr) ) {
				return This;
			} else if (This.tagName === 'BODY') {
				break;
			}
		}
	}
}

// FIND PARENT NEW
function find(This, elemATTR) {
	var This = This.nodeType ? This : document.querySelector(This);
	let attrs = elemATTR.split('='), 
	attr = attrs[0],
	attrValue = attrs[1];

	if (!attrValue) {
		for (This && This === document.body; This = This.parentElement;) {
			if (This.getAttribute(attr)) {
				return This;
			} else if (This.tagName === 'BODY') {
				break;
			}
		}
	} else {
		if (This.getAttribute(attr) && This.getAttribute(attr).split(' ').includes(attrValue)) {
			return This;
		} else {
			for (This && This === document.body; This = This.parentElement;) {
				if (This.getAttribute(attr) && This.getAttribute(attr).split(' ').includes(attrValue)) {
					return This;
				} else if (This.tagName === 'BODY') {
					break;
				}
			}
		}
	}
}

// PREVIOUS ELELEMENT SIBLING
function prevSibling(This, elementAttr) {
	var This = This.nodeType ? This : document.querySelector(This);
	if (This.getAttribute('class') !== null && This.className.match(elementAttr) || This.getAttribute('id') !== null && This.className.match(elementAttr)) {
		return This;
	} else {
		for (This && This === null; This = This.previousElementSibling;) {
			if (This.className.match(elementAttr) || This.id.match(elementAttr) ) {
				return This;
			} else if (This.previousElementSibling === null) {
				break;
			}
		}
	}
};

// Element (NODE) to string
function node2string(el) {
	// let txt = document.createElement('textarea');
	// let cloneEl = el.cloneNode(true);
	// txt.appendChild(cloneEl);
	// return txt.innerHTML;
	return el.outerHTML
}

// Text to node (element)
function string2node(el) {
	return document.createRange().createContextualFragment(el).firstElementChild
}

// Waiting function
function waitingFor(el, callback, delay) {
	delay ? delay : null
	let counter = 0;
	
	let interval = setInterval(function() {
		counter++;
		if (document.querySelector(el)) {
			clearInterval(interval);
			callback(document.querySelector(el));
		}
		if (counter === 500) {
			clearInterval(interval);
		}
	}, delay)
}

// Find highest number
// hightestNum('li', 'data-id') it will return the highest number in list elements
function hightestNum(el, attr) {
	let arr = [];
	document.querySelectorAll(el).forEach(function(items) {
		arr.push(items.getAttribute(attr).match(/\d+/g)[0]);
	});
	return parseInt(Math.max(...arr));
}

// Get elements
function get(el, callback) {
	if (el.nodeType) {
		return el;
	}
	if (el[0].nodeType && el.length > 1) {
		el.forEach(function(items, i) {
			return callback(items, i);
		})
	} else {
		document.querySelectorAll(el).forEach(function(items, i) {
			return callback(items, i);
		})
	}
}

// elements
function el(el, num) {
	num ? num : null
	if (num) {
		return document.querySelectorAll(el)[num];
	} else {
		if (document.querySelectorAll(el).length === 1) {
			return document.querySelector(el);
		} else {
			return document.querySelectorAll(el);
		}
	}
}

function els(el, num) {
	num ? num : null
	if (num) {
		return document.querySelectorAll(el)[num];
	} else {
		return document.querySelectorAll(el);
	}
}

// Fade in
function fadeIn(el, transition) {
	let count = 0;
	el.nodeType ? el : el = document.querySelector(el);
	transition ? transition : transition = 0;
	el.style.display = 'none';
	el.style.opacity = '0';

	let interval = setInterval(function() {
		count++
		let opacityCount = count / 100
		el.style.opacity = opacityCount;
		if (count === 100) {
			clearInterval(interval);
		}
		if (count === 1) {
			el.style.display = 'block';
		}
	}, transition);
}

// Fade out
// fadeOut( '.element', 'stay time', 'transition time (how fast...) ' )
function fadeOut(el, delay, transition) {
	let count = 100;
	el.nodeType ? el : el = document.querySelector(el);
	transition ? transition : transition = 0;
	delay ? delay : delay = 1000;
	el.style.opacity = '1';
	el.style.display = 'block';

	setTimeout(function() {
		let interval = setInterval(function() {
			count--
			let opacityCount = count / 100
			el.style.opacity = opacityCount;
			if (count === 0) {
				clearInterval(interval);
				el.style.display = 'none';
			}
		}, transition);
	}, delay);
}

// Toggle class
// toggleClass(element, 'on', 'off');
function toggleClass(el, classOne, classTwo) {
	let elem = el.nodeType ? el : document.querySelector(el);
	let toggle = elem.classList.toggle('yes');
	classTwo === '' ? classTwo = null : classTwo
	classOne === '' ? classOne = null : classOne
	if (toggle === true) {
		elem.classList.remove(classOne);
		elem.classList.add(classTwo);
		return true;
	} else {
		elem.classList.remove(classTwo)
		elem.classList.add(classOne);
		return false;
	}
}

// Fire everithing only once
let onlyOnce = (function() {
	var executed = false;
	return function(callback) {
		if (!executed) {
			executed = true;
			callback()
		}
	};
})();


// RANDOME
function random(num) {
	let number = num === undefined ? 1000 : num;
	return Math.floor(Math.random() * number);
}

// CONFIRM certify
function certify(text, callback) {
	let confirmbBox = `<div class="confirmbox-body"><div class="confirm-box">
		<div class="confirmbox-close"></div>
		<div class="confirmbox-header">
			<p><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Alert message</p>
		</div>
		<div class="confirmbox-message"><p>${text}</p></div>

		<div class="confirmbox-btns row">
			<button class="btn col" id="confirm-false">No</button>
			<button class="btn col" id="confirm-true">Yes</button>
		</div>
	</div></div>`;

	document.body.insertAdjacentHTML('beforeend', confirmbBox);
	setTimeout(function() {
		fg('.confirm-box').addClass('active');
	}, 100);

	let disappear = function() {
		fg('.confirm-box').removeClass('active');
		setTimeout(function() {
			fg('.confirmbox-body').remove();
		}, 310);
	}

	get('.confirmbox-btns button', function(bnts) {
		bnts.onclick = function(e) {
			if (this.id === 'confirm-true') {
				disappear();
				callback(true);
				return true;
			} else {
				disappear();
				return false;
			}
		}
	});
}


// SELECT
get('.select', function(sel) {
	let selTitle;
	let options = sel.querySelectorAll('option');
	let listItems = '';

	options.forEach(function(items, i) {
		if (items.getAttribute('default') ) {
			selTitle = items.innerText.trim();
		}
		listItems += `<li class="select-items" option-value="${items.getAttribute('value') !== null ? items.getAttribute('value') : '' }"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.701 45.7"  xml:space="preserve" <g><g><path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504 c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0 c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/> </g> </g> </svg></span> ${items.innerText.trim()}</li>`;
	});

	let newSel = `<div id="select-0${els('.select-extended').length}" class="select sel-container">
		<div class="flex center-y justify-content-sb">
			<div class="sel-title">${selTitle}</div> <span class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 386.257 386.257" xml:space="preserve"> <polygon points="0,96.879 193.129,289.379 386.257,96.879 "/> </svg></span>
		</div>

		<ul>
			${listItems}
		</ul>
	</div>`;

	sel.querySelector('select').style.display = 'none';
	sel.insertAdjacentHTML('afterbegin', newSel);
});
Watch.prototype.selectClick = function(e) {
	if (findParent(e.target, 'sel-container') ) {
		let selContainer = findParent(e.target, 'sel-container');
		selContainer.querySelector('ul').classList.toggle('open');
		selContainer.classList.toggle('open');
	}
	if (findParent(e.target, 'select-items')) {
		let selectIten = findParent(e.target, 'select-items');
		let selTitle = findParent(e.target, 'sel-container').querySelector('.sel-title');
		selTitle.innerText = selectIten.innerText;
		selTitle.setAttribute('active-value', selectIten.getAttribute('option-value'));
	}
	if (document.querySelector('.sel-container.open') && findParent(e.target, 'sel-container') === undefined ) {
		get('.sel-container.open', function(item) {
			item.querySelector('ul').classList.remove('open');
			item.classList.remove('open');
		})
	}
}


// SERIALIZE
function serialize(obj) {
	var str = [];
	for (var p in obj)
	  if (obj.hasOwnProperty(p)) {
		str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	  }
	return str.join("&");
}


// Ajax
function ajax() {
	let objectParameters = arguments[0];
	let xhr = new XMLHttpRequest();

	let method = objectParameters.hasOwnProperty('method') ? objectParameters.method.toUpperCase() : null;
	let contentType = objectParameters.hasOwnProperty('contentType') ? objectParameters.contentType : true;
	let url = objectParameters.hasOwnProperty('url') ? objectParameters.url : null;
	let beforeSend = objectParameters.hasOwnProperty('beforeSend') ? objectParameters.beforeSend : null;
	var data = objectParameters.hasOwnProperty('data') ? objectParameters.data : null;
	if (contentType !== false) {
		if (data !== null && typeof data === "object") {
			data = serialize(data);
		}
	}
	let success = objectParameters.hasOwnProperty('success') ? objectParameters.success : null
	let async = objectParameters.hasOwnProperty('async') ? objectParameters.async : true;
	let error = objectParameters.hasOwnProperty('error') ? objectParameters.error : null;

	xhr.open(method, url, async);
	if (data instanceof FormData === false && method === 'POST') {
		if (contentType) {
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		}
	} else {
		get('input[type="file"]', function(file) {
			if (file && file.files[0]) {
				data.append(file.getAttribute('name'), file.files[0].type);
			}
		})
	}
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

	xhr.onreadystatechange = function() {
		// Befoer sending
		if (beforeSend !== null && xhr.readyState == 2) {
			beforeSend(xhr.readyState);
		}
		// If error
		if (error !== null && xhr.status === 500) {
			error(`Internal server error: ${xhr.status}`);
		} else if (error !== null && xhr.status >= 402 && xhr.status <= 420) {
			error(xhr.status);
		} else if (xhr.status == 400 || xhr.status == 401) {
			error(`bad request & unauthorized error: ${xhr.status}`);
		}
		// Successfully sent
		if (xhr.readyState == 4 && xhr.status === 200) {
			if (success !== null) {
				success(xhr.responseText);
			}
		}
	}

	// Send data
	xhr.send(data !== null ? data : null);
};


// Toggle HTML elements
function toggleHTML(el, newHTML) {
	let elem = el.nodeType ? el : document.querySelector(el);
	let isTrue = false;
	if (elem.children.length > 1) {
		isTrue = elem.classList.toggle('yes');
	} else {
		elem.appendChild(string2node(newHTML))
	}

	if (isTrue) {
		elem.firstElementChild.style.display = '';
		elem.lastElementChild.style.display = 'none';
	} else {
		elem.firstElementChild.style.display = 'none';
		elem.lastElementChild.style.display = '';
	}

	return isTrue;
}

// Document scroll function
function scroll(selector, Duration) {
	let bodyRect = document.body.getBoundingClientRect(),
    	elemRect = document.querySelector(selector).getBoundingClientRect(),
		offset = elemRect.top - bodyRect.top,
		duration = Duration === undefined || Duration === null ? 600 : Duration;

	var initialY = window.pageYOffset;
	var y = offset;
	var baseY = (initialY + y) * 0.5;
	var difference = initialY - baseY;
	var startTime = performance.now();

	function step() {
		var normalizedTime = (performance.now() - startTime) / duration;
		if (normalizedTime > 1) normalizedTime = 1;

		window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
		if (normalizedTime < 1) window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}



// Mark text function
function markText() {
	let arg = arguments[0];
	let selector = arg.container,
		textContent = arg.value.startsWith('.') || arg.value.startsWith('#') ? document.querySelector(arg.value) : arg.value,
		listener = arg.hasOwnProperty('listener') ? arg.listener : null;
	
	let contentContainer = document.querySelector(selector);
	let content = contentContainer.innerHTML;
	let oldContent = [];
	let mark = function(text) {
		let newContent;
		newContent = content.replace(text, '<mark class="highlight">$&</mark>');
		return newContent;
	};

	function engine(txt) {
		let reg = new RegExp(txt, 'gi');
		if (oldContent.length === 0) {
			oldContent.push(contentContainer.innerHTML);
		}

		if (txt.length > 1) {
			contentContainer.innerHTML = mark(reg);
		} else {
			if (oldContent.length) {
				contentContainer.innerHTML = oldContent[0];
			}
		}
	}

	if (listener !== null) {
		textContent[listener] = function() {
			engine(this.value);
		}
	} else {
		(function() {
			engine(textContent);
		})();
	}
	
}