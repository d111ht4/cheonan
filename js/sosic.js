var htw = $(window).innerWidth();

$("#sub_nav .man .man_select_wrap label input[type='radio']").click(function(){
    $(this).parent().siblings("label").children("input").prop("checked", false);
});

if (htw > 500 && htw <= 768) {
    $("#sub_nav .bon2 table thead th:not(:nth-child(2), :nth-child(3), :nth-child(4))").addClass("pc");
    $("#sub_nav .bon2 table tr td:not(:nth-child(2), :nth-child(3), :nth-child(4))").addClass("pc");
} else {
    $("#sub_nav .bon2 table thead th:not(:nth-child(2), :nth-child(3))").addClass("pc");
    $("#sub_nav .bon2 table tr td:not(:nth-child(2), :nth-child(3))").addClass("pc");
}

function soSt() {
	if (htw <= 800) { // mob
        $($("#sub_nav .sub_baroh .fc")).after($("#sub_nav .sub_baroh h3"));

        $($("#sub_nav .bon2 .bg .nuri p")).after($("#sub_nav .bon2 .bg .nuri > a"));
    }
}

soSt();