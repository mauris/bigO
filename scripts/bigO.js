var bigO = (function ($) {

    jQuery.fn.extend({
        onAnimateEnd: function(doSomething) {
             return this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
        }
    })

    var iterativeProblems = [
        {
            'solution': 'O(n)'
        }
    ]

    var events = {
        'iterative.run': function() {
            $("#welcomeContainer").onAnimateEnd(function(){
                $("#problemContainer").css('display', 'block').addClass('animated bounceInUp');
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