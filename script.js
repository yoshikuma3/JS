function pullDown() {
}
window.addEventListener('load',pullDown)

window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")
    const pullDoenChild = document.querySelectorAll(".pull-down-list")
    const currentList = document.getElementById("current-list")

  pullDoenChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.innerHTML
      currentList.innerHTML = value
      console.log(value)
    })
  })

  pullDownButton.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:blue;")
  })
})

  pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
      pullDownParents.removeAttribute("style", "display:block;")
      console.log("非表示")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
      console.log("表示")
    }
})

  pullDownButton.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "backgound-color:red;")
  })
})
})
