
const destinationContainer= document.getElementById("destination-list")

const ModalEl = new ModalElement()
const FormModalEle = new FormEl();
const SaveCards= new CardStorage()
//get all destination button control
const allButtons = destinationContainer.querySelectorAll("button")
allButtons.forEach((bEl,id) => {
    bEl.addEventListener("click", () => {
        ModalEl.openModal()
        FormModalEle.setImg(ImageMap[id])
    })
})



FormModalEle.getTodoForm.addEventListener('submit', () => {

    const { para, title, date, imgSrc } = FormModalEle.submit()
    SaveCards.saveCards(imgSrc, title, para, date);
    ModalEl.closeModal();
})



