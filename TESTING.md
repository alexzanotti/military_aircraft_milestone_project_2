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