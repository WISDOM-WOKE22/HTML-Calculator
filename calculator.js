let equal_pressed=0;
// refer all buttonsexcluding AC DEL
let button_input=document.querySelectorAll(".input-button");
// refer
let input=document.getElementById('input');
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");
let erase=document.getElementById("erase");

window.onload=() => {
  input.value="";
};

// Access each class using forEach
button_input.forEach((button_class) => {
   button_class.addEventListener("click", () => {
      if(equal_pressed == 1) {
        input.value="";
        equal_pressed=0;
      }
      // display value of each button
      input.value +=button_class.value; 
   })
});

// solve the user's input when clicked on equal sign
equal.addEventListener("click", () =>{
   equal_pressed=1;
   let input_val=input.value;
  //  console.log(input.value)
   try {
    //  evaluate
    let solution = eval(input_val);
    // true for natural numbers
    // false for decimals
    if(Number.isInteger(solution)){
      input.value=solution;
    }
    else {
      input.value=solution.toFixed(2);
    } 
     }  catch(err) {
      //  if user has entered invalid input
      alert("Invalid Input");
     }
});
// clear whole section
clear.addEventListener("click", () =>{
   input.value="";

})
// erase section
erase.addEventListener("click", () => {
  input.value=input.value.substr(0,input.value.length-1);
})