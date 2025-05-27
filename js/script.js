var bw = $("body").width();
var chk = 0;
var chk2 = 0;

function headerSt() {
	if (bw <= 800) { // mob
        $("header a.mIc").removeClass("mIc");
        $("li.mrn").removeClass("mrn");

        $("header .logoSc .m_btn .scBtn_m").click(function(){
            $("header .logoSc .scWin").removeClass("on").addClass("on");
        });
        
        $("header .logoSc .scWin .close").click(function(){
            $("header .logoSc .scWin").removeClass("on");
        });

        $("header .gnb .tnbli li").click(function(){
            $("header .gnb .tnbli li a").removeClass("on");
            $(this).children("a").addClass("on");
        });

        $("header .gnb .log .langBox").click(function(){
            if (chk2 == 0) {
                $("header .gnb .log .langBox a").css({"text-decoration":"","display":""});
                $("header .gnb .log .langBox .lang p").css({"text-decoration":"underline"});
                $("header .gnb .logdf").css({"display":"block"});
                $(this).find("a").animate({bottom:-38},200).animate({opacity:1},100).animate({bottom:-51},180,function(){
                    $("header .gnb .logdf").css({"display":"none"});
                });

                chk2 = 1;
            } else {
                if (chk2 == 1) {
                    $("header .gnb .log .langBox a").click(function(){
                        $(this).css({"text-decoration":"underline"});
                    });
                }

                $("header .gnb .logdf").css({"display":"block"});
                $("header .gnb .log .langBox .lang p").css({"text-decoration":""});
                
                $(this).find("a").animate({bottom:-45},340).animate({opacity:0, bottom:0},30,function(){
                    $("header .gnb .logdf").css({"display":"none"});
                });
                chk2 = 0;
            }
        });

        $("header .logoSc .m_btn .gnb_m").click(function(){
            $("header .gnb").removeClass("on").addClass("on");
            $("html").removeClass("pop_on").addClass("pop_on");
        });

        $("header .gnb .log .logoutBox").click(function(){
            $(this).children("a").css({"text-decoration":"underline"}).animate({opacity:1},340,function(){
                $("header .gnb").removeClass("on");
                document.location.reload();
            });
        });

        $("header .gnb .main_gnb > li > a").click(function(e) {
            e.preventDefault();
        });
        $("header .gnb .main_gnb > li > a").click(function(){
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").siblings(".hvNb_list").removeClass("on");
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li").css({"height":63});
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").removeClass("pk");
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").removeClass("tc");

            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").siblings("icNv_list").removeClass("on");
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li").css({"height":63});
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").removeClass("pk");
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").removeClass("tc");
        

            $(this).parent().addClass("on").siblings("li").removeClass("on tdn");
            $("header .gnb .main_gnb > li > div").removeClass("on");
            $(this).siblings("div").addClass("on");
        });

        $("header .gnb .log .close").click(function(){
            $("header .gnb .tnbli li a").removeClass("on");
            $("header .gnb .main_gnb > li").removeClass("on tdn");
            $("header .gnb .main_gnb > li:first-child").addClass("on tdn");

            $("header .gnb .log .langBox .lang p").css({"text-decoration":""});
            $("header .gnb .log .langBox").find("a").removeAttr("style");
            chk2 = 0;
            $("header .gnb .logdf").css({"display":""});

            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").siblings(".hvNb_list").removeClass("on");

            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").siblings(".hvNb_list").removeClass("on");
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li").css({"height":63});
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").removeClass("pk");
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").removeClass("tc");

            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").siblings("icNv_list").removeClass("on");
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li").css({"height":63});
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").removeClass("pk");
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").removeClass("tc");

            $("header .gnb .main_gnb > li").removeClass("on tdn");
            $("header .gnb .main_gnb > li:first-child").addClass("on tdn");
            $("header .gnb .main_gnb > li > div").removeClass("on");
            $("header .gnb .main_gnb > li:first-child > div").addClass("on");

            $("html").removeClass("pop_on");

            $("header .gnb").removeClass("on");
        });


        $("header .gnb .main_gnb > li .hvNb .hvNb_name > li:has(.hvNb_list)").children("a").addClass("on");
        $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on[href='#']").click(function(e) {
            e.preventDefault();
        });

        $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").click(function(){
            $(this).parents(".main_gnb > li.on").addClass("tdn");

            if ($(this).hasClass("tc")) {
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").siblings(".hvNb_list").removeClass("on");
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li").css({"height":63});
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").removeClass("pk");
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").removeClass("tc");
            } else {
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").removeClass("tc");
                $(this).addClass("tc");

                var hvnbH = $(this).siblings(".hvNb_list").height()+67;
                $(this).parent().css({"height":hvnbH}).siblings("li").css({"height":63});

                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a.on").siblings(".hvNb_list").removeClass("on");
                $(this).siblings(".hvNb_list").addClass("on");
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").removeClass("pk");
            }
        });

        $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").click(function(){
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li .hvNb_list li a").removeClass("pk");
            $(this).addClass("pk");
        });


        //icNv
        $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").click(function(){
            $(this).parents(".main_gnb > li.on").addClass("tdn");

            if ($(this).hasClass("tc")) {
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").siblings("icNv_list").removeClass("on");
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li").css({"height":63});
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").removeClass("pk");
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").removeClass("tc");
            } else {
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").removeClass("tc");
                $(this).addClass("tc");

                var hvnbH = $(this).siblings(".icNv_list").height()+67;
                $(this).parent().css({"height":hvnbH}).siblings("li").css({"height":63});

                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li > a").siblings(".icNv_list").removeClass("on");
                $(this).siblings(".icNv_list").addClass("on");
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").removeClass("pk");
            }
        });

        $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").click(function(){
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icList  > li .icNv_list li a").removeClass("pk");
            $(this).addClass("pk");
        });




        























    } else { // pc
        $(".tnb .lang").click(function(){
            if (chk == 0) {
                $(this).children().css({"text-decoration":"underline"});
                $(this).next().css({"bottom":-10, "visibility":"visible"}).animate({"bottom":-52},200);
                
                chk = 1;
            } else {
                $(this).next().animate({"bottom":-10},200, function(){
                    $(this).css({"bottom":-52, "visibility":"hidden"});
                    $(".tnb .langBox .lang p").css({"text-decoration":"none"});
                });
                chk = 0;
            }
        });

        $("header .gnb .main_gnb > li > a").on("mouseover focus", function(){
            var nh = Number($(this).siblings("div").attr("data-nHeight"))+66;
            $("header .gnb .main_gnb > li > div").removeClass("gon");
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a").removeClass("hon");

            if ($("header .gnb").hasClass("ro1") === true) {
                $("header .gnb").css({"height":nh, "box-shadow": "0 16px 30px -8px rgba(0, 0, 0, 0.1)"});

                $("header .gnb .main_gnb > li > div").addClass("don");
                $(this).next().removeClass("don").addClass("gon");
            } else {
                setTimeout(function(){
                    if ($("header .gnb").hasClass("stop")) {
                        $("header .gnb").removeClass("stop ts1").css({"box-shadow":"none","height":66});
                    } else {
                        $("header .gnb").css({"height":nh, "box-shadow": "0 16px 30px -8px rgba(0, 0, 0, 0.1)"}).addClass("ro1").removeClass("ts1");
                    }
                }, 600);
            
                $("header .gnb").css({"height":538}).addClass("ts1");
                $("header .gnb .main_gnb > li > div").addClass("don");
                $(this).next().removeClass("don").addClass("gon");
            }
        });

        $("header .gnb .main_gnb > li > a").parents("header").on("mouseleave focusout", function(){
            if ($("header .gnb").hasClass("ts1")) {
                $("header .gnb").removeClass("ts1 ro1").addClass("stop").css({"box-shadow":"none","height":66});
            } else {
                $("header .gnb").removeClass("ro1");
                $("header .gnb .main_gnb > li > div").removeClass("gon don");
                $(this).find(".gnb .main_gnb > li > div").addClass("don");
                $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a").removeClass("hon");
                $("header .gnb .main_gnb > li > .icNv .icList > li a").removeClass("hsc");
                $("header .gnb .main_gnb > li:nth-child(6) .icNv .icTx_list > li").removeClass("on");

                $("header .gnb").css({"box-shadow":"none","height":66});
            }
        });


        $("header .gnb .main_gnb > li .hvNb .hvNb_name > li").on("mouseover focus", function(){
            $("header .gnb .main_gnb > li .hvNb .hvNb_name > li > a").removeClass("hon");
            $(this).children("a").addClass("hon");
        });

        $("header .gnb .main_gnb > li > .icNv .icList > li a").on("mouseover focus", function(){
            $("header .gnb .main_gnb > li > .icNv .icList > li a").removeClass("hsc");
            $(this).addClass("hsc");
        });

        $("header .gnb .main_gnb > li > .icNv .icList > li").on("mouseover focus", function(){
            var iclNum = $(this).index();

            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icTx_list > li").removeClass("on");
            $("header .gnb .main_gnb > li:nth-child(6) .icNv .icTx_list > li").eq(iclNum).addClass("on");
        });
    }
}

headerSt();

$("footer .bg_wrap .baro_wrap > li > a").click(function(e){
    e.preventDefault();
});
$("footer .bg_wrap .baro_wrap > li > a").click(function(){
    if ($(this).parent().hasClass("th")) {
        $(this).parent().removeClass("on th");
    } else {
        $(this).parent().addClass("on th").siblings("li").removeClass("on th");
    }
});

$("footer .bg_wrap .baro_wrap > li ul li a").hover(
    function() {
        $(this).parent().siblings("li").children("a").removeClass("hv");
        $(this).addClass("hv");
    },
    function() {
        $(this).removeClass("hv");
    }
);

var headerSt_delay = 300;
var headerSt_timer = null;

$(window).on('resize', function(){
    clearTimeout(headerSt_timer);
	headerSt_timer = setTimeout(function(){
    document.location.reload();
	}, headerSt_delay);
});