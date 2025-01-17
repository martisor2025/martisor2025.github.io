!function (a) {
    "use strict";
    a(window).on("load", function () {
        a(".loader-inner").fadeOut(), a(".loader").delay(200).fadeOut("slow")
    });
    var b = a(".header"), c = b.offset();
    a(window).scroll(function () {
        a(this).scrollTop() > c.top + 500 && b.hasClass("default") ? b.fadeOut("fast", function () {
            a(this).removeClass("default").addClass("switched-header").fadeIn(200)
        }) : a(this).scrollTop() <= c.top + 500 && b.hasClass("switched-header") && b.fadeOut("fast", function () {
            a(this).removeClass("switched-header").addClass("default").fadeIn(100)
        })
    }), a("a.scroll").smoothScroll({speed: 800, offset: -60});
    var d = a(".mobile-but"), e = a(".main-nav ul");
    e.height();
    a(d).on("click", function () {
        return a(".toggle-mobile-but").toggleClass("active"), e.slideToggle(), a(".main-nav li a").addClass("mobile"), !1
    }), a(window).resize(function () {
        a(window).width() > 320 && e.is(":hidden") && (e.removeAttr("style"), a(".main-nav li a").removeClass("mobile"))
    }), a(".main-nav li a").click(function () {
        a(this).hasClass("mobile") && (e.slideToggle(), a(".toggle-mobile-but").toggleClass("active"))
    });
    for (var g = 0; g < a(".background-img").length; g++) {
        var h = a(".background-img").eq(g).children("img").attr("src");
        a(".background-img").eq(g).css("background", 'url("' + h + '")'), a(".background-img").eq(g).children("img").hide(), a(".background-img").eq(g).css("background-position", "initial")
    }

    a(".countdown").each(function () {
        var cd = $(this);
        var language = cd.attr('data-language'); // ro, en
        var zile = 'zile';
        if (language) {
            switch (language) {
                case 'en':
                    zile = 'days';
                    break;
            }
        }
        var dateEnd = cd.attr('data-endDate'); // format 2018/03/25
        cd.countdown(dateEnd, function (b) {
            a(this).html(b.strftime("%D " + zile + " %H:%M:%S"))
        })
    });

    a(".venobox").venobox({titleattr: "data-title", numeratio: !0})
}(jQuery);