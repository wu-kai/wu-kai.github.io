
$('document').ready(function () {
  console.log(marked );
  $.get('../docs/test/index.md', function (d) {
    document.getElementById('content').innerHTML =
      marked.parse(d);
  })
});
