// popup ----getting value od over and wicket throught it
const popup = document.querySelector(".getting")
let overLimit = document.getElementById("totalOver");
let wicketLimit = document.getElementById("totalWicket");

let OL = 0;
let WL = 0;


const submit = ()=>{
    OL = overLimit.value;
    WL = wicketLimit.value;
    popup.style.display = "none";
}

// popup ends-----------------

// start board code from here----------
  //selection of All iteam of board

    
  let inning = document.querySelector(".inning");
let displayRun = document.querySelector(".run p");
displayRun.innerHTML = 0 ;

let displayOver = document.querySelector(".over p");
displayOver.innerHTML = 0;
    
let displayWicket = document.querySelector(".wicket p");
displayWicket.innerHTML = 0;

let runArray = [];
let Allover = [];

// function for do work after every 6 ball
let calBall = ()=>{
    if((runArray.length%6) == 0){
        Display.innerHTML = ` <h5>This over</h5>`;
        Allover.push(runArray);
        runArray = [];
        console.table(Allover)

        displayOver.innerHTML++
    }
}
const endInning = ()=>{
    
    if(Allover.length == overLimit.value || displayWicket.textContent == wicketLimit.value){
        inning.childNodes[3].childNodes[3].innerHTML = Number(displayRun.innerHTML)+1
 Display.innerHTML = ` <h5>This over</h5>`;
  displayRun.innerHTML = 0 ;
  displayOver.innerHTML = 0 ; 
  displayWicket.innerHTML = 0 ;
  inning.style.display = "flex";
   
  wicketLimit.value = WL;
  overLimit.value = OL;
//   winner checking
if(inning.childNodes[3].childNodes[3].innerHTML){
    if(displayRun.innerHTML > inning.childNodes[3].childNodes[3].innerHTML){
        console.log("Team 2 is winner")
    }
    if(displayRun.innerHTML < inning.childNodes[3].childNodes[3].innerHTML){
        console.log("Team 1 is winner")
    }

}


    }
   
    // if(inning.childNodes[3])
   
}


let Display = document.querySelector(".Display")
let runBtn = document.querySelectorAll(".runBtn");

runBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        runArray.push(Number(btn.innerHTML));

        Display.innerHTML += ` <div class="num"  >${btn.innerHTML}</div>`;

        calBall();
        endInning()

        // adding run
        displayRun.innerHTML = Number(displayRun.innerHTML)+Number(btn.innerHTML)

        console.log(runArray);
    })
})

const Dot = document.getElementById("Dot");
Dot.addEventListener("click",()=>{
    runArray.push(".");
    Display.innerHTML += ` <div class="num">.</div>`;
   calBall();
   endInning()
});

const wicketBtn = document.getElementById("wicketBtn");
wicketBtn.addEventListener("click",()=>{
    runArray.push("W");
    Display.innerHTML += `<div class="num"  style="background-color: red;">W</div>`;


    displayWicket.innerHTML++

    calBall();
    endInning()

});

const wide = document.getElementById("WD");
wide.addEventListener("click",()=>{
    // runArray.push("WD");
    Display.innerHTML += ` <div class="num">WD</div>`;
});

const noBall = document.getElementById("NB");
noBall.addEventListener("click",()=>{
    // runArray.push("N");
    Display.innerHTML += ` <div class="num">N</div>`;
});
























