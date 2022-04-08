
const container = document.querySelector('.container'); 

for(i=1; i<=100; i++){
  const box = document.createElement('div')
  box.className = 'box'
  console.log(box);
  const stampa = document.createElement('h2')
  if(i % 3 === 0 && i % 5 === 0){
    stampa.innerText = 'FizzBuzz'; 
    box.classList.add('fizz-buzz');   
  }else if (i % 5 === 0){
    stampa.innerText ='Buzz';
    box.classList.add('buzz');
  }else if (i % 3 === 0){
    stampa.innerText = 'Fizz';
    box.classList.add('fizz');
  }else{
      stampa.innerText = i;
  }
  
  box.append(stampa);
  container.append(box);
}
