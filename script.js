const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')



function selectItem(e) {
    removeBorder();
    removeShow();

    // adds border to selected element
    this.classList.add('tab-border');

    // get the tab content from DOM
    const tabToshow = document.querySelector(`#${this.id}-content`);
    console.log(tabToshow);


}

// remove border from each tab el
const removeBorder = () => {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
const removeShow = () => {
    tabContentItems.forEach(item => item.classList.remove('show'));
}




// Event listener for item clicked
tabItems.forEach(item => item.addEventListener('click', selectItem))