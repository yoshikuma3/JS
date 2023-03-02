window.addEventListener('load', function(){

    const pullDownButton = document.getElementById("lists")
    console.log(pullDownButton)

  pullDownButton.addEventListener('mouseover', function(){

    const pullDownButton = document.getElementById("lists")
    console.log("乗る")
  })
  pullDownButton.addEventListener('click', function(){

    const pullDownButton = document.getElementById("lists")
    console.log("クリック")
  })
  pullDownButton.addEventListener('mouseout', function(){

    const pullDownButton = document.getElementById("lists")
    console.log("外れる")
  })
})