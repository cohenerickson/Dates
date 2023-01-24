import Month from "./Month";

export default class Year {
  #year: number = 1970;
  months: Month[] = [];

  constructor(init: string | number | Date) {
    if (typeof init === "string") {
      try {
        this.#year = parseInt(init);
      } catch {
        throw new TypeError("The specified year must be a valid number.");
      }
    } else if (typeof init === "number") {
      this.#year = ~~init;
    } else {
      this.#year = init.getFullYear();
    }
  }

  get isLeapYear(): boolean {
    return this.#year % 4 === 0;
  }
}
