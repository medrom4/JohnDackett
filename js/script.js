(function() {
    var bio = document.getElementById('bio');
    var bioCount = document.getElementById('bio-count');

    addEvent(bio, 'focus', updateCounter);
    addEvent(bio, 'input', updateCounter);
    addEvent(bio, 'blur', function() {
        if (bio.value.length <= 140) {
            bioCount.className = 'hide';
        }
    });
    
    
}());
