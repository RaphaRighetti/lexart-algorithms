function getAlphanumeric() {
  const alphanumerics = [];
  for (let i = 0; i < 4; i += 1) {
    const randomChars = Math.random().toString(36);
    const formattedChars = randomChars.slice(randomChars.length - 4);
    alphanumerics.push(formattedChars);
  }
  return alphanumerics.join('-');
}

console.log(getAlphanumeric());