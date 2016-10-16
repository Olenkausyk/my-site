/* $(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/zhdano.svoboda@gmail.com",
            method: "POST",
            data: {
                firstname: $('#firstname').val(),
                secondname: $('#secondname').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h4><center>Thank you for reaching out! </br> Your message has been successfully sent. </br> I will contact you very soon!</center></h4>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });
    })
}); */

/* global $*/
(function(){
$(function(){
    $('#submit').click(function(e){
        if($('#name').val().match(/[A-ZА-ЯЁ]+/i)&&$('#email').val().match(/^.+@\w+\.\w+$/i)){
        e.preventDefault();
        $.ajax({
              url: "https://formspree.io/zhdano.svoboda@gmail.com", 
            method: "POST",
    data: {
        name: $('#name').val(),
        email: $('#email').val(),
        comments: $('#comments').val(),
        telephone: $('#telephone').val(),
           
    },
    dataType: "json"
        }).done(function(){
            $('form').html('<h1>Thank you for contacting me!</h1>');
        }).fail(function(xhr){
            $('body').append('Sorry, error occured'+ xhr.responseText);
        });
}});
})})();
