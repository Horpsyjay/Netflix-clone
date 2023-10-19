const tabItems = document.querySelectorAll('.tab-item');
const tabItemsContent = document.querySelectorAll('.tab-content-item')


function addBorder(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border')

    const itemToShow = document.querySelector(`#${this.id}-content`)
    itemToShow.classList.add('show');
}



// this function removes border from all initially
const removeBorder = () => {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// this function removes show class from all initially
const removeShow = () => {
    tabItemsContent.forEach(item => item.classList.remove('show'));
}



tabItems.forEach(item => item.addEventListener('click', addBorder))