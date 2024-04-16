let block = document.getElementById('block')
let hole = document.getElementById('hole')
let character = document.getElementById('character')
let jumping = 0
let isAlive = false


let holeRandom = block.addEventListener('animationiteration', ()=>{
  let rnd = Math.floor((Math.random() * 600) - 200)
  if(rnd > 400 ||rnd < 0){
     rnd = Math.floor((Math.random() * 600) - 200)
  }else{
    hole.style.top = rnd + "px"
  }
})

let gravity = setInterval(()=>{
  let characterTop = parseInt(getComputedStyle(character).getPropertyValue('top'))
  if(jumping == 0){
    character.style.top = characterTop + 3 +'px'
  }
},10)
let hitDetection = setInterval(() =>{
  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue('left'))
  let holeTop = parseInt(getComputedStyle(hole).getPropertyValue('top'))
  let characterTop = parseInt(getComputedStyle(character).getPropertyValue('top'))
  if((characterTop > 600) || (blockLeft < 50 && blockLeft > -50)&&((characterTop < holeTop)|| - (characterTop > holeTop + 200))  ){
    console.log('Game Over')
    isAlive = false
  }

},10)

function jump(){
  let jumpCount = 0;
  let jumpInterval = setInterval(() =>{
    let characterTop = parseInt(getComputedStyle(character).getPropertyValue('top'))
    character.style.top = characterTop - 5 +'px'
    jumping = 1
    jumpCount++
    if(jumpCount > 15){
      jumping = 0
      clearInterval(jumpInterval)
    }
  },10)  

}
window.addEventListener('keypress', jump)
let play = document.getElementById('play')
let points = 0;
let score = document.getElementById('score')
let pointsInterval;
let difficultyInterval;
let characterAnime;
let ferdudurkeInterval;
let ferdydurkeArr = [
  "Wstęp: Spotykamy głównego bohatera, Józia, który przypadkowo trafia na Pana Pimko, starszego pisarza. Rozpoczyna się dyskusja na temat dojrzałości, w której Pan Pimko kwestionuje pojęcie dorosłości i sugeruje, że wiele osób udaje dojrzałość, zamiast ją osiągnąć.",
  "Spowiedź: Józio, pod wpływem rozmowy z Panem Pimko, zaczyna analizować swoje życie i odczuwać frustrację związana z trudnościami dorosłości. Rozpoczyna introspekcję, starając się zrozumieć własne niedoskonałości i konflikty.",
  "Szkoła: Józio trafia do szkoły, gdzie doświadcza upokorzeń i drwin ze strony nauczycieli i uczniów. Widzimy tutaj kontrast między oczekiwaniami społecznymi a rzeczywistością życia w instytucji edukacyjnej.",
  "Pani Pani: Poznajemy postać Pani Pani, tajemniczej kobiety, która wplątuje Józia w swoje ekscentryczne życie. Pani Pani staje się dla niego przewodnikiem w podróży przez absurdy i paradoksy ludzkiego bytu.",
  "Podróż: Józio wyrusza w podróż z Panią Panią, gdzie doświadcza kolejnych dziwnych i niezwykłych sytuacji. Ta podróż symbolizuje jego własną podróż dojrzałości i odkrywanie świata dorosłych.",
  "Wiek dojrzewania: Józio musi zmierzyć się z wyzwaniami dorosłości i akceptować odpowiedzialność za swoje życie. Przechodzi przez proces dojrzewania, który wymaga od niego przezwyciężenia własnych lęków i ograniczeń.",
  "Pan Mientus: Spotkanie z Panem Mientusem wprowadza Józia w jeszcze bardziej surrealistyczny świat, gdzie granica między rzeczywistością a fantazją zaczyna się zacierać. To doświadczenie kwestionuje jego percepcję rzeczywistości i prawdziwość otaczającego świata.",
  "Dyplom: Józio próbuje osiągnąć sukces w społeczeństwie poprzez zdobycie dyplomu, ale napotyka na wiele przeszkód i absurdów. Walka o dyplom staje się symbolem walki o swoje miejsce w społeczeństwie i akceptację przez innych.",
  "Prawda: Główny bohater zaczyna kwestionować istniejące normy społeczne i poszukiwać własnej prawdy. Odkrywa, że rzeczywistość może być różnie interpretowana i że nie ma jednej uniwersalnej prawdy.",
  "Samo życie: Józio stara się zaakceptować życie takim, jakie jest, i odnaleźć sens w jego chaosie i nieprzewidywalności. Dostrzega piękno i absurd życia, co pomaga mu w lepszym zrozumieniu samego siebie i świata.",
  "Koniec: Opowieść kończy się z refleksją nad naturą ludzkiej egzystencji i nieustannym poszukiwaniem sensu życia. Józio może nadal być zagubiony, ale zdaje sobie sprawę z głębi i złożoności życia, co prowadzi go do dalszych poszukiwań i samodoskonalenia."]

let ferdyNextNum = 1
let text = document.getElementById('text')
text.innerHTML = ferdydurkeArr[0]

let timer = 3
let animeTimer = 4
function playGame (){
  block.classList.add('animation')
  hole.classList.add('animation')
  isAlive = true
  jumping = 0
  character.style.top = 300 + "px"
  timer = 3
  text.innerHTML = ferdydurkeArr[0]
  pointsInterval = setInterval(() =>{
    points++
    score.innerHTML= `Score : ${points}`
  },1000)
  difficultyInterval = setInterval(() =>{
    timer -= 0.0001
    hole.style.animationDuration = timer +"s"
    block.style.animationDuration = timer +"s"
    let holeAnimationTime = parseFloat(getComputedStyle(hole).getPropertyValue('animation-duration'))
/*     console.log(holeAnimationTime) */
  },10)
  ferdudurkeInterval = setInterval(()=>{
    ferdyNextNum++
    text.innerHTML = ferdydurkeArr[ferdyNextNum]
  },15000)
}

let charAnime = () =>{
  character.classList.remove('spinAnimeChar')
  character.classList.add('spinAnimeChar')
}
let removeCharAnime = () =>{

    character.classList.remove('spinAnimeChar')

} 
window.addEventListener('keydown',charAnime)
window.addEventListener('keyup',removeCharAnime)

setInterval(() => {
  if(isAlive){
    play.removeEventListener('click', playGame)
    isAlive == true
    
  }else if(!isAlive){
    isAlive == false
    block.classList.remove('animation')
    hole.classList.remove('animation')
    jumping = 1
    clearInterval(pointsInterval)
    points = 0
    score.innerHTML= `Score : ${points}`
    play.addEventListener('click', playGame)
    clearInterval(difficultyInterval)
    clearInterval(ferdudurkeInterval)

  }
}, 5);        





let blurBack = document.getElementById('blurBack')
let blurBackHight = parseInt(getComputedStyle(blurBack).getPropertyValue('height'))
console.log(blurBackHight)
let textHight = parseInt(getComputedStyle(text).getPropertyValue('height'))

blurBack.style.height = textHight + "px"
setInterval(() =>{
  let text = document.getElementById('text')
  let textHight = parseInt(getComputedStyle(text).getPropertyValue('height'))
  blurBack.style.height = textHight + "px"
},100)
