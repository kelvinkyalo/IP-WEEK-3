$(document).ready(function() {
    $(".clickable").click(function() {
        $("#hidden").toggle();
        $("#showing").toggle();
    });
});
$(document).ready(function() {
    $(".clickable2").click(function() {
        $("#hidden2").toggle();
        $("#showing2").toggle();
    });
});
$(document).ready(function() {
    $(".clickable3").click(function() {
        $("#hidden3").toggle();
        $("#showing3").toggle();
    });
});

function userName(submit) {
    var name = document.getElementById("name").value
    alert("gggg " + name + "we have received your message. Thank you fro reaching out to us.");

}