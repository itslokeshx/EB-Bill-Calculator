 
document.querySelector(".final").style.display="none";
alert("(Revised on July 01, 2024)");

 function display(){
    
    var c =  document.querySelector("#place").value;
    var b =  document.querySelector("#no").value;
    var a =  document.querySelector("#bro").value;
 document.querySelectorAll(".john")[0].style.padding ="1px"
 document.querySelector("#kohli").textContent="Your total consumption:";
 document.querySelector("#dhoni").textContent=a+" kWh";
document.querySelector("#raina").style.display="none";
document.querySelector("#place").style.display="none";
document.querySelector("#bro").style.display="none";
document.querySelector("#no").style.display="none";
document.querySelector("#button").style.display="none";
document.querySelectorAll(".john")[1].style.padding ="1px"
document.querySelector(".john1").style.padding="1px";
 document.querySelector(".final").style.display="flex";

 document.querySelector(".body").style.height="300px"

        if(a<=100){
        document.getElementById("hope").innerHTML=" ₹0.00"}

        else if (a>100 && a<=200){
            joker=((a-100)*2.35)
            document.getElementById("hope").innerHTML=" ₹"+joker }

         else if (a>200 && a<=400){
            var joker,charge;
            joker =( a - 200);
            charge = (100 * 2.35);
            charge += (joker * 4.70);
            document.getElementById("hope").innerHTML=" ₹"+charge}
           
            else if (a>400 && a<=500){
                var joker,charge;
                joker =( a - 400);
                charge = (100*2.35)+(200*4.70);
                charge += (joker *6.30);
                document.getElementById("hope").innerHTML=" ₹"+charge}
        
            else if (a>500 && a<=600){
                var joker,charge;
                joker=(a-500);
                charge = (300*4.70)+(100*6.30);
                charge += (joker*8.40);
                document.getElementById("hope").innerHTML=" ₹"+charge }

            else if(a>600 && a<=800){
                var joker,charge;
            joker=a-600
            charge=(300*4.70)+(100*6.30)+(100*8.40)
            charge+=(joker*9.45)
            document.getElementById("hope").innerHTML=" ₹"+charge }

            else if(a>800 && a<=1000){
                var joker,charge;
                joker=a-800
            charge=(300*4.70)+(100*6.30)+(100*8.40)+(200*9.45)
            charge+=(joker*10.50)
            document.getElementById("hope").innerHTML=" ₹"+charge  }

            else{
                var joker,charge;
                joker=a-1000
            charge=(300*4.70)+(100*6.30)+(100*8.40)+(200*9.45)+(200*10.50)
            charge+=(joker*11.55)
            document.getElementById("hope").innerHTML=" ₹"+charge  }               
}

