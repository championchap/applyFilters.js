const applyFilters = require('../lib/applyFilters')

test('Single filter is applied', () => {
  const data = [1, 2, 3]
  const filters = [x => x >= 2]

  const result = applyFilters(data, filters)
  expect(result).toEqual([2, 3])
})

test('Multiple filters are applied', () => {
  const data = [1, 2, 3, 4, 5]
  const filters = [
    x => x <= 4,
    x => x >= 2
  ]

  const result = applyFilters(data, filters)
  expect(result).toEqual([2, 3, 4])
})
