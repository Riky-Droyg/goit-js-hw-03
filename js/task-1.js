function slugify(title) {
    const lowRegister = title.toLowerCase();
    const createArroy =  lowRegister.split(' ')
    const createSplit = createArroy.join('-')
    return createSplit
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

