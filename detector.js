
function checkOverlap(particalStart, particalEnd, d_x, dWidth) {
  let upper = d_x + dWidth >= particalStart;
  let lower = d_x <= particalStart + particalEnd;
  return upper && lower;
}

function doesOverlaps(p1_start, p1_end, d_x, d_width, p2_start, p2_end) {
  let overlap1 = checkOverlap(p1_start, p1_end, d_x, d_width);
  let overlap2 = checkOverlap(p2_start, p2_end, d_x, d_width);
  return overlap1 || overlap2;
}

function isBoundaryTouch(d_x, dWidth, lower, upper) {
  return (d_x + dWidth === upper || d_x === lower)
}

function changeDirection(d_x, dWidth, lower, upper, speed,) {
  return isBoundaryTouch(d_x, dWidth, lower, upper) ? -speed : speed;
}

module.exports = {
  checkOverlap,
  doesOverlaps,
  isBoundaryTouch,
  changeDirection,
};