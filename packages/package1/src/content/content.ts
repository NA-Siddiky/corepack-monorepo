type CapitalizeConfig = {
  find: string;
  replacement: string;
};

class Content {
  capitalize(value: string, { find, replacement } = {} as CapitalizeConfig) {
    try {
      if (typeof value !== "string") throw new Error("value type must be string");
      const capitalizeText: string = value.slice(0, 1).toLocaleUpperCase() + value.slice(1);
      if (!find || !replacement) return capitalizeText;
      return capitalizeText.replaceAll(find, replacement);
    } catch (err) {
      console.log(err);
      return value;
    }
  }

  merge(texts: Array<string | undefined | null>, merge_symbol?: string) {
    return texts.filter(Boolean).join(merge_symbol || " ");
  }
}

export default new Content();
