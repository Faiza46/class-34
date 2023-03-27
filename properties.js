const ball = {
    color: "black",
    type: "football",
    shape: "round",
    isClean: true,
    price: 350
}

//key
const keys = Object.keys(ball);
//console.log(keys);

for (const key of keys) {
    //console.log(key);
}

//values
const values = Object.values(ball);
//console.log(values);
for (const value of values) {
    //console.log(value);
}

//key and key values
const properties = Object.entries(ball);
//console.log(properties);
for (const [key, value] of properties) {
    console.log(key, ":", value);
}



/* seal function: allow to update an object but doesn't allow to delete 
an object properties*/

/* Object.seal(ball);
ball.price = 400;
console.log(ball.price);
delete ball.isClean;
console.log(ball);*/


/* freez function: doesn't allow to update  and  to delete 
an object properties*/
Object.freeze(ball)
delete ball.isClean;
//console.log(ball);

ball.price = 400;
//console.log(ball);

//for in loop
for (const balls in ball) {
    //console.log(balls, ball[balls]);

}





