module.exports = function(app) {
  var arithmetic = require("./controllers/arithmeticController");

  app.route("/arithmetic").get(arithmetic.calculate);
};

// Add comment to trigger CI
