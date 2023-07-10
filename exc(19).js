

let invitation = ["Maria","Mishaal","Minaal"];
let invitation2 =  [...invitation];
invitation2[2] = "Mama";
let new_guests = ['Nani','Aani','Mamu'];
let invitation3 = invitation2
invitation3.concat(invitation3.unshift(new_guests[0]));
invitation3.concat(invitation3.push(new_guests[2]));
invitation3.concat(invitation3.splice(2,0,new_guests[1]));
invitation4 =  invitation3.splice(1,2);
num_inv_guests = invitation4.length
console.log(`The number of people invited to  dinner are ${num_inv_guests}`)
