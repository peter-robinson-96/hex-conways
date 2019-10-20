const triArray = require('./tri-array')

test('jest set up correctly', () => {
// Arrange
// Act
// Assert
  expect(true).toBeTruthy
//
})

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

// test('',) {
// // Arrange

// // Act
// // Assert
// //
// }
