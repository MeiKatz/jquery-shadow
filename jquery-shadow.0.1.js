(function ( $ ) {
    $.fn.shadow = function ( callback ) {
        var $this = $( this );
        
        if ( $this.length === 1 && typeof callback === "undefined" ) {
            var el = this[0];
            
            if ( el.createShadowRoot ) {
                return ( el.shadowRoot === null       ? el.createShadowRoot()       : el.shadowRoot );
            } else if ( el.webkitCreateShadowRoot ) {
                return ( el.webkitShadowRoot === null ? el.webkitCreateShadowRoot() : el.webkitShadowRoot );
            } else {
                return null;
            }
        }
        
        if ( typeof callback !== "function" ) {
            return $this;
        }
        
        return $( this ).each( function () {
            callback.call( this, $( this ).shadow() );
        });
    };
})( jQuery );
