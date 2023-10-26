
const cardsContainer= document.getElementById('cards-containers')

const SaveCards = new CardStorage();




// console.log(SaveCards.fetchCards())
// console.log(Object.values(SaveCards.fetchCards()))

class MySchedule{

    static run() {
        const cardsObj = SaveCards.getCardsObject();
        const cardsId = Object.keys(cardsObj);
        cardsId.forEach((id) => {
            const {date,imgSrc,para ,title} = cardsObj[id];
            const cardsEle = TodoCards.cardMaker(imgSrc, title, para, date);
            CardAttributes.add(cardsEle, {
                key:id
            })
            ControlToDo.addControl(cardsEle, "Delete", "", () => {
                SaveCards.deleteCard(id)
            });
            cardsContainer.appendChild(cardsEle)
        })
    }
}

MySchedule.run()