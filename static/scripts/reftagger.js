var refTagger = {
  settings: {
    addLogosLink: true,
    bibleReader: "bible.faithlife",
    bibleVersion: "NLT",
    roundCorners: true,
    logosLinkIcon: "light",
    socialSharing: ["google"],
    customStyle : {
      body   : {
        color : "#000000",
        moreLink : {
          color: "#6d6d6d"
        }
      }
    }
  }
};
(function(d, t) {
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = "https://api.reftagger.com/v2/RefTagger.js"
  s.parentNode.insertBefore(g, s)
}(document, "script"))
document.head.insertAdjacentHTML("beforeend", `<style>.rtLibronix img {max-width: unset;display: initial;}</style>`)
