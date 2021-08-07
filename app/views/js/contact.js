$('.contact-submit').on('click', function(){

    var contact = {
        fullname: $('#fullname').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        enquiry: $('#enquiry').val(),
    }

    sendemail(contact);

});

var sendemail =  function(e){

    $.ajax ({
      type: "post",
      dataTyhpe: 'json',
      url: "/app/controllers/email.php",
      data: e
    }).done(function(res){
      var e = JSON.parse(res);
      if(e.code == '6000'){
        swal.fire('Success', 'Your message has been sent successfully', 'success').then(function(){
          location.reload();
        });
      }else{
        swal.fire('info', 'There was a problem down there', 'info').then(function(){
          location.reload();
        });
      }
    });
  }