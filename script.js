$(document).ready(function () {
    // Get the current date and display it at the top of the calendar
    const currentDate = "Work Day Scheduler";
    $("header h1").text(currentDate);

    // Generate time blocks for standard business hours (9am to 5pm)
    const startTime = 9;
    const endTime = 17; // 5pm in 24-hour format
    const currentHour = dayjs().hour();

    console.log(currentHour);
    const $container = $(".container");
    var timeBlocks = $(".time-block");
    console.log(timeBlocks);

    for (let hour = startTime; hour <= endTime; hour++) {
        // const $timeBlock = $("<div>").addClass("time-block");
        const timeBlock = $(`#hour-${hour}`)
        console.log(timeBlock)
        // const $time = $("<div>").addClass("time").text(`${hour}:00`);
        // const $eventInput = $("<input>").addClass("event-input");
        // const $saveBtn = $("<button>").addClass("save-btn").text("Save");

        // Set color-coding based on past, present, or future
        if (hour < currentHour) {
            timeBlock.addClass("past");
        } else if (hour === currentHour) {
            timeBlock.addClass("present");
        } else {
            timeBlock.addClass("future");
        }

        // Load event from local storage, if available
        const savedEvent = localStorage.getItem(`event-${currentDate}-${hour}`);
        if (savedEvent) {
            $eventInput.val(savedEvent);
        }

        // // Save event to local storage on button click


        // $timeBlock.append($time, $eventInput, $saveBtn);
        // $container.append($timeBlock);
    }
    $(".saveBtn").on("click", function () {
        var comments = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
        console.log(comments);
        console.log(timeBlock);
        localStorage.setItem(timeBlock, comments);

    });
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    const date = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    var dateElement = $("#currentDay").text(date)
    dateElement;
    console.log(date);
});
