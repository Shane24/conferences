/*
// Thanks to http://tympanus.net/codrops/2013/06/06/on-scroll-animated-header/ for the JS below
// CSS references modified to suit needs
*/

var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.navbar' ),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
        
        window.addEventListener( 'touchmove', function( event ) { // added for iOS scroll detection
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrolliOS, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }
    
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // next 2 functions added for iOS scroll detection     
    
    function scrolliOS() { 
        var sy = scrollYiOS();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }
    
    function scrollYiOS() { 
        return document.body.scrollTop;
    }

 
    init();
 
})();