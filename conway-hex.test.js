// const triArray = require('./tri-array')
const hexLines = require('./hex-lines')
test('jest set up correctly', () => {
  // Arrange
  // Act
  // Assert
  expect(true).toBeTruthy
  //
})

test('makeRow returns an array of length n which contains true in each element', () => {
  // Arrange
  const expected = [true, true, true, true, true, true, true, true]
  // Act
  const actual = hexLines.makeRow(8)
  // Assert
  expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  //
})

describe('makeGrid returns an array of arrays. This array has length == rowsQuantity and the nested arrays within alternate  which contains true in each element', () => {
  it('array with 6 rows of length 3 and 4 alternating starting with a length 4 row', () => {
    // Arrange
    const expected = [[[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]]]
    // Act
    const actual = hexLines.makeGrid(4, 3)
    // Assert
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })
  it('array with 20 rows of length 3 and 4 alternating starting with a length 4 row', () => {
    // Arrange
    const expected = [[[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]]]
    // Act
    const actual = hexLines.makeGrid(4, 10)
    // Assert
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })
  it('array with 2 rows of length 20 and 21 alternating starting with a length 21 row', () => {
    // Arrange
    const expected = [[[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]]]
    // Act
    const actual = hexLines.makeGrid(21, 1)
    // Assert
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })
})

// test('', {
// // Arrange

// // Act
// // Assert
// //
// })
