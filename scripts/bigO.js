var bigO = (function ($) {
    var bigO = [];

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
        'welcome.show': function() {
            $("#problemContainer").onAnimateEnd(function(){
                $("#problemContainer").css('display', 'none');
                $("#welcomeContainer").removeClass('bounceOutUp').addClass('animated bounceInDown');
            }).addClass('animated bounceOutDown');
            return false;
        },
        'iterative.run': function() {
            $("#welcomeContainer").onAnimateEnd(function(){
                $("#problemContainer").css('display', 'block').removeClass('bounceOutDown').addClass('animated bounceInUp');
            }).addClass('animated bounceOutUp');
            return false;
        }
    }

    $(document).on('click', 'a.apptrigger', function(e){
        var eventName = $(this).data('handler');
        if (events[eventName]) {
            var func = events[eventName];
            return func();
        }
    });

    return bigO;
})(jQuery);
