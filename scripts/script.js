// Search Bar Toggle...
const searchButton = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
let searchBarVisible = false;
const toggleSearchBar = () => {
    switch (searchBarVisible) {
        case false:
            searchBar.style.visibility = 'visible';
            searchBar.style.opacity = '1';
            searchBarVisible = true;
            break;
        case true:
            searchBar.style.visibility = 'hidden';
            searchBar.style.opacity = '0';
            searchBarVisible = false;
            break;
    }
};
searchButton.addEventListener('click', toggleSearchBar);