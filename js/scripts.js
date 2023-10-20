window.addEventListener("load" , () => {
  const form = document.querySelector(".form")
  form.addEventListener("submit" , tester)
})


function tester (e) {
  e.preventDefault()
  let result;
  const webDev = document.querySelector(".web-dev").value
  const specWebDev = document.querySelector(".specific-webdev").value
  const speed = document.querySelector(".speed").value
  const memory = document.querySelector(".memory").value
  const portability = document.querySelector(".portability").value

  if (webDev && specWebDev && speed && memory && portability) {
    if(webDev === 'yes') {
      const result = "You should learn JavaScript to become a web developer!"
    } else if{
      
    }
  } else {
    console.log(error)
  }
}