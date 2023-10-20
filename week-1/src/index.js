const formModal = document.getElementById("todo-modal")
const formCard= document.getElementById("todo-form")
const openModal = document.getElementById("open-modal")

const modal= document.querySelector('dialog')
//component 
const cardContainer = document.getElementById("cards-container")

// field set
const destinationFields = document.querySelectorAll("input[name='destination']")
const titleInput= document.getElementById("title-input")
const dateInput = document.getElementById("data-input")
const textDesc = document.getElementById("description-input")

const allInput= document.querySelectorAll("input")
const button= document.getElementById("button-input")

let destSelected="./assets/aceh.png";
let titleValue
let dataValue
let textValue
// destination field

function makeTheCard() {
    const newCards = document.createElement("dev")
    newCards.setAttribute("class", "card-component")
    
    const titleEl = document.createElement("h4")
    titleEl.innerText = titleValue
    
    const dateEle = document.createElement("p")
    dateEle.innerText = dataValue

    const textEl = document.createElement("h6")
    textEl.innerText = textValue

    const imgEl = document.createElement("img")
    imgEl.setAttribute("src",destSelected)
    
    newCards.appendChild(imgEl)
    newCards.appendChild(titleEl)
    newCards.appendChild(textEl)
    newCards.appendChild(dateEle)

    cardContainer.appendChild(newCards)
    
}

    
    const findSelected=()=> {
        destSelected = document.querySelector("input[name='destination']:checked").value
    }
    destinationFields.forEach((desF) => {
        desF.addEventListener("change",findSelected)
    })
    titleInput.addEventListener("change", (e) => {
    titleValue=e.target.value
    })
    dateInput.addEventListener("change", (e) => {
    dataValue=e.target.value
    })
    textDesc.addEventListener("change", (e) => {
        textValue = e.target.value
       
    })








    let isModalOpen= false

    // click the todo form
    openModal.addEventListener("click", () => {
        formModal.showModal()
    
        document.body.classList.add("overflow-hidden")
       
        isModalOpen=true
    })
    
function setCloseModel() {
    modal.addEventListener("animationend", () => {
        modal.removeAttribute('closing')

        formModal.close()
        isModalOpen=false
    }, { once: true })
    
    console.log('test')
    }
    
    //  up method when outside the form get click
    document.addEventListener("click", (e) => {
        if (!formCard.contains(e.target)&&isModalOpen) {
            modal.setAttribute('closing', '')

            setCloseModel()
     
            
        }
    }, true)
    // close the modal
    formModal.addEventListener("close", () => {
        document.body.classList.remove("overflow-hidden")
    })
    
    // submit 
    formCard.addEventListener("submit", (e) => {
        e.preventDefault();
        setCloseModel()
        makeTheCard()

     
        formModal.close()
        
    })
    