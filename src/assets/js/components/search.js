(function() {

    const searchTrigger = document.querySelector('.btn-search');
    const searchBar = document.querySelector('.navbar-search');
    const searchInput = document.querySelector('.navbar-search input');
    const closeSearch = document.querySelector('.close-search');
    const ACTIVE_SEARCH_CSS_CLASS = 'search-active';
    const HIDDEN_CSS_CLASS = 'd-none';

    function toggleSearch(){

        if (document.body.classList.contains (ACTIVE_SEARCH_CSS_CLASS)) {
            document.body.classList.remove(ACTIVE_SEARCH_CSS_CLASS);
            return;
        }
        
        searchBar.classList.remove(HIDDEN_CSS_CLASS);
        setTimeout(() => {
            document.body.classList.add(ACTIVE_SEARCH_CSS_CLASS);
            if (searchInput) {
                searchInput.focus();
            }
        }, 150);
    }

    if (searchTrigger) {
        searchTrigger.addEventListener('click', function() {
            toggleSearch();
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            toggleSearch();
        });
    }

})();