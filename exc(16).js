let invitation = ["Maria","Mishaal","Minaal"];
let invitation2 =  [...invitation];
invitation2[2] = "Mama";
let new_guests = ['Nani','Aani','Mamu'];
let invitation3 = invitation2
invitation3.concat(invitation3.unshift(new_guests[0]));
invitation3.concat(invitation3.push(new_guests[2]));
invitation3.concat(invitation3.splice(2,0,new_guests[1]));
console.log(invitation3)

for(let i =0; i<invitation3.length;i++){
    console.log(`Hey ${invitation3[i]}, I am inviting you for a dinner at my house on Friday,7 july at 8 P.M . I would be very happy by your arrival. Thankyou.`)
    console.log("\n")
}

