$('#competition').on('click', function(){

  const inputOptions = new Promise((resolve) => {
      resolve({
        'one': '1450ppm',
        'two': '5000ppm',
        'three': '7000ppm'
      })
  });

  Swal.fire({
    title: 'Question',
    html: '<p class="form-question">What is the concentration of Fluoride in daily toothpaste?</p>',
    input: 'radio',
    confirmButtonText: 'Submit',
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to choose something!'
      }
    }
  }).then(function(){
    location.href = '/';
  });

});
