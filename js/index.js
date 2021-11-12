
const { host, protocol, hostname } = location;
const localDocsUrl = `${protocol}//${host}/wu-kai.github.io/`;
const docsUrl = hostname === 'localhost' ? localDocsUrl : '/';
$('document').ready(function () {
  console.log(marked );
  $.get(`${docsUrl}docs/test/index.md`, function (d) {
    console.log(d);
    document.getElementById('content').innerHTML =
      marked.parse(d);
  })
});
