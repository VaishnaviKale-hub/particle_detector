const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

let position = 2;
let d_x = 1;
const y = 0;
const d_width = 20;
const p1_start = 100;
const p1_end = 50;
const speed = 2;
const height = windowHeight;

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

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(p1_start, y, p1_end, height, r.BLUE);
  r.DrawRectangle(d_x, y, d_width, height, r.WHITE);
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