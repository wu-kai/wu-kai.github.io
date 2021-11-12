

$('document').ready(function () {
  jumpPage('collect', 'collect')
});


function jumpPage(url, id){
  const { host, protocol, hostname } = location;
  const localDocsUrl = `${protocol}//${host}/wu-kai.github.io/`;
  const docsUrl = hostname === 'localhost' ? localDocsUrl : '/';
  $.get(`${docsUrl}docs/${url}.md`, function (d) {
    console.log(d);
    document.getElementById(id || 'content').innerHTML =
      marked.parse(d);
  })
}

function closePage(){
  document.getElementById('content').innerHTML = '';
}
