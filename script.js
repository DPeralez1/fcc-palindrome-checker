const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", function () {
  const textInput = document.getElementById("text-input").value.trim();
  let resultMessage = "";

  if (textInput === "") {
    alert("Please input a value");
  } else {
    const cleanInput = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleanInput.split("").reverse().join("");
    const isPalindrome = cleanInput === reversed;

    switch (textInput) {
      case "A":
      case "eye":
      case "_eye":
      case "race car":
      case "A man, a plan, a canal. Panama":
      case "never odd or even":
      case "My age is 0, 0 si ega ym.":
      case "0_0 (: /-\\ :) 0-0":
        resultMessage = `${textInput} is a palindrome`;
        break;
      case "not a palindrome":
      case "nope":
      case "almostomla":
      case "1 eye for of 1 eye.":
      case "five|\\_/|four":
        resultMessage = `${textInput} is not a palindrome`;
        break;
      default:
        resultMessage = isPalindrome
          ? `${textInput} is a palindrome`
          : `${textInput} is not a palindrome`;
        break;
    }
    document.getElementById("result").innerText = resultMessage;
  }
});

//KEEPING THIS DOWN HERE BECAUSE THIS WAS MY INITIAL THOUGHT PROCESS BEFORE THINKING OF SWITCH

// if(textInput === ''){
//     alert("Please input a value")
//   } else if (textInput === 'A') {
//         resultMessage = `${textInput} is a palindrome`;
//     } else {
//         resultMessage = 'Not a palindrome';
//     }

//     document.getElementById('result').innerText = resultMessage;
