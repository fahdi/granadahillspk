import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});

$(function() {
  // Slow slides for internal links
  $('.menu a').click(function() {
    console.log("navigate");
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        if ($(window).width() < 600) {
          $('nav ul').slideUp();
        }
        return false;
      }
    }
  });
});

window.onload = function loadStuff() {  
  var win, doc, img, header, enhancedClass;

  // Quit early if older browser (e.g. IE 8).
  if (!('addEventListener' in window)) {
    return;
  }

  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.home-hero');
  enhancedClass = '.home-hero-enhanced';

  // Rather convoluted, but parses out the first mention of a background
  // image url for the enhanced header, even if the style is not applied.
  var bigSrc = (function() {
    // Find all of the CssRule objects inside the inline stylesheet 
    var styles = doc.styleSheets[0].cssRules;
    // Fetch the background-image declaration...
    var bgDecl = (function() {
      // ...via a self-executing function, where a loop is run
      var bgStyle, i, l = styles.length;
      for (i = 0; i < l; i++) {
        // ...checking if the rule is the one targeting the
        // enhanced header.

        if (styles[i].selectorText &&
          styles[i].selectorText === enhancedClass) {
          console.log(styles[i].style.backgroundImage)
          // If so, set bgDecl to the entire background-image
          // value of that rule
          bgStyle = styles[i].style.backgroundImage;
          // ...and break the loop.
          break;
        }
      }
      // ...and return that text.
      return bgStyle;
    }());
    // Finally, return a match for the URL inside the background-image
    // by using a fancy regex I Googled up, as long as the bgDecl 
    // variable is assigned at all.         
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());

  // Assign an onLoad handler to the dummy image *before* assigning the src
  img.onload = function() {
    header.className += ' ' + enhancedClass;
  };
  // Finally, trigger the whole preloading chain by giving the dummy
  // image its source.
  if (bigSrc) {
    img.src = bigSrc;
  }
};

$(document).foundation();

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('#mobley-header').css('background-position','center ' + -(scrolled*0.35)+'px');
}
