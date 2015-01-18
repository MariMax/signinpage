;
(function() {
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
    var switcher = document.getElementsByClassName('switcher')[0];
    var switcherBottom = document.getElementsByClassName('switcher-bottom')[0];
    switcherBottom.addEventListener("click", function() {
        if (hasClass(switcher, 'right')) {
            switcher.className = "switcher left";
        } else {
            switcher.className = "switcher right";
        } 
    });
}());
