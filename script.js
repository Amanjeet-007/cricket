
// displaying display
const down = document.querySelector(".down");
// ball bottons
const wicket = document.querySelector("#wicketb");
const dot = document.querySelector("#Dot");
const wd = document.querySelector("#WD");
const nb = document.querySelector("#NB");
// run button
const run  = document.querySelectorAll(".runb");
// run
let Run = 0 ; 
const over = [];



 // display run 
 const dRun = document.querySelector(".run");
 let Trun = dRun.childNodes[1];
 

wicket.addEventListener("click",()=>{
    down.innerHTML += ` <div class="num"  style="background-color: red;">W</div>` 

})
dot.addEventListener("click",()=>{
    down.innerHTML += ` <div class="num">.</div>` 
})
wd.addEventListener("click",()=>{
    down.innerHTML += ` <div class="num">wd</div>` 

    
})

run.forEach(el=>{
    el.addEventListener("click",()=>{
        down.innerHTML += ` <div class="num">${el.innerText}</div>` 
        let t = Number(el.innerText);
       Run += t
       Trun.innerHTML = Run
       over.push(t)
       console.log(over)
       if(over.length > 6){
       
       }
    })
})
