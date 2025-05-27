var pageNum = 1;
var spChk = 0;
var linum = $("#main .frame .slide li").length;

var iiPt1 = $("#pt1 .frame .slide > li").length;

var pageNum2 = 1;
var spChk2 = 0;
var linum2 = $("#pt1 .frame2 .slide li").length;

var htw = $(window).innerWidth();

// 메인 슬라이드
function mainSl() {
    $("#main .frame .slide li:first-child").animate({opacity:0},800, function(){
        $(this).appendTo("#main .frame .slide").css({"opacity":1});
    });

    pageNum++;
    if (pageNum > linum) {
        pageNum = 1;
    }
    $("#main .frame .mainSlpg .pgN .num").text("0"+pageNum);
}
$("#main .frame .mainSlpg .pgN .total").text("0"+linum);

for (var i = 1; i <= linum; i++) {
    $("#main .popWin .popImg").append("<li><a href='#'><img src="+mslSrc+" alt="+mslAlt+"></a></li>");

    var mslSrc = $("#main .frame .slide li:nth-child("+i+") a img").attr("src");
    var mslAlt = $("#main .frame .slide li:nth-child("+i+") a img").attr("alt");

    $("#main .popWin .popImg li:nth-child("+i+") img").attr("src", mslSrc);
    $("#main .popWin .popImg li:nth-child("+i+") img").attr("alt", mslAlt);
}

var main_timer = setInterval("mainSl()", 3600);

function main_next() {
    if (spChk == 0) {
        clearInterval(main_timer);
        main_timer = setInterval("mainSl()", 3600);
    }
    $("#main .frame .mainSlpg .btn .dfnext").css({"display":"block"});
    $("#main .frame .slide li:first-child").animate({opacity:0},800, function(){
        $(this).appendTo("#main .frame .slide").css({"opacity":1});
        $("#main .frame .mainSlpg .btn .dfnext").css({"display":"none"});
    });

    pageNum++;
    if (pageNum > linum) {
        pageNum = 1;
    }
    $("#main .frame .mainSlpg .pgN .num").text("0"+pageNum);
}

$("#main .frame .mainSlpg .btn .next").click(function(){
    main_next();
});

function main_prev() {
    if (spChk == 0) {
        clearInterval(main_timer);
        main_timer = setInterval("mainSl()", 3600);
    }
    $("#main .frame .mainSlpg .btn .dfprev").css({"display":"block"});
    $("#main .frame .slide li:last-child").prependTo("#main .frame .slide").css({"opacity":0}).animate({opacity:1},800,function(){
        $("#main .frame .mainSlpg .btn .dfprev").css({"display":"none"});
    });

    pageNum--;
    if (pageNum < 1) {
        pageNum = linum;
    }
    $("#main .frame .mainSlpg .pgN .num").text("0"+pageNum);
}

$("#main .frame .mainSlpg .btn .prev").click(function(){
    main_prev();
});

$("#main .frame .mainSlpg .btn .st_pl").click(function(){
    if (spChk == 0) {
        clearInterval(main_timer);
        $(this).addClass("on");
        spChk = 1;
    } else {
        main_timer = setInterval("mainSl()", 3600);
        $(this).removeClass("on");
        spChk = 0;
    }
});

$("#main .frame .mainSlpg .btn .pop").click(function(){
    $("#main .popWin").css({"display":"block"});
    $("html").removeClass("pop_on").addClass("pop_on");
});

$("#main .popWin .closePop").click(function(){
    $("#main .popWin").css({"display":"none"});
    $("html").removeClass("pop_on");
});

$("#main .mainTx .mt2 .mt_list > li").click(function(){
    $(this).addClass("select").siblings("li").removeClass("select");
    return false;
});

// 파트1 슬라이드1
function auto_pt1() {
    $("#pt1 .frame .slide").animate({left:-324},700,function(){
        $(this).append($("#pt1 .frame .slide > li:first-child")).css({"left":0});
    });
}

for (var ii = 1; ii <= iiPt1; ii++) {
$("#pt1 .frame .slide > li:nth-child("+ii+") .nameIc i").css({"background-image":"url(images/part1_ic"+ii+".svg)"})
}

var timer_ptl1 = setInterval("auto_pt1()", 4000);
var chk_pt1 = 0;

function ptNext1() {
    if (chk_pt1 == 0) {
        clearInterval(timer_ptl1);
        timer_ptl1 = setInterval("auto_pt1()", 4000);
    }
    $("#pt1 .title .sl_btn .dfnext").css({"display":"block"});
    $("#pt1 .frame .slide").animate({left:-324},700,function(){
        $(this).append($("#pt1 .frame .slide > li:first-child")).css({"left":0});
        $("#pt1 .title .sl_btn .dfnext").css({"display":"none"});
    });
}

$("#pt1 .title .sl_btn .next").click(function(){
    ptNext1();
});

