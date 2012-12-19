(function($) {
    // only do this if not on a touch device
    if (!('ontouchend' in window)) {
        $(document).delegate('body', 'click', function(e) {
            $(e.target).trigger('tap');
        });
    }
})(window.jQuery);

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


/*
function jsPaginator(LoadUrl) {
  $('.paginator').html('<li><a href="' + LoadUrl + '">Load More Posts</a></li>');
}

$( function() {
  $('.paginator').addClass('postloader');
  var toLoadUrl = $('.next-page').attr('href');
  jsPaginator(toLoadUrl);
  $('.postloader a').on('click', function () {
    $('#main').append('<div class="addon"><span><i class="icon-spin"></i></span> One Moment Please...</div>');
    $.ajax({
      type: 'GET',
      url: toLoadUrl,
      dataType: 'html',
      cache: false,
      success : function(data){
        var zObj = $(data);
        console.log(zObj.html());
        $('section.main ul').append( zObj.find('section.main ul li.article-list-item') );
        var newLoadUrl = zObj.find('.next-page').attr('href');
        jsPaginator(newLoadUrl);
        $('.addon').remove();
      },
      error : function(xhr, errorType, error){
        $('.paginator').html('<li>No More Posts to Load</li>');
      }
    });
    return false;
  });
}); */


$( function () {
  $('.article-body iframe').wrap('<div class="videoWrapper"></div>');
  // $('.search-button').on('click', function (e) {
  //   var query = e.prev('.search-form').val();
  //   var link = e.attr('href');
  //   var fullsearch = link + query;
  //   e.attr('href', fullsearch);
  //   return false;
  // });
  $('.search-form').on('keyup', function () {
    var query = $(this).val();
    var link = $(this).next('.search-button').attr('href').split('?q=')[0];
    var fullsearch = link + '?q=' + query;
    $(this).next('.search-button').attr('href', fullsearch);
  });
});
