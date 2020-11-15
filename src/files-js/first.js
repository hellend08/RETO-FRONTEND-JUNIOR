const filterLetterSelect = document.getElementById('select-letter');

filterLetterSelect.addEventListener('change', ()=> {
   window.location.href= "second-view.html?letter=" + filterLetterSelect.value;
});