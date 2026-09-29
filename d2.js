const w = require("./window.js");
let x = w.width / 2;
let speed = 1;
let color;
const start = x;
const end = w.width;
let overlap;
module.exports = {
  x,
  speed,
  color,
  start,
  end,
  overlap,
}