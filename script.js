window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:blue;")
  })
})

  pullDownButton.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('click', function(){
    this.setAttribute("style", "display:block;")
  pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
      pullDownParents.removeAttribute("style", "display:block;")
      console.log("非表示")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
      console.log("表示")
    }
  })
})
})

  pullDownButton.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "backgound-color:red;")
  })
})
})
