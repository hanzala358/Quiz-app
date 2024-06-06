const form = document.querySelector('form')
const nam = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const email1 = document.querySelector('#email1')
const password1 = document.querySelector('#password1')

// get back the stored array bof obj from local storage by parsing(means json-string to array of obj)

const GetJsonArr = localStorage.getItem('SignUp')

// parsing(means json-string to array of obj)
const PrsgetJsonArr = JSON.parse(getJsonArr)

let arr;
if (PrsGetJsonArr == null) {
    arr = []
}else{
    arr = PrsGetJsonArr
}

// add event listener
form.addEventListener('submit', (event)=>{
event.preventDefault()
arr.filter((item)=>{
console.log(item);
})

arr.push({
    name:nam.value,
    email:email1.value,
    password:password1.value
})
console.log(arr);
// convert the array of obj in Json string 
const arrJson = JSON.stringify(arr)
// then store in local storage
localStorage.setItem('SignUp', arrJson)
})