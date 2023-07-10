let invitation = ["Maria","Mishaal","Minaal"];
let invitation2 =  [...invitation];
invitation2[2] = "Mama"
for(let i =0; i< invitation2.length;i++){
    console.log(`Hey ${invitation2[i]}, I am inviting you to a dinner at my house on Friday,7 July at 8 P.M . I will be very happy if you accept my invitation.`)
    console.log("\n")
}
console.log(`${invitation[2]} will not be coming to the dinner for some personal reasons.`);
