const r = require("raylib");
const d = require("./detector.js");
const p = require("./particle.js");

function setup(world) {

  world.width = 300;
  world.height = 200;
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(world.width, world.height, "Particle Dectector");
  r.SetTargetFPS(50);

  world.d1 = d.createHorizontalScanner(0, 0, 2, 20, 0, world.width / 2, false, world.height);
  world.d2 = d.createHorizontalScanner(world.width / 2, 0, 1, 20, world.width / 2, world.width, false, world.height);
  world.d3 = d.createVerticalScanner(0, 0, 2, world.width, 0, world.height, false, 20);

  world.p1 = p.createHorizontalParticle(100, 0, 50, world.height);
  world.p2 = p.createHorizontalParticle(200, 0, 5, world.height);
  world.p3 = p.createVerticalParticle(0, 100, world.width, 10);


}

function running(world) {
  return !r.WindowShouldClose();
}

function update(world) {
  d.updateHorizontalDetector(world.d1, world.p1, world.p2);
  d.updateHorizontalDetector(world.d2, world.p2, world.p1);
  d.updateVerticalDetector(world.d3, world.p3);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  p.drawParticle(world.p1, r.SKYBLUE);
  p.drawParticle(world.p2, r.SKYBLUE);
  p.drawParticle(world.p3, r.SKYBLUE);

  d.drawDetector(world.d1);
  d.drawDetector(world.d2);
  d.drawDetector(world.d3);

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