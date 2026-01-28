function calculate() {
  let lower = document.getElementById("lower").value || 0;
  let upper = document.getElementById("upper").value || 0;
  let shutter = document.getElementById("shutter").value;
  let hardware = document.getElementById("hardware").value;
  let counter = document.getElementById("counter").value;

  // Base rates (traditional industry logic)
  let lowerRate = 2200;
  let upperRate = 2000;

  let total =
    (lower * lowerRate) +
    (upper * upperRate) +
    ((lower + upper) * shutter) +
    Number(hardware) +
    Number(counter);

  // Installation + transport (10%)
  let install = total * 0.10;
  total += install;

  document.getElementById("result").innerHTML =
    "Estimated Cost: ₹ " + Math.round(total);
}
