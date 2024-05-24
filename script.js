let btn = document.getElementById('buttn')

let parol = document.getElementById('parol')


let username = document.getElementById('username')
let div = document.getElementById('div')
let body = document.querySelector('body')

body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.justifyContent = 'space-evenly'
body.style.alignItems = 'center'
body.style.height = '100vh'
body.style.gap = ''

body.style.flexDirection = 'column'
body.style.width = '200vh'
parol.style.borderRadius = '50px'
username.style.borderRadius = '50px'
btn.style.borderRadius = '50px'









btn.addEventListener('click', ()=>{
    if (parol.value ==  1234 && username.value == 5678  )  {
        alert('siz spacegga kirdingiz')
    }else{
        alert('parol yoki id xato')
    }     
})