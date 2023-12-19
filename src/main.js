import $ from "jquery";

//   react code here
$(document).ready(function () {
    $("#myInput").on("keyup",function(){
if ($(this).val().charCodeAt(0)<200) {

    $(this).css('direction','ltr');
}else{
$(this).css("direction", "rtl");
}

    });
});
// react code h
