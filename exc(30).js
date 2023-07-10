var admin = ['Yahya','Maria','Mishaal','Minaal','Admin']
for (let i=0;i < admin.length;i++){
    if (admin[i] === 'Admin'){
        console.log(`Hello ${admin[i]}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${admin[i]}, thankyou for logging in again.`)
    };
}