function ptPrev1() {
    if (chk_pt1 == 0) {
        clearInterval(timer_ptl1);
        timer_ptl1 = setInterval("auto_pt1()", 4000);
    }
    $("#pt1 .title .sl_btn .dfprev").css({"display":"block"});
    $("#pt1 .frame .slide").css({"left":-324}).prepend($("#pt1 .frame .slide > li:last-child")).animate({left:0},700,function(){
        $("#pt1 .title .sl_btn .dfprev").css({"display":"none"});
    });
}

$("#pt1 .title .sl_btn .prev").click(function(){
    ptPrev1();
});

$("#pt1 .title .sl_btn .stop").click(function(){
    if (chk_pt1 == 0) {
        clearInterval(timer_ptl1);
        $(this).addClass("on");
        chk_pt1 = 1;
    } else {
        timer_ptl1 = setInterval("auto_pt1()", 4000);
        $(this).removeClass("on");
        chk_pt1 = 0;
    }
});

// 파트1 슬라이드2
function pt1_Sl() {
    $("#pt1 .frame2 .slide li:first-child").animate({opacity:0},600, function(){
        $(this).appendTo("#pt1 .frame2 .slide").css({"opacity":1});
    });

    pageNum2++;
    if (pageNum2 > linum2) {
        pageNum2 = 1;
    }

    if (pageNum2 < 10) {
        $("#pt1 .frame2 .pgbtn .pgN .num").text("0"+pageNum2);
    } else {
        $("#pt1 .frame2 .pgbtn .pgN .num").text(pageNum2);
    }
}

$("#pt1 .frame2 .pgbtn .pgN .total").text(linum2);

var timer_pt1 = setInterval("pt1_Sl()", 4400);

function ptNext2() {
    if (spChk2 == 0) {
        clearInterval(timer_pt1);
        timer_pt1 = setInterval("pt1_Sl()", 4400);
    }
    $("#pt1 .frame2 .pgbtn .slide_btn .dfnext").css({"display":"block"});
    $("#pt1 .frame2 .slide li:first-child").animate({opacity:0},600, function(){
        $(this).appendTo("#pt1 .frame2 .slide").css({"opacity":1});
        $("#pt1 .frame2 .pgbtn .slide_btn .dfnext").css({"display":"none"});
    });

    pageNum2++;
    if (pageNum2 > linum2) {
        pageNum2 = 1;
    }
    if (pageNum2 < 10) {
        $("#pt1 .frame2 .pgbtn .pgN .num").text("0"+pageNum2);
    } else {
        $("#pt1 .frame2 .pgbtn .pgN .num").text(pageNum2);
    }
}

$("#pt1 .frame2 .pgbtn .slide_btn .next").click(function(){
    ptNext2();
});

function ptPrev2() {
    if (spChk2 == 0) {
        clearInterval(timer_pt1);
        timer_pt1 = setInterval("pt1_Sl()", 4400);
    }
    $("#pt1 .frame2 .pgbtn .slide_btn .dfprev").css({"display":"block"});
    $("#pt1 .frame2 .slide li:last-child").prependTo("#pt1 .frame2 .slide").css({"opacity":0}).animate({opacity:1},600,function(){
        $("#pt1 .frame2 .pgbtn .slide_btn .dfprev").css({"display":"none"});
    });

    pageNum2--;
    if (pageNum2 < 1) {
        pageNum2 = linum2;
    }
    if (pageNum2 < 10) {
        $("#pt1 .frame2 .pgbtn .pgN .num").text("0"+pageNum2);
    } else {
        $("#pt1 .frame2 .pgbtn .pgN .num").text(pageNum2);
    }
}

$("#pt1 .frame2 .pgbtn .slide_btn .prev").click(function(){
    ptPrev2();
});

$("#pt1 .frame2 .pgbtn .slide_btn .stop").click(function(){
    if (spChk2 == 0) {
        clearInterval(timer_pt1);
        $(this).addClass("on");
        spChk2 = 1;
    } else {
        timer_pt1 = setInterval("pt1_Sl()", 4400);
        $(this).removeClass("on");
        spChk2 = 0;
    }
});

$("#pt2 .all_btn").hover(
    function(){
        $(this).children("span").removeClass("on").addClass("on");
    },
    function(){
        $(this).children("span").removeClass("on");
    }
);

var all_btnChk = 0;
var por = $("#pt2 .all_btn span").text();

