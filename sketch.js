const r = require("raylib");
const d = require("./detector.js");
const w = require("./windows.js");
const p = require("./particle.js");

const d1 = d.createHorizontalScanner(0, 0, 2, 20, 0, w.width / 2, false, w.height);
const d2 = d.createHorizontalScanner(w.width / 2, 0, 1, 20, w.width / 2, w.width, false, w.height);
const d3 = d.createVerticalScanner(0, 0, 2, w.width, 0, w.height, false, 20);

const p1 = p.createHorizontalParticle(100, 0, 50, w.height);
const p2 = p.createHorizontalParticle(200, 0, 5, w.height);
const p3 = p.createVerticalParticle(0, 100, w.width, 10);

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(w.width, w.height, "Particle Dectector");
  r.SetTargetFPS(50);
}

function running() {
  return !r.WindowShouldClose();
}

function update() {
  d.updateHorizontalDetector(d1, p1, p2);
  d.updateHorizontalDetector(d2, p2, p1);
  d.updateVerticalDetector(d3, p3);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  p.drawParticle(p1, r.SKYBLUE);
  p.drawParticle(p2, r.SKYBLUE);
  p.drawParticle(p3, r.SKYBLUE);

  d.drawDetector(d1);
  d.drawDetector(d2);
  d.drawDetector(d3);

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