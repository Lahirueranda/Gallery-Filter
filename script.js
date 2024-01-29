let filterItem = document.querySelector('.items-links');
let filterImage = document.querySelectorAll('.projects-img');

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('items-link')) {
            document.querySelector('.menu-active').classList.remove('menu-active'); 
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name'); // Corrected variable name
            filterImage.forEach((image) => {
                let filterImages = image.getAttribute('data-name');
                if ((filterImages == filterName) || filterName == 'all') { // Corrected typo in variable name
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }
    });
});
