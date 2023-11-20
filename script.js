// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
// const errors = document.querySelector(".errors")
const form = document.querySelector("#form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const passConf = document.getElementById("password-confirmation")
const terms = document.getElementById("terms")
const errors = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
  //   e.preventDefault()  Added below.

  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorPrompts = []
  clearErrors()

  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  if (username.value.length < 6) {
    errorPrompts.push("Username must be at least 6 characters!")
  }
  //   console.log(errorPrompts)

  //      2. Ensure the password is at least 10 characters long
  if (password.value.length < 10) {
    errorPrompts.push("Password must be at least 10 characters!")
  }
  //   console.log(errorPrompts)

  //      3. Ensure the password and confirmation password match
  if (password.value !== passConf.value) {
    errorPrompts.push("Passwords do not match!")
  }
  //   console.log(errorPrompts)

  //      4. Ensure the terms checkbox is checked
  if (!terms.checked) {
    errorPrompts.push("You must agree to the terms!")
  }
  //   console.log(errorPrompts)

  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorPrompts.length > 0) {
    showErrors(errorPrompts)
    e.preventDefault()
  }
})

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task

  //   while (errorsList.children[0] != null) {
  //     errorsList.removeChild(errorsList.children[0])
  //   }

  //OR
  errorsList.innerHTML = ""

  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  errors.classList.remove("show")
}

// TODO: Define this function
function showErrors(errorPrompts) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorPrompts.forEach((error) => {
    const listItem = document.createElement("li")
    listItem.innerText = error
    errorsList.appendChild(listItem)
  })
  errors.classList.add("show")
}
