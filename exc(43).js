var magicians = ['Tom', 'Ben', 'John', 'Jack', 'Jake'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The Great ".concat(magicians[i]));
    }
}
make_great(magicians);
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
