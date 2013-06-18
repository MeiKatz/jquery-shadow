/**
 * @author      Gregor Mitzka (gregor.mitzka@gmail.com)
 * @version     0.1.4
 * @date        2013-08-06
 * @licence     beer ware licence
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <gregor.mitzka@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Gregor Mitzka
 * ----------------------------------------------------------------------------
 */
(function ( $ ) {
    $.fn.shadow = function ( options, callback ) {
        var $this = $( this );

        callback = ( typeof callback !== "function" && typeof options === "function" ) ? options : null;
        options  = ( typeof options  === "object" )                                    ? options : {};

        if ( $this.length === 1 && callback != null ) {
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

        if ( callback == null ) {
            return $this;
        }

        return $this.each(function() {
            callback.call( this, $( this ).shadow( options ) );
        });
    };
})( jQuery );
