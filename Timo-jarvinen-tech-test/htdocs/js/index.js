if ( $('.home').length ){

	$('.wrapper-dropdown-3').on('click',function(e){
		e.stopPropagation();
		$('.wrapper-dropdown-3').removeClass('active');
		$(".home-banner-dropdown-icon").toggleClass('flip');
		$(this).parentsUntil('section').removeClass('zfix');
    	$(this).toggleClass('active');
    	if ( !$('.fancy-search').hasClass('zfix') ){
	    	$(this).parentsUntil('section').toggleClass('zfix');
    	}
  	});
	$('.wrapper-dropdown-3 li').on('click',function(){
		$this = $(this);
		$this.toggleClass('active');
		$(".home-banner-dropdown-icon").toggleClass('flip');
		$this.parent().parent().find('>span').text($this.text());

		$(".home-banner-dropdown-icon").toggleClass('flip');
		setTimeout(function(){
			$('.wrapper-dropdown-3').removeClass('active').parentsUntil('section').removeClass('zfix');
			$('.wrapper-dropdown-3').find('.home-banner-dropdown-icon').removeClass('ion-chevron-up');
		},500);
  	});

	$('.wrapper-dropdown-3 li a').on('click',function(e){
		 e.preventDefault();
	});

	$('body').on('click',function(){
		$('.wrapper-dropdown-3').removeClass('active').delay(300).parentsUntil('section').removeClass('zfix');
		$('.wrapper-dropdown-3').find('.home-banner-dropdown-icon').removeClass('ion-chevron-up');
	});

}

if ( $('#gradient').length ){
var colors = new Array(
  [36,87,118],
  [43,185,140],
  [43,185,140],
  [36,87,118],
  [36,87,118],
  [43,185,140]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.004;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgba("+r1+","+g1+","+b1+","+0.9+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgba("+r2+","+g2+","+b2+","+0.9+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}
setInterval(updateGradient,10);
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
	dynamicBullets: true,
  },
  breakpoints: {
	1170: {
	  slidesPerView: 3,
	  spaceBetween: 30,
	},
	768: {
	  slidesPerView: 2,
	  spaceBetween: 30,
	},
	480: {
	  slidesPerView: 1,
	  spaceBetween: 10,
	}
  }
});

$('body').on('click','.video',function(e){
	e.preventDefault();
	$('#video-modal').addClass('in').css('display','block');
	var title = $(this).find('p:first').text();
	var eName = $(this).data('youtube');
	$( ".modal-title" ).html( title );
	$( ".modal-body" ).html( '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+eName+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
});

$('body').on('click','.modal .close',function(){
	$('#video-modal').css('display', 'none');
});
