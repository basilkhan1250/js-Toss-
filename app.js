// let h1 = document.querySelector("h1")
// let h2 = document.querySelector("h2")

// function toss (){
//     let click = Math.ceil(Math.random()*2)
//     if (click === 1){
//         h1.innerHTML = "Chand"
//     }
//     else {
//         h1.innerHTML = "Masjid"
//     }
// }

// toss()




// let h1 = document.querySelector("h1")


// function toss (){
//     let click = Math.ceil(Math.random()*2)
//     // console.log(click) 
//     if(click === 1){
//         h1.innerHTML = "head"
//     }
//     else{
//         // console.log("tail")
//         h1.innerHTML = "tail"
//     }

// }














let h1 = document.querySelector("h1")
let image = document.querySelector(".image")

function toss(user) {
    let click = Math.ceil(Math.random() * 2)
    // console.log(click) 
    if (click === 1) {
        image.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"
    }
    else {
        // console.log("tail")
        image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
    }
    if (user === "chand" && click === 1 || user === "masjid" && click === 2){
        h1.innerHTML = "You win"
    }
    else {
        h1.innerHTML = "You loss"
     }
 }