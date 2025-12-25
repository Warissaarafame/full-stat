const kvarray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 }
]

const reformattedArray = kvarray.map(
   ({ key , value }) => ({[key]: value})
);

console.log(reformattedArray)