$("#pt2 .all_btn").click(function(){
    var ptx = $("#pt2 .all_btn span").attr("data-clk");
    
    if (all_btnChk == 0) {
        $("#pt2 .dfall_btn").removeClass("on").addClass("on");
        $(this).children("img").removeClass("on").addClass("on");
        $(this).children("span").text(ptx);

        if (htw > 500 && htw <= 768) {
            $("#pt2 .svc_wrap").animate({height:610},340,function(){
                $("#pt2 .all_btn").addClass("ho");
                $("#pt2 .dfall_btn").removeClass("on");
            });
        } else if (htw <= 800) {
            $("#pt2 .svc_wrap").animate({height:850},340,function(){
                $("#pt2 .all_btn").addClass("ho");
                $("#pt2 .dfall_btn").removeClass("on");
            });
        } else {
            $("#pt2 .svc_wrap").animate({height:298},340,function(){
            $("#pt2 .dfall_btn").removeClass("on");
            });
        }
        

        all_btnChk = 1;
    } else {
        $("#pt2 .dfall_btn").removeClass("on").addClass("on");
        $(this).children("img").removeClass("on");
        $(this).children("span").text(por);

        if (htw > 500 && htw <= 768) {
            $("#pt2 .svc_wrap").animate({height:300},370,function(){
                $("#pt2 .all_btn").removeClass("ho");
                $("#pt2 .dfall_btn").removeClass("on");
            });
        } else if (htw <= 800) {
            $("#pt2 .svc_wrap").animate({height:338},370,function(){
                $("#pt2 .all_btn").removeClass("ho");
                $("#pt2 .dfall_btn").removeClass("on");
            });
        } else {
            $("#pt2 .svc_wrap").animate({height:144},370,function(){
                $("#pt2 .dfall_btn").removeClass("on");
            });
        }

        all_btnChk = 0;
    }
    
});


// 파트2 슬라이드
var smw = $("#pt2 .mw_wrap .th_wrap").innerWidth();

function auto_pts2() {
    $("#pt2 .mw_wrap .th_wrap .slide").animate({left:-smw},500,function(){
        $(this).append($("#pt2 .mw_wrap .th_wrap .slide > li:first-child")).css({"left":0});
    });
}

var timer_pt2 = setInterval("auto_pts2()", 4000);
var chk_pts2 = 0;

function ptNext2s() {
    if (chk_pts2 == 0) {
        clearInterval(timer_pt2);
        timer_pt2 = setInterval("auto_pts2()", 4000);
    }
    $("#pt2 .mw_wrap .th_wrap .btn_wrap .dfnext").css({"display":"block"});
    $("#pt2 .mw_wrap .th_wrap .slide").animate({left:-smw},500,function(){
        $(this).append($("#pt2 .mw_wrap .th_wrap .slide > li:first-child")).css({"left":0});
        $("#pt2 .mw_wrap .th_wrap .btn_wrap .dfnext").css({"display":"none"});
    });
}

$("#pt2 .mw_wrap .th_wrap .btn_wrap .next").click(function(){
    ptNext2s();
});

function ptPrev2s() {
    if (chk_pts2 == 0) {
        clearInterval(timer_pt2);
        timer_pt2 = setInterval("auto_pts2()", 4000);
    }
    $("#pt2 .mw_wrap .th_wrap .btn_wrap .dfprev").css({"display":"block"});
    $("#pt2 .mw_wrap .th_wrap .slide").css({"left":-smw}).prepend($("#pt2 .mw_wrap .th_wrap .slide > li:last-child")).animate({left:0},500,function(){
        $("#pt2 .mw_wrap .th_wrap .btn_wrap .dfprev").css({"display":"none"});
    });
}

$("#pt2 .mw_wrap .th_wrap .btn_wrap .prev").click(function(){
    ptPrev2s();
});

$("#pt2 .mw_wrap .th_wrap .btn_wrap .st_pl").click(function(){
    if (chk_pts2 == 0) {
        clearInterval(timer_pt2);
        $(this).addClass("on");
        chk_pts2 = 1;
    } else {
        timer_pt2 = setInterval("auto_pts2()", 4000);
        $(this).removeClass("on");
        chk_pts2 = 0;
    }
});

$("#pt2 .mw_wrap .th_wrap .slide > li > ul li").hover(
    function(){
        if (chk_pts2 == 0) {
            clearInterval(timer_pt2);
        }
    },
    function(){
        if (chk_pts2 == 0) {
        timer_pt2 = setInterval("auto_pts2()", 4000);
        }
    }
);


$("#pt3 .frame_wrap .name .pl").click(function(e){
    e.preventDefault();
});
$("#pt3 .frame_wrap .name .dfpl").click(function(){
    location.replace("#");
});

$("#pt3 .frame_wrap .name .pl").on("mouseover focus", function(){
    $("#pt3 .frame_wrap .name .pl").addClass("on").prev().addClass("on");
    $("#pt3 .frame_wrap .name .pl").animate({opacity:1},280,function(){
        $("#pt3 .frame_wrap .name .pl").addClass("pk");
    });
});

$("#pt3 .frame_wrap .name .pl").prev().on("mouseleave focusout", function(){
    $("#pt3 .frame_wrap .name .pl").removeClass("on").animate({opacity:1},280,function(){
        $("#pt3 .frame_wrap .name .pl").prev().removeClass("on");
        $("#pt3 .frame_wrap .name .pl").removeClass("pk");
    });
});


