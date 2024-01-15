function returnFile(Fdata) {
content = "";
waiting = true;
  fdata = Fdata
  var xhttp = new XMLHttpRequest();
  z = 0
  //xhttp.open("GET", "https://cors-anywhere.herokuapp.com/" + fdata, false);
  xhttp.open("GET", fdata, false);
  xhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
  xhttp.send();
  //alert(z)
  //alert(xhttp.responseText)
  return xhttp.responseText;
}
