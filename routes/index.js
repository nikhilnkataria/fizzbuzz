var express = require("express");
const { check, validationResult } = require("express-validator");

var router = express.Router();
const Utils = require("../helpers/utils");

router.get("/:count", [check("count").isInt({ min: 1 })], (req, res) => {
  let status = 200;
  const errors = validationResult(req);

  // send error if input param is invalid
  if (!errors.isEmpty()) {
    status = 400;
    let response = Utils.generateHttpResponse(
      { errors: errors.array() },
      status
    );
    return res.status(status).json(response);
  }

  const { count } = { ...req.params };
  let fizzBuzzArr = [...Array(parseInt(count))].map((key, index) =>
    Utils.getFizzBuzz(index + 1)
  );

  res.status(status).json(Utils.generateHttpResponse({ fizzBuzzArr }, status));
});

module.exports = router;
