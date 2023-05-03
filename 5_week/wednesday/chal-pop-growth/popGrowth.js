// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
const nbYear = (p0, percent, aug, p) => {
  let years = 0;
  let result = false;
  while (!result) {
    if (p0 >= p) {
      result = true;
    } else {
      p0 = p0 * (1 + percent / 100) + aug;
      years++;
    }
  }
  return years;
};
