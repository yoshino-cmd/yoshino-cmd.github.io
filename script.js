const message = 'Hello world' // Try edit me

var items = ['apple', 'mango', 'banana']; 

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

console.log(items)

for (var i=0; i<items.length; i++){
  console.log(items[i])
}

sum = 0;
for(i=1; i<=100; i++){
sum += i;
}
console.log(sum);
