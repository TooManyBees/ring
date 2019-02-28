function maybeReplaceStyle() {
  let stylesheet = location.search.match(/(?:\?|&)stylesheet=(.*?)(?:&|$)/);
  stylesheet = stylesheet && stylesheet[1];

  if (stylesheet) {
    const defaultStyle = document.getElementById('default-style');
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", stylesheet);
    document.head.replaceChild(link, defaultStyle);
  }
}

function goToRandomSite() {
  return fetch("sites.json")
    .then(r => r.json())
    .then(sites => {
      const thisUri = document.head.querySelector('meta[name="site-uri"]').content;
      const filtered = sites.filter(site => site.uri !== thisUri);
      const picked = filtered[Math.floor(Math.random() * filtered.length)];
      if (picked) {
        return window.parent.location = picked.uri;
      }
    });
}

function reportHeight(source, targetOrigin) {
  source.postMessage({
    height: document.body.offsetHeight,
    src: location.href,
  }, targetOrigin || "*");
}

window.addEventListener("load", function() {
  document.querySelector('.link.random').addEventListener('click', function(e) {
    e.preventDefault();
    goToRandomSite();
  })
});

window.addEventListener("message", function(e) {
  if (e.data === "howTallAreYou") {
    reportHeight(e.source, e.origin);
  };
});

window.addEventListener("load", function() {
  reportHeight(window.parent);
});

maybeReplaceStyle();
