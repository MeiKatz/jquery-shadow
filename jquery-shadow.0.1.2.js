(function ( $ ) {
    $.fn.shadow = function ( callback ) {
        var $this = $( this );

        if ( $this.length === 1 && typeof callback !== "function" ) {
            var options = ( typeof callback === "object" ) ? callback : {};
            var el = this[ 0 ];

            if ( el.createShadowRoot && typeof el.shadowRoot !== "undefined" ) {
                var shadow = ( el.shadowRoot       === null ? el.createShadowRoot()       : el.shadowRoot );
            } else if ( el.webkitCreateShadowRoot && typeof el.webkitShadowRoot !== "undefined" ) {
                var shadow = ( el.webkitShadowRoot === null ? el.webkitCreateShadowRoot() : el.webkitShadowRoot );
            } else {
                return null;
            }

            if ( options.hasOwnProperty( "applyAuthorStyles" ) ) {
                shadow.applyAuthorStyles = !!options.applyAuthorStyles;
            }

            if ( options.hasOwnProperty( "resetStyleInheritance" ) ) {
                shadow.resetStyleInheritance = !!options.resetStyleInheritance;
            }

            return shadow;
        }

        if ( typeof callback !== "function" ) {
            return $this;
        }

        return $( this ).each(function() {
            callback.call( this, $( this ).shadow() );
        });
    };
})( jQuery );
