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
  const expected = 2
  // Act
  const actual = triArray.wideTri()
  // Assert
  expect(actual.length).toBe(expected)
  // expect(actual.equals(expected)).toBe(true)
//
})

test('smolTri returns an array with 1 element which is a true boolean', function () {
  // Arrange
  const expected = 1
  // Act
  const actual = triArray.smolTri()
  // Assert
  expect(actual.length).toBe(expected)
  // expect(actual.equals(expected)).toBe(true)
  //
})

// test('',) {
// // Arrange

// // Act
// // Assert
// //
// }
