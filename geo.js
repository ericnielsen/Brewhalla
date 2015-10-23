function displayLocation() {
    getLocation();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:1339/location/id/' + lat +'/' +long + '');
        request.send();
        displayRecs();
        function displayRecs() {
            var brewrequest = new XMLHttpRequest();
            brewrequest.open('GET', 'http://localhost:1339/location/data/'+lat+','+long+'');
            brewrequest.send();
            function newRequest(){
                var getData = JSON.parse(brewrequest.responseText);
                var destDiv=document.getElementById('reccontent');
                var rowDiv=document.createElement("div");
                rowDiv.setAttribute('class','row');
                destDiv.appendChild(rowDiv);
                var recText = document.createElement('p');
                recText.setAttribute('id','rectext');
                recText.textContent='Brewhalla recommends breweries based on your location and what you like!';
                var textHome = document.getElementById('texthome');
                textHome.appendChild(recText);
                for(var l=0;l<3;l++){
                    var dataObject = getData.businesses[l];
                    for (var i=0; i<3;i++){
                        var brewName=document.createElement("p");
                        brewName.setAttribute('class','recnametitle');
                        brewName.insertAdjacentHTML('beforeend', "<a href=" + dataObject.url + ">" + dataObject.name +'</a>');
                        var brewAdd=document.createElement("p");
                        brewAdd.textContent = "Address : " + dataObject.location.display_address;
                        brewAdd.setAttribute('class','maplaunch');
                        var brewPhone=document.createElement("p");
                        brewPhone.textContent = "Phone Number : " + dataObject.phone;
                        var brewRating=document.createElement("p");
                        brewRating.insertAdjacentHTML('beforeend', "Yelp  Rating :  " + "<img src =" + dataObject.rating_img_url_large + ">");
                        var recDiv=document.createElement("div");
                        recDiv.setAttribute('class', ' col-md-4 recDiv');
                    }
                    for (var infoBlock= 0;infoBlock<dataObject.name[infoBlock].length; infoBlock++){
                        rowDiv.appendChild(recDiv);
                        recDiv.appendChild(brewName);
                        recDiv.appendChild(brewAdd);
                        recDiv.appendChild(brewPhone);
                        recDiv.appendChild(brewRating);
                    }
                }
            }
            brewrequest.addEventListener('load', function(theEvent) {
                newRequest(theEvent);
            }, false);
        }
    }
}
window.addEventListener('load', function(event) {
    displayLocation(event);
}, false);

function mapLaunch() {
    var target = event.target;
    var targetData = target.getAttribute('class');
    if (targetData == 'maplaunch'){
        target.style.color ="black";
        target.insertAdjacentHTML('beforeend','<iframe ' +
            'id="googleAPI" ' +
            'width="1000" ' +
            'height="1000" ' +
            'frameborder="0" ' +
            'style="border:0" ' +
            'src="https://www.google.com/maps/embed/v1/place?' +
            'q=' + target.textContent +
            '&key=AIzaSyCy3X8OYdnCP_zrvCXHOCeCLQwktEMhJdA">' +
            '</iframe>');
        var storage = target.textContent;
        function clearMap(){
            target.textContent=storage;
            target.style.color="white";
        }
        target.addEventListener('mouseleave', function() {
            clearMap() },true);
    }
}
var addressLoc = document.getElementById('reccontent');
addressLoc.addEventListener('mouseenter', function(event){
    mapLaunch(event)
}, true);