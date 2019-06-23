(function() {
  var templateList = document.getElementById("template-cell").innerHTML;
 
  Mustache.parse(templateList);
 
  var listItems = "";
  for (var i = 0; i < objects.length; i++) {
    listItems += Mustache.render(templateList, objects[i]);
  }
  var results = document.getElementById("main-carrousel");
  results.insertAdjacentHTML("beforeend", listItems);
  var elem = document.querySelector("#main-carrousel");
  var flkty = new Flickity(elem, {
    cellAlign: "center",
    wrapAround: true,
    contain: true,
    hash: true
  });
 
  var flkty = new Flickity("#main-carrousel");
 
  var progressBar = document.querySelector(".progress-bar");
 
  flkty.on("scroll", function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + "%";
  });
    
    var buttonGroup = document.querySelector('.button-group');
    var buttons = buttonGroup.querySelectorAll('.button');
    buttons = fizzyUIUtils.makeArray(buttons);

    buttonGroup.addEventListener('click', function (event) {
     
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);
});
})();

//Google maps

(function(){
    window.initMap = function(){
        var infos = document.getElementById('infos');
        
        var map = new google.maps.Map(document.getElementById('map'), 
        {
            zoom: 4,
            center: objects[0].coords
        });
        

        for (let i = 0; i < objects.length; i++) {
        var markers = new google.maps.Marker({
			position: objects[i].coords,
			map: map
		  });
            
        markers.addEventListener('click', function(){
            
        if (!matchesSelector(event.target, markers)) {
        return;
    }
//        var index = buttons.indexOf(event.target);
        flkty.select(i);
        });
    })
})();





















