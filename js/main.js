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

		//This timeline runs through the services section.
		var servicesTimeline = new TimelineMax();
		var servicesScene = new ScrollMagic.Scene({triggerElement: "#services", duration: 0});
		var servicesTween = TweenMax.staggerFrom(".services-item", 1, {opacity: 0, x: -100}, 0.35);
		servicesTimeline
									.add(servicesTween)
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

		//This timeline runs through the left side of the gallery
		var galleryLeftTimeline = new TimelineMax();
		var galleryLeftScene = new ScrollMagic.Scene({triggerElement: "#gallery", duration: 0});
		var galleryLeftTween = TweenMax.from("#gallery-left", 1, {opacity: 0, x: -200});
		galleryLeftTimeline			
									.add(galleryLeftTween);
		galleryLeftScene.setTween(galleryLeftTween);
		controller.addScene(galleryLeftScene);

		//This timeline runs through the right side of the gallery
		var galleryRightTimeline = new TimelineMax();
		var galleryRightScene = new ScrollMagic.Scene({triggerElement: "#gallery", duration: 0});
		var galleryRightTween = TweenMax.from("#gallery-right", 1, {opacity: 0, x: 200});
		galleryRightTimeline			
									.add(galleryRightTween);
		galleryRightScene.setTween(galleryRightTween);
		controller.addScene(galleryRightScene);

		//This timeline runs through the contact section
		var contactScene = new ScrollMagic.Scene({triggerElement: '#contact', duration: 0});
		var contactTween = new TweenMax.from("#contact", 1.5, {opacity: 0, x: -100});
		contactScene.setTween(contactTween);
		controller.addScene(contactScene);

	});

	$(document).ready(function() {
	//This Tween transitions the text on the beginning of the page.
	TweenMax.from(".ml9", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut});
	TweenMax.from("#jumbotron-divider", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.125});
	TweenMax.from(".jumbotron-subtitle", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.25});
	TweenMax.from(".jumbotron-subtext", 1.5, {opacity: 0, scale: 0.85, ease:Power3.easeInOut, delay: 0.375});
	});