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
* Functionality/Usability 
* Responsiveness
* Browser testing
* Lighthouse Report

#### User Story Validation
The first type of testing completed is around validating that the user stories are met by the website. Against each user story, evidence has been provided to ensure that the user stories are validated.

#### Functionality/Interactvity 
Manual testing is the next section of testing, which ensures that the website functions correctly and all of the interactvity that has been built into the website is functioning correctly.

#### Responsiveness
Responsiveness testing ensures that the responsive design of the website is working correctly.

#### Browser testing

Browser testing is the next type of testing - this ensures that the website functions in multiple browsers.

#### Lighthouse Report

Finally, the last type of test is running a Lighthouse Report for each page of the website.

### Automated Testing

Automated testing looks at validating that the code itself is free from errors.
#### validator.w3.org
This tests the HTML code 
#### jigsaw.w3.org/css-validator/
This tests the CSS code 
#### JSHint
This tests the Javascript code 



### Browser Testing

#### Chrome
* The Quiz page of the website is working correctly in Google Chrome
![alt text](assets/images/testing/chromeQuiz.png "chrome")
#### Firefox
* The Quiz page of the website is working correctly in Firefox
![alt text](assets/images/testing/firefoxQuiz.png "firefox")
#### Edge
* The Quiz Members page of the website is working correctly in Edge
![alt text](assets/images/testing/edgeQuiz.png "edge")
#### Safari
* The Quiz page of the website is working correctly in Safari
![alt text](assets/images/testing/safariQuiz.png "safari")

### Lighthouse Report

#### Home Page
* The Home page returned high scores in all areas of the lighthouse report, with the exception of the performance
![alt text](assets/images/testing/indexLighthouse.png "home page lighthouse report")
#### Aircraft Page
* The Aircraft page returned high scores in the accessibility field of the lighthouse report, with the exception of the performance,best practice & SEO
![alt text](assets/images/testing/aircraftLighthouse.png "aircraft page lighthouse report")
#### Quiz Page
* The Quiz Members page returned high scores in the accessibility field of the lighthouse report, with the exception of the performance,best practice & SEO
![alt text](assets/images/testing/quizLighthouse.png "quiz page lighthouse report")
#### Contact Page
* The Contact page returned high scores in the accessibility & best practice fields of the lighthouse report, with the exception of the performance & SEO
![alt text](assets/images/testing/contactLighthouse.png "contact page lighthouse report")




### Automated Testing

#### validator.w3.org (HTML)
##### index.html
* The index.html file contains no errors when put through a code validator
![alt text](assets/images/testing/indexValidator.png "index.html")

##### aircraft.html
* The aircraft.html file contains no errors when put through a code validator, however there are a number of warning due to empty headings (Javascript pulls through the HTML content)
![alt text](assets/images/testing/aircraftValidatorOne.png "aircraft.html 1")
![alt text](assets/images/testing/aircraftValidatorTwo.png "aircraft.html 2")

##### quiz.html
* The quiz.html file contains a number of errors when first put through the validator
![alt text](assets/images/testing/quizValidatorOne.png "quiz.html 1")
![alt text](assets/images/testing/quizValidatorTwo.png "quiz.html 2")
* The code was corrected and re-tested (only an empty header - Javascript pulls through HTML content)
![alt text](assets/images/testing/quizValidatorThree.png "quiz.html 3")

##### contact.html
* The contact.html file contains a number of errors when first put through the validator
![alt text](assets/images/testing/contactValidatorOne.png "contact.html 1")
![alt text](assets/images/testing/contactValidatorTwo.png "contact.html 2")
* The code was corrected and re-tested - only the Javascript type fields remained as a warning (deferring on emailJS installation documentation)
![alt text](assets/images/testing/contactValidatorThree.png "contact.html 3")

#### jigsaw.w3.org/css-validator (CSS)
##### style.css
* The style.css file contains no errors when put through a code validator
![alt text](assets/images/testing/styleValidator.png "style.css")

#### JSHint (Javascript)
##### main.js
* The main.js file contains a number of warnings
![alt text](assets/images/testing/mainError.png "main.js 1")
* The code was amended and retested
![alt text](assets/images/testing/mainRetest.png "main.js 2")

##### index.js
* The index.js file contains no errors when put through a code validator
![alt text](assets/images/testing/index.png "index.js")

##### aircraft.js
* The aircraft.js file contains no errors when put through a code validator
![alt text](assets/images/testing/aircraft.png "aircraft.js")

##### quiz.js
* The quiz.js file contains a single warning when initially put through the validator
![alt text](assets/images/testing/quizError.png "quiz.js 1")
* the quiz.js file was amended and retested
![alt text](assets/images/testing/quizRetest.png "quiz.js 2")

##### contact.js
* The contact.js file contains a number of warnings when initially put through the validator
![alt text](assets/images/testing/contactError.png "contact.js")
* The contact.js file was amended and retested
![alt text](assets/images/testing/contactRetest.png "contact.js")