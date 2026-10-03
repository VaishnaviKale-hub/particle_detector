const r = require("raylib");
function createParticle(start, end, width, height) {
  return {
    start,
    end,
    width,
    height,
  }
}

function drawParticle(p, color) {
  r.DrawRectangle(p.start, p.end, p.width, p.height, color);
}

function checkOverlap(particalStart, particalEnd, d_x, dWidth) {
  const upper = d_x + dWidth >= particalStart;
  const lower = d_x <= particalStart + particalEnd;
  return upper && lower;
}

function doesOverlaps(p1_start, p1_end, d_x, d_width, p2_start, p2_end) {
  const overlap1 = checkOverlap(p1_start, p1_end, d_x, d_width);
  const overlap2 = checkOverlap(p2_start, p2_end, d_x, d_width);
  return overlap1 || overlap2;
}

module.exports = {
  createParticle,
  drawParticle,
  checkOverlap,
  doesOverlaps
}