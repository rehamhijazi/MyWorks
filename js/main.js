$(function(){
    $('.material-input input').focusout(function () {
    var any_input = $(this).val(); //get input value after focusout
    if (any_input === "") //if input value is empty
    {
        $(this).removeClass('has-value');
    }
    else {
        $(this).addClass('has-value');
    }
});



})


  




    $('#step1 .btn-next').on('click', function () {

    
       $('#step2-tab').tab('show');


       $('#step1-tab').addClass('done');
    });


    $('#step2 .btn-next').on('click', function () {
        $('#step3-tab').tab('show');
        $('#step2-tab').addClass('done');
     });





     $('#step2 .btn-prev').on('click', function () {
        $('#step1-tab').tab('show');
        $('#step2-tab').removeClass('done');
     });

     $('#step3 .btn-prev').on('click', function () {
        $('#step2-tab').tab('show');
        $('#step3-tab').removeClass('done');
     });

     Waves.attach('.btn-d', ['waves-button', 'waves-float' , 'waves-light']);
     Waves.init();


