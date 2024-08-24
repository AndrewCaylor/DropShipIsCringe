document.getElementById("ali").onclick = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('url');

  navigator.clipboard.writeText(myParam).then(function() {
    window.open("https://www.alibaba.com");
  });
}