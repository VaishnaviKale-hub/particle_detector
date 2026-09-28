function CheckOverlap(particalStart, particalEnd, detectorX, detectorWidth) {
  return detectorX + detectorWidth >= particalStart && detectorX <= particalStart + particalEnd;
}


function checkBoundary(detectorX, detectorWidth, start, dLimit, speed) {

  if (detectorX + detectorWidth === dLimit || detectorX === start) {
    return -speed;
  }
  return speed;
}

module.exports = {
  CheckOverlap,
  checkBoundary,
};