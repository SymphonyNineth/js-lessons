const arr = [
  { width: 10, height: 20 },
  { width: 5, height: 5 },
];
const result = addAreaProperty(arr);
// Ожидаемый результат: [ { width: 10, height: 20, area: 200 }, { width: 5, height: 5, area: 25 } ]

function addAreaProperty(rectangle) {
  return rectangle.map(({ width, height }) => {
    return {
      width,
      height,
      area: width * height,
    };
  });
}
console.log(result);
