/*(function($) {
    // only do this if not on a touch device
    if (!('ontouchend' in window)) {
        $(document).delegate('body', 'click', function(e) {
            $(e.target).trigger('tap');
        });
    }
})(window.Zepto);*/

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
  $('.article-body iframe').wrap('<div class="videoWrapper"></div>');
});

$( function () {
  var ranks = $("[class^=stars]");
  for (var i = ranks.length - 1; i >= 0; i--) {
    var starbuild = "";
    var rank = parseInt(ranks.eq(i).attr('class').substr(-1))
    for (var j = rank; j >= 1; j--) {
      var starbuild = starbuild + '<i class="icon-star"></i>';
    }
    for (var j = 5 - rank; j >= 1; j--) {
      var starbuild = starbuild + '<i class="icon-star-empty"></i>';
    }
    ranks.eq(i).children('strong').html(starbuild);
  };
});
