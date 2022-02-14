function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0]
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend
        }
    } return mega
}
const friends = ['abul', 'kabul', 'Rahmana']
const bigBuddy = megaFriends(friends);
console.log(bigBuddy)
if (friends.indexOf('Rahmana') != -1) {
    console.log('Rahmana exits')
}
if (friends.includes('Rahmana')) {
    console.log("includes")
}
