

class CardStorage{
    cardsObject = {};
    constructor() {
        this.fetchCards()
    }
    saveCards(imgSrc, title, para, date) {
        this.cardsObject[title+date]={
            imgSrc, title, para, date
        }
        console.log(this.cardsObject);
        LocalStorage.setLocalStorage(this.cardsObject)
    }
    fetchCards() {
        let response = LocalStorage.getLocalStorage();
        if (response) {
            this.cardsObject = response;
         
        } else {
            return null
        }
    }
    getCardsObject() {
        return this.cardsObject;
    }
    deleteCard(id) {
        alert('get run')
        delete this.cardsObject[id];
        LocalStorage.setLocalStorage(this.cardsObject);
    }
}



class LocalStorage{
    static getLocalStorage() {
        let destinationCards = localStorage.getItem('destination-cards');
        if (destinationCards) {
            return JSON.parse(destinationCards)
        } else {
            return null;
        }
    }
    static setLocalStorage(obj) {
        localStorage.setItem('destination-cards',JSON.stringify(obj) )
    }
}
