const formatters = {
  "%": (x, p) => (x * 100).toFixed(p),
};

// Example usage
const value = 0.12345;
const decimalPlaces = 2;
const formattedValue = formatters["%"](value, decimalPlaces);

console.log(formattedValue); // Output: "12.35"
