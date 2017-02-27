function onScrollInit(items, trigger) {
  items.each(function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
    osElement.css({
      '-wbkit-animation-delay' : osAnimationDelay,
      '-moz-animation-delay' : osAnimationDelay,
      '-ms-animation-delay' : osAnimationDelay,
      'animation-delay' : osAnimationDelay
    });

    var osTrigger = (trigger) ? trigger : osElement;

    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '85%'
                    });
  });
}


$(window).load(function() {
  setTimeout(function(){
    $('.loader').fadeOut(300);
    setTimeout(function() {
      $('.preloader').slideUp(300, function() {
        $('.preloader').css('display', 'none');
      });
    }, 500);
  }, 1000);
});

var isExpanded = true;
var h;

$(document).ready(function(){

  onScrollInit($('.os-animation'));

  h = $(window).height();

  $('#hamburger').click(function() {
    $(this).toggleClass("open");
    if($('#nav').hasClass("inexistent"))
    {
      console.log("show");
      $('#navBurger').removeClass("colored");
      $('#nav').removeClass("inexistent");
      $('#root').css("overflow", "hidden");
      setTimeout(function(){
        $('#nav').removeClass("invisible");
      }, 20);
    }
    else {
      console.log("hide");
      var hy = $(window).scrollTop();
      console.log(h);
      console.log(hy);
      if(hy > h){
        $('#navBurger').addClass("colored");
        console.log("dau cu alb");
      }
      $('#root').css("overflow", "auto");
      $('#nav').addClass("invisible");
      setTimeout(function(){
        $('#nav').addClass("inexistent");
      }, 200);
    }
  });
});

$(window).scroll(function () {
		var wScroll = $(this).scrollTop();

    var $hbg = $('#navBurger');

		var f = ((-150 / h) * wScroll + 100) / 100;
    var op = Math.max(f, 0);

    var iop = 1 - op;
		$('#logo').css({ 'opacity': op, 'top': wScroll/2.8 });
    //('.cover').css({'background-position':'center ' + (wScroll/1.8) + 'px'})
    //$('.cover').css({'top': wScroll/5.8});


    if(wScroll > h && !$hbg.hasClass("colored"))
    {
      $hbg.addClass("colored");
    }
    else if(wScroll <= h && $hbg.hasClass("colored"))
    {
      $hbg.removeClass("colored");
    }
	}
);
