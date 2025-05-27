var htw = $(window).innerWidth();

$("#sub_nav .man .man_select_wrap label input[type='radio']").click(function(){
    $(this).parent().siblings("label").children("input").prop("checked", false);
});


function minSt() {
	if (htw <= 800) { // mob
        $($("#sub_nav .sub_baroh .fc")).after($("#sub_nav .sub_baroh h3"));
    }
}

minSt();