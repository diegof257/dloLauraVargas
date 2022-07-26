var resHtml = "";

function validaBoton(valor,boton){

    var correcto = "Cameron, S. (2021). <i>The business student's handbook: skills for study and employment.</i> 7th ed. Harlow: Pearson.";
    
    var input1 = $('#res1').val();
    var input2 = $("#res2").val();
    var input3 = $("#res3").val();
    var input4 = $("#res4").val();
    var input5 = $("#res5").val();
    var input6 = $("#res6").val();
    
    if(input1 == ""){
        resHtml += valor+" ";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res1').val(valor);

    }else if(input2 == ""){
        resHtml += valor+" ";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res2').val(valor); 
       
    }else if(input3 == ""){
        resHtml += valor+" ";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res3').val(valor);
    }else if(input4 == ""){
        resHtml += valor+" ";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res4').val(valor);
    }else if(input5 == ""){
        resHtml += valor+" ";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res5').val(valor);
    }else if(input6 == ""){
        resHtml += valor+"";
        $("#resultado").html(resHtml);
        $('#'+boton).attr('disabled', true);
        $('#res6').val(valor);
    }

    $("#resultado").html(resHtml);

    if( $('#res6').val() != ""){
        if(correcto == resHtml){
            setTimeout(function(){
                alert("Well done, you have correctly referenced your source, Congratulations! ");
           }, 200); 
           
        }else{
            setTimeout(function(){
                alert("Looks like something is not in the correct place! Try checking at the top of this page, the information and the order needed to follow the referencing format, and then try again.");
                for(var i = 1; i <= 6; i++){
                    $('#btn'+i).attr('disabled', false);
                    document.getElementById("res"+i).value = "";
                }
                $("#resultado").html("");
                resHtml = "";
           }, 300);
        }
    }
}