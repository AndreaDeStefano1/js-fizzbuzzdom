
const container = document.querySelector('.container'); 

for(i=1; i<=100; i++){
  const stampa = document.createElement('h2')
  if(i % 3 === 0 && i % 5 === 0){
    stampa.innerText = 'FizzBuzz';    
  }else if (i % 5 === 0){
    stampa.innerText ='Buzz';
  }else if (i % 3 === 0){
    stampa.innerText = 'Fizz';
  }else{
      stampa.innerText = i;
  }
  console.log(stampa);
  container.append(stampa);
}
