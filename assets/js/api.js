$(document).ready(function() {
    // Intercept form submission
    $('#CheckinGuest').submit(async function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        // Display form data in console
        console.log(Object.fromEntries(formData));
        console.log(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        try {
            let response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: formData
            });
            let result = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Intercept form submission
    $('#CheckoutGuest').submit(async function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        // Display form data in console
        console.log(Object.fromEntries(formData));
        console.log(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        try {
            let response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: formData
            });
            let result = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    });

});