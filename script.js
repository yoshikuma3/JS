window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    console.log(pullDownButton)

  pullDownButton.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists")
  })
  pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
  })

  pullDownButton.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists")
  })
  pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style", "background-color:green;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists")
  })
  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style", "backgound-color:red;")
  })
})