const  bookObj = {
    title: 'Becoming',
    author: 'Michell Obama',
    isAvilable: false
};

const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);
console.log(typeof bookJSON);

const parsedBOOk = JSON.parse(bookJSON);
console.log(parsedBOOk);
console.log(parsedBOOk.title);
console.log(typeof parsedBOOk);