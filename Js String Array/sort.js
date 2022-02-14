const numbers = [1, 3, 5, 8, 2, 6, 4, 10, 9, 7]
const numbersSort = numbers.sort()
console.log(numbersSort);

const friends = ['dabul', 'abul', 'ebul', 'kobul', 'babul', 'cabul']
// const friendsSort = friends.sort()
const friendsSort = friends.reverse()
console.log(friendsSort)

//big number sort er jonne ekta sorting function use korte hoy 
const bigNumbers = [10, 29, 48, 29, 4, 59, 20, 43, 40, 12, 40, 9, 2, 45, 100]
const bigNumbersSort = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(bigNumbersSort)