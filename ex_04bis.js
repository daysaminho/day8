
function houdini(name) {
    $("#" + name).fadeOut();
    $("." + name).fadeOut();  
}


$(document).ready(function() {
    $("#disappear-button").click(function() {
        houdini("hideable"); 
        houdini("removable"); 
    });
});
