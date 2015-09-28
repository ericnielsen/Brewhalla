function windowShift() {
    window.scrollTo(0, 400);
}
function displayCities(event) {
    var term =event.target.textContent;
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:1337/search/data/' + term);
    request.send();
    function newRequest(){
        var resetBrewinfo=document.getElementById('datacontent');
        resetBrewinfo.textContent="";
        window.scrollTo(0,500);
        var clickedName=event.target;
        var messageText='Breweries located in ' + clickedName.textContent + ':';
        var messageDiv=document.getElementById('message');
        messageDiv.textContent=messageText;
        var getData = JSON.parse(request.responseText);
        for(var i=0;i<getData.businesses.length;i++){
            var dataObject = getData.businesses[i];
            var dataCity=(dataObject.location.city);
            if (dataCity==term){
                for (var x= 0; x < dataObject.name[x].length; x++){
                    var brewName = document.createElement("p");
                    brewName.setAttribute('class','nametitle');
                    brewName.insertAdjacentHTML('beforeend', "<a href=" + dataObject.url + ">" + dataObject.name +'</a>');
                    var brewAdd = document.createElement("p");
                    brewAdd.textContent = "Address : " + dataObject.location.display_address;
                    brewAdd.setAttribute('class','maplaunch');
                    var brewPhone = document.createElement("p");
                    brewPhone.textContent = "Phone Number : " + dataObject.phone;
                    var brewRating = document.createElement("p");
                    brewRating.insertAdjacentHTML('beforeend', "Yelp  Rating :  " + "<img src =" + dataObject.rating_img_url_large + ">");
                    var dataDiv = document.createElement("div");
                    dataDiv.setAttribute('class', ' col-md-8');
                    dataDiv.setAttribute('id','datadiv');
                    var destDiv = document.getElementById('datacontent');
                    destDiv.appendChild(dataDiv);
                    dataDiv.appendChild(brewName);
                    dataDiv.appendChild(brewAdd);
                    dataDiv.appendChild(brewPhone);
                    dataDiv.appendChild(brewRating);
                }
            }
        }
    }
    request.addEventListener('load', function(theEvent) {
        newRequest(theEvent);
    }, false);
}
function mapLaunch() {
    var target = event.target;
    var targetData = target.getAttribute('class');
    if (targetData == 'maplaunch'){
        target.style.color ="black";
        target.insertAdjacentHTML('beforeend', '<iframe id= "googleAPI" width="1000" height="1000" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + target.textContent + '&key=AIzaSyCy3X8OYdnCP_zrvCXHOCeCLQwktEMhJdA"></iframe>')
        var storage = target.textContent;
        target.addEventListener('mouseleave', function() {
            target.textContent = storage;
            target.style.color="white";
        });
    }
}
var viewShift = document.getElementById('dropdownMenu1');
viewShift.addEventListener('click', function() {
    windowShift()
}, true);
var cityList = document.getElementsByTagName('ul');
cityList[0].addEventListener('click', function(event) {
    displayCities(event);
}, false);
var addressLoc = document.getElementById('datacontent');
addressLoc.addEventListener('mouseenter', function(event){
    mapLaunch(event)
}, true);