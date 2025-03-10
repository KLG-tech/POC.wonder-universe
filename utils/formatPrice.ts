export const formatPrice = (num: number) => {
    if (num || num === 0) {
      const p = num.toFixed(2).split(".");
      return "Rp" + (p[0]
        .split("")
        .reverse()
        .reduce(function (acc, number, i) {
          return number + (number !== "-" && i && !(i % 3) ? "," : "") + acc;
        }, ""));
    } else {
        return "NaN"
    }
  };
  