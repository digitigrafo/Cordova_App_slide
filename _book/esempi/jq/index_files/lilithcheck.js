/*text*/
var score_q1 = new Array(3, 6, 5, 4, 2);
/*radio*/
var score_q2 = new Array(1, 0, 0, 1, 0, 1, 1, 0, 1, 0);
/*ex3*/
var score_q3= new Array(4, 2, 6, 3, 5);


/*radio*/
var score_q4 = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 1);
/*text*/
var score_q5 = ["GIOVANNI TRINFAGLIA", "SANTA CROCE", "15", "PISA", "MARINO GROSSI", "DELLA FENICE", "8", "PISA"];
var score_q5bis = ["Giovanni Trinfaglia", "Santa Croce", "15", "Pisa", "Marino Grossi", "Della Fenice", "8", "Pisa"];



function check_test(){
	
	/*field con numeri - ex1*/
	var fields1 = $("input.ex1"); /*n field nella pagina*/
	var buoni1 = 0;
	
	// console.log(fields1);

	for ( var counter = 0; counter < fields1.length; counter++) {

		var n_fields1 = $(fields1[counter]);

		if (n_fields1.val() == score_q1[counter]) {
			
			buoni1= buoni1+3;
		}
	};

       $('#result1').css("color", "#1C94C4");
		display_results("#result1", buoni1);


	/* radio primo - ex2 */
	var radio_button2 = $("input.ex2");
	
	// console.log(radio_button2);
		
    var radio_result2 = new Array();
	
	for ( var counter = 0; counter < radio_button2.length; counter++) {
		
		if (radio_button2[counter].checked) {
			
             radio_result2.push(1);
		}
		
		else{
	// Nothing found.
	radio_result2.push(0);
		}
	};
    
    // console.log(radio_result2);
    
	var buoni2= 0;
	
    $.each(radio_result2, function(indice, valore){
		
		if(valore==1&&valore==score_q2[indice]){
			
			buoni2= buoni2+3;
		}
		
	});
        
	    $('#result2').css("color", "#1C94C4");
		display_results("#result2", buoni2);
/*fine radio primo - ex2 */	
	
	/*draggable - ex 3*/
	var fields3 = $("input.ex3"); /*n field nella pagina*/
	var buoni3 = 0;
	
	// console.log(fields1);

	for ( var counter = 0; counter < fields3.length; counter++) {

		var n_fields3 = $(fields3[counter]);

		if (n_fields3.val() == score_q3[counter]) {
			
			buoni3= buoni3+3.5;
		}
	};

       $('#result3').css("color", "#1C94C4");
		display_results("#result3", buoni3);



/*fine   drag*/

/*radio secondo - ex4*/
	var radio_button4 = $("input.ex4");
	
	// console.log(radio_button4);
		
    var radio_result4 = new Array();
	
	for ( var counter = 0; counter < radio_button4.length; counter++) {
		
		if (radio_button4[counter].checked) {
			
             radio_result4.push(1);
		}
		
		else{
	// Nothing found.
	radio_result4.push(0);
		}
	};
    
    
    // console.log(radio_result4);
    
	var buoni4= 0;
	
    $.each(radio_result4, function(indice, valore){
		
		
		if(valore==1&&valore==score_q4[indice]){
			
			buoni4= buoni4+3.5;
		}
		
	});
	    $('#result4').css("color", "#1C94C4");
		display_results("#result4", buoni4);

/*field con testo - ex5*/

	var fields5 = $("input.ex5"); /*n field nella pagina*/
	var buoni5 = 0;
	
	console.log(fields5);
	
	for ( var counter = 0; counter < fields5.length; counter++) {

		var n_fields5 = $(fields5[counter]);
		
		// var Jn_fields5 = n_fieds5.val().join() 

		if (n_fields5.val().toUpperCase() == score_q5[counter]) {
			
			buoni5 = buoni5+4.375;
		}
	};

       $('#result5').css("color", "#1C94C4");
		display_results("#result5", parseInt(buoni5));

/*ora scrivo totale*/
        $('#resultot').css("color", "#1C94C4");
		display_results("#resultot", parseInt(buoni1+buoni2+buoni3+buoni4+buoni5));

  if(
  parseInt(buoni1+buoni2+buoni3+buoni4+buoni5)>=80
      ){
  	$('#superato').css("color", "green");
display_results("#superato", "Hai superato il test");

  }
else{
	$('#superato').css("color", "red");
display_results("#superato", "Non hai superato il test");  
}
 

};  /*chiude check_test() */


function show_soluzioni(){
	// $("#risultati").dialog("close");
	// $("#bianco").fadeOut("slow");
	// $('.correggi').toggleClass("hide");
	// $('.next').toggleClass("hide");
	
	
	/*ex1*/
	var fields1 = $("input.ex1");
	for ( var counter = 0; counter < fields1.length; counter++) {

		$(fields1[counter]).val(score_q1[counter]);
		$(fields1[counter]).parent().addClass("correct");
	};
	/*ex 2*/
	var radios2 = $("input.ex2");
	for ( var counter = 0; counter < radios2.length; counter++) {

		if (score_q2[counter] == 1) {

			var correct_radio_button = $(radios2[counter]);

			correct_radio_button.parent().addClass("correct");
			correct_radio_button.prop("checked", true);
		}
	};
	/*ex 3*/
	
	var fields3 = $("input.ex3");
	for ( var counter = 0; counter < fields3.length; counter++) {

		$(fields3[counter]).val(score_q3[counter]);
		$(fields3[counter]).parent().addClass("correct");
	};
	
	/*ex 4*/
	var radios4 = $("input.ex4");
	for ( var counter = 0; counter < radios4.length; counter++) {

		if (score_q4[counter] == 1) {

			var correct_radio_button = $(radios4[counter]);

			correct_radio_button.parent().addClass("correct");
			correct_radio_button.prop("checked", true);
		}
	};
	/*ex5*/
	var fields5 = $("input.ex5");
	for ( var counter = 0; counter < fields5.length; counter++) {

		$(fields5[counter]).val(score_q5bis[counter]);
		$(fields5[counter]).addClass("correct");
	};
	
	
	$(".draggable").draggable("disable");
	$( ".selector" ).checkboxradio({ disabled: true });
	// $("input.ex2").draggable("disable"); non va
	
};/*end*/

 /*window.location.href = index.html#test1-page;*/