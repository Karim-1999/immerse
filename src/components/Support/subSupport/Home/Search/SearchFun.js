export function SearchFun() {
    const searchInput = document.getElementById('search');
    const listLinks = document.querySelector('.supp-search-list');

    searchInput.addEventListener('keyup', function (event) {
        let searchQuery = event.target.value.toLowerCase();
        console.log(searchQuery);

        let allNamesDOMCollection = document.getElementsByClassName('links');

        for (let i = 0; i < allNamesDOMCollection.length; i++) {
            const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
            if (currentName.includes(searchQuery)) {
                console.log(currentName)
                allNamesDOMCollection[i].style.display = 'block';
                listLinks.style.display = 'block';
            }
            else {
                allNamesDOMCollection[i].style.display = 'none';
            }
            if (searchQuery === '') {
                listLinks.style.display = 'none'
            }
        }
    })
}