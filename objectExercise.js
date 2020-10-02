// Problem 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user); // output should be { surname: 'Mike' }

// Problem 2
var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
    };

console.log(Object.values(fruit)
                  .reduce((accumulator , currentVal) => accumulator + currentVal)); // output should be 50