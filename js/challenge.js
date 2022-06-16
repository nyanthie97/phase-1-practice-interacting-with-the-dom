const counter = document.getElementById("counter")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const heartBtn = document.getElementById("heart")
const likesList = document.querySelector(".likes")


setInterval(function(){
    counter.innerText = ++counter.innerText
},1000)

plusBtn.addEventListener("click", () => {
    counter.innerText = ++counter.innerText
})


minusBtn.addEventListener("click", () => {
    counter.innerText = --counter.innerText
})

heartBtn.addEventListener("click", likeNum)

function likeNum(){
    const foundLi = document.querySelector(`li[data-num="${counter.innerText}]`)
    if(!foundLi){
        const li = document.createElement('li')
        li.dataset.num = counter.innerText
        li.innerHTML = `${counter.innerText} has been liked <span>1</span> times`
        likesList.append(li)
    } else {
        foundLi.children[0].innerText = ++foundLi.children[0].innertext
    }
}

pauseBtn.addEventListener("click", (e) => {
    if(e.target.innerText === "pause"){
        clearInterval(intervalTimer)
        e.target.innerText = "resume"
        plusBtn.disabled = true 
        minusBtn.disabled = true 
        heartBtn.disabled = true
    } else {
        intervalTimer = setInterval(incrementTimer, 1000)
        e.target.innerText = "pause"
        plusBtn.disabled = false 
        minusBtn.disabled = false 
        heartBtn.disabled = false
    }
})


const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")

commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const pTag = document.createElement('p')
    pTag.innerText = commentInput.value
    commentList.appendChild(pTag)
    e.target.reset()
})  