document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const li = document.createElement('li')
    const p = document.createElement('p')
    const btn = document.createElement('button')

    p.textContent = e.target["new-task-description"].value + " "
    btn.textContent = " x "
    btn.addEventListener('click',()=>li.remove())

    p.appendChild(btn)
    li.append(p)
    document.querySelector('#tasks').append(li)
  })

})