var templateList = document.getElementById('template-cell').innerHTML;
 
Mustache.parse(templateList);
 
var listItems = '';

for(var i = 0; i < objects.length; i++){
    listItems = Mustache.render(templateList, objects[i])
};
    
var results = document.getElementById('main-carousel'); 

results.insertAdjacentHTML('beforeend', listItems);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    cellAlign: 'center',
    wrapAround: true,
    contain: true,
    hash: true,
});

var flkty = new Flickity( '.main-carousel', {
});

var flkty = new Flickity('.main-carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

