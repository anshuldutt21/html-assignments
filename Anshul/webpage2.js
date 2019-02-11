function validate(){
var em =document.getElementById("email").value;
var emr= /^[a-zA-Z0-9]+\@[a-z]+\.[a-zA-Z]+\.ac\.in$/;
if(em.match(emr)){
	var httpRequest;
  document.getElementById("js").addEventListener('click', makeRequest());

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents();
    httpRequest.open('POST', 'http://172.25.55.8:3000/my_machau_api',true);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}
else{
	 document.getElementById("email").style.border="1px solid #E62F2F";
}
}