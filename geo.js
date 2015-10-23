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
        console.log(lat);
        displayCities();

        function displayCities() {
            var brewrequest = new XMLHttpRequest();
            brewrequest.open('GET', 'http://localhost:1339/location/data/'+lat+','+long+'');
            brewrequest.send();
            function newRequest(){
                var getData = JSON.parse(brewrequest.responseText);
                console.log(getData.businesses[0].name);
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