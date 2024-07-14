(function () {
    var style = document.createElement('style'),
        ref = document.getElementsByTagName('base')[0] || 
              document.getElementsByTagName('script')[0];

    style.innerHTML = 'iframe { visibility: hidden; }';

    ref.parentNode.insertBefore(style, ref);

    window.onload = function() {
        style.parentNode.removeChild(style);
    }
})();
