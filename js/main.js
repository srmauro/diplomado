$(document).ready(function(){

	var imgItems = $('.slider li').length; //numero de slidaer
	var imgPos = 1;
	
	//agregar paginacion --
	for( i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}


	$('.slider li').hide();//ocultar slider--
	$('.slider li:first').show();//mostrar el primer slider--
	$('.pagination li:first').css({'color': '#FFD13A'});//dar estilos al primer iten de la paginacion--

	//ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	
	setInterval(function(){
		nextSlider();
	}, 8000);
	//funciones--------------------------------------------
	function pagination(){

		var paginationPos = $(this).index() + 1;		

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginationPos +')').fadeIn();

		$('.pagination li').css({'color': '#828282'});
		$(this).css({'color': '#FFD13A'});
	};

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#FFD13A'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	};



});