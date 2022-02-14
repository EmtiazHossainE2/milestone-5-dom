function numbers() {
    let result = 0
    for (const num of arguments) {
        result = result + num
    }
    return result
}
console.log(numbers(3, 5, 42, 100, 200))

// /get full name 
function fullName() {
    let fullName = ''
    for (const name of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName
}
const getFullName = fullName('abdul', 'bin', 'omar', 'ibne', 'hanafi', 'salam', 'ajij', 'omar', 'faruk')
console.log(getFullName)