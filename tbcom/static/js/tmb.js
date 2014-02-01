function videowrapper (element) {
  var wrapper = document.createElement('div');
  wrapper.className = 'videoWrapper';
  wrapper.appendChild(element.cloneNode(true));
  element.parentNode.replaceChild(wrapper, element);
}

document.addEventListener('DOMContentLoaded', function() {
  // Wraps Videos so that they remain responsive
  var elements = document.querySelectorAll('.article-body iframe')
  Array.prototype.forEach.call(elements, function(el, i){
    videowrapper(el);
  });

  // If the image title has alignment class, this makes it a class
  var ss = new Array(0);
  var imagelist = document.querySelectorAll('img');
  for (var index = 0; index < imagelist.length; index++) {
    var s = imagelist.item(index).getAttribute('title');
    ss.push(s);
    if (s) {
      if (s.indexOf( "alignright" ) >= 0) {
        if (imagelist.item(index).classList) {
          imagelist.item(index).classList.add("alignright");
        } else {
          imagelist.item(index).className += ' alignright';
        }
      } else if (s.indexOf( "alignleft" ) >= 0) {
        if (imagelist.item(index).classList) {
          imagelist.item(index).classList.add("alignleft");
        } else {
          imagelist.item(index).className += ' alignleft';
        }
      }
    }
  };

  // Replaces the Ranking text with Stars (requires it to be sole class)
  var ranks = document.querySelectorAll("[class^=stars]");
  for (var i = ranks.length - 1; i >= 0; i--) {
    var starbuild = "<strong>";
    var rank = parseInt(ranks.item(i).getAttribute('class').substr(-1));
    for (var j = rank; j >= 1; j--) {
      var starbuild = starbuild + '<i class="icon-star"></i>';
    }
    for (var j = 5 - rank; j >= 1; j--) {
      var starbuild = starbuild + '<i class="icon-star-empty"></i>';
    }
    ranks.item(i).innerHTML = starbuild + '</strong>';
  }
});
