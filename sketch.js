const r = require("raylib");
const g = require("./detector.js");
const w = require("./window.js");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");
const p1 = require("./p1.js");
const p2 = require("./p2.js");
const p3 = require("./p3.js");

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(w.width, w.height, "Particle Dectector");
  r.SetTargetFPS(50);
}

function running() {
  return !r.WindowShouldClose();
}

function chooseColor(p1_start, p1_end, p2_start, p2_end, d_x, d_width) {
  let overlap = g.doesOverlaps(p1_start, p1_end, d_x, d_width, p2_start, p2_end);
  return overlap ? r.RED : r.WHITE;
}

function update() {

  d1.color = chooseColor(p1.start, p1.end, p2.start, p2.end, d1.x, d1.width);
  d2.color = chooseColor(p2.start, p2.end, p1.start, p1.end, d2.x, d1.width);
  d3.color = checkOverlap(p3.start, p3.end, d3.y, d3.height) ? r.RED : r.WHITE;

  d1.x = d1.x + d1.speed;
  d1.speed = g.changeDirection(d1.x, d1.width, d1.start, d1.end, d1.speed);

  d2.x = d2.x + d2.speed;
  d2.speed = g.changeDirection(d2.x, d1.width, d2.start, d2.end, d2.speed);

  d3.y = d3.y + d3.speed;
  d3.speed = g.changeDirection(d3.y, d3.height, d3.start, d3.end, d3.speed);
}

function drawPartical(x, y, width, height, color) {
  r.DrawRectangle(x, y, width, height, color);
}

function drawDetector(x, y, width, height, color) {
  r.DrawRectangle(x, y, width, height, color);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawPartical(p1.start, d1.y, p1.end, w.height, p1.color);
  drawPartical(p2.start, d1.y, p2.end, w.height, p1.color);
  drawPartical(d1.y, p3.start, w.width, p3.end, p1.color);

  drawDetector(d1.x, d1.y, d1.width, w.height, d1.color);
  drawDetector(d2.x, d1.y, d1.width, w.height, d2.color);
  drawDetector(d1.y, d3.y, w.width, d3.height, d3.color);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};