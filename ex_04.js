function houdini() {
    $("p").fadeOut(); 
}

$(document).ready(function() {
    $("#disappear-button").click(houdini); 
});
