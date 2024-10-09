
const tooltipInstances = tippy('.tippy', {
    animation: 'fade',
    duration: [200, 300], 
    onClickOutside(instance) {
        instance.hide(); 
    }
});


window.onload = function() {
    tooltipInstances[0].show(); 
};
