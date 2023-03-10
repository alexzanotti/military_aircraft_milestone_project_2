# Testing

## Testing Summary

Testing carried out in this project has been seperated into manual and automated testing. 

A brief description of Test Driven Development has also been included (this wasn't used in the development of this project however)

### Test Driven Development (TDD) 

Test-driven development (TDD) is a process of developing software by relying on requirements being converted into test cases, in which they are then developed to pass the test case.

This is opposed to the where development is completed and then tested after development to ensure that the code functions.

The TDD cycle is Red, Green, Refactor. The following sections explain each step:

#### Red
The purpose of this phase is to think about what you want to develop and write a test that informs the implementation of a feature. The test will only pass when the its expectations are met. As the code hasn't yet been developed, the test will fail, this the name of the phase being called "Red".

#### Green
The green phase is where you think about how to make your tests pass and implement code to get the test to pass. The goal is to find a solution, without worrying about optimizing your implementation (this comes in the next phase).

#### Refactor
In the refactor phase, you can begin thinking about how to improve your existing implementation. For example, you can think about how to accomplish the same output with more descriptive or faster code.

### Manual Testing

Manual testing has been seperated into 5 sub-categories:
* User Story Validation
* Functionality/Usability/Interactvity
* Responsiveness
* Browser testing
* Lighthouse Report

#### User Story Validation
The first type of testing completed is around validating that the user stories are met by the website. Against each user story, evidence has been provided to ensure that the user stories are validated.

#### Functionality/Usability/Interactvity 
Manual testing is the next section of testing, which ensures that the website functions correctly, is useable and all of the interactvity that has been built into the website is functioning correctly.

#### Responsiveness
Responsiveness testing ensures that the responsive design of the website is working correctly.

#### Browser testing

Browser testing is the next type of testing - this ensures that the website functions in multiple browsers.

#### Lighthouse Report

The last type of manual test is running a Lighthouse Report for each page of the website.

### Automated Testing

Automated testing looks at validating that the code itself is free from errors.

#### validator.w3.org
This tests the HTML code 
#### jigsaw.w3.org/css-validator/
This tests the CSS code 
#### JSHint
This tests the Javascript code 

## Testing Procedure

The testing procedure looks at testing each user story/functionality/interactivity etc. to ensure that what has been designed matches what has been built. To evidence the testing, screenshots have been provided.

Automated testing leans on online validators to ensure that there are no errors within the code itself. If there are errors, they will be amended and then retested.

### Manual Testing

#### User Story Validation

##### As a Military Aircraft Enthusiast, I want to see images of the best fighter aircraft in the world.
- Images are provided of each of the fighter aircraft on the "Home" page. The user are previous and next buttons to toggle between each image: 
![alt text](assets/images/testing/userStory/userStoryOneOne.png "Home Page Image Carousel")

- Images are provided on the "Aircraft" page for each aircraft that is selected:
![alt text](assets/images/testing/userStory/userStoryOneTwo.png "Aircraft Page Image Carousel")

##### As a Military Aircraft Enthusiast, I want to learn more about where the best fighter aircraft in the world are located.
- A Google Maps API is located on the "Home" page, which has markers set for each country that operates at least one of the six fighter aircraft within the site:
![alt text](assets/images/testing/userStory/userStoryOneTwo.png "Google Maps API")

##### As a user interested in learning more about fighter aircraft, I want to have an understanding of the performance of the fighter aircraft, such as the top speed, maxiumum altitude etc.
- For each buttons within the "Aircraft" page, there is a description and list of facts/figures for each fighter aircraft:
![alt text](assets/images/testing/userStory/userStoryThree.png "Aircraft Information")

##### As a user interested in learning more about fighter aircraft, I want to be able to contact the websites "admin" team, in order to ask any further questions
- There is a "Contact" page within the website, where the user is able to get in contact with the "admin" team, should they have any further questions:
![alt text](assets/images/testing/userStory/userStoryFour.png "Contact Form")

##### As a user who wants to test their military aircraft knowledge, I want to be able to test my newfound knowledge of the fighter aircraft
- On the "Quiz" page of the website, there are 12 questions that the user is able to answer, derived from information on the "Aircraft" page:
![alt text](assets/images/testing/userStory/userStoryFive.png "Quiz Questions")

##### As a user who wants to test their military aircraft knowledge, I want to be able to receive feedback on how well i understand the information about the aircraft
- On the "Quiz" page of the website, the user is able to select the "submit" button, which will give them feedback on their score, to get an idea of how well they understand the content:
![alt text](assets/images/testing/userStory/userStorySix.png "Quiz Score")

#### Functionality & Interactivity 

The following screenshots demonstrate functionality (usability) and interactivity of the website:

##### Header

* Hovering over the fighter icon changes the color to green (and takes you to the "Home" page correctly)
![alt text](assets/images/testing/functionality/headerIconHover.png "Header Icon Hover")
* Hovering over each navigation item works correctly in changing the color to a lighter shade of grey
![alt text](assets/images/testing/functionality/headerHomeHover.png "Header Home Hover")
![alt text](assets/images/testing/functionality/headerAircraftHover.png "Header Aircraft Hover")
![alt text](assets/images/testing/functionality/headerQuizHover.png "Header Quiz Hover")
![alt text](assets/images/testing/functionality/headerContactHover.png "Header Contact Hover")
* Clicking each navigation item then takes you to the relevant page correctly (and will be a white color to denote that you're on this page)
![alt text](assets/images/testing/functionality/headerHomeClick.png "Header Home Click")
![alt text](assets/images/testing/functionality/headerAircraftClick.png "Header Aircraft Click")
![alt text](assets/images/testing/functionality/headerQuizClick.png "Header Quiz Click")
![alt text](assets/images/testing/functionality/headerContactClick.png "Header Contact Click")
* The Stealth Mode toggle allows you to switch between the standard color scheme to a black and green color screen for the majority of the page content
* ![alt text](assets/images/testing/functionality/homeStealthMode.png "Home Page Stealth Mode")
* ![alt text](assets/images/testing/functionality/aircraftStealthMode.png "Aircraft Page Stealth Mode")
* ![alt text](assets/images/testing/functionality/quizStealthMode.png "Quiz Page Stealth Mode")
* ![alt text](assets/images/testing/functionality/contactStealthMode.png "Contact Page Stealth Mode")

##### Footer

* Hovering over the site link icons change color to green (and clicking on a site link will redirect you to the relevant page)
![alt text](assets/images/testing/functionality/footerHomeHover.png "Footer Home Icon")
![alt text](assets/images/testing/functionality/footerAircraftHover.png "Footer Aircraft Icon")
![alt text](assets/images/testing/functionality/footerQuizHover.png "Footer Quiz Icon")
![alt text](assets/images/testing/functionality/footerContactHover.png "Footer Contact Icon")

##### Home Page (excluding functionality already covered in the user story testing)

* The unordered list bullet points are replaced by fighter aircraft icons that change color to green when hovering over the icon:
![alt text](assets/images/testing/functionality/homeIconHover.png "Fighter Aircraft Icon")

##### Aircraft Page (excluding functionality already covered in the user story testing)

* The buttons displayed will present data about the fighter aircraft held within the aircraft.js file
![alt text](assets/images/testing/functionality/aircraftButtonSelectOne.png "F22 Data Example")
![alt text](assets/images/testing/functionality/aircraftButtonSelectTwo.png "F35 Data Example")

* The following errors were found when testing the image carousels for each aircraft - a F35 image was not linked correctly & 2 F22 images were pixelated
![alt text](assets/images/testing/errors/errorLink.png "F35 Not Linked Correctly")
![alt text](assets/images/testing/errors/errorPixelOne.png "F22 Image Pixelated 1")
![alt text](assets/images/testing/errors/errorPixelOne.png "F22 Image Pixelated 2")
* The F35 image was linked correctly and the 2 F22 images were replaced
![alt text](assets/images/testing/errors/f35ImageFiveFix.png "F35 Now Linked Correctly")
![alt text](assets/images/testing/errors/f22ImageOneFix.png "F22 Image Pixelated Fix 1")
![alt text](assets/images/testing/errors/f22ImageTwoFix.png "F22 Image Pixelated Fix 2")


##### Quiz Page (excluding functionality already covered in the user story testing)
  
* Upon answering a question, the user receives an alert to inform them of whether they answered correctly or incorrectly:
![alt text](assets/images/testing/functionality/quizAnswerCorrectAlert.png "Correct Answer Alert")
![alt text](assets/images/testing/functionality/quizAnswerIncorrectAlert.png "Incorrect Answer Alert")

* The questions not selected will then no longer be visible and the answered question will change styling, depending on whether the answer was correct or incorrect:
![alt text](assets/images/testing/functionality/quizAnswerCorrectColor.png "Correct Answer Color")
![alt text](assets/images/testing/functionality/quizAnswerIncorrectColor.png "Incorrect Answer Color")

* Upon pressing the "Submit" button, the users score will be displayed
![alt text](assets/images/testing/functionality/quizSubmitButtonScore.png "Submit Button Score Displayed")

* The user has a "Reset" button available, which will refresh the page, so they can re-take the quiz
* The user has a "Learn More" button available, which will re-direct the user to the "Aircraft" page

##### Contact Page (excluding functionality already covered in the user story testing)
  
* The "Contact" page form button will be disabled (more transparent color scheme) until the user has input a value within each of the fields
![alt text](assets/images/testing/functionality/contactFormDisabled.png "Disabled Submit Button")
* Now that all input fields are completed, the submit button will no longer be disabled (color will be opaque)
![alt text](assets/images/testing/functionality/contactFormSubmit.png "Submit Button no longer disabled")
* Upon submission of the contact form, the page will refresh and the form will be submitted to the admin team - this is verfied by the EmailJS email history and GMAIL inbox
![alt text](assets/images/testing/functionality/emailJSVerify.png "EmailJS History Verification")
![alt text](assets/images/testing/functionality/mailboxEmailVerify.png "Gmail Email Verification")

#### Header
##### Large Screens
* The header for larger screens displays the navbar inline and to the left hand side. The fighter aircraft icon is also to the left. The dark mode switch and label are on the right hand side of the navigation bar:
![alt text](assets/images/testing/responsiveness/headerLarge.png "Header Large")
##### Small Screens
* Using bootstrap, a hamburger icon is used within the navigation bar - the dark mode label is not displayed:
![alt text](assets/images/testing/responsiveness/headerSmall.png "Header Small")

#### Footer
##### Large Screens
* The footer displays the about and site links inline:
![alt text](assets/images/testing/responsiveness/footerLarge.png "Footer Large")
##### Small Screens
* Due to width constraints, the about text is stacked on top of the site links:
![alt text](assets/images/testing/responsiveness/footerSmall.png "Footer Small")

#### Home Page
##### Large Screens
* The width of the content is has about 2/3 of the screen:
![alt text](assets/images/testing/responsiveness/homeLarge.png "Home Page Large")
##### Small Screens
* As the screen becomes smaller, content width relatively increases:
![alt text](assets/images/testing/responsiveness/homeSmall.png "Home Page Small")

#### Aircraft Page
##### Large Screens
* The width of the content is roughly 2/3 of the screen:
![alt text](assets/images/testing/responsiveness/aircraftLarge.png "Aircraft Large")
##### Small Screens
* As the screen becomes smaller, content width relatively increases:
![alt text](assets/images/testing/responsiveness/aircraftSmall.png "Aircraft Small")

#### Quiz Page
##### Large Screens
* The width of the content is roughly 2/3 of the screen:
![alt text](assets/images/testing/responsiveness/quizQuestionsLarge.png "Quiz Page Large")
##### Small Screens
* The buttons will be displayed in block for smaller screens:
![alt text](assets/images/testing/responsiveness/quizQuestionsSmall.png "Quiz Page Small")
##### Large Screens (Buttons)
* For large screens, the buttons will be configured with the "reset" and "learn more" buttons inline
![alt text](assets/images/testing/responsiveness/quizButtonsLarge.png "Quiz Page Buttons Large")
##### Small Screens (Buttons)
* For small screens, the buttons will be configured with the "reset" and "learn more" buttons in block display
![alt text](assets/images/testing/responsiveness/quizButtonsSmall.png "Quiz Page Buttons Small")

#### Contact Page
##### Large Screens
* The width of the content is roughly 2/3 of the screen:
![alt text](assets/images/testing/responsiveness/contactLarge.png "Contact Page Large")
##### Small Screens
* The form width becomes relatively wider as the screen size decreases
![alt text](assets/images/testing/responsiveness/contactSmall.png "Contact Page Small")

### Browser Testing

#### Chrome
* The Quiz page of the website is working correctly in Google Chrome
![alt text](assets/images/testing/browser/chromeQuiz.png "chrome")
#### Firefox
* The Quiz page of the website is working correctly in Firefox
![alt text](assets/images/testing/browser/firefoxQuiz.png "firefox")
#### Edge
* The Quiz Members page of the website is working correctly in Edge
![alt text](assets/images/testing/browser/edgeQuiz.png "edge")
#### Safari
* The Quiz page of the website is working correctly in Safari
![alt text](assets/images/testing/browser/safariQuiz.png "safari")

### Lighthouse Report

#### Home Page
* The Home page returned high scores in all areas of the lighthouse report, with the exception of the performance
![alt text](assets/images/testing/lighthouse/indexLighthouse.png "home page lighthouse report")
#### Aircraft Page
* The Aircraft page returned high scores in the accessibility field of the lighthouse report, with the exception of the performance,best practice & SEO
![alt text](assets/images/testing/lighthouse/aircraftLighthouse.png "aircraft page lighthouse report")
#### Quiz Page
* The Quiz Members page returned high scores in the accessibility field of the lighthouse report, with the exception of the performance,best practice & SEO
![alt text](assets/images/testing/lighthouse/quizLighthouse.png "quiz page lighthouse report")
#### Contact Page
* The Contact page returned high scores in the accessibility & best practice fields of the lighthouse report, with the exception of the performance & SEO
![alt text](assets/images/testing/lighthouse/contactLighthouse.png "contact page lighthouse report")

### Automated Testing

#### validator.w3.org (HTML)
##### index.html
* The index.html file contains no errors when put through a code validator
![alt text](assets/images/testing/automated/indexValidator.png "index.html")

##### aircraft.html
* The aircraft.html file contains no errors when put through a code validator, however there are a number of warning due to empty headings (Javascript pulls through the HTML content)
![alt text](assets/images/testing/automated/aircraftValidatorOne.png "aircraft.html 1")
![alt text](assets/images/testing/automated/aircraftValidatorTwo.png "aircraft.html 2")

##### quiz.html
* The quiz.html file contains a number of errors when first put through the validator
![alt text](assets/images/testing/automated/quizValidatorOne.png "quiz.html 1")
![alt text](assets/images/testing/automated/quizValidatorTwo.png "quiz.html 2")
* The code was corrected and re-tested (only an empty header - Javascript pulls through HTML content)
![alt text](assets/images/testing/automated/quizValidatorThree.png "quiz.html 3")

##### contact.html
* The contact.html file contains a number of errors when first put through the validator
![alt text](assets/images/testing/automated/contactValidatorOne.png "contact.html 1")
![alt text](assets/images/testing/automated/contactValidatorTwo.png "contact.html 2")
* The code was corrected and re-tested - only the Javascript type fields remained as a warning (deferring on emailJS installation documentation)
![alt text](assets/images/testing/automated/contactValidatorThree.png "contact.html 3")

#### jigsaw.w3.org/css-validator (CSS)
##### style.css
* The style.css file contains no errors when put through a code validator
![alt text](assets/images/testing/automated/styleValidator.png "style.css")

#### JSHint (Javascript)
##### main.js
* The main.js file contains a number of warnings
![alt text](assets/images/testing/automated/mainError.png "main.js 1")
* The code was amended and retested
![alt text](assets/images/testing/automated/mainRetest.png "main.js 2")

##### index.js
* The index.js file contains no errors when put through a code validator
![alt text](assets/images/testing/automated/index.png "index.js")

##### aircraft.js
* The aircraft.js file contains no errors when put through a code validator
![alt text](assets/images/testing/automated/aircraft.png "aircraft.js")

##### quiz.js
* The quiz.js file contains a single warning when initially put through the validator
![alt text](assets/images/testing/automated/quizError.png "quiz.js 1")
* the quiz.js file was amended and retested
![alt text](assets/images/testing/automated/quizRetest.png "quiz.js 2")

##### contact.js
* The contact.js file contains a number of warnings when initially put through the validator
![alt text](assets/images/testing/automated/contactError.png "contact.js")
* The contact.js file was amended and retested
![alt text](assets/images/testing/automated/contactRetest.png "contact.js")