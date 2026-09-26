const r = require("raylib");

const windowWidth = 600;
const windowHeight = 500;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Particle Dectector");
  r.SetTargetFPS(50);
}

let position = 2;
let x = 1;
const y = 1;
const width = 30;
const speed = 3;
const height = windowHeight;

function update() {
  if (x + width < windowWidth && position % 2 === 0) {
    x = x + speed;
  }
  if (x + width >= windowWidth || x - speed <= 0) {
    position++;
  }
  if (position % 2 != 0) {
    x = x - speed;
  }

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(x, y, width, height, r.WHITE);
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