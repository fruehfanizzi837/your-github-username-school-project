const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateCode = () => {
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += getRandomInt(0, 9);
  }
  return code;
}
