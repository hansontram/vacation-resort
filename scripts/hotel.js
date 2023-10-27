window.onload = function () {
  const rateForm = document.getElementById("rateForm");
  rateForm.onsubmit = getRoomRate;
};

function getRoomRate(event) {
  event.preventDefault();
  const booking = {};

  // get check in date
  booking.checkInDate = new Date(document.getElementById("dateField").value);

  //Define room rates
  const rates = {
    queen: {
      inSeason: 250.0,
      offSeason: 150.0,
    },
    king: {
      inSeason: 250.0,
      offSeason: 150.0,
    },
    suite: {
      inSeason: 350.0,
      offSeason: 210.0,
    },
  };

  // Get selected room type
  let queen = document.getElementById("queen");
  let king = document.getElementById("king");
  let suite = document.getElementById("suite");

  if (queen.checked) {
    booking.roomType = "queen";
  } else if (king.checked) {
    booking.roomType = "king";
  } else if (suite.checked) {
    booking.roomType = "suite";
  }

  // Check season based on month of check in date
  const checkInMonth = booking.checkInDate.getMonth() + 1; //January is 0

  // Determine rate based on season and room type
  booking.rate =
    checkInMonth >= 6 && checkInMonth <= 8
      ? rates[booking.roomType].inSeason
      : rates[booking.roomType].offSeason;

  // Get number of nights
  booking.numberOfNights = document.getElementById("numberOfNightsField").value;
  console.log(booking.numberOfNights);

 

  //Calculate Total cost
  let totalCost = booking.rate * booking.numberOfNights;

  console.log("This is booking object:", booking);

  // Display Information
document.getElementById("roomCostDisplay").innerText = `$${booking.rate}/night x ${booking.numberOfNights} nights`;

  let totalCostDisplay = document.getElementById("totalCostDisplay").innerText = `$${totalCost}`;
}


  // Discount Values
//   let militaryDiscount = document.getElementById("militaryDiscount").value;
//   let aaaDiscount = document.getElementById("aaaDiscount").value;
//   let noneDiscount = document.getElementById("noneDiscount").value;