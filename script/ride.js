var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var rideId = getUrlParameter('ride');

if (typeof rideId != 'undefined') {
    $('#ride-check').addClass('alert alert-success text-center');
    $('<p>To join ride ' + rideId + ' download BikeRide app</p>').appendTo('#ride-check');
}