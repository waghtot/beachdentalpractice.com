$('.contact-submit').on('click', function(){

    var contact = {
        fullname: $('#fullname').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        enquiry: $('#enquiry').val(),
    }
    console.log(contact);

    swal.fire({
        title: 'hurra',
        text: 'someone clicked button',
        icon: 'success',
    })
});