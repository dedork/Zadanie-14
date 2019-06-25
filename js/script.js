'use strict';

var progressBar = document.querySelector(".progress-bar");
var templateList = document.getElementById("template-cell").innerHTML;
var buttonGroup = document.querySelector(".button-group");
var buttons = buttonGroup.querySelectorAll(".button");
var infos = document.getElementById("infos");
var marker = [];
var results = document.getElementById("main-carrousel");

(function() {
    Mustache.parse(templateList);
        var listItems = "";
        for (var i = 0; i < objects.length; i++) {
        listItems += Mustache.render(templateList, objects[i]);
    };
    
    results.insertAdjacentHTML("beforeend", listItems);
    var elem = document.querySelector("#main-carrousel");
    var flkty = new Flickity(elem, 
    {
    cellAlign: "center",
    wrapAround: true,
    contain: true,
    hash: true
    });

    flkty.on('scroll', function(progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + "%";
    });

    buttons = fizzyUIUtils.makeArray(buttons);
    buttonGroup.addEventListener('click', function(event) {
        var index = buttons.indexOf(event.target);
        flkty.select(index);
    });

    var flkty = new Flickity("#main-carrousel");

    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById("map"), 
        {
        zoom: 4,
        center: objects[0].coords
        });

    for (let i = 0; i < objects.length; i++) {
        marker[i] = new google.maps.Marker({
        position: objects[i].coords,
        map: map
        });
        
        marker[i].addListener("click", function() {
            flkty.select(i);
        });
        
        flkty.on('change', function (index){
            map.panTo(objects[i].coords);
            map.setZoom(5),
            {
            center: objects[i].coords,
            }
        });     
        
    };

}

})();





