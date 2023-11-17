function sendMail(rsvpForm) {
    // Get form data
    var firstName = rsvpForm.firstName.value;
    var lastName = rsvpForm.lastName.value;

    // Get selected values for starters, main, and dessert
    var starter = getSelectedValue('starter');
    var main = getSelectedValue('main');
    var dessert = getSelectedValue('dessert');

    // Check if any radio button is not selected
    if (!starter || !main || !dessert) {
        // Handle the case where not all options are selected
        showErrorMessage();
        return false;
    }

    // Get the values from the selected radio buttons
    starter = starter.value;
    main = main.value;
    dessert = dessert.value;

    // Compose email data
    var emailData = {
        service_id: 'service_7z1vi7w',
        template_id: 'template_dxi1b4i',
        user_id: 'dAeer_zSgV2AAmTIr',
        template_params: {
            'from_name': firstName + ' ' + lastName,
            'RSVP Details': `
                Starter: ${starter}
                Main: ${main}
                Dessert: ${dessert}`
        }
    };

    // Send email using email.js
    emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id)
        .then(
            function (response) {
                console.log('SUCCESS', response);
                // You can add further actions after successful submission
                // For example, show a success message to the user
                showSuccessMessage();
            },
            function (error) {
                console.log('FAILED', error);
                // You can handle errors here
                // For example, show an error message to the user
                showErrorMessage();
            }
        );

    // Prevent form submission (you can remove this line if you want the form to submit)
    return false;
}

// Function to get the selected value for a group of radio buttons
function getSelectedValue(groupName) {
    var selectedElement = document.querySelector('input[name="' + groupName + '"]:checked');
    return selectedElement ? selectedElement.value : null;
}