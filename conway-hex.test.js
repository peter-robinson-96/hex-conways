// const triArray = require('./tri-array')
const hexLines = require('./hex-lines')
test('jest set up correctly', () => {
  // Arrange
  // Act
  // Assert
  expect(true).toBeTruthy
  //
})
/*

describe('the base tri functions return arrays of the correct length', () => {
  it('wideTri returns an array with 2 elements which are true booleans', () => {
  // Arrange
    const expected = [true, true]
    // Act
    const actual = triArray.wideTri()
    // Assert
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })

it('smolTri returns an array with 1 element which is a true boolean', () => {
  // Arrange
    const expected = [true]
    // Act
    const actual = triArray.smolTri()
    // Assert
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  //
  })
})

describe('tri returns an array with 2 elements which are both arrays, one of length 2 and one of length one, themselves containing true booleans', () => {
  it('top-heavy array produced by calling wideTri first', () => {
    // Arrange
    const expected = [[true, true], [true]]
    // Assert
    const actual = triArray.tri(triArray.wideTri(), triArray.smolTri())
    // Act
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })

  it('bottom-heavy array returned when calling smolTri first', () => {
    // Arrange
    const expected = [[true], [true, true]]
    // Assert
    const actual = triArray.tri(triArray.smolTri(), triArray.wideTri())
    // Act
    expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  })
})
*/

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
  it('array with 3 rows, with rows of length 3 and 4 alternating starting with a length 4 row', () => {
    // Arrange
    const expected = [[[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]], [[true, true, true, true], [true, true, true]]]
    // Act
    const actual = hexLines.makeGrid(4, 3)
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
