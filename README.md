# applyFilters.js

This is simply a function that runs a list of filters against a list of
_something_, returning the result.

```js
const applyFilters = require('@erikwatson/applyFilters')

const data = [
  { name: 'Nobody', age: 22 },
  { name: 'Normal Name', age: 33 },
  { name: 'Weird Name': age: 44 }
]

const filters = [
  x => x.age > 27,
  x => x.age < 37
]

const result = applyFilters(data, filters)

// result: [
//   { name: 'Normal Name', age: 33 }
// ]
```

## Author

  + [Erik Watson](http://erikwatson.me)
