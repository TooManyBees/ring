---
---
(function() {
  const frames = document.querySelectorAll('iframe');
  const frame = frames[frames.length - 1];
  frame.style.width = "100%";
  window.addEventListener("message", function(e) {
    if (e.origin === "{{site.url}}") {
      if (e.data.src === frame.src && e.data.height) {
        console.debug(`Webring embed ${e.data.src} reports height of ${e.data.height}px`);
        frame.style.height = `${e.data.height}px`;
      }
    }
  });
  function debounce(f) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(f, 500);
    }
  }
  const debouncedPost = debounce(() => {
    frame.contentWindow.postMessage("howTallAreYou", "{{site.url}}");
  });
  debouncedPost();
  window.addEventListener("resize", debouncedPost);
})();
