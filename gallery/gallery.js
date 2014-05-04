

(function (window, document) {
    var links = [{"title":"color-scheme","href":"color-scheme-gallery.html"},{"title":"web-font","href":"web-font-gallery.html"}];

    function nav(links) {
        var nav = document.createElement('nav');
        links.forEach(function(link){
            var item = document.createElement('a');
            item.href = link.href;
            item.innerText = link.title;
            item.className = 'nav-item';
            nav.appendChild(item);
        });
        return nav;
    }

    window.onload = function(){
        var header = document.querySelector('header');
        header.appendChild(nav(links));
    };
})(window, document);