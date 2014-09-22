// We only want these styles applied when javascript is enabled
$('div.navigation').css({'width' : '300px', 'float' : 'left'});
$('div.content').css('display', 'block');

  // Initially set opacity on thumbs and add
  // additional styling for hover effect on thumbs
  var onMouseOutOpacity = 0.67;
  $('#thumbs ul.thumbs li').css('opacity', onMouseOutOpacity)
    .hover(
      function () {
        $(this).not('.selected').fadeTo('fast', 1.0);
      }, 
      function () {
        $(this).not('.selected').fadeTo('fast', onMouseOutOpacity);
      }
    );

  $(document).ready(function() {
    // Initialize Advanced Galleriffic Gallery
    var galleryAdv = $('#gallery').galleriffic('#thumbs', {
    delay:                  1000,
    numThumbs:              0,
    preloadAhead:           3,
    enableTopPager:         false,
    enableBottomPager:      false,
    imageContainerSel:      '#slideshow',
    controlsContainerSel:   '#controls',
    captionContainerSel:    '#caption',
    loadingContainerSel:    '#loading',
    renderSSControls:       false,
    renderNavControls:      true,
    playLinkText:           'Play',
    pauseLinkText:          'Pause',
    prevLinkText:           '&lsaquo; &nbsp;',
    nextLinkText:           '&nbsp; &rsaquo;',
    nextPageLinkText:       '&rsaquo; &nbsp;',
    prevPageLinkText:       '&nbsp; &lsaquo;',
    enableHistory:          true,
    autoStart:              false,
    onChange:               function(prevIndex, nextIndex) {
      $('#thumbs ul.thumbs').children()
        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
        .eq(nextIndex).fadeTo('fast', 1.0);
      },
    onTransitionOut:        function(callback) {
      $('#caption').fadeTo('fast', 0.0);
      $('#slideshow').fadeTo('fast', 0.5, callback);
    },
    onTransitionIn:         function() {
      $('#slideshow').fadeTo('slow', 1);
      $('#caption').fadeTo('slow', 1);
    },
    onPageTransitionOut:    function(callback) {
      $('#thumbs ul.thumbs').fadeTo('fast', 0.0, callback);
    },
    onPageTransitionIn:     function() {
      $('#thumbs ul.thumbs').fadeTo('fast', 1.0);
    }
  });
});

$(document).ready(function() {
  $('#gallery #slideshow').mouseenter(function() {$('.caption').fadeTo(350, 0.6);})
  $('#gallery #slideshow').mouseleave(function() {$('.caption').fadeTo(350, 0.0);})
  
  $('#caption_information').mouseenter(function() {$('.caption').fadeTo(350, 0.6);})
  $('#caption_information').mouseleave(function() {$('.caption').fadeTo(350, 0.0);})

});
