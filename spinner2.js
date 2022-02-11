const spinner = (times) => {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      process.stdout.write("\r|   ");
    }, 2000 * i + 500);

    setTimeout(() => {
      process.stdout.write("\r/   ");
    }, 2000 * i + 1000);

    setTimeout(() => {
      process.stdout.write("\r-   ");
    }, 2000 * i + 1500);

    setTimeout(() => {
      process.stdout.write("\r\\   ");
    }, 2000 * i + 2000);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, 2000 * times + 500);
};

spinner(5);
