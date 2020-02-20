$(function(){
	$('.product__slider').slick({
		infinite: false,
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		verticalSwiping: true,
		lazyLoad: "ondemand",
		arrows: false,
		dotss: false,
		swipe: true,
		responsive: [
			{
				breakpoint: 1281,
					settings: {
						slidesToShow: 3,
						vertical: false,
						verticalSwiping: false
					}
			},
			{
				breakpoint: 992,
					settings: {
						slidesToShow: 4,
						vertical: false,
						verticalSwiping: false
					}
			},
			{
				breakpoint: 768,
					settings: {
						slidesToShow: 3,
						vertical: false,
						verticalSwiping: false
					}
			}
		]
	});
	$(".product__pic").on("click", function(e) {
		var t = $(this).parent().attr("data-slick-index");
		$(".product__img").attr({
			src: $(this).attr("src"),
			"data-index": t
		})
	});
});
$(function(){
//Slider our_services
$('.slider_our_services').slick({
  infinite: true,
  appendArrows:$('.arrows-slider_our_services'),
  prevArrow:"<span class='left-slider_our_services'><i class='fas fa-angle-double-left'></i></span>",
  nextArrow:"<span class='right-slider_our_services'> <i class='fas fa-angle-double-right'></i></span>",
  slidesToShow: 3,
  slidesToScroll: 1,
  	responsive: [
	{
      breakpoint: 2500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1071,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//Slider our_partners

$('.logo-our_partners').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:false,
  autoplay:true,
  responsive:[
				{
					breakpoint:852,
					settings:{
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint:575,
					settings:{
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint:465,
					settings:{
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			]
});

});

$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

$(function(){
var show_link = document.querySelector(".show_link");
	var modal_cart = document.querySelector(".modal_cart");
	var close_cart = document.querySelector(".close_cart");
	var contacts = document.querySelector(".header_navigation ul li:last-child");
	var modal_contact = document.querySelector(".modal_contact");
	var modal_contact_close = document.querySelector(".modal_contact-close");
	var contactsBottom = document.querySelector(".main_footer-menu ul li:last-child");
	var productBtn = document.querySelector(".popup-link-1");
	var oneClick = document.querySelector(".click");
	var oneClickClose = document.querySelector(".modal-close");

	show_link.addEventListener("click", function(evt){
		evt.preventDefault();
		modal_cart.classList.add("modal-show");
	});
	close_cart.addEventListener("click", function(evt){
		evt.preventDefault();
		modal_cart.classList.remove("modal-show");
	});
	contacts.addEventListener("click", function(evt){
		evt.preventDefault();
		modal_contact.classList.add("modal-show");
	});
	modal_contact_close.addEventListener("click", function(evt){
		evt.preventDefault();
		modal_contact.classList.remove("modal-show");
	});	
	contactsBottom.addEventListener("click", function(evt){
		evt.preventDefault();
		modal_contact.classList.add("modal-show");
	});	
	productBtn.addEventListener("click", function(evt){
		evt.preventDefault();
		oneClick.classList.add("modal-show_flex");
	});	
	oneClickClose.addEventListener("click", function(evt){
		evt.preventDefault();
		oneClick.classList.remove("modal-show_flex");
	});	
});	


	
	
document.body.onload = function()
{
    $(".dot-1").css("animation", "dot-light 2s 0s forwards");
    $(".dot-2").css("animation", "dot-light 2s 0.75s forwards");
    $(".dot-3").css("animation", "dot-light 2s 1.5s forwards");
    $(".dot-4").css("animation", "dot-light 2s 2.25s forwards");
    setTimeout(function(){$(".item-1").css("width", "0");}, 4000);
    setTimeout(function(){$(".item-2").css("height", "0");}, 5000);
    setTimeout(function(){$(".item-3").css("height", "0");}, 5300);
    setTimeout(function(){$(".item-4").css("height", "0");}, 5500);
 
    setTimeout(function(){$(".header").css({"opacity":"1", "transform":"translate(0)"});}, 6100);
    setTimeout(function(){$(".p-1").css({"opacity":"1", "transform":"translate(0)"});}, 6300);
    setTimeout(function(){$(".p-2").css({"opacity":"1", "transform":"translate(0)"});}, 6500);
    setTimeout(function(){$(".p-3").css({"opacity":"1", "transform":"translate(0)"});}, 6700);
 
    setTimeout(function(){$(".preloader").css("visibility", "hidden");}, 7000);
}
//Height conteiners
function setHeaderHeight() {
    var height = $(".slider_header").height();
    $('.bg_header').css({
    height:height+"px" // приравниванием высоту header'a к высоте блока "carousel"
    });
	$('.cirkle_images').css({
    maxHeight:height+"px" // приравниванием высоту header'a к высоте блока "carousel"
    });
}
setHeaderHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeaderHeight ); // обновляем при изменении размеров окна

//Counter
var number = document.querySelector('.description_advertasment_counter'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 5);
			}
		});

//Text animation
var words = document.getElementsByClassName('advantages_word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'advantages_letter advantages_behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'advantages_letter advantages_out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'advantages_letter advantages_in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'advantages_letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



