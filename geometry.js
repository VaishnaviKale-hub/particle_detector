function CheckOverlap(particalStart, particalEnd, detectorX, detectorWidth) {
  return detectorX + detectorWidth >= particalStart && detectorX <= particalStart + particalEnd;
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
  move,
  checkBoundary,
};