//파트3 슬라이드
var chk_pt3 = 0;
var ptl3 = $("#pt3 .frame_wrap .frame .slide li").length;
var pttm3 = 600;

var slw3 = $("#pt3 .frame_wrap .frame").innerWidth()+15;

for (i3 = 1; i3 <= ptl3; i3++) {
    $("#pt3 .frame_wrap .frame .slide li:nth-child("+i3+")").addClass("lmg"+i3);
}

function ptnext3() {
    $("#pt3 .frame_wrap .dfnext").css({"display":"block"});
    if (htw > 500 && htw <= 768) {
        $("#pt3 .frame_wrap .frame .slide").animate({left:-212},pttm3,function(){
        $(this).append($("#pt3 .frame_wrap .frame .slide li:first-child")).css({"left":0});
                $("#pt3 .frame_wrap .dfnext").css({"display":"none"});
        });
    } else if (htw <= 800) {
        $("#pt3 .frame_wrap .frame .slide").animate({left:-slw3},700,function(){
        $(this).append($("#pt3 .frame_wrap .frame .slide li:nth-child(2)")).append($("#pt3 .frame_wrap .frame .slide li:first-child")).css({"left":0});
        $("#pt3 .frame_wrap .frame .slide li:last-child").after($("#pt3 .frame_wrap .frame .slide li:nth-child(5)"));
            $("#pt3 .frame_wrap .dfnext").css({"display":"none"});
        });
    } else {
        $("#pt3 .frame_wrap .frame .slide").animate({left:-212.5},pttm3,function(){
        $(this).append($("#pt3 .frame_wrap .frame .slide li:first-child")).css({"left":0});
            $("#pt3 .frame_wrap .dfnext").css({"display":"none"});
        });
    }
}
$("#pt3 .frame_wrap .btn .next").click(function(){
    $("#pt3 .frame_wrap .btn .next").attr("disabled", true);
    setTimeout(function(){
        $("#pt3 .frame_wrap .btn .next").attr("disabled", false);
    }, pttm3+150);

    ptnext3();
});

function ptprev3() {
    $("#pt3 .frame_wrap .dfprev").css({"display":"block"});
    if (htw > 500 && htw <= 768) {
        $("#pt3 .frame_wrap .frame .slide").css({"left":-212}).prepend($("#pt3 .frame_wrap .frame .slide li:last-child")).animate({left:0},pttm3,function(){
                $("#pt3 .frame_wrap .dfprev").css({"display":"none"});
            });
    } else if (htw <= 800) {
        $("#pt3 .frame_wrap .frame .slide").css({"left":-slw3}).prepend($("#pt3 .frame_wrap .frame .slide li:nth-child(5)")).prepend($("#pt3 .frame_wrap .frame .slide li:last-child"));
        $("#pt3 .frame_wrap .frame .slide li:nth-child(2)").after($("#pt3 .frame_wrap .frame .slide li:first-child"));
        $("#pt3 .frame_wrap .frame .slide").animate({left:0},700,function(){
            $("#pt3 .frame_wrap .dfprev").css({"display":"none"});
        });
    } else {
        $("#pt3 .frame_wrap .frame .slide").css({"left":-212.5}).prepend($("#pt3 .frame_wrap .frame .slide li:last-child")).animate({left:0},pttm3,function(){
            $("#pt3 .frame_wrap .dfprev").css({"display":"none"});
        });
    }
}
$("#pt3 .frame_wrap .btn .prev").click(function(){
    $("#pt3 .frame_wrap .btn .prev").attr("disabled", true);
    setTimeout(function(){
        $("#pt3 .frame_wrap .btn .prev").attr("disabled", false);
    }, pttm3+150);

    ptprev3();
});


$("#pt3 .frame_wrap .btn button").hover(
    function(){
        $(this).removeClass("hv").addClass("hv");
        
        if ($(this).hasClass("next") === true) {
            $(this).removeClass("onnx").addClass("onnx");
        }

        if ($(this).hasClass("prev") === true) {
            $(this).removeClass("onpr").addClass("onpr");
        }
    },
    function(){
        $("#pt3 .frame_wrap .btn button").removeClass("hv onnx onpr");
    }
);

$("#pt4 .slideCt_wrap .title .ch_wrap a").click(function(e){
    e.preventDefault();
});
$("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn").addClass("ong");

//파트4 진행률바 슬라이드1
var ptTime4 = Number(3600);
var gi = 297+30;
var slm = 700;
var chk_pt4 = 0;
var chk_pt5 = 0;

function auto_pt4() {
    if (htw > 500 && htw <= 768) {
        $("#pt4 .slideCt_wrap .frame ul.slide_gung").animate({left:-236},500,function(){
            $(this).append($("#pt4 .slideCt_wrap .frame ul.slide_gung li:first-child")).css({"left":15});
        });
    } else {
        $("#pt4 .slideCt_wrap .frame ul.slide_gung").animate({left:-gi},slm,function(){
            $(this).append($("#pt4 .slideCt_wrap .frame ul.slide_gung li:first-child")).css({"left":20});
        });
    }

    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .gung_bar").animate({left:0},ptTime4,function(){
        $(this).css({"left":"-100%"});
    });
}
function auto_bar() {
    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .gung_bar").animate({left:0},ptTime4,function(){
        $(this).css({"left":"-100%"});
    });
}
function bar_stop() {
    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .gung_bar").stop().css({"left":"-100%"});
}

auto_bar();
var timer_pt4 = setInterval("auto_pt4()", ptTime4);

function ptNext4() {
    if (chk_pt4 == 0) {
        bar_stop();
        clearInterval(timer_pt4);
        timer_pt4 = setInterval("auto_pt4()", ptTime4);
    }
    auto_pt4();

    if ($("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_st_pl").hasClass("on")) {
        bar_stop();
    }
    
    $("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_next").attr("disabled", true);
    setTimeout(function(){
        $("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_next").attr("disabled", false);
    }, slm);
}
$("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_next").click(function(){
    ptNext4();
});

function ptPrev4() {
    if (chk_pt4 == 0) {
        bar_stop();
        clearInterval(timer_pt4);
        timer_pt4 = setInterval("auto_pt4()", ptTime4);
    }
    auto_bar();

    if ($("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_st_pl").hasClass("on")) {
        bar_stop();
    }

    if (htw > 500 && htw <= 768) {
        $("#pt4 .slideCt_wrap .frame ul.slide_gung").css({"left":-236}).prepend($("#pt4 .slideCt_wrap .frame ul.slide_gung li:last-child")).animate({left:15},500);
    } else {
        $("#pt4 .slideCt_wrap .frame ul.slide_gung").css({"left":-gi}).prepend($("#pt4 .slideCt_wrap .frame ul.slide_gung li:last-child")).animate({left:20},slm);
    }

    $("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_prev").attr("disabled", true);
    setTimeout(function(){
        $("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_prev").attr("disabled", false);
    }, slm);
}
$("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_prev").click(function(){
    ptPrev4();
});

$("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_st_pl").click(function(){
    if (chk_pt4 == 0) {
        bar_stop();
        clearInterval(timer_pt4);
        $(this).addClass("on");
        chk_pt4 = 1;
    } else {
        timer_pt4 = setInterval("auto_pt4()", ptTime4);
        $(this).removeClass("on");
        auto_bar();
        chk_pt4 = 0;
    }
});

$("#pt4 .slideCt_wrap .frame ul.slide_gung li").hover(
    function(){
        if (chk_pt4 == 0) {
            bar_stop();
            clearInterval(timer_pt4);
        }
    },
    function(){
        if (chk_pt4 == 0) {
            timer_pt4 = setInterval("auto_pt4()", ptTime4);
            auto_bar();
        }
    }
);


$("#pt4 .slideCt_wrap .title .btn_wrap .btn button").hover(
    function(){
        $(this).removeClass("hv").addClass("hv");
    },
    function(){
        $("#pt4 .slideCt_wrap .title .btn_wrap .btn button").removeClass("hv");
    }
);


//파트4 진행률바 슬라이드2

function auto_pt5() {
    if (htw > 500 && htw <= 768) {
        $("#pt4 .slideCt_wrap .frame ul.slide_dang").animate({left:-236},500,function(){
            $(this).append($("#pt4 .slideCt_wrap .frame ul.slide_dang li:first-child")).css({"left":15});
        });
    } else {
        $("#pt4 .slideCt_wrap .frame ul.slide_dang").animate({left:-gi},slm,function(){
            $(this).append($("#pt4 .slideCt_wrap .frame ul.slide_dang li:first-child")).css({"left":20});
        });
    }

    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .dang_bar").animate({left:0},ptTime4,function(){
        $(this).css({"left":"-100%"});
    });
}

function dauto_bar() {
    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .dang_bar").animate({left:0},ptTime4,function(){
        $(this).css({"left":"-100%"});
    });
}
function dbar_stop() {
    $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst .dang_bar").stop().css({"left":"-100%"});
}

function ptNext5() {
    if (chk_pt5 == 0) {
        dbar_stop();
        clearInterval(timer_pt5);
        timer_pt5 = setInterval("auto_pt5()", ptTime4);
    }
    auto_pt5();

    if ($("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_st_pl").hasClass("on")) {
        dbar_stop();
    }
    
    $("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_next").attr("disabled", true);
    setTimeout(function(){
        $("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_next").attr("disabled", false);
    }, slm);
}
$("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_next").click(function(){
    ptNext5();
});

