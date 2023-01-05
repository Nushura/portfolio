// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navBarLinks = document.getElementsByClassName('navbar-links')[0]

// // Whenever this element is clicked
// // we want to run a certain function
// // and inside of the function all we want to do is take the nav bar links
// // wanna access all the different classes on it
// // and we wanna just toggle the active class
// toggleButton.addEventListener('click', () => {
//     navBarLinks, classList.toggle('active')
// })

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})