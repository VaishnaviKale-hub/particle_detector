const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;
let position = 2;
let d_x = 1;
const y = 0;
const d_width = 20;
const speed = 1;
let dColor;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

function update() {
  if (d_x + d_width < windowWidth && position % 2 === 0) {
    d_x = d_x + speed;
  }
  if (d_x + d_width >= windowWidth || d_x - speed <= 0) {
    position++;
  }
  if (position % 2 != 0) {
    d_x = d_x - speed;
  }
}

function changeColor(start, end, d_x, d_width) {
  return d_x + d_width >= start && d_x <= start + end ? r.RED : r.WHITE;
}

function draw() {

  const pColor = r.BLUE;
  const p1_start = 100;
  const p1_end = 50;
  const p2_start = 200
  const p2_end = 5;

  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(p1_start, y, p1_end, windowHeight, pColor);
  r.DrawRectangle(p2_start, y, p2_end, windowHeight, pColor);

  dColor = changeColor(p1_start, p1_end, d_x, d_width);
  if (dColor != r.RED) {
    dColor = changeColor(p2_start, p2_end, d_x, d_width);
  }
  r.DrawRectangle(d_x, y, d_width, windowHeight, dColor);
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