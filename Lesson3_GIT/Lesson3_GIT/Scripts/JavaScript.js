//$(document).ready(function () {

//    //$("#map-canvas").gmap3({
//    //    marker: {
//    //        address: "1930 Dover St, Lakewood CO"
//    //    },
//    //    map: {
//    //        options: {
//    //            zoom: 14
//    //        }
//    //    }
//    //});

//});

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

    var latlng = new google.maps.LatLng(39.746474, -105.092935);

    var mapOptions = {
        center: latlng,
        scrollWheel: false,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var marker = new google.maps.Marker({
        position: latlng,
        url: '/',
        animation: google.maps.Animation.DROP
    });

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    marker.setMap(map);

};