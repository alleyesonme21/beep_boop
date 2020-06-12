$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
const userInput = $("input#enterNumber").val();
 const string = global(userInput);
 $("#outCome").text(string);
  

  });
});

//Business logic
function global(number) {
  const array = [];
  for (index = 0;  index <= number; index++) {
    array.push(index.toString());
    if((array[index]).includes("1")) {
      array[index] = ("Beep");
    } else if ((array[index]).includes("2")) {
      array[index] = ("Boop");
    } else if ((array[index]).includes("3")) {
      array[index] = ("Won't you be my neighbor");
    } else {
      array[index];
    }
  }
  return array;
}
  
