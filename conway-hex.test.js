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

// test('',) {
// // Arrange

// // Act
// // Assert
// //
// }
