// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    const text = document.getElementById("text");
   
    text.textContent = "This is really cool!"
    console.log(text)
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );