var prawda = [];
$(document).ready(function () {
    $("#me").css({
        "position": "relative",
        "opacity": "0",
        "left": "50px",
    });
    $(".a").css({
        "position": "relative",
        "opacity": "0",
        "left": "50px",
    });

    $(".b").css({
        "position": "relative",
        "opacity": "0",
        "left": "-50px",
    });
    $("#programowanie").css({
        "position": "relative",
        "opacity": "0",
        "top": "50px",
    });
    $(".c").css({
        "position": "relative",
        "opacity": "0",
        "left": "-50px",
    });

    $(".d").css({
        "position": "relative",
        "opacity": "0",
        "left": "50px",
    });


    anim();
});

$(document).scroll(anim = function () {
    if ($(".photo")[0].getBoundingClientRect().top < $(window).height() - 100 && prawda[0] != 1) {

        $("#me").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        prawda[0] = 1;

    }

    if ($("#programowanie")[0].getBoundingClientRect().top < $(window).height() -100 && prawda[2] != 1) {


        $("#programowanie").animate({
            opacity: 1,
            top: "0",
        }, 1000);

        prawda[2] = 1;
    }

    if ($(".c")[0].getBoundingClientRect().top < $(window).height() - 150 && prawda[3] != 1) {


        $(".c").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        $(".d").animate({
            opacity: 1,
            left: "0",
        }, 1000);

        prawda[3] = 1;

    }

})