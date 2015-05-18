//comprueba que el sitio cargue por completo
$('document').ready(function() {
    //inicializa  tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //valida email  
    $("#main-contact-form").validate()

    //filtro de provincias
    $('select#provincia').on('change', function() {
        var provincia = $("#provincia").val();
        optionswitch(provincia);
        if (provincia == 'AL') {
            $portfolio.isotope({
                filter: '.alajuela'
            });
        }
        if (provincia == 'CA') {
            $portfolio.isotope({
                filter: '.cartago'
            });
        }
        if (provincia == 'GU') {
            $portfolio.isotope({
                filter: '.guanacaste'
            });
        }
        if (provincia == 'HE') {
            $portfolio.isotope({
                filter: '.heredia'
            });
        }
        if (provincia == 'LI') {
            $portfolio.isotope({
                filter: '.limon'
            });
        }
        if (provincia == 'PU') {
            $portfolio.isotope({
                filter: '.puntarenas'
            });
        }
        if (provincia == 'SJ') {
            $portfolio.isotope({
                filter: '.san_jose'
            });
        }
    });

    //filtro de hoteles
    $('select#hotel').on('change', function() {
        var val = $("#hotel").val();
        if (val == 'Al1') {
            $portfolio.isotope({
                filter: '.cartago'
            });
        }
        if (val == 'Ca1') {
            $portfolio.isotope({
                filter: '.alajuela'
            });
        }
        if (val == 'Gu1') {
            $portfolio.isotope({
                filter: '.guanacaste'
            });
        }
        if (val == 'He1') {
            $portfolio.isotope({
                filter: '.limon'
            });
        }
        if (val == 'Li1') {
            $portfolio.isotope({
                filter: '.puntarenas'
            });
        }
        if (val == 'Pu1') {
            $portfolio.isotope({
                filter: '.heredia'
            });
        }
        if (val == 'Sj1') {
            $portfolio.isotope({
                filter: '.sj1'
            });
        }
        if (val == 'Sj2') {
            $portfolio.isotope({
                filter: '.sj2'
            });
        }
    });
    //modal grande
    $(".modal-wide").on("show.bs.modal", function() {
        initialize();
        var height = $(window).height() - 325;
        $(this).find(".modal-body").css("max-height", height);
    });
});

//funciones para el filtro de provincia
function optionswitch(myfilter) {
    //Populate the optionstore if the first time through
    if ($('#optionstore').text() == "") {
        $('option[class^="sub-"]').each(function() {
            var optvalue = $(this).val();
            var optclass = $(this).prop('class');
            var opttext = $(this).text();
            optionlist = $('#optionstore').text() + "@%" + optvalue + "@%" + optclass + "@%" + opttext;
            $('#optionstore').text(optionlist);
        });
    }
    // Eliminar todo
    $('option[class^="sub-"]').remove();

    // Poner las cosas se filtra de nuevo
    populateoption = rewriteoption(myfilter);
    $('#hotel').html(populateoption);
}

function rewriteoption(myfilter) {
    // Vuelva a escribir sólo las cosas se filtra de nuevo en la opción
    var options = $('#optionstore').text().split('@%');
    var resultgood = false;
    var myfilterclass = "sub-" + myfilter;
    var optionlisting = "";

    myfilterclass = (myfilter != "") ? myfilterclass : "all";

    // Primera variable es siempre el valor, la segunda es siempre la clase, tercero es siempre el texto
    for (var i = 3; i < options.length; i = i + 3) {
        if (options[i - 1] == myfilterclass || myfilterclass == "all") {
            optionlisting = optionlisting + '<option value="' + options[i - 2] + '" class="' + options[i - 1] + '">' + options[i] + '</option>';
            resultgood = true;
        }
    }
    if (resultgood) {
        return optionlisting;
    }
}
//google maps

