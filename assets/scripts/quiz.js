/*jshint esversion: 6 */
$(document).ready(function() {
    // set the inital score to zero when the user begins the quiz
    let score = 0;

    // When the user selects the reset button, the page will be refreshed, enabling the user to start the quiz again
    $('#reset').click(function() {
        location.href = location.href;
    });

    // When the user selects a value, the class will change, giving them feedback via an alert, as well as adding a class to amend style
    $('.selectedAnswerValue').click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('correct');
            alert("That's correct! Well Done!");
        } else {
            $(this).addClass('incorrect');
            alert("That's not quite right");
        }
    });

    // If the class of true is selected, the score variable will increase by one
    $('.true').one('click', function() {
        score++;
    });

    // when an answer is selected, siblings will no longer be visible 
    $('.selectedAnswerValue').click(function() {
        $(this).siblings().fadeOut("slow");
    });

    // When the user selected the submit button, the score will be displayed 
    $('#revealScore').click(function() {
        $('.noneDisplay').show();
        // If the user score full marks, they will receive the following message
        $('#score').text('Your score is ' + score + ' out of 12 points');
        if (score === 12) {
            $('.scoreText').text('Congratulations! You scored full marks!');
        } // if the user scores less than full marks, they will receive the following message
          else if (score < 12) {
            $('.scoreText').text('Good effort! You can retake the test by pressing the reset button below, or learn more about the aircraft by pressing the learn more button');
        }
    });
});