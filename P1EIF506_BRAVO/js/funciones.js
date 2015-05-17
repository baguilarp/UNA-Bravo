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
				filter: '.san_jose1'
			});
		}
		if (val == 'Sj2') {
			$portfolio.isotope({
				filter: '.san_jose2'
			});
		}
	});

});


function optionswitch(myfilter) {
	// Rellenar el optionstore si la primera vez a través de
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

$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 325;
  $(this).find(".modal-body").css("max-height", height);
});