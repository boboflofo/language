window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  let result = "";

  result = tester();
  document.querySelector(".results").innerText = result;
}

function tester() {
  const webDev = document.querySelector(".web-dev").value;
  const specWebDev = document.querySelector(".specific-webdev").value;
  const speed = document.querySelector(".speed").value;
  const memory = document.querySelector(".memory").value;
  const portability = document.querySelector(".portability").value;
  // document.querySelector(".error").setAttribute("class", "error hidden");

  if (webDev && specWebDev && speed && memory && portability) {
    if (webDev === "yes") {
      return "You should learn JavaScript to become a web developer!";
    } else if (specWebDev === "platform") {
      return "You are interested in Java! Games in larger platforms use Java.";
    }
    if (specWebDev === "data" && speed === "yes") {
      return "Look into C++, many say that C++ is one of the fastest programming languages!";
    } else if (specWebDev === "data" && memory === "yes") {
      return "A language known for its ability to manage memory and is gaining popularity is called Rust! Look into it.";
    } else if (specWebDev === "data" && portability === "yes") {
      return "Java is also a programming language known for portability";
    }
  } else {
    document.querySelector(".error").setAttribute("class", "error");
  }
}
