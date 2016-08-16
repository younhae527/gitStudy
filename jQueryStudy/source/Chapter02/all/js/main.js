$(function(){
    //$('#typo').css('color','#ebc000');
    //$('#typo .inner').css('transform','rotate(10deg)');
    //$('.page-main > div:nth-child(1) .inner').css('opacity','0.5');
    /*
    $('#typo').css({
        'font-size':'50px',
        'background-color':'#ae5e9b',
        'color':'#ebc000'
    });
    */
    /*
    $('#typo').css({
        fontSize:'70px',
        backgroundColor:'#ae5e9b',
        color:'#abd005'
    });
    /*
    $('#typo').on('mouseover', function(){
        $('#typo').css('color','#ebc000');
    });
    */
    /*
    $('#typo').on('click', function(){
        $('#typo').css('color','#ebc000');
    });
    */
    $('#typo').on('click', function(){
        $('#typo').css('background-color','#ae5e9b');
        $('header').css('color','#ae5e9b');
    });
});