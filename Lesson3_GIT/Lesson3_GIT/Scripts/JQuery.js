$(function () {
    alert('Well Hello There');

    $("#map-canvas").width("800px").height("500px").gmap3({
        marker:{address: "1930 Dover St, Lakewood CO"
        },
        map: {
            options: {
                zoom: 14
                     }
             }
    });
      
});

