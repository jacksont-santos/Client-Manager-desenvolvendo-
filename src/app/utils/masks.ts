export const mask = {
    addSymbol(value: string, symbol: string, pos: number) {
      if (value.length == pos) value += symbol;
      if (value.length > pos && value[pos] != symbol)
        value = value.slice(0, pos) + symbol + value.slice(pos);
      return value;
    },
    onlyNumbers: (value: string, keepSymbols?: string[]) => {
      if (!keepSymbols || keepSymbols.length == 0)
        return value.replace(/\D/gm, "");
      return value.replace(
        new RegExp(
          `[^\\d${keepSymbols.map((item) => "\\" + item).join("")}]`,
          "gm"
        ),
        ""
      );
    },
    date: (value: string) => {
      value = mask.onlyNumbers(value);
      if (value.length < 3) return value;
      value = mask.addSymbol(value, "/", 2);
      if (value.length < 6) return value;
      value = mask.addSymbol(value, "/", 5);
      return value.slice(0, 10);
    },
  };