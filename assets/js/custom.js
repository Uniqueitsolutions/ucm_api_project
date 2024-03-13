function getDate(){
    var date = new Date();
    console.log(date);
};
// Function to populate the day, month, and year dropdowns with current date values
function populateDateDropdowns() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1; // Month is 0-based, so add 1
    var currentYear = currentDate.getFullYear();

    // Populate day dropdown
    var dayDropdown = document.getElementById('cday');
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        if (i === currentDay) {
            option.selected = true;
        }
        dayDropdown.appendChild(option);
    }

    // Populate month dropdown
    var monthDropdown = document.getElementById('cmonth');
    for (var j = 1; j <= 12; j++) {
        var option = document.createElement('option');
        option.value = j;
        option.text = j;
        if (j === currentMonth) {
            option.selected = true;
        }
        monthDropdown.appendChild(option);
    }

    // Populate year dropdown
    var yearDropdown = document.getElementById('cyear');
    for (var k = currentYear; k <= currentYear + 10; k++) {
        var option = document.createElement('option');
        option.value = k;
        option.text = k;
        if (k === currentYear) {
            option.selected = true;
        }
        yearDropdown.appendChild(option);
    }
}

// Call the function to populate the dropdowns when the page loads
window.onload = populateDateDropdowns;

$(document).ready(function () {

    $('.menu-link').hover(function() {
        // Remove active class from all menu links
        //$('.menu-link').removeClass('active');
        // Add active class to the clicked menu link
        //$(this).addClass('active');

        // Toggle between light and dark images based on active class
        if ($(this).hasClass('active')) {
            $(this).find('.icon-image.light').hide();
            $(this).find('.icon-image.dark').show();
        } else {
            $(this).find('.icon-image.light').show();
            $(this).find('.icon-image.dark').hide();
        }
    },
    function() {
        // Remove active class from all menu links
        //$('.menu-link').removeClass('active');
        // Add active class to the clicked menu link
        //$(this).addClass('active');

        // Toggle between light and dark images based on active class
        if ($(this).hasClass('active')) {
            $(this).find('.icon-image.light').show();
            $(this).find('.icon-image.dark').hide();
        } else {
            $(this).find('.icon-image.light').hide();
            $(this).find('.icon-image.dark').show();
        }
    }
    );

    $('.menu-link').each(function() {
        if ($(this).hasClass('active')) {
            $(this).find('.icon-image.light').show();
            $(this).find('.icon-image.dark').hide();
        } else {
            $(this).find('.icon-image.light').hide();
            $(this).find('.icon-image.dark').show();
        }
    });


      // Function to update date and time every second
      function updateDateTime() {
        var now = new Date();
        var date = now.getDate();
        var month = now.toLocaleDateString('en-US', { month: 'long' });
        var year = now.getFullYear();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Format date, month, and year
        var formattedDate = '<span style="color: #0f3f6f;">' + date + '</span>';
        var formattedMonth = '<span style="color: #0f3f6f;">' + month + '</span>';
        var formattedYear = '<span style="color: #0f3f6f;">' + year + '</span>';

        // Format hours, minutes, and seconds
        var formattedTime = '<span style="color: #0f3f6f;">' + hours + '</span>' + ':' +
                            '<span style="color: #0f3f6f;">' + minutes + '</span>' + ':' +
                            '<span style="color: #0f3f6f;">' + seconds + '</span>';

        // Set the text content with formatted date, month, year, hours, minutes, and seconds
        $('#livetime').html(' ' + formattedDate + ' ' + formattedMonth + ' ' + formattedYear +
                            ', ' + formattedTime);
    }

    // Call the updateDateTime function initially
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // Input field validation for 3 characters
    $('#room').on('input', function() {
        var inputValue = $(this).val();
        if (inputValue.length > 3) {
            $(this).val(inputValue.slice(0, 3)); // Limit to 3 characters
        }
    });
});
