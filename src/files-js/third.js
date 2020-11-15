const showImageBreed = document.getElementById('show-images-breeds-random');
const buttonReturnStart = document.getElementById('return-start');
const buttonReturn = document.getElementById('return');

const filterImagesBreeds = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(resp => resp.json())
    .then(dataImg =>{
        showImageBreed.innerHTML = `
        <buttontype="button" class="btn btn-outline-info pb-3" onclick="refresh()">${breed}</button>
        <img class="rounded mx-auto d-block"  src="${dataImg.message}" alt="image-breed" />`
    })
};
filterImagesBreeds(getValueParameterBreed('breed'));

function getValueParameterBreed(selectBreed) {
    var pageURL = window.location.search.substring(1);
    var sURLVariables = pageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var valueParameter = sURLVariables[i].split('=');
        if (valueParameter[0] == selectBreed) {
            return valueParameter[1];
        }
    }
    return null;
}

const refresh = () => {
    location.reload()
};

buttonReturnStart.addEventListener('click', () =>{
    window.location.href = "first-view.html";
});

buttonReturn.addEventListener('click', () =>{
    window.history.back();
});