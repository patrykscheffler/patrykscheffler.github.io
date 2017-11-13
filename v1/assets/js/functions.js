$( document ).ready(function() {

  smoothScroll(300);
  workBelt();
  workLoad();

});

function smoothScroll(duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').on('click', function() {
    $('.work-belt').addClass('slided');
    $('.work-container').show();
  });

  $('.work-return').on('click', function() {
    $('.work-belt').removeClass('slided');
    $('.work-container').hide(800);
  });

}

function workLoad() {

  $.ajaxSetup({cache: true});

  $('.thumb-container label').on('click', function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/' + newFolder + '.html';

    $('.project-title').text(newTitle);
    $('.project-load').html(spinner).load(newHTML);
  });

}

$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('nav').addClass('moved-navbar');
  } else {
    $('nav').removeClass('moved-navbar');
  }
});
