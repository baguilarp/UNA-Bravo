//comprueba que el sitio cargue por completo
$('document').ready(function() {
    //inicializa  tooltip
    $('[data-toggle="tooltip"]').tooltip()

    var elements = $("input[type!='submit'], textarea, select");
    elements.focus(function() {
        $(this).parents('li').addClass('highlight');
    });
    elements.blur(function() {
        $(this).parents('li').removeClass('highlight');
    });

    /*$("#forgotpassword").click(function() {
			$("#password").removeClass("required");
			$("#main-contact-form").submit();
			$("#password").addClass("required");
			return false;
		});*/

    $("#main-contact-form").validate()
});