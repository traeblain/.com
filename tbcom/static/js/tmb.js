function title_appear() {
  var window_top = $(window).scrollTop() + 50;
  var div_top = $('#main').offset().top;
  if (window_top > div_top) {
    $('.menu_title').css('opacity', 1);
  } else {
    $('.menu_title').css('opacity', 0);
  }
}

$( function () {
  var ss = new Array(0);
  for(var index = 0; index < $("img").length; index++) {
    var s = $('img').eq(index).attr("title");
    ss.push(s);
    if (s) {
      if (s.indexOf( "alignright" ) >= 0) {
        $("img").eq(index).addClass("alignright");
      } else if (s.indexOf( "alignleft" ) >= 0) {
        $("img").eq(index).addClass("alignleft");
      }
    }
  }
});

$( function () {
  $('.menu_link').toggle(function(){
    $('.topnav').addClass('topnavdrop').show('slow');
  }, function(){
    $('.topnav').removeClass('topnavdrop').show('slow');
  });
});

$(function() {
  $(window).scroll(title_appear);
  title_appear();
});