const makeRow = n => {
  const row = Array(n).fill(true)
  return row
}

const makeGrid = (longLength, rowsQuantity) => {
  const rows = Array(rowsQuantity).fill([makeRow(longLength),makeRow(longLength-1)])
  return rows
}

module.exports = {
  makeRow,
  makeGrid
}
