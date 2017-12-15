# prova di comprensione scritta 2
```
/*radio*/
var score_q4 = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 1);

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
```
