window.onload = function(){
    const rateForm = document.getElementById("rateForm")
    rateForm.onsubmit = getRoomRate;
}

function getRoomRate (event){
    event.preventDefault()
const booking={}

// get check in date
booking.checkInDate = document.getElementById("dateField").value


// get room type
let militaryDiscount = document.getElementById("militaryDiscount").value
let aaaDiscount = document.getElementById("aaaDiscount").value
let noneDiscount = document.getElementById("noneDiscount").value
console.log(militaryDiscount, aaaDiscount, noneDiscount)

// Passed in the check-in date and room type
// It will return a value like $250 or $150
}