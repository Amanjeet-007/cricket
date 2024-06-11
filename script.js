
// displaying display
const down = document.querySelector(".down");
// ball bottons
const wicket = document.querySelector("#wicketb");
const wicketno = document.querySelector(".wicket");
wicketno.childNodes[1].innerText = 0;

const dot = document.querySelector("#Dot");
const wd = document.querySelector("#WD");
const nb = document.querySelector("#NB");
// run button
const run = document.querySelectorAll(".runb");
// run
let Run = 0;
const over = [];



// display run 
const dRun = document.querySelector(".run");
let Trun = dRun.childNodes[1];


//  making array for over
const arr = [];


wicket.addEventListener("click", () => {
    down.innerHTML += ` <div class="num"  style="background-color: red;">W</div>`;
    wicketno.childNodes[1].innerText++
    arr.push(wicket);

    if (arr.length > 5) {
        down.innerHTML = `<h5>This over</h5>` ;
       setTimeout(()=>{
       dover1.innerHTML++
       // console.log("over one");
       for (let i = 1; i < 7; i++) {
           arr.pop()
          
       }
       },200)
       
    //    console.log(down.childElementCount)

   } 

    if (wicketno.childNodes[1].innerHTML == 10) {


        // ----working Here
        wicketno.childNodes[1].innerText = 0 ; 
        console.log("all Out")



    }
    


})
dot.addEventListener("click", () => {
    down.innerHTML += ` <div class="num">.</div>`
    arr.push(dot);
    if (arr.length > 5) {
        down.innerHTML = `<h5>This over</h5>` ;
       setTimeout(()=>{
       dover1.innerHTML++
       // console.log("over one");
       for (let i = 1; i < 7; i++) {
           arr.pop()
          
       }
       },200)
       
    //    console.log(down.childElementCount)

   } 
})
wd.addEventListener("click", () => {
    down.innerHTML += ` <div class="num">wd</div>`
})

let dover = document.querySelector(".over");
let dover1 = dover.childNodes[1];
dover1.innerHTML = 0;

run.forEach(el => {
    el.addEventListener("click", () => {
        down.innerHTML += ` <div class="num">${el.innerText}</div>`
        let t = Number(el.innerText);
        arr.push(el.innerText);

        Run += t
        Trun.innerHTML = Run

        if (arr.length > 5) {
             down.innerHTML = `<h5>This over</h5>` ;
            setTimeout(()=>{
            dover1.innerHTML++
            // console.log("over one");
            for (let i = 1; i < 7; i++) {
                arr.pop()
               
            }
            },200)
            
            // console.log(down.childElementCount)

        } 
    })
})


