$(document).ready(function() {

    // ACTIONS BUTTONS
    $('.actions').mouseover(function() {
        $('.red').text('x');
        $('.yellow').text('-');
        $('.green').text('+');
    })
    $('.actions').mouseout(function() {
        $('.red').text('');
        $('.yellow').text('');
        $('.green').text('');
    })


    // COLORS ON CLIC
    $('.light').mousedown(function(){
        $(this).css('background-color','rgb(203, 203, 203)');
    })
    $('.light').mouseup(function(){
        $(this).css('background-color','darkgray');
    })
    $('.dark').mousedown(function(){
        $(this).css('background-color','darkgray');
    })
    $('.dark').mouseup(function(){
        $(this).css('background-color','gray');
    })
    $('.orange').mousedown(function(){
        $(this).css('border','1px solid black');
    })
    $('.orange').mouseup(function(){
        $(this).css('border','');
    })

    // AC BUTTON
    $('.ac').click(function() {
        $('.screen').text('0');
        $('.ac').text('AC');
    })

    // COMMA BUTTON
    var comma = false;
    $('.comma').click(function() {
        let typedNumbers = $('.screen').text();
        if (comma == false) {
            $('.screen').text(typedNumbers+',');
            comma = true;
        } else {
            $('.screen').text(typedNumbers);
        }  
    })

    // TYPING NUMBER ON SCREEN
    $('.number').click(function() {

        $('.ac').text('C');

        let number = $(this).text();
        let typedNumbers = $('.screen').text();
        if (typedNumbers == 0) {
            typedNumbers = '';
        }
        $('.screen').text(typedNumbers+number);
    })

    

})