function sendMail(rsvpForm) {
    // Get form data
    var firstName = rsvpForm.firstName.value;
    var lastName = rsvpForm.lastName.value;

    console.log(firstName, lastName);

    // Get selected values for starters, main, and dessert
    var starter = getSelectedValue('starter');
    var main = getSelectedValue('main');
    var dessert = getSelectedValue('dessert');

    var additionalComments = rsvpForm.additionalComments.value;

    console.log(starter, main, dessert);

    // Compose email data
    var emailData = {
        service_id: 'service_7z1vi7w',
        template_id: 'template_dxi1b4i',
        user_id: 'dAeer_zSgV2AAmTIr',
        template_params: {
            'from_name': firstName + ' ' + lastName,
            'starter': starter,
            'main': main,
            'dessert': dessert,
            'additionalComments': additionalComments
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
    return selectedElement ? selectedElement.id : null;
}

// Function to show success message in a container and redirect to index.html
function showSuccessMessage() {
    // Create a container for the success message
    var successContainer = document.createElement('div');
    successContainer.className = 'success-container';
    
    // Create the success message
    var successMessage = document.createElement('p');
    successMessage.textContent = 'RSVP submitted successfully!';
    
    // Create the OK button
    var okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.className = 'rsvp-btn';
    okButton.onclick = function () {
        // Redirect to index.html
        window.location.href = 'index.html';
    };

    // Append the elements to the container
    successContainer.appendChild(successMessage);
    successContainer.appendChild(okButton);

    // Append the container to the body
    document.body.appendChild(successContainer);
}


// Function to show error message
function showErrorMessage() {
    // You can customize this function to display an error message to the user
    alert('RSVP submission failed. Please try again.');
}