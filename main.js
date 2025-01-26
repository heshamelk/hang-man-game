let lettersContainer = document.querySelector('.letters');
let wordPlace = document.querySelector('.word');
let obj = {
    moves : ['mail', 'all that', 'parestige', 'king one', 'parents'],
    persons : ['mohamed', 'ahmed', 'mahmoud', 'hesham', 'haruon'],
    contries : ['giza', 'parise', 'cairo', 'alexandria'],
    colors : ['red', 'green', 'blue', 'white', 'black'],
}

let key = Object.keys(obj);
let randomKey = key[Math.floor(Math.random() * key.length)];
document.querySelector('.info .section span').innerHTML = randomKey;

let randomKeyValue = obj[randomKey];
let randomValueValue = randomKeyValue[Math.floor(Math.random() * randomKeyValue.length)];
console.log(randomValueValue);

let letters = Array.from("ABCDEFGHIGKLMNOPQRSTYVWXYZ");;
for(let i = 0; i < letters.length; i++) {
    let box = document.createElement('span');
    box.className = 'letter-box';
    box.appendChild(document.createTextNode(letters[i]));
    lettersContainer.appendChild(box); 
}

for(let i = 0; i < randomValueValue.length; i++) {
    let span = document.createElement('span');
    span.className = 'write-span';
    if(randomValueValue[i] == ' ') {
        span.classList.add('with-space');
    }
    wordPlace.appendChild(span);
}

let allSpans = document.querySelectorAll('.word span');
let hangContainer = document.querySelector('.hang');


let wrong = 0;




let massege = document.querySelector('.massege');
function chick() {
    document.addEventListener('click', (e) => {
        let clickedLetter = e.target;
        let status = false; // إعادة تعيين status عند كل نقرة
        if (clickedLetter.className === 'letter-box') {
            clickedLetter.classList.add('clicked');
            for (let i = 0; i < randomValueValue.length; i++) {
                if (clickedLetter.innerHTML.toLowerCase() === randomValueValue[i]) {
                    allSpans[i].innerHTML = randomValueValue[i];
                    status = true; // إذا تم العثور على الحرف، اجعل status true
                }
            }
            if (!status) {
                wrong++; 
                console.log('خطأ! عدد الأخطاء:', wrong);
                hangContainer.classList.add(`wrong-${wrong}`);
                if(wrong == 8) {
                    lettersContainer.classList.add('no');
                    massege.innerHTML = `you have ${wrong} wrongs`;
                }
            }
        }
    });
}

chick();
    