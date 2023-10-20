window.addEventListener("load" , () => {
  const form = document.querySelector(".form")
  form.addEventListener("submit" , tester)
})

function handleSubmit () {

}


function tester (e) {
  let result;
  const webDev = document.querySelector(".web-dev").value
  const specWebDev = document.querySelector(".specific-webdev").value
  const speed = document.querySelector(".speed").value
  const memory = document.querySelector(".memory").value
  const portability = document.querySelector(".portability").value

  if (webDev && specWebDev && speed && memory && portability) {
    if(webDev === 'yes') {
      const result = "You should learn JavaScript to become a web developer!"
    } else if (specWebDev === "platform"){
      const result = "You are interested in Java! Games in larger platforms use Java."
    }
      else if (speed === "yes") {
      const result = "Look into C++, many say that C++ is one of the fastest programming languages!"
      }
      else if (memory === "yes") {
      const result = "A language known for its ability to manage memory and is gaining popularity is called Rust! Look into it."
      }
      else if (portability === "yes") {
      const result = "Java is also a programming language known for portability"
      }
      
  } else {
    console.log(error)
  }
  
}