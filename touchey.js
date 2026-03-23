let ceiling = document.getElementById('ceiling')
let look = document.getElementById('look')
let youdid = document.getElementById('youdid')
let fish = document.getElementById('fish')
let counter = 0

document.addEventListener("click",function notouchey(){
    counter++

let times

    if (counter ==1){
        look.innerText="ceiling has boundaries"
        ceiling.classList.add('updown')
    }else if (counter == 2){
        look.innerText="pls don't"
        ceiling.classList.remove('updown')
        ceiling.classList.add('slide')
    }else if (counter == 3){
        look.innerText="STOP TOUCHING ITS A MINOR"
        ceiling.classList.remove('slide')
        ceiling.classList.add('shake')
    }else if (counter == 4){
        look.innerText="One more time, I dare you"
        ceiling.classList.remove('shake')
        ceiling.classList.add('grow')
    }else if (counter == 5){
        look.innerText="look what you did now"
        youdid.innerText="look what you did :C"
        ceiling.classList.add('spinny')
        ceiling.classList.remove('shake')
        let times = setTimeout(function(){youdid.innerText='for shame'},3000)
    }else if (counter == 6){
        look.innerText="wanna fix him?"
        youdid.innerText="there's a fish. click on the fish. and then feed him the fish."
        fish.classList.add('magic')
        fish.style.opacity=1
        
    }
    

})


document.addEventListener("mouseup", () => downy = false)

document.addEventListener("mousemove",
    function (e){
    if (7 <= counter){
        fish.style.left = e.clientX - 100 + 'px'
        fish.style.top = e.clientY - 100 + 'px'

        if (fish.style.left<=500 + "px"){
            look.innerText = "WHAT ARE YOU DOING"
            youdid.innerText = "dammit they're friends :CCCCC"
            ceiling.classList.add("small")

            if (fish.style.left <=100 + "px"){
                look.innerText = "good"
                youdid.innerText = "yessssss anakin. gooooooooood"
                ceiling.className = ""
                
            }
    
        }

    }



})