function ptPrev5() {
    if (chk_pt5 == 0) {
        dbar_stop();
        clearInterval(timer_pt5);
        timer_pt5 = setInterval("auto_pt5()", ptTime4);
    }
    dauto_bar();

    if ($("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_st_pl").hasClass("on")) {
        dbar_stop();
    }

    if (htw > 500 && htw <= 768) {
        $("#pt4 .slideCt_wrap .frame ul.slide_dang").css({"left":-236}).prepend($("#pt4 .slideCt_wrap .frame ul.slide_dang li:last-child")).animate({left:15},500);
    } else {
        $("#pt4 .slideCt_wrap .frame ul.slide_dang").css({"left":-gi}).prepend($("#pt4 .slideCt_wrap .frame ul.slide_dang li:last-child")).animate({left:20},slm);
    }


    $("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_prev").attr("disabled", true);
    setTimeout(function(){
        $("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_prev").attr("disabled", false);
    }, slm);
}
$("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_prev").click(function(){
    ptPrev5();
});

$("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_st_pl").click(function(){
    if (chk_pt5 == 0) {
        dbar_stop();
        clearInterval(timer_pt5);
        $(this).addClass("on");
        chk_pt5 = 1;
    } else {
        timer_pt5 = setInterval("auto_pt5()", ptTime4);
        $(this).removeClass("on");
        dauto_bar();
        chk_pt5 = 0;
    }
});

$("#pt4 .slideCt_wrap .frame ul.slide_dang li").hover(
    function(){
        if (chk_pt5 == 0) {
            dbar_stop();
            clearInterval(timer_pt5);
        }
    },
    function(){
        if (chk_pt5 == 0) {
            timer_pt5 = setInterval("auto_pt5()", ptTime4);
            dauto_bar();
        }
    }
);


$("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn a").click(function(){
    $(this).addClass("select").siblings("a").removeClass("select");

    if($("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn .dang").hasClass("select") === true) {
        $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn").removeClass("ong").addClass("ond").animate({opacity:1},200, function(){
            $("#pt4 .slideCt_wrap .frame ul").removeClass("select");
            $("#pt4 .slideCt_wrap .frame .slide_dang").addClass("select");
            $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn a").removeClass("ef");
            $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn .dang").addClass("ef");

            $("#pt4 .slideCt_wrap .title .btn_wrap .btn button").removeClass("son");
            $("#pt4 .slideCt_wrap .title .btn_wrap .btn [class*='dang']").addClass("son");

            $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst div").removeClass("son");
            $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst [class*='dang']").addClass("son");

            bar_stop();
            clearInterval(timer_pt4);

            timer_pt5 = setInterval("auto_pt5()", ptTime4);
            dauto_bar();

            $("#pt4 .slideCt_wrap .title .btn_wrap .btn .gung_st_pl").removeClass("on");
            chk_pt4 = 0;
        });
    } else {
        $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn").removeClass("ond").addClass("ong").animate({opacity:1},200, function(){
            $("#pt4 .slideCt_wrap .frame ul").removeClass("select");
            $("#pt4 .slideCt_wrap .frame .slide_gung").addClass("select");
            $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn a").removeClass("ef");
            $("#pt4 .slideCt_wrap .title .ch_wrap .ch_btn .gung").addClass("ef");

            $("#pt4 .slideCt_wrap .title .btn_wrap .btn button").removeClass("son");
            $("#pt4 .slideCt_wrap .title .btn_wrap .btn [class*='gung']").addClass("son");

            $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst div").removeClass("son");
            $("#pt4 .slideCt_wrap .title .btn_wrap .slide_pst [class*='gung']").addClass("son");

            dbar_stop();
            clearInterval(timer_pt5);

            timer_pt4 = setInterval("auto_pt4()", ptTime4);
            auto_bar();

            $("#pt4 .slideCt_wrap .title .btn_wrap .btn .dang_st_pl").removeClass("on");
            chk_pt5 = 0;
        });
    }
});

if (htw <= 1900) {
    $("#pt4 .tree_wrap").removeClass("psz").addClass("psz");
} else {
    $("#pt4 .tree_wrap").removeClass("psz");
}











