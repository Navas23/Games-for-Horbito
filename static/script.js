
var win = $(this);
var state = 1; // 1 == listScreen; 2 == playing

win
.key( 'enter', function(){

})

.on( 'click', '.game' , function(){
	console.log('click')
	$('.iframe-container').addClass('active')
	if($(this).hasClass('viking')){
		$('.iframe-container iframe').attr('src', 'https://cdn.horbito.com/script/gameDemos/vikingTest2/index.html')
	}else if($(this).hasClass('courtyard')){
		$('.iframe-container iframe').attr('src', 'https://cdn.horbito.com/script/gameDemos/courtyard2/index.html')
	}else if($(this).hasClass('tower-defense')){
		$('.iframe-container iframe').attr('src', 'https://cdn.horbito.com/script/gameDemos/towerDefense/index.html')
	}else if($(this).hasClass('cars')){
		$('.iframe-container iframe').attr('src', 'https://cdn.horbito.com/script/gameDemos/cars/index.html')
	}else if($(this).hasClass('water')){
		$('.iframe-container iframe').attr('src', 'https://cdn.horbito.com/app/303/demos/water/index.html')
	}
	
	$('.iframe-container').transition({
		'x' : 0
	}, 1000, function(){
		$('.ui-header').addClass('playing')
	})

	$('.games-list').transition({
		'x' : '-100%'
	}, 1000, function(){
		$('.ui-header').addClass('playing')
	})

})

.on( 'click', '.ui-header .arrow' , function(){

	$('.ui-header').removeClass('playing')
	$('.iframe-container').transition({
		'x' : '100%'
	}, 1000)

	$('.games-list').transition({
		'x' : 0
	}, 1000, function(){
		$('.iframe-container').removeClass('active')
		$('.iframe-container iframe').attr('src', '')
	})

});