function initialize()
{
        var latlng = new google.maps.LatLng(9.8572287,-83.7343337);
        var latlng2 = new google.maps.LatLng(10.198112,-84.238417);
        var latlng3 = new google.maps.LatLng(9.8805463,-85.5228996);
        var latlng4 = new google.maps.LatLng(9.7359908,-82.8479112);
        var latlng5 = new google.maps.LatLng(9.969136,-84.739718);
        var latlng6 = new google.maps.LatLng(10.1687975,-84.1478706);
        var latlng7 = new google.maps.LatLng(9.943299,-84.07713);
        var latlng8 = new google.maps.LatLng(9.945688,-84.105157);        
        var mapOptions = {
            zoom: 12,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var mapOptions2 = {
            zoom: 12,
            center: latlng2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions3 = {
            zoom: 12,
            center: latlng3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions4 = {
            zoom: 12,
            center: latlng4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions5 = {
            zoom: 12,
            center: latlng5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions6 = {
            zoom: 12,
            center: latlng6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions7 = {
            zoom: 12,
            center: latlng7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapOptions8 = {
            zoom: 12,
            center: latlng8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        var map = new google.maps.Map(document.getElementById('map-container'),mapOptions);
        var map2 = new google.maps.Map(document.getElementById('map-container2'),mapOptions2);
        var map3 = new google.maps.Map(document.getElementById('map-container3'),mapOptions3);
        var map4 = new google.maps.Map(document.getElementById('map-container4'),mapOptions4);
        var map5 = new google.maps.Map(document.getElementById('map-container5'),mapOptions5);
        var map6 = new google.maps.Map(document.getElementById('map-container6'),mapOptions6);
        var map7 = new google.maps.Map(document.getElementById('map-container7'),mapOptions7);
        var map8 = new google.maps.Map(document.getElementById('map-container8'),mapOptions8);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Hotel 1"
        });

        var marker2 = new google.maps.Marker({
            position: latlng2,
            map: map2,
            title: "Hotel 2"
        });
        var marker3 = new google.maps.Marker({
            position: latlng3,
            map: map3,
            title: "Hotel 3"
        });
        var marker4 = new google.maps.Marker({
            position: latlng4,
            map: map4,
            title: "Hotel 4"
        });
        var marker5 = new google.maps.Marker({
            position: latlng5,
            map: map5,
            title: "Hotel 5"
        });
        var marker6 = new google.maps.Marker({
            position: latlng6,
            map: map6,
            title: "Hotel 6"
        });
        var marker7 = new google.maps.Marker({
            position: latlng7,
            map: map7,
            title: "Hotel 7"
        });
        var marker8 = new google.maps.Marker({
            position: latlng8,
            map: map8,
            title: "Hotel 8"
        });

        google.maps.event.addListener(map, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map.panTo(marker.getPosition());
            }, 1000);
        });

        google.maps.event.addListener(map2, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map2.panTo(marker2.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map3, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map3.panTo(marker3.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map4, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map4.panTo(marker4.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map5, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map5.panTo(marker5.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map6, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map6.panTo(marker6.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map7, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map7.panTo(marker7.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(map8, 'center_changed', function() {
            // 1 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map8.panTo(marker8.getPosition());
            }, 1000);

        });
        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
        });
        google.maps.event.addListener(marker2, 'click', function() {
            map2.setZoom(8);
            map2.setCenter(marker2.getPosition());
        });
        google.maps.event.addListener(marker3, 'click', function() {
            map3.setZoom(8);
            map3.setCenter(marker3.getPosition());
        });
        google.maps.event.addListener(marker4, 'click', function() {
            map4.setZoom(8);
            map4.setCenter(marker4.getPosition());
        });
        google.maps.event.addListener(marker5, 'click', function() {
            map5.setZoom(8);
            map5.setCenter(marker5.getPosition());
        });
        google.maps.event.addListener(marker6, 'click', function() {
            map6.setZoom(8);
            map6.setCenter(marker6.getPosition());
        });
        google.maps.event.addListener(marker7, 'click', function() {
            map7.setZoom(8);
            map7.setCenter(marker7.getPosition());
        });
        google.maps.event.addListener(marker8, 'click', function() {
            map8.setZoom(8);
            map8.setCenter(marker8.getPosition());
        });

        $("div[id^=myModal]").on("shown.bs.modal", function(e) {
            google.maps.event.trigger(map, "resize");
            map.setCenter(latlng);
            google.maps.event.trigger(map2, "resize");
            map2.setCenter(latlng2);
            google.maps.event.trigger(map3, "resize");
            map3.setCenter(latlng3);
            google.maps.event.trigger(map4, "resize");
            map4.setCenter(latlng4);
            google.maps.event.trigger(map5, "resize");
            map5.setCenter(latlng5);
            google.maps.event.trigger(map6, "resize");
            map6.setCenter(latlng6);
            google.maps.event.trigger(map7, "resize");
            map7.setCenter(latlng7);
            google.maps.event.trigger(map8, "resize");
            map8.setCenter(latlng8);
        });
}