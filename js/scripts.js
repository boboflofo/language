window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
});

const javascript = "You should learn JavaScript to become a web developer!";
const java = "You are interested in Java! Games in larger platforms use Java.";
const c =
  "Look into C++, many say that C++ is one of the fastest programming languages!";
const rust =
  "A language known for its ability to manage memory and is gaining popularity is called Rust! Look into it.";
const java2 = "Java is also a programming language known for portability";

function handleSubmit(e) {
  e.preventDefault();

  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.classList.add("hidden");
  });

  let result = tester();

  if (result) {
    document.querySelector(".results").innerText = result;
  }

  if (result === javascript) {
    document.querySelector(".javascript .card").classList.remove("hidden");
  } else if (result === java || result === java2) {
    document.querySelector(".java .card").classList.remove("hidden");
  } else if (result === c) {
    document.querySelector(".c .card").classList.remove("hidden");
  } else if (result === rust) {
    document.querySelector(".rust .card").classList.remove("hidden");
  }
}

function tester() {
  const webDev = document.querySelector("#web-dev").value;
  const specWebDev = document.querySelector("#specific-webdev").value;
  const speed = document.querySelector("#speed").value;
  const memory = document.querySelector("#memory").value;
  const portability = document.querySelector("#portability").value;

  document.querySelector(".error").setAttribute("class", "error hidden");

  if (
    webDev !== "Choose option" &&
    specWebDev !== "Choose option" &&
    speed !== "Choose option" &&
    memory !== "Choose option" &&
    portability !== "Choose option"
  ) {
    if (webDev === "yes") {
      return javascript;
    } else if (specWebDev === "platform") {
      return java;
    }
    if (specWebDev === "data" && speed === "yes") {
      return c;
    } else if (specWebDev === "data" && memory === "yes") {
      return rust;
    } else if (specWebDev === "data" && portability === "yes") {
      return java2;
    } else {
      return javascript;
    }
  } else {
    document.querySelector(".error").setAttribute("class", "error");
  }
}
