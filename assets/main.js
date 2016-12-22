;(function ($) {
    'use strict';
    var $body = $('html, body'),
        content = $('#main').smoothState({
            onStart: {
                duration: 250,
                render: function () {
                    content.toggleAnimationClass('is-exiting');
                    
                    // Scroll user to the top
                    $body.animate({ 'scrollTop': 0 });
                }
            }
    }).data('smoothState');
})(jQuery);