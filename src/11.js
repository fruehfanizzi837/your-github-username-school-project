function getRandomInt(max) {
  const min = Math.ceil(0);
  const diff = max - min + 1;
  return min + Math.floor(Math.random() * diff);
}
