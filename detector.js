
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

function isOutOfBound(d_x, dWidth, lower, upper) {
  return (d_x + dWidth === upper || d_x === lower)
}

function changeDirection(d_x, dWidth, lower, upper, speed,) {
  return isOutOfBound(d_x, dWidth, lower, upper) ? -speed : speed;
}

module.exports = {
  checkOverlap,
  doesOverlaps,
  isOutOfBound,
  changeDirection,
};