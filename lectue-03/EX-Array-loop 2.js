const guests = ['Alice', 'Bob', 'Charlie', 'David'];

let i = 0;

while (i < guests.length) {
  if (guests[i] === 'Charlie') {
    console.log('Found Charlie!');
    break;
  }
  i++;
}
