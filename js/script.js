var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    cellAlign: 'center',
//    wrapAround: true,
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

var wrappedButton = document.querySelector('.button--next-wrapped');

wrappedButton.addEventListener( 'click', function() {
  flkty.next( true );
});

var template = document.getElementById('template');

