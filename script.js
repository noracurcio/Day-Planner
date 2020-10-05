$(document).ready(function(){
    function saveButton(){
        var textValue = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, textValue)

    }
    $(".saveBtn").on("click",saveButton)

    function checkTime(){
        var currentHour = moment().hours()
        console.log(currentHour)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if( id < currentHour){
                $(this).addClass("past")
            }
            else if( id > currentHour){
                $(this).removeClass("past")
                $(this).addClass("future")
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("future")
                $(this).addClass("present")
            }
        })
    }
    checkTime()

    $("#9 .description").val(localStorage.getItem("9"))


})