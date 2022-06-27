const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i]['yearOfDeath']) {
            people[i]['age'] = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
        } else {
            people[i]['currentYear'] = new Date().getFullYear();
            people[i]['age'] = people[i]['currentYear'] - people[i]['yearOfBirth'];
        }
    }

    people.sort((a, b) => {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
