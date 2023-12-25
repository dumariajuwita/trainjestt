// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  // Test Case 2
  test("should handle an empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  // Test Case 3
  test("should not change an already capitalized word", () => {
    const result = capitalize("World");
    expect(result).toBe("World");
  });

  // Test Case 4
  test("should capitalize only the first letter of a sentence", () => {
    const result = capitalize("the quick brown fox");
    expect(result).toBe("The quick brown fox");
  });
});

  // write another 3 test case here!


// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  test('should return odd numbers correctly', () => {
    expect(filterOddNumber([1, 2, 3, 4, 5]));
  });

  // Test Case 2: Memastikan bahwa filterOddNumber mengembalikan array kosong jika tidak ada bilangan ganjil
  test('should return an empty array if there are no odd numbers', () => {
    expect(filterOddNumber([2, 4, 6, 8, 10]));
  });

  // Test Case 3: Memastikan bahwa filterOddNumber mengembalikan bilangan ganjil negatif dengan benar
  test('should return negative odd numbers correctly', () => {
    expect(filterOddNumber([-3, -5, -7, -9]));
  });

  // Test Case 4: Memastikan bahwa filterOddNumber mengembalikan array kosong jika array kosong
  test('should return an empty array for an empty input array', () => {
    expect(filterOddNumber([])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  test("should convert epoch date to UTC format", () => {
    const result = epochDateToUTC(1630440000); // Example epoch date
    expect(result).toBe("Tue, 31 Aug 2021 20:00:00 GMT");
  });

  // Test Case 2
  test("should handle epoch date of 0", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  // Test Case 3
  test("should handle negative epoch date", () => {
    const result = epochDateToUTC(-1630440000); // Example negative epoch date
    expect(result).toBe("Fri, 03 May 1918 04:00:00 GMT");
  });

  // Test Case 4
  test("should handle non-integer epoch date", () => {
    const result = epochDateToUTC(1630440000.5); // Example non-integer epoch date
    expect(result).toBe("Tue, 31 Aug 2021 20:00:00 GMT");
  });
});
  // write another 3 test case here!


