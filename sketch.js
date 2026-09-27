const r = require("raylib");
const g = require("./geometry");

const windowWidth = 300;
const windowHeight = 200;
const y = 0;
const detectorWidth = 20;
const d1Limit = windowWidth / 2;
const d2Limit = windowWidth / 2 + detectorWidth;
const p1_start = 100;
const p1_end = 50;
const p2_start = 200;
const p2_end = 5;

let detector1X = 0;
let detector2X = windowWidth - detectorWidth;
let d1Forward = 1;
let d2Forward = -1;

const start1 = detector1X;
const start2 = detector2X;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

function colorChange(overlap, p1_start, p1_end, p2_start, p2_end, detectorX) {
  overlap = g.CheckOverlap(p1_start, p1_end, detectorX, detectorWidth);
  if (!overlap) {
    overlap = g.CheckOverlap(p2_start, p2_end, detectorX, detectorWidth);
  }
  return overlap ? r.RED : r.WHITE;
}


function update() {
  const d1Speed = 2;
  const d2Speed = 1;

  detector1X = g.move(detector1X, d1Forward, d1Speed);
  d1Forward = g.checkBoundary(detector1X, detectorWidth, start1, d1Limit, d1Forward)

  detector2X = g.move(detector2X, d2Forward, d2Speed);
  d2Forward = g.checkBoundary(detector2X, detectorWidth, start2, d2Limit, d2Forward)
}

function draw() {

  const pColor = r.BLUE;
  let d1Color;
  let d2Color;

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(p1_start, y, p1_end, windowHeight, pColor);
  r.DrawRectangle(p2_start, y, p2_end, windowHeight, pColor);

  d1Color = colorChange(d1Color, p1_start, p1_end, p2_start, p2_end, detector1X);
  d2Color = colorChange(d2Color, p2_start, p2_end, p1_start, p1_end, detector2X);

  r.DrawRectangle(detector1X, y, detectorWidth, windowHeight, d1Color);
  r.DrawRectangle(detector2X, y, detectorWidth, windowHeight, d2Color);
  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
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