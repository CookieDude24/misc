//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length?retiredLocale=de

var user = {
  name: "",
  password: "",
  email: "",
};
var user1;

function signup() {
  var validRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var pass2 = document.getElementById("password2").value;
  var counter = 0;

  if (name == "" || email == "" || pass == "" || pass2 == "") {
    window.alert("Alle Felder ausfüllen");
    counter++;
  }

  if (pass != pass2) {
    window.alert("Passwörter nicht gleich");
    counter++;
  }

  if (pass.length < 6 || pass.length > 20) {
    window.alert("Passwort zu lange oder zu kurz");
    counter++;
  }

  if (pass == "Passwort") {
    window.alert("Passwort ist nicht als Passwort nicht erlaubt");
    counter++;
  }

  if (!(email.match(validRegex))) {
    window.alert("Email invalid");
    counter++;
  }
  if (counter == 0) {
    document.write("WILLKOMMEN " + name);
  }
  user.name = name;
  user.password = pass;

  user1=JSON.stringify(user);

} function login() {
  var name = document.getElementById("name2").value;
  var email = document.getElementById("email2").value;
  var pass = document.getElementById("password3").value;
  var saved = JSON.parse(user1);

  if (name == saved.name || email == saved.email || pass == saved.password) {
    document.write("WILLKOMMEN " + saved.name);
  }
  else{
    document.write("FALSCH");
  }
}