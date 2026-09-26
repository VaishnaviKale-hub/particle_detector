const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;
const y = 0;
const detectorWidth = 20;
const d1Limit = windowWidth / 2;
const d2Limit = windowWidth / 2 + detectorWidth;

let detector1X = 0;
let detector2X = windowWidth - detectorWidth;
const start2 = detector2X;
const start1 = detector1X;
let d2Forward = -1;
let d1Forward = 1;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

function move1() {
  const d1Speed = 1;

  if (d1Forward > 0) {
    detector1X = detector1X + d1Speed;
  }
  else if (d1Forward < 0) {
    detector1X = detector1X - d1Speed;
  }
  if (detector1X + detectorWidth === d1Limit || detector1X === start1) {
    d1Forward = d1Forward * -1;
  }
}

function move2() {
  const d2Speed = 1;

  if (d2Forward > 0) {
    detector2X = detector2X + d2Speed;
  }
  if (d2Forward < 0) {
    detector2X = detector2X - d2Speed;
  }
  if (detector2X + detectorWidth === d2Limit || detector2X === start2) {
    d2Forward = d2Forward * -1;
  }
}

function update() {
  move1();
  move2();
}

function changeColor(start, end, d_x, detectorWidth) {
  return d_x + detectorWidth >= start && d_x <= start + end ? r.RED : r.WHITE;
}

function draw() {

  const pColor = r.BLUE;
  const p1_start = 100;
  const p1_end = 50;
  const p2_start = 200
  const p2_end = 5;
  let d1Color;
  let d2Color;

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(p1_start, y, p1_end, windowHeight, pColor);
  r.DrawRectangle(p2_start, y, p2_end, windowHeight, pColor);

  d1Color = changeColor(p1_start, p1_end, detector1X, detectorWidth);
  if (d1Color != r.RED) {
    d1Color = changeColor(p2_start, p2_end, detector1X, detectorWidth);
  }
  d2Color = changeColor(p1_start, p1_end, detector2X, detectorWidth);
  if (d2Color != r.RED) {
    d2Color = changeColor(p2_start, p2_end, detector2X, detectorWidth);
  }
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