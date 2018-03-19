// this function will work together to get weather information for the current location and populate a web page with the data
'use strict';

// call the function to get our location
getGeoLocation();

// gets longitude and latitude of current location
function getGeoLocation() {
    const STATUS = document.getElementById('status');
    STATUS.innerHTML = 'Getting Location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const LAT = position.coords.latitude;
            const LONG = position.coords.longitude;

            // conbine the values
            const LOCALE = LAT + "," + LONG;
            console.log('Lat and Long are: ${LOCALE}.');

            // call getData function, send locale
            getData(LOCALE);
        })
    } else {
        STATUS.innerHTML = "Your browser doesn't support GeoLocation or it is not enabled!";
    } // end else
} //  end getGeoLocation
