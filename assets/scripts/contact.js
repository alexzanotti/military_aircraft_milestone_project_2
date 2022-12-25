//function to ensure all fields are complete before sending email
(function() {
    $('form').keyup(function() {
        var empty = false;
        $('.complete').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });
        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})()