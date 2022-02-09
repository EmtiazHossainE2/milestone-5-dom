//Problem ১. [ ফাংশন নেম দিতে হবে anaToVori ]: 

function anaToVori(ana) {
    if (ana > 0) {
        let vori = ana / 16;
        return vori;
    }
    else {
        return 'Enter valid Ana';
    }
}
let ana = 32;
console.log(anaToVori(ana));


/*Problem ২. [ ফাংশন নেম দিতে হবে pandaCost]:  */

function pandaCost(singara, samucha, jilapi) {
    if (singara >= 0 && samucha >= 0 && jilapi >= 0) {
        const singleSingara = 7;
        const singleSamucha = 10;
        const singleJilapi = 15;
        let totalSingaraPrice = singleSingara * singara;
        let totalSamuchaPrice = singleSamucha * samucha;
        let totalJilapiPrice = singleJilapi * jilapi;
        let totalCost = totalSingaraPrice + totalSamuchaPrice + totalJilapiPrice;
        return totalCost;
    }
    else {
        return 'Enter positive value ';
    }
}
let singara = 0;
let samucha = 10;
let jilapi = 4;
let totalCost = pandaCost(singara, samucha, jilapi);
console.log(totalCost);



/* Problem ৩. [ ফাংশন নেম দিতে হবে picnicBudget]:  */

function picnicBudget(people) {
    const perFirst100 = 5000;
    const perSecond100 = 4000;
    const per200Up = 3000;
    if (people > 0 && people <= 100) {
        let firstTotalBudget = perFirst100 * people;
        return firstTotalBudget;
    }
    else if (people > 100 && people <= 200) {
        let first100 = 100 * perFirst100;
        let restPeople = people - 100;
        let secondTotal = restPeople * perSecond100;
        let secondTotalBudget = secondTotal + first100;
        return secondTotalBudget;
    }
    else if (people > 200) {
        let first100 = 100 * perFirst100;
        let second100 = 100 * perSecond100;
        let restPeople2 = people - 200;
        let lastTotal = restPeople2 * per200Up;
        let lastTotalBudget = lastTotal + first100 + second100;
        return lastTotalBudget;
    }
    else {
        return 'Enter positive integer number greater than 1';
    }

}
let people = 300;
console.log(picnicBudget(people))


/* ৪. [ ফাংশন নেম দিতে হবে oddFriend]:   */

function oddFriend(friends) {
    let myOddFriend = friends[0];
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            if (friend.length % 2 != 0 > myOddFriend.length % 2 != 0) {
                myOddFriend = friend;
                break;
            }
        }
        else {
            myOddFriend = 'No Odd Friend';
        }
    }
    return myOddFriend;
}
let friendsName = ['Emtiaz', 'Nobita', 'Doraemon', 'Shizuka', 'Sunio', 'Zian'];
console.log(oddFriend(friendsName));