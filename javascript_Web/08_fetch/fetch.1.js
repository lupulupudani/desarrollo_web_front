function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=intitle:"clave"', true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }



/* function app () {

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

/*     document.querySelector("#btnAjaxItem")
    .addEventListener('click', postDatos)

    document.querySelector("#btnAjaxAdd")
    .addEventListener('click', postDatos) // Añadir 

    function getDatos(ev) {
        let url = ''
        if (ev.target.id == 'btnAjax') {
            url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:"clave"'
        } else { // ev.target.id == 'btnAjaxItem'
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts/'+item
            } else {
                return
            }
        }
        fetch(url)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
}

    function postDatos () {
        let data = {
            title: "El Hobbit",
            author: "JRR Tolkien"}
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept':  'application/json'
        })
        let options = {
            method : 'POST',
            headers: headers,
            body : JSON.stringify(data)}
        let url = 'http://localhost:3000/posts'
        fetch(url, options)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

window.addEventListener('load', app, false) */