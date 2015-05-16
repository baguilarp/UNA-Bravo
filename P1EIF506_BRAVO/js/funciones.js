//comprueba que el sitio cargue por completo
$('document').ready(function() {
    //inicializa  tooltip
    $('[data-toggle="tooltip"]').tooltip()
	
	//valida email
    var elements = $("input[type!='submit'], textarea, select");
    elements.focus(function() {
        $(this).parents('li').addClass('highlight');
    });
    elements.blur(function() {
        $(this).parents('li').removeClass('highlight');
    });


    $("#main-contact-form").validate()
	
	//filtro de provincias
	$( "#provincia" ).click(function() {
		var provincia = $( "#provincia" ).val();
		if (provincia == 'AL'){
			$portfolio.isotope({ filter: '.alajuela' });
		}
		if (provincia == 'CA'){
			$portfolio.isotope({ filter: '.cartago' });
		}
		if (provincia == 'GU'){
			$portfolio.isotope({ filter: '.guanacaste' });
		}
		if (provincia == 'HE'){
			$portfolio.isotope({ filter: '.heredia' });
		}
		if (provincia == 'LI'){
			$portfolio.isotope({ filter: '.limon' });
		}
		if (provincia == 'PU'){
			$portfolio.isotope({ filter: '.puntarenas' });
		}
		if (provincia == 'SJ'){
			$portfolio.isotope({ filter: '.san_jose' });
		}
	});
	
});