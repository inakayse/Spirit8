$('.slick-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    speed:500,
    arrows: false


});
$('.client-img').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    infinite: true,
    speed:500,
    arrows: false


});
$('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed:500,
    arrows: false


});

$(document).ready(function(){

    $(".main-menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);

    });

});







$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#but').fadeIn();
        }
        else{
            $('#but').fadeOut();
        }
    });

    $("#but").click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});




$('.burger').on('click' ,function(e){
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');

    $('.for-ul').toggleClass('menu-active');
});
