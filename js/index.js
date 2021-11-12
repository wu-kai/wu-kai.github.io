
$('document').ready(function () {
  console.log(marked );
  $.get('../docs/test/index.md', function (d) {
    console.log(d);
  })
});
