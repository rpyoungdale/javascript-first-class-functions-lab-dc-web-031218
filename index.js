function countdown (callback) {
  window.setTimeout(callback);
};

function createMultiplier (multiplierValue) {
  return function (num) {
    return num*multiplierValue;
  }
};

function doubler (num) {
  return createMultiplier(2)(num);
}

function tripler (num) {
  return createMultiplier(3)(num);
}

function multiplier (num1, num2) {
  return num1*num2
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
