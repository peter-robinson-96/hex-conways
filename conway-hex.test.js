const triArray = require('./tri-array')

test('jest set up correctly', () => {
// Arrange
// Act
// Assert
  expect(true).toBeTruthy
//
})

test('wideTri returns an array with 2 elements which are true booleans', function () {
  // Arrange
  const expected = [true, true]
  // Act
  const actual = triArray.wideTri()
  // Assert
  expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
})

test('smolTri returns an array with 1 element which is a true boolean', function () {
  // Arrange
  const expected = [true]
  // Act
  const actual = triArray.smolTri()
  // Assert
  expect(expect.arrayContaining(actual)).toEqual(expect.arrayContaining(expected))
  //
})

// test('',) {
// // Arrange

// // Act
// // Assert
// //
// }
