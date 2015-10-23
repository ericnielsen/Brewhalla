var term ='Anaheim';
var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:1339/proximity/data/' + term);
    request.send();
    var getData = JSON.parse(request.responseText);
    console.log(getData);