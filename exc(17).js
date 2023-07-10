let invitation = ["Maria","Mishaal","Minaal"];
let invitation2 =  [...invitation];
invitation2[2] = "Mama";
let new_guests = ['Nani','Aani','Mamu'];
let invitation3 = invitation2
invitation3.concat(invitation3.unshift(new_guests[0]));
invitation3.concat(invitation3.push(new_guests[2]));
invitation3.concat(invitation3.splice(2,0,new_guests[1]));
invitation4 =  invitation3.splice(1,2);

console.log(invitation4)




console.log('Sorry to say but i can only invite two persons for the dinner as i am unable to get a bigger dinner table.')
 for (let i =0; i<invitation3.length;i++){
    console.log(`Hey ${invitation3[i]},I am sorry that i am not able to invite you to a dinner. But Inshallah in future, I will. I hope that u will forgive me.`)
    console.log('\n');
 }

console.log('\n')
console.log('\n')
 
 for (let j = 0; j<invitation4.length;j++){
   console.log(`Hey ${invitation4[j]}, You are still invited to the dinner. I will be happy by your arrival.`);
   console.log('\n');
 }