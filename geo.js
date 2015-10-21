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
        console.log("latitude: " + position.coords.latitude);
        console.log("longitude: " + position.coords.longitude);

    }
}
window.addEventListener('load', function(event) {
    displayLocation(event);
}, false);
