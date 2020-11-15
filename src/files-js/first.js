const filterLetterSelect = document.getElementById('select-letter');

const getDataBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data =>{
        newArray = Object.getOwnPropertyNames(data.message);
    })
};
getDataBreeds();

filterLetterSelect.addEventListener('change', ()=> {
   window.location.href= "second-view.html?letter=" + filterLetterSelect.value;
});