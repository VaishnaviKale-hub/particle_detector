const r = require("raylib");
const g = require("./geometry");

const windowWidth = 300;
const windowHeight = 200;
const detectorWidth = 20;
const detector3Height = detectorWidth;

let detector1X = 0;
let detector2X = windowWidth - detectorWidth;
let detector3Y = 0;
let detector1Forward = 1;
let detector2Forward = -1;
let detector3Down = 1;

const start1 = detector1X;
const start2 = detector2X;
const start3 = detector3Y;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

function colorChange(overlap, p1_start, p1_end, p2_start, p2_end, detectorX, detectorWidth) {
  overlap = g.CheckOverlap(p1_start, p1_end, detectorX, detectorWidth);
  if (!overlap) {
    overlap = g.CheckOverlap(p2_start, p2_end, detectorX, detectorWidth);
  }
  return overlap ? r.RED : r.WHITE;
}

function update() {
  const detector1End = windowWidth / 2;
  const detector2End = windowWidth / 2 + detectorWidth;
  const detector3End = windowHeight;
  const detector1Speed = 2;
  const detector2Speed = 1;
  const detector3Speed = 2;

  detector1X = g.move(detector1X, detector1Forward, detector1Speed);
  detector1Forward = g.checkBoundary(detector1X, detectorWidth, start1, detector1End, detector1Forward);

  detector2X = g.move(detector2X, detector2Forward, detector2Speed);
  detector2Forward = g.checkBoundary(detector2X, detectorWidth, start2, detector2End, detector2Forward);

  detector3Y = g.move(detector3Y, detector3Down, detector3Speed);
  detector3Down = g.checkBoundary(detector3Y, detector3Height, start3, detector3End, detector3Down);
}

function draw() {
  const y = 0;
  const pColor = r.BLUE;
  let detector1Color;
  let detector2Color;
  let detector3Color;
  const partical1Start = 100;
  const partical1End = 50;
  const partical2Start = 200;
  const partical2End = 5;
  const partical3Start = 100;
  const partical3End = 10;

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(partical1Start, y, partical1End, windowHeight, pColor);
  r.DrawRectangle(partical2Start, y, partical2End, windowHeight, pColor);
  r.DrawRectangle(y, partical3Start, windowWidth, partical3End, pColor);

  detector1Color = colorChange(detector1Color, partical1Start, partical1End, partical2Start, partical2End, detector1X, detectorWidth);
  detector2Color = colorChange(detector2Color, partical2Start, partical2End, partical1Start, partical1End, detector2X, detectorWidth);
  detector3Color = colorChange(detector3Color, partical3Start, partical3End, partical3Start, partical3End, detector3Y, detector3Height);

  r.DrawRectangle(detector1X, y, detectorWidth, windowHeight, detector1Color);
  r.DrawRectangle(detector2X, y, detectorWidth, windowHeight, detector2Color);
  r.DrawRectangle(y, detector3Y, windowWidth, detector3Height, detector3Color);

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