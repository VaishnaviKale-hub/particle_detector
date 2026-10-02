const sketch = require("./sketch");

function loop(world) {
  while (sketch.running(world)) {
    sketch.update(world);
    sketch.draw(world);
  }
}
function main() {
  const world = {};
  sketch.setup(world);
  loop(world);
  sketch.teardown();
}
main();