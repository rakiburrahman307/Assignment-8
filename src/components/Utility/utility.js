const getStoredCardInformation =()=>{
    const getCardInformation = localStorage.getItem('cards');
    if (getCardInformation) {
        return JSON.parse(getCardInformation);
    }else{
        return [];
    }

}
const saveCardInformation = id =>{
    const cardStoredInformation = getStoredCardInformation();
    const exist = cardStoredInformation.find(cardId => cardId === id);
    if (!exist) {
        cardStoredInformation.push(id); 
        localStorage.setItem('cards', JSON.stringify(cardStoredInformation));
    }
}

export {saveCardInformation,getStoredCardInformation};