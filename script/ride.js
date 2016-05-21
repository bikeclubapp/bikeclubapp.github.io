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
    $('#ride-info').addClass('alert alert-success text-center');
    $('<p>To join ride ' + rideId + ' download BikeRide app</p>').appendTo('#ride-info');
}

$(document).ready(function () {
    $("#notify-me").submit(function (event) {
        event.preventDefault();

        var formValues = JSON.stringify({email: $(this).serializeArray()[0].value});

        $.ajax({
            url: 'http://bikeclubbackend-prod.eu-west-1.elasticbeanstalk.com/notify-me',
            type: "POST",
            data: formValues,
            contentType: "application/json; charset=utf-8",
            success: function () {
                $('#email-block').addClass('hidden');
                $('#ride-info').addClass('alert alert-success text-center');
                $('<p>We recorded your email, thanks!</p>').appendTo('#ride-info');
            },
            error: function (result) {
                $('#email-block').addClass('hidden');
                $('#ride-info').addClass('alert alert-danger text-center');
                $('<p>An error happened. Try again later !</p>').appendTo('#ride-info');
            }
        });

        return false;
    });
});