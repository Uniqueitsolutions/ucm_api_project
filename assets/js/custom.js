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
    
    // Input field validation for 3 characters
    $('#room').on('input', function() {
        var inputValue = $(this).val();
        if (inputValue.length > 3) {
            $(this).val(inputValue.slice(0, 3)); // Limit to 3 characters
        }
    });
});