function indexSt() {
	if (htw <= 800) { // mob
        // 메인 슬라이드1 스와이프
        const slide = document.querySelector("#main .frame .slide");
        let startPoint = 0;
        let endPoint = 0;

        // pc
        slide.addEventListener("mousedown", (e) => {
            startPoint = e.pageX;
        });

        slide.addEventListener("mouseup", (e) => {
            endPoint = e.pageX;
            if (startPoint < endPoint) {
                main_prev();
            } else if (startPoint > endPoint) {
                main_next();
            }
        });

        // 모바일
        slide.addEventListener("touchstart", (e) => {
            startPoint = e.touches[0].pageX;
        });

        slide.addEventListener("touchend", (e) => {
            endPoint = e.changedTouches[0].pageX;
            if (startPoint < endPoint) {
                main_prev();
            } else if (startPoint > endPoint) {
                main_next();
            }
        });

        // 파트1 스와이프1
        const ptSlide1 = document.querySelector("#pt1 .frame .slide");
        let ptStartPoint1 = 0;
        let ptEndPoint1 = 0;

        // pc
        ptSlide1.addEventListener("mousedown", (e) => {
            ptStartPoint1 = e.pageX;
        });

        ptSlide1.addEventListener("mouseup", (e) => {
            ptEndPoint1 = e.pageX;
            if (ptStartPoint1 < ptEndPoint1) {
                ptPrev1();
            } else if (ptStartPoint1 > ptEndPoint1) {
                ptNext1();
            }
        });

        // 모바일
        ptSlide1.addEventListener("touchstart", (e) => {
            ptStartPoint1 = e.touches[0].pageX;
        });

        ptSlide1.addEventListener("touchend", (e) => {
            ptEndPoint1 = e.changedTouches[0].pageX;
            if (ptStartPoint1 < ptEndPoint1) {
                ptPrev1();
            } else if (ptStartPoint1 > ptEndPoint1) {
                ptNext1();
            }
        });

        // 파트1 스와이프2
        const ptSlide2 = document.querySelector("#pt1 .frame2 .slide");
        let ptStartPoint2 = 0;
        let ptEndPoint2 = 0;

        // pc
        ptSlide2.addEventListener("mousedown", (e) => {
            ptStartPoint2 = e.pageX;
        });

        ptSlide2.addEventListener("mouseup", (e) => {
            ptEndPoint2 = e.pageX;
            if (ptStartPoint2 < ptEndPoint2) {
                ptPrev2();
            } else if (ptStartPoint2 > ptEndPoint2) {
                ptNext2();
            }
        });

        // 모바일
        ptSlide2.addEventListener("touchstart", (e) => {
            ptStartPoint2 = e.touches[0].pageX;
        });

        ptSlide2.addEventListener("touchend", (e) => {
            ptEndPoint2 = e.changedTouches[0].pageX;
            if (ptStartPoint2 < ptEndPoint2) {
                ptPrev2();
            } else if (ptStartPoint2 > ptEndPoint2) {
                ptNext2();
            }
        });


        var mta1 = $("#main .mainTx .mt2 .mt_list > li:nth-child(2) > a").width()/2;
        var mta2 = $("#main .mainTx .mt2 .mt_list > li:nth-child(4) > a").width()/2;

        $("#main .mainTx .mt2 .mt_list > li:nth-child(2)").css({"padding-right":"calc(25% - " + mta1+ "px)"});
        $("#main .mainTx .mt2 .mt_list > li:nth-child(4)").css({"padding-right":"calc(25% - " + mta2+ "px)"});

        var mtc_delay = 600;

        $("#pt1 .title .sl_btn .prev").click(function(){
            var mtc_timer1 = null;

            clearTimeout(mtc_timer1);
            mtc_timer1 = setTimeout(function(){
                $("#pt1 .title .sl_btn .prev").removeClass("mtc");
            }, mtc_delay);

            $("#pt1 .title .sl_btn .prev").addClass("mtc");
        });

        $("#pt1 .title .sl_btn .next").click(function(){
            var mtc_timer2 = null;

            clearTimeout(mtc_timer2);
            mtc_timer2 = setTimeout(function(){
                $("#pt1 .title .sl_btn .next").removeClass("mtc");
            }, mtc_delay);

            $("#pt1 .title .sl_btn .next").addClass("mtc");
        });

        var mtcChk = 0;
        $("#pt1 .title .sl_btn .stop").click(function(){
            if (mtcChk == 0) {
                $(this).addClass("mtc");
                mtcChk = 1;
            } else {
                $(this).removeClass("mtc");
                mtcChk = 0;
            }
        });

        $("#pt1 .frame .slide > li .tx_list li a").click(function(e){
            e.preventDefault();
        });
        $("#pt1 .frame .slide > li .tx_list li a").click(function(){
            $("#pt1 .frame .slide > li .tx_list li a").removeClass("tc");
            $(this).addClass("tc");
            $("#pt1 .frame .slide > li .tx_list li a span i").removeClass("hv");
            $(this).find("i").addClass("hv").animate({opacity:1},550, function(){
                location.replace("#");
                $("#pt1 .frame .slide > li .tx_list li a span i").removeClass("hv");
                $("#pt1 .frame .slide > li .tx_list li a").removeClass("tc");
            });
        });


        $("#pt1 .frame2 .slide li a").click(function(e){
            e.preventDefault();
        });
        $("#pt1 .frame2 .slide li a").click(function(){
            $(this).find("img").addClass("hv").delay(500).queue(function(){
                $("#pt1 .frame2 .slide li a img").removeClass("hv").dequeue();
                location.replace("#");
            });
        });

        $("#pt2 .svc_wrap li a p").each(function() {
            if (htw > 500 && htw <= 768) {
                
            } else {
                if ($(this).height() > 24) {
                $(this).parents("li").outerHeight(118);
                }
            }
        });

        // 파트2 스와이프1
        const ptSlide3 = document.querySelector("#pt2 .mw_wrap .th_wrap .slide");
        let ptStartPoint3 = 0;
        let ptEndPoint3 = 0;

        // pc
        ptSlide3.addEventListener("mousedown", (e) => {
            ptStartPoint3 = e.pageX;
        });

        ptSlide3.addEventListener("mouseup", (e) => {
            ptEndPoint3 = e.pageX;
            if (ptStartPoint3 < ptEndPoint3) {
                ptPrev2s();
            } else if (ptStartPoint3 > ptEndPoint3) {
                ptNext2s();
            }
        });

        // 모바일
        ptSlide3.addEventListener("touchstart", (e) => {
            ptStartPoint3 = e.touches[0].pageX;
        });

        ptSlide3.addEventListener("touchend", (e) => {
            ptEndPoint3 = e.changedTouches[0].pageX;
            if (ptStartPoint3 < ptEndPoint3) {
                ptPrev2s();
            } else if (ptStartPoint3 > ptEndPoint3) {
                ptNext2s();
            }
        });

        // 파트3 스와이프1
        const ptSlide4 = document.querySelector("#pt3 .frame_wrap .frame .slide");
        let ptStartPoint4 = 0;
        let ptEndPoint4 = 0;

        // pc
        ptSlide4.addEventListener("mousedown", (e) => {
            ptStartPoint4 = e.pageX;
        });

        ptSlide4.addEventListener("mouseup", (e) => {
            ptEndPoint4 = e.pageX;
            if (ptStartPoint4 < ptEndPoint4) {
                ptprev3()
            } else if (ptStartPoint4 > ptEndPoint4) {
                ptnext3()
            }
        });

        // 모바일
        ptSlide4.addEventListener("touchstart", (e) => {
            ptStartPoint4 = e.touches[0].pageX;
        });

        ptSlide4.addEventListener("touchend", (e) => {
            ptEndPoint4 = e.changedTouches[0].pageX;
            if (ptStartPoint4 < ptEndPoint4) {
                ptprev3()
            } else if (ptStartPoint4 > ptEndPoint4) {
                ptnext3()
            }
        }); 

        $("#pt4 .mgb").after($("#pt4 .gg ul"));























    } if (htw > 500 && htw <= 768) {
        $("#main .mainTx .mt2 .mt_list > li:nth-child(2)").css({"padding-right":""});
        $("#main .mainTx .mt2 .mt_list > li:nth-child(4)").css({"padding-right":""});


        $("#pt3 .frame_wrap .name .pl").click(function(){
            $(this).animate({opacity:1},200,function(){
                location.replace("#");
            });
        });

        $("body").click(function(){
            if ($("#pt3 .frame_wrap .name .pl").hasClass("pk")) {
                $("#pt3 .frame_wrap .name .pl").removeClass("pk on");
            }
        });

        // 파트4 스와이프 gung
        const ptSlide5 = document.querySelector("#pt4 .slideCt_wrap .frame ul.slide_gung");
        let ptStartPoint5 = 0;
        let ptEndPoint5 = 0;

        // pc
        ptSlide5.addEventListener("mousedown", (e) => {
            ptStartPoint5 = e.pageX;
        });

        ptSlide5.addEventListener("mouseup", (e) => {
            ptEndPoint5 = e.pageX;
            if (ptStartPoint5 > ptEndPoint5) {
                ptNext4();
            } else if (ptStartPoint5 < ptEndPoint5) {
                ptPrev4();
            }
        });

        // 모바일
        ptSlide5.addEventListener("touchstart", (e) => {
            ptStartPoint5 = e.touches[0].pageX;
        });

        ptSlide5.addEventListener("touchend", (e) => {
            ptEndPoint5 = e.changedTouches[0].pageX;
            if (ptStartPoint5 > ptEndPoint5) {
                ptNext4();
            } else if (ptStartPoint5 < ptEndPoint5) {
                ptPrev4();
            }
        });

    // 파트4 스와이프 dang
        const ptSlide6 = document.querySelector("#pt4 .slideCt_wrap .frame ul.slide_dang");
        let ptStartPoint6 = 0;
        let ptEndPoint6 = 0;

        // pc
        ptSlide6.addEventListener("mousedown", (e) => {
            ptStartPoint6 = e.pageX;
        });

        ptSlide6.addEventListener("mouseup", (e) => {
            ptEndPoint6 = e.pageX;
            if (ptStartPoint6 < ptEndPoint6) {
                ptPrev5();
            } else if (ptStartPoint6 > ptEndPoint6) {
                ptNext5();
            }
        });

        // 모바일
        ptSlide6.addEventListener("touchstart", (e) => {
            ptStartPoint6 = e.touches[0].pageX;
        });

        ptSlide6.addEventListener("touchend", (e) => {
            ptEndPoint6 = e.changedTouches[0].pageX;
            if (ptStartPoint6 < ptEndPoint6) {
                ptPrev5();
            } else if (ptStartPoint6 > ptEndPoint6) {
                ptNext5();
            }
        });








    } else { // pc
        


        

        
    }
}

indexSt();

