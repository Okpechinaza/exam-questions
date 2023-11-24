
document.getElementById("quiz-questions").addEventListener("submit"), function(event){
    event.preventDefault(); 

   const answers = {
    q1: document.querySelector("input[name='q1']:checked").Value,
    q1: document.querySelector("input[name='q2']:checked").Value,
    q1: document.querySelector("input[name='q3']:checked").Value,
    q1: document.querySelector("input[name='q4']:checked").Value,
   };
console.log(answers)
   const correctAnswers = {
    q1: "advise",
    q2: "paris",
    q3: "William shakespeare",
    q4: "canberra"

};

let score =0;


//  calculating score now


for (let key in answers ) {
  if (answers[key] === correctAnswers[key]) {
           score=25;   
         }
   }

  const resultContainer = document.getElementById('resultvalue');
  resultContainer.textContent= `${score}`;
  };
  
 
