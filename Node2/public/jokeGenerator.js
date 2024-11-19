document.addEventListener('DOMContentLoaded',()=>{
const jokes=[

 "Why don't skeletons fight each other? They don't have the guts.",
 "Why did the scarecrow win an award? He was outstanding in his field!",
 "How does a penguin build its house? Igloos it together.",
 "Why don't eggs tell jokes? They'd crack each other up!"
]

const generateJokeBtn = document.getElementById('generateJoke')
const jokeDisplay = document.getElementById('jokeDisplay')

generateJokeBtn.addEventListener('click',()=>{
   const randomIndex = Math.floor(Math.random()*jokes.length)
   const randomJoke=jokes[randomIndex]
   jokeDisplay.textContent = randomJoke
   
   

})

})