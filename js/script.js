let stampa;

for(i=1; i<=100; i++){
  
  if(i % 3 === 0 && i % 5 === 0){
    stampa = 'FizzBuzz';    
  }else if (i % 5 === 0){
    stampa ='Buzz';
  }else if (i % 3 === 0){
    stampa = 'Fizz';
  }else{
      stampa = i;
  }
  console.log(stampa)
}