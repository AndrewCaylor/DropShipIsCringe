document.getElementById("ali").onclick = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const imageLink = urlParams.get('url');

  navigator.clipboard.writeText(imageLink).then(function() {
    window.open("https://www.alibaba.com");
    // window.open(imageLink);
  });
}