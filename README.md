# Kathleen & Adams Wedding Website

![Wedding Responsive Image](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/responsive-readme.png)

## Live Link

The live website can be found [here](https://huddy2022.github.io/KathleenAndAdamsWedding/).

## Overview

Welcome to the Kathleen & Adams Wedding Website! This platform serves as an online hub for all information related to Kathleen and Adams' wedding celebration. Users can explore various sections, including the home page, details about the wedding, and other relevant information. The website is designed to provide an engaging and informative experience for guests and well-wishers.

## Features

### Navigation

The navigation menu is crafted for user-friendliness, employing responsive design principles. It ensures easy access to different sections of the website.

- **Home**
- **The Venue**
- **Information**
- **Schedule**
- **Wishing Well**
- **RSVP**

![Navigation](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/navigation-readme.png)

### Home

The home page welcomes you with a captivating image or logo related to our wedding, creating an inviting atmosphere that sets the tone for the celebration. Below the image, a countdown clock dynamically displays the time remaining until the ceremony. Additionally, a prominent RSVP by date button and a speaker toggle button for music control are accessible on all pages, except the RSVP page, where only the speaker button is available.

![Home page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/home-readme.png)

### The Venue

The venue page is divided into two containers: one detailing nearby accommodations with direct links to hotel websites, and the other providing essential parking information. Explore a variety of lodging options and plan for on-site or nearby parking.

![Venue page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/venue-readme.png)

### Information

The Information page outlines crucial details for our June 14th, 2024 wedding celebration. It addresses our child attendance policy, specifying that, unfortunately, we can only accommodate our own children. The dress code is Cocktail/Formal, and we kindly request privacy regarding photography, urging guests not to share images of our children on social media. Your cooperation is appreciated. Please RSVP by February 19th, 2024.

![Information page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/information-readme.png)

### Schedule

The Schedule page serves as a focal point for crucial details surrounding the wedding celebration. Access key information such as the event date, time, and location. Furthermore, this section provides valuable insights into accommodations and transportation options, aiding guests in their event preparations.

Displayed on the Schedule page is a visually engaging timeline that outlines the sequential order of events. From guest arrival and seating to the ceremony, drinks reception, wedding breakfast, speeches, cake cutting, first dance, evening refreshments, and concluding with the end of music and transportation arrangements, the timeline offers a comprehensive overview of the wedding festivities.

![Schedule page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/schedule-readme.png)


### Wishing Well

The Wishing Well page conveys our heartfelt gratitude for your presence at our celebration. While your love and laughter are the greatest gifts, should you wish to contribute, we will have a honeymoon wishing well available on the day. Your support in helping us create new experiences and cherished memories is genuinely appreciated.

![Wishing well page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/wishing-well-readme.png)

### RSVP

The "RSVP" page is where you can confirm your attendance and provide additional details for our wedding. Begin by entering your first and last name, then proceed to select your menu options for starters, mains, and desserts. Feel free to share any additional comments or dietary requests in the provided text area. Please ensure you submit your RSVP by the 19th of February 2024. If you encounter any difficulties or have questions, contact us. Your presence on our special day means the world to us.

![RSVP page](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/rsvp-readme.png)

### Email JS

The RSVP page incorporates Email.js to seamlessly collect and process RSVP submissions. When guests complete the form, including their first and last names, selected menu options for starters, mains, and desserts, and any additional messages or dietary requests, Email.js handles the submission process. The provided information is securely sent to my email address to ensure a smooth and organized response collection.

### Alerts

To enhance the user experience, the RSVP page features helpful alerts that guide guests through the form submission process. If a user attempts to submit the form without completing essential fields, such as the first and last name, or neglects to choose menu options for starters, mains, and desserts, an alert will appear. These alerts ensure that guests are aware of any missed details and provide specific instructions on how to proceed. For example, if the user forgets to enter their name, a prompt will guide them to input both their first and last names before continuing. These alerts aim to streamline the RSVP process and assist guests in providing comprehensive and accurate information.

![Alert](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/alert-readme.png)

### Contact Us

The Contact Us link on the RSVP page serves as a direct channel for guests to reach out in case of any challenges or if they are unable to attend. Designed to streamline communication, this feature allows guests to send emails directly to the couple, Kathleen and Adam. Whether guests encounter difficulties, need further assistance, or have concerns about their RSVP, this accessible contact option ensures a quick and personalized response. The couple welcomes any inquiries or messages related to the wedding, providing a supportive means for guests to communicate their needs.

![Contact us](https://github.com/Huddy2022/KathleenAndAdamsWedding/blob/main/assets/images/contact-readme.png)

### Known Bugs and Issue Resolution

During the development of this wedding website, I encountered and resolved several issues to ensure a smooth and functional user experience. Below are some of the known bugs and how I addressed them:

1. **Navbar Overlapping Issue:**
   - **Description:** On smaller screens, the navbar was overlapping with the content.
   - **Resolution:** I implemented Bootstrap's responsive classes to ensure the navbar collapses into a mobile-friendly menu, preventing overlap.

2. **Form Submission without Required Fields:**
   - **Description:** Users could submit the RSVP form without completing essential fields.
   - **Resolution:** I added client-side validation to ensure users provide their first and last names and select menu options before submitting. Additionally, alert messages guide users on missing details.

3. **Background Music Controls:**
   - **Description:** Background music controls were not responsive on all devices.
   - **Resolution:** I adjusted the JavaScript code to improve the responsiveness of the music toggle function across various devices.

4. **Email.js Integration:**
   - **Description:** Issues were faced during the integration of Email.js for RSVP submissions.
   - **Resolution:** I successfully integrated Email.js, enabling the secure collection of RSVP details and messages. Detailed instructions for Email.js configuration are provided in the [Email JS](#email-js) section.

### Potential Remaining Bugs

While extensive testing has been conducted, there may still be potential bugs that require attention. Please report any issues you encounter, and I will address them promptly to enhance the overall website experience.

If you come across any bugs or have suggestions for improvement, please [contact us](#contact-us). Your feedback is valuable in ensuring a flawless and enjoyable experience for all users.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## Testing


| Feature                       | Description                                             | Expected Outcome                                      | Status    |
|-------------------------------|---------------------------------------------------------|--------------------------------------------------------|-----------|
| Responsive Design             | Test the website's responsiveness on various devices.   | Smooth adaptation to different screen sizes.          | ✅ Passed  |
| Navbar Navigation             | Ensure navigation links redirect to the correct pages.   | Clicking on each navbar link opens the respective page.| ✅ Passed  |
| Venue Navigation              | Ensure navigation links work for each local hotel page.   | Clicking on each navigation button opens respective page.| ✅ Passed  | 
| RSVP Form Submission          | Verify the RSVP form submission process.                | Successful submission of the form with valid details. | ✅ Passed  |
| Form Validation               | Test if the form prompts correctly for missing details. | Alert messages guide users to complete required fields.| ✅ Passed  |
| Background Music Controls     | Check functionality of background music controls.      | Music toggles on and off, adjusting volume as expected.| ✅ Passed  |
| Email.js Integration          | Confirm that Email.js securely collects RSVP details.   | Successfully receive test RSVP email with correct data.| ✅ Passed  |
| Alert Messages                | Ensure alert messages display for form validation.      | Alerts prompt users to correct missing or invalid data.| ✅ Passed  |
| Contact Us Link               | Test if the "Contact Us" link sends emails correctly.   | Emails are delivered to the specified contact address. | ✅ Passed  |


## Validator Testing

- HTML

   - I can confirm no errors were returned when passing through the official w3c validator.
- CSS

   - I can confirm no errors were returned when passing through the official w3c validator.

- Javascript

   - I used the JS Hint to check my code and I can confirm all clear and no errors were found.

- Accessibility

   - I confirmed the colours and fonts are easy to read and I tested the colours I have chosen through the web aim contrast checker.
   - I used the lighthouse in dev tools to test my web page on a desktop and mobile devices.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
   - In the GitHub repository, navigate to the Settings tab
   - From the source section drop-down menu, select the Main Branch
   - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live website can be found [here](https://huddy2022.github.io/KathleenAndAdamsWedding/).

## Credits


- Background images: 
  - [Pexels](https://www.pexels.com/)
  - [Freepik](https://www.freepik.com/)

- Image creation:
  - [Canva](https://www.canva.com/) (Used for creating some images on the home page and schedule)

- Favicon image:
  - [FreeFavicon](https://www.freefavicon.com/)

- Background wedding music:
  - [Chosic](https://www.chosic.com/)

- Wedding setup inspiration:
  - [WedSites Blog](https://blog.wedsites.com/10-beautiful-wedding-website-examples-to-inspire-you/)

## Feedback

We welcome any feedback or suggestions you may have. Feel free to reach out via the "Contact Us" section.

Thank you for visiting our wedding website! We look forward to celebrating this joyous occasion with you.
