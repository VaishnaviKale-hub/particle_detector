function CheckOverlap(particalStart, particalEnd, detectorX, detectorWidth) {
  return detectorX + detectorWidth >= particalStart && detectorX <= particalStart + particalEnd;
}

function colorChange(overlap, p1_start, p1_end, p2_start, p2_end, detectorX, detectorWidth) {
  overlap = g.CheckOverlap(p1_start, p1_end, detectorX, detectorWidth);
  if (!overlap) {
    overlap = g.CheckOverlap(p2_start, p2_end, detectorX, detectorWidth);
  }
  return overlap ? r.RED : r.WHITE;
}

function move(detectorX, forward, speed) {

  if (forward > 0) {
    return detectorX + speed;
  }
  else if (forward < 0) {
    return detectorX - speed;
  }
}

function checkBoundary(detectorX, detectorWidth, start, dLimit, dForward) {

  if (detectorX + detectorWidth === dLimit || detectorX === start) {
    return dForward * -1;
  }
  return dForward;

}


module.exports = {
  CheckOverlap,
  colorChange,
  move,
  checkBoundary,
};