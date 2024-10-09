
tippy('.tippy', {
    animation: 'fade',
    duration: [200, 300], 
    onClickOutside(instance) {
        instance.hide(); 
    }
});
