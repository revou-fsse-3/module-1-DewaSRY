
const cardsContainer= document.getElementById('cards-containers')



const SaveCards = new CardStorage();
let cardsID

const ModalEl = new ModalElement()
const FormModalEle = new FormEl();

// console.log(SaveCards.fetchCards())
// console.log(Object.values(SaveCards.fetchCards()))



class MySchedule{

    static run() {
        const cardsObj = SaveCards.getCardsObject();
        const cardsId = Object.keys(cardsObj);
        cardsId.forEach((id) => {
            const {date,imgSrc,para ,title,cardId} = cardsObj[id];
            const cardsEle = TodoCards.cardMaker(imgSrc, title, para, date);
            CardAttributes.add(cardsEle, {
                key:id.trim()
            })
            ControlToDo.addControl(cardsEle, "Delete", "", () => {
                SaveCards.deleteCard(id)
            });
            ControlToDo.addControl(cardsEle, "Edit", "", () => {
                // SaveCards.deleteCard(id);
                FormModalEle.setImg(imgSrc);
                FormModalEle.setPara(para);
                FormModalEle.setTitle(title);
                FormModalEle.setDate(date);
                // set teh id for delete
                
                cardsID=cardsEle.getAttribute("key")
                console.log(cardId)
                ModalEl.openModal();
            });
            cardsContainer.appendChild(cardsEle)
        })
    }
}

MySchedule.run()


//update cards content
FormModalEle.getTodoForm.addEventListener('submit', () => {

    const { para, title, date, imgSrc } = FormModalEle.submit()

    SaveCards.updateCards(cardsID, imgSrc, title, para, date);
    ModalEl.closeModal();
    location.reload();
})