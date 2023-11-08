$(".img-fluid").on("mouseenter", function(){
    $(".img-fluid").addClass("add");
    $(".card-text").fadeOut();
})

$(".btn").on("click",function(){
    $(".card-title").css("color" , "red")
    $(".img-fluid").slideToggle()
})


$(".btn1").on("dblclick" , function(){
    $(".para").hide();
    $(".btn1").animate({opacity:0.7})
    $(".btn1").before("The history of the Netherlands extends back long before the founding of the modern Kingdom of the Netherlands in 1815 after the defeat of Napoleon.")
})

$(".navbar-brand").on("click" , function(){
    $(".navbar-brand").addClass("brand")
})

