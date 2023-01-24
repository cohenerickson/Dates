export default function normalizeMonth(init: string | number | Date): number {
  if (typeof init === "number") {
    if (init >= 0 && 11 >= init) {
      return init;
    } else {
      throw new TypeError("Invalid Month");
    }
  } else if (init instanceof Date) {
    return init.getMonth();
  } else {
    if (/january/i.test(init)) {
      return 0;
    } else if (/febuary/i.test(init)) {
      return 1;
    } else if (/march/i.test(init)) {
      return 2;
    } else if (/april/i.test(init)) {
      return 3;
    } else if (/may/i.test(init)) {
      return 4;
    } else if (/june/i.test(init)) {
      return 5;
    } else if (/july/i.test(init)) {
      return 6;
    } else if (/august/i.test(init)) {
      return 7;
    } else if (/september/i.test(init)) {
      return 8;
    } else if (/october/i.test(init)) {
      return 9;
    } else if (/november/i.test(init)) {
      return 10;
    } else if (/december/i.test(init)) {
      return 11;
    } else {
      throw new TypeError("Invalid Month");
    }
  }
}
