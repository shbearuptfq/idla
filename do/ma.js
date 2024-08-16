function parseScale(scaleString) {
  const scaleRegex = /^[A-G](?:b|#[A-G])/g;
  const scale = [];
  let match;

  while ((match = scaleRegex.exec(scaleString))) {
    scale.push(match[0]);
  }

  return scale;
}
