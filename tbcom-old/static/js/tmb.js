(function ($) {
  /**
   * Skeleton V1.1
   * Copyright 2011, Dave Gamache
   * www.getskeleton.com
   * Free to use under the MIT license.
   * http://www.opensource.org/licenses/mit-license.php
   * 8/17/2011
   */
  // hash change handler
  function hashchange () {
    var hash = window.location.hash
      , el = $('ul.tabs [href*="' + hash + '"]')
      , content = $(hash)

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(Zepto); //changed from jQuery to Zepto

(function($) {
    // only do this if not on a touch device
    if (!('ontouchend' in window)) {
        $(document).delegate('body', 'click', function(e) {
            $(e.target).trigger('tap');
        });
    }
})(window.Zepto);

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

function getScrollingPosition() {
  var position = [0, 0];
  if (typeof window.pageYOffset != 'undefined')
    {
      position = [
      window.pageXOffset,
      window.pageYOffset
      ];
    } 
  else if (typeof document.documentElement.scrollTop != 'undefined' && document.documentElement.scrollTop > 0) 
  {
    position = [
    document.documentElement.scrollLeft,
    document.documentElement.scrollTop
    ];
  }
  else if (typeof document.body.scrollTop != 'undefined')
  {
    position = [
    document.body.scrollLeft,
    document.body.scrollTop
    ];
  }
  return position;
}

function title_appear() {
    var window_top = getScrollingPosition()[1] + 50;
    var div_top = $('#main').offset().top;
    if (window_top > div_top) {
      $('.menu_title').removeClass('hide_title');
    } else {
      $('.menu_title').addClass('hide_title');
}

window.onscroll = function() 
{
  title_appear();
    } 
};

$( function () {
  $('.menu_link').tap(function(){
    $('.topnav').toggleClass('topnavdrop');
  });
  $('.article-content iframe').wrap('<div class="videoWrapper"></div>')
  title_appear();
});