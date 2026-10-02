const r = require("raylib");
const p = require("./particle.js");

function createHorizontalScanner(x, y, velocity, width, start, end, hasDetected, height,) {
  return {
    x,
    y,
    velocity,
    width,
    start,
    end,
    hasDetected,
    height,
  }
}

function createVerticalScanner(x, y, velocity, width, start, end, hasDetected, height,) {
  return {
    x,
    y,
    velocity,
    width,
    start,
    end,
    hasDetected,
    height,
  }
}

function drawDetector(d) {
  const red = {
    r: 230,
    g: 41,
    b: 55,
    a: 180,
  };
  const color = d.hasDetected ? red : r.WHITE;
  r.DrawRectangle(d.x, d.y, d.width, d.height, color);
}

function updateHorizontalDetector(d, p1, p2) {
  d.hasDetected = p.doesOverlaps(p1.start, p1.width, d.x, d.width, p2.start, p2.width);

  d.x = d.x + d.velocity;

  d.velocity = changeDirection(d.x, d.width, d.start, d.end, d.velocity);

}

function updateVerticalDetector(d3, p3) {
  d3.hasDetected = p.checkOverlap(p3.end, p3.height, d3.y, d3.height);
  d3.y = d3.y + d3.velocity;
  d3.velocity = changeDirection(d3.y, d3.height, d3.start, d3.end, d3.velocity);
}

function isOutOfBound(d_x, dWidth, lower, upper) {
  return (d_x + dWidth === upper || d_x === lower)
}

function changeDirection(d_x, d_width, d_start, d_end, d_velocity) {
  return isOutOfBound(d_x, d_width, d_start, d_end) ? -d_velocity : d_velocity;
}

module.exports = {
  createHorizontalScanner,
  createVerticalScanner,
  drawDetector,
  updateHorizontalDetector,
  updateVerticalDetector,
  isOutOfBound,
  changeDirection,
};