  //comprueba que el sitio cargue por completo
  $('document').ready(function() {
	  //inicializa  tooltip
	  $('[data-toggle="tooltip"]').tooltip()
	  
	  //valida email	
	  $("#main-contact-form").validate()   
	  
	  //filtro de provincias
		$('select#provincia').on('change',function(){
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
		
		//filtro de hoteles
		$('select#hotel').on('change',function(){	
		var val = $("#hotel").val();	
			if (val == '1'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '2'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '3'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '4'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '5'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '6'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '7'){
				$portfolio.isotope({ filter: '.san_jose' });
			}		
			if (val == '8'){
				$portfolio.isotope({ filter: '.san_jose' });
			}	
		  });	
	  
  });