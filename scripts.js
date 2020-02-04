const click = document.getElementById('hello');

click.addEventListener('click', greeting);

function greeting() {
  alert("You clicked on this button !!")
}


const click2 = document.getElementById('home');

click2.addEventListener('click', home);


function home() {
  console.log("Welcome !!");
  alert("You clicked on home")
}
