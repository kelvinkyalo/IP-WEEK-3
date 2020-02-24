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
    var name = $("input#name").val();
    var email = $('input#email').val();
    alert("" + name + " we have received your message.Thank you for reaching out to us.");
    event.preventDefault();
}