type numArray = Array<string>;

const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3, 4]);

const l1 = last(["1", "2", "3", "4"]);

/// comment 1
