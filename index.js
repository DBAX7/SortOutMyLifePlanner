
    
    $(".saveBtn").on("click", function() {
        var textPoint = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textPoint);
    });
    
    $("#currentDay").text(moment().format("MMMM Do YYYY"))

    function hours() {
        currentHour = moment().format("HH")
        var hourIndex = currentHour - 9;
        $(".time-block").each(function(timeArea) {
            if(timeArea < hourIndex) {
                $(this).addClass("past").removeClass("present").removeClass("future");
            };
            if(timeArea === hourIndex) {
                $(this).addClass("present").removeClass("past").removeClass("future");
            };
            if(timeArea > hourIndex) {
                $(this).addClass("future").removeClass("present").removeClass("past");
            };
        });
    };

    setInterval(hours, 1000);
