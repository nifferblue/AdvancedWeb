
let names = ['jane','Doe','May','dani']
const showName = () =>{
 
  // window.alert(names[0])
  document.write(names[0])
}

const allNames = ()=>{
  document.getElementById('demo').innerHTML = names;
}

let fruits = ['mango','oranges','kiwi']
let btnfruits = document.getElementById('btnfruits');
btnfruits.addEventListener('click',()=>{
  document.getElementById('fruits').innerHTML = fruits;
})
btnfruits.addEventListener('dblclick',()=>{
  document.getElementById('fruits').innerHTML = fruits[1];
})

let colorChange = document.getElementById('changeColor')


colorChange.addEventListener('click' ,()=>{
  document.body.style.backgroundColor = 'green'
})

let text = document.getElementById('text')

text.addEventListener('click',()=>{
  document.write('Displaying  text in paragraph ')
})

let hide = document.getElementById('hide')
let parahide = document.getElementById('parahide')

hide.addEventListener('mouseover',()=>{
parahide.style.display='none'
})
