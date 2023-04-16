const questions=[{
    'que':'Which of the following is Markup language',
    'a':'Html',
    'b':'Java',
    'c':'Ruby',
    'd':'Php',
    'correct':'a',
},
{
    'que':'Which of the following can read and render HTML web pages',
    'a':'Server',
    'b':'Head tak',
    'c':'Web browser',
    'd':'empty',
    'correct':'c',

},
{
    'que':'Among the following operators identify the one which is used to allocate memory to array variables in JavaScript',
    'a':'new',
    'b':'new malloc',
    'c':'alloc',
    'd':'malloc',
    'correct':'a',
}
]
let index=0;
let total=questions.length;
let right=0;
    wrong=0;
const questionBox=document.getElementById('question-box');
const optionInputs=document.querySelectorAll('.option');
const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
const data=questions[index];
questionBox.innerText=`${index+1})${data.que}`;
optionInputs[0].nextElementSibling.innerHTML=data.a;
optionInputs[1].nextElementSibling.innerHTML=data.b;
optionInputs[2].nextElementSibling.innerHTML=data.c;
optionInputs[3].nextElementSibling.innerHTML=data.d;
}

const submitQize=()=>{
       const data=questions[index];
       const ans=getAnswer()
       if (ans===data.correct) {
         right++
       } else{
        wrong++
       }
       index++;
       loadQuestion();
       return;
}
 const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
            answer= input.value;
            }
        }
    )
    return answer;
 }

 const reset=()=>{
    optionInputs.forEach(
       (input)=>{
        input.checked=false;
       } 
    )
 }

 const endQuiz=()=>{
    document.getElementById("box").innerHTML=
    `<h3> Thanku for playing the qizq </h3>
    <h2>${total} /${right} are correct </h2>`;
 }

 
loadQuestion();


