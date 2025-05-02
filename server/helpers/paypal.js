








// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "sandbox", 
//   client_id:
//     "AbxFk4vQQq6ADb_2ujJrgddVGU8SRKNlaBbmTGlayX0KqwiyeJg5Hxp1gAVU8GQIBNpxf8lvtlp8gytB",
//   client_secret:
//     "EAe5h8jBjIqFgKyLIfKXxhBqOEOn3KlKtATUh5AEnl5URuky75AQFbHngy9RYn-ZLCxF565fFuwMr5QH",
// });

// module.exports = paypal;











const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", 
  client_id:
    process.env.PAYPAL_CLIENT_ID,
  client_secret:
    process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;




















