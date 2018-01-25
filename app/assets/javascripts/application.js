// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function changeSlide(elt, increment){
  var curPos = elt.find('.chosen').index();
  setSlide(elt, curPos + increment);
}

function setSlide(elt, position){
  var slides = elt.children('.slide');
  var circles = elt.parent().find('.circle');
  position = position % slides.length;

  slides.removeClass('chosen');
  circles.removeClass('chosen');
  slides.eq(position).addClass('chosen');
  circles.eq(position).addClass('chosen');
}

function setBreak(method, eltSet, arg){
  var numElts = eltSet.length;
  for(var i = 0; i < numElts; i++)
    method(eltSet.eq(i), arg);
}

$(document).ready(function(){
  // setSlide($('.slideshow'), 0);
  setBreak(setSlide, $('.slideshow'), 0);
  function moveVideo(){
    changeSlide($('#video'),1);
  }
  setInterval(moveVideo, 2000);

  $('.prev-slide').click(function(e){
    changeSlide($(this).parents('.slideshow'), -1);
  });
  $('.next-slide').click(function(e){
    changeSlide($(this).parents('.slideshow'), 1);
  });

  $('span.circle').click(function(e){
    var parent = $(this).parent();
    setSlide(parent.prevAll('.slideshow'), $(this).index());
  });
});
