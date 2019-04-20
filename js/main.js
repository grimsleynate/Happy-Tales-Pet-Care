$(document).ready(function () {
	document.getElementsByTagName("html")[0].style.visibility = "visible";
});

//sets up a function to be run
$(function () {
	$(document).scroll(function () {
		//defines $nav as the css class bg-light
		var $nav = $(".bg-transparent");
		//defines $navLink as the css class a.nav-link
		var $navLink = $("a.nav-link");
		//defines $navBrand as the css class .navbar-brand
		var $navBrand = $(".navbar-brand");
		//adds the scrolled css class to the bg-light css class when the user has
		//scrolled further than the navbar's height.
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		$navLink.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		$navBrand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	//we are initiating the controller. Usually you only need one controlller per page.
	var controller = new ScrollMagic.Controller();

	//This timeline runs through the about us card
	var aboutUsTimeline = new TimelineMax();
	var aboutUs = TweenMax.from("#about-us", 1, {opacity: 0, scale: .85});
	var aboutUsText = TweenMax.staggerFrom(".about-us-text", 1, {opacity: 0, scale: .85}, 0.25);
	aboutUsTimeline
								.add(aboutUs)
								.add(aboutUsText)	;
	var aboutUsScene = new ScrollMagic.Scene({offset: 175, duration: 0});
	aboutUsScene.setTween(aboutUsTimeline);
	controller.addScene(aboutUsScene);

	//This timeline runs trhough the services section.
	var servicesTimeline = new TimelineMax();
	var servicesScene = new ScrollMagic.Scene({triggerElement: "#services", duration: 0});
	var dogWalkingTween = TweenMax.from(".services-column", 1, {opacity: 0, x:-100});
	servicesTimeline
								.add(dogWalkingTween)
	servicesScene.setTween(servicesTimeline);
	controller.addScene(servicesScene);

	//This timeline runs through the why choose section
	var whyChooseTimeline = new TimelineMax();
	var whyChooseScene = new ScrollMagic.Scene({triggerElement: "#why-choose", duration: 0});
	var whyChooseTween = TweenMax.staggerFrom(".why-choose-col", 1, {opacity: 0, scale: 1.2}, 0.25);
	whyChooseTimeline
								.add(whyChooseTween);
	whyChooseScene.setTween(whyChooseTimeline);
	controller.addScene(whyChooseScene);

	//This timeline runs through the gallery
	var galleryTimeline = new TimelineMax;
	var galleryScene = new ScrollMagic.Scene({triggerElement: ".gallery-bg", duration: 0});
	var galleryTween = new TweenMax.staggerFrom(".gallery-img", 2, {
		onUpdateParams:["{self}"],
		onUpdate:function(tl){
			var tlp = (tl.progress()*100)>>0;
			TweenMax.set('.gallery-img' ,{
				'-webkit-filter':'grayscale(' + (100 - tlp) + '%' + ')',
				'filter':'grayscale(' + tlp + '%' + ')'
			});	
		},
		scale: 0.9
	}, 0.3);
	galleryTimeline.add(galleryTween);
	galleryScene.setTween(galleryTimeline);
	controller.addScene(galleryScene);

	//This timeline runs through the contact section
	var contactScene = new ScrollMagic.Scene({triggerElement: '#contact', duration: 0});
	var contactTween = new TweenMax.from("#contact", 1.5, {opacity: 0, x: -100});
	contactScene.setTween(contactTween);
	controller.addScene(contactScene);

});

//This Tween transitions the text on the beginning of the page.
TweenMax.from(".ml9", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut});
TweenMax.from("#jumbotron-image", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.125});
TweenMax.from(".jumbotron-subtitle", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.25});
TweenMax.from(".jumbotron-subtext", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.375});
