var bigO = (function ($) {

    jQuery.fn.extend({
        onAnimateEnd: function(doSomething) {
             return this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
        }
    })

    var events = {
        'iterative.run': function() {
            $("#welcomeContainer").onAnimateEnd(function(){
                
            }).addClass('animated bounceOutUp');
        }
    }

    $(document).on('click', 'a.apptrigger', function(e){
        var eventName = $(this).data('handler');
        if (events[eventName]) {
            var func = events[eventName];
            func();
        }
    });

    return [];
})(jQuery);