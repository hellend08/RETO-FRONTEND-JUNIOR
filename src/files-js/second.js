const buttonReturnFirstPage = document.getElementById('return-first-page');

// let newArray = [];

const filterBreed = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data =>{
        newArray = Object.getOwnPropertyNames(data.message);
        const result= newArray.filter( element => 
            element.startsWith(getValueParameter('letter'))
            );
        const total = result.map((item) => `
        <span class="m-3"><a class="breeds-item" href="third-view.html?breed=${item}">${item}</a></span>
        ` );

    document.getElementById('show-filter-breeds').innerHTML = `
        <div class="my-3 pt-4">${total.join(" ")}</div>`
    })
};
filterBreed();

function getValueParameter(letter) {
    const pageURL = window.location.search.substring(1);
    const sURLVariables = pageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
        const valueParameter = sURLVariables[i].split('=');
        if (valueParameter[0] == letter) {
            return valueParameter[1];
        }
    }
    return null;
}

buttonReturnFirstPage.addEventListener('click', () =>{
    window.location.href = "first-view.html";
})