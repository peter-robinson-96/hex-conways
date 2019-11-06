const makeRow = n => {
  const row = Array(n).fill(true)
  return row
}

const makeGrid = (longLength, rowPairsQuantity) => {
  const rows = Array(rowPairsQuantity).fill([makeRow(longLength), makeRow(longLength - 1)])
  return rows
}

console.log(makeGrid(4, 5))

module.exports = {
  makeRow,
  makeGrid
}
