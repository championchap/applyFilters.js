/**
 * A function that runs a list of filter functions against a dataset, returning
 * what remains.
 *
 * @param  {array} data - An array of whatever you want.
 * @param  {array} filters - An array of filter functions, as would be suitable
 *                           for Array.filter
 *
 * @return {array} An array of whatever is left having applied all the filters
 *                 to the data.
 */
export default const applyFilters = (data, filters) =>
  filters.reduce((acc, filter) =>
    acc.filter(filter),
  data)
