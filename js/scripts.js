// Everything OK?
console.log('OK');

// Your Awesome Scripts
// LetterJS
$('h1').lettering();

// Animation
$('#stage').hover( function() {
  
  // slide
  $('h1').toggleClass('slide-h1');
  // rotate
  $('svg#guitar').toggleClass('rotate-guitar');
  // skew
  $('img#satch').toggleClass('skew-satch');
  // opacity (hide)
  $('#google').toggleClass('opacity-zero');
  // misc
  $('svg.music-notes').toggleClass('music-notes-transition');
  
  $('keyframes').hover();
  
});

//Background Color Randomization
var colorArray = ['#CCCCCC', '#FFFFFF', '#feb5b5'];
var randomColor = Math.floor(Math.random() * (colorArray.length));
$('body#randColor').css('background', colorArray[randomColor]);
console.log(colorArray[randomColor]);

// Audio play button
var isPlaying = false;
$('#play-btn').click( function() { 
    if (!isPlaying) {
        isPlaying = true;

        // play music
        $('#play-music').get(0).play();

        // change play button to pause
        $('#play-btn').attr({
            src: 'img/pause_button.png',
            alt: 'Pause',
            title: 'Pause'
        });

        // add background of album
        $('#swta').attr({
            src: 'img/SurfingWithTheAlienAlbumCover.jpg',
            alt: 'Surfing with the Alien Album Cover',
            title: 'Surfing with the Alien Album Cover'
        });

        // hide guitar, music lines, music notes and anything that is activated when hover is off
        $('svg#music-lines').addClass('opacity-zero');
        $('svg#guitar').addClass('opacity-zero');
        $('svg#music-note-two').addClass('opacity-zero');
        $('svg#music-note-three').addClass('opacity-zero');
        $('svg#music-note-four').addClass('opacity-zero');
        $('svg#music-note-five').addClass('opacity-zero');
        $('svg#music-note-six').addClass('opacity-zero');
        $('svg#google').css('opacity', '0');
        $('img#satch').css('opacity', '0');
    } else {
        isPlaying = false;
        $('#play-music').get(0).pause();
        $('#play-btn').attr({
            src: 'img/play_button.png',
            alt: 'Play',
            title: 'Play'
        });
        $('#swta').attr({
            src: '',
            alt: ''
        });
        $('svg#music-lines').removeClass('opacity-zero');
        $('svg#guitar').removeClass('opacity-zero');
        $('svg#music-note-two').removeClass('opacity-zero');
        $('svg#music-note-three').removeClass('opacity-zero');
        $('svg#music-note-four').removeClass('opacity-zero');
        $('svg#music-note-five').removeClass('opacity-zero');
        $('svg#music-note-six').removeClass('opacity-zero');
        $('svg#google').css('opacity', '1');
        $('img#satch').css('opacity', '1');
    }
});