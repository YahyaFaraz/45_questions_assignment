var current_users = ['Yahya', 'Maria', 'Minaal', 'Mishaal', 'Mama'];
var new_users = ['Nani', 'Aani', 'Dadi', 'Yahya', 'Minaal'];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("".concat(current_users[i], ": This username is already taken."));
    }
    else {
        console.log("".concat(current_users[i], ": Username available"));
    }
}
