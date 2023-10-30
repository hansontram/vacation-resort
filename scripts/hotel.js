window.onload = function () {
  const rateForm = document.getElementById("rateForm");
  rateForm.onsubmit = getRoomRate;
};

function getRoomRate(event) {
  event.preventDefault();
  console.log(event);
  const booking = {};

  // Get check in date
  booking.checkInDate = new Date(document.getElementById("dateField").value);
  // Check season based on month of check in date
  const checkInMonth = booking.checkInDate.getMonth() + 1; //January is 0

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

  // Determine rate based on season and room type
  booking.rate =
    checkInMonth >= 6 && checkInMonth <= 8
      ? rates[booking.roomType].inSeason
      : rates[booking.roomType].offSeason;

  // Get number of nights
  booking.numberOfNights = document.getElementById("numberOfNightsField").value;
  

  // Get discount
  let militaryDiscount = document.getElementById("militaryDiscount");
  let aaaDiscount = document.getElementById("aaaDiscount");
  let noneDiscount = document.getElementById("noneDiscount");
  if (militaryDiscount.checked) {
    booking.discountType = militaryDiscount.value;
  } else if (aaaDiscount.checked) {
    booking.discountType = aaaDiscount.value;
  } else if (noneDiscount) {
    booking.discountType = noneDiscount.value;
  }
  // Calculate discounted room cost

  let totalDiscountedRoomCost =
    (booking.rate - booking.rate * booking.discountType) *
    booking.numberOfNights;

  //Calculate tax
  let taxCost = Number((totalDiscountedRoomCost * 0.12).toFixed(2));
  //Calculate Total cost
  let totalCost = Number((totalDiscountedRoomCost + taxCost).toFixed(2));

  // Display Information
  document.getElementById(
    "roomCostDisplay"
  ).innerText = `$${booking.rate}/night x ${booking.numberOfNights} nights`;

  document.getElementById("discountDisplay").innerText = `- $${
    booking.discountType * booking.rate * booking.numberOfNights
  } (${booking.discountType * 100}% off)`;

  document.getElementById(
    "discountRoomDisplay"
  ).innerText = ` $${totalDiscountedRoomCost}  (${booking.numberOfNights} nights)`;

  document.getElementById("taxDisplay").innerText = ` $${taxCost} (12%)`;

  document.getElementById("totalCostDisplay").innerText = `$${totalCost}`;
}
