function displayLocation() {
    console.log('test');
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
}
window.addEventListener('load', function(event) {
    displayLocation(event);
}, false);

