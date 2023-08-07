 
document.querySelector(".final").style.display="none";
/*alert("Please fill  the values before clicking the calculate button.")*/

 function hari(){

    var c =  document.querySelector("#place").value;
    var b =  document.querySelector("#no").value;
 var a =  document.querySelector("#bro").value;
   
 document.querySelector("#kohli").textContent="Your revenue district";
 document.querySelector("#dhoni").textContent="Your consumer number";
document.querySelector("#raina").textContent="Your total consumption";

document.querySelector("#button").style.display="none";

 document.querySelector(".final").style.display="flex";
 






 
        if(a<=100){
        document.getElementById("hope").innerHTML=" ₹0.00"}

        else if (a>100 && a<=200){
            joker=((a-100)*2.25)
            document.getElementById("hope").innerHTML=" ₹"+joker }

         else if (a>200 && a<=400){
            var joker,charge;
            joker =( a - 200);
            charge = (100 * 2.25);
            charge += (joker * 4.50);
            document.getElementById("hope").innerHTML=" ₹"+charge}
           
            else if (a>400 && a<=500){
                var joker,charge;
                joker =( a - 400);
                charge = (100*2.25)+(200*4.50);
                charge += (joker *6.00);
                document.getElementById("hope").innerHTML=" ₹"+charge}
        
            else if (a>500 && a<=600){
                var joker,charge;
                joker=(a-500);
                charge = (300*4.50)+(100*6.00);
                charge += (joker*8.00);
                document.getElementById("hope").innerHTML=" ₹"+charge }

            else if(a>600 && a<=800){
                var joker,charge;
            joker=a-600
            charge=(300*4.50)+(100*6.00)+(100*8.00)
            charge+=(joker*9.00)
            document.getElementById("hope").innerHTML=" ₹"+charge }

            else if(a>800 && a<=1000){
                var joker,charge;
                joker=a-800
            charge=(300*4.50)+(100*6.00)+(100*8.00)+(200*9.0)
            charge+=(joker*10.00)
            document.getElementById("hope").innerHTML=" ₹"+charge  }

            else{
                var joker,charge;
                joker=a-1000
            charge=(300*4.50)+(100*6.00)+(100*8.00)+(200*9.0)+(200*10.00)
            charge+=(joker*11.00)
            document.getElementById("hope").innerHTML=" ₹"+charge  }
            
                
}


