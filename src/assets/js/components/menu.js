(function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const cssVariableBreakpointLG = getComputedStyle(document.documentElement).getPropertyValue('--theme-breakpoint-xl') || '1140px';
    const breakpoint = window.matchMedia(`(max-width: ${cssVariableBreakpointLG})`);
    const pageURL = getURLSegment(window.location.href);
    const ACTIVE_MENU_CSS_CLASS = 'active';
    const COLLAPSE_ACTIVE_CSS_CLASS = 'show';
    const COLLAPSE_TRIGGER_CSS_CLASS = 'collapsed';

    // hide all drop down menus when sidebar is collapsed or hidden
    function hideDropDownChildMenus() {
        const dropDowns = document.querySelectorAll('.aside .collapse.show') || [];

        dropDowns.forEach((dropdown) => {
            const parent = dropdown.closest('.menu-item');
            const dropdownToggle = parent.querySelector('a[data-bs-toggle]');
            dropdown.classList.remove('show');

            if (dropdownToggle) {
                dropdownToggle.setAttribute('aria-expaned', false);
                dropdownToggle.classList.add('collapsed');
            }
        });
    }

    // get last segment of URL
    function getURLSegment(url) {
        return url.substr(url.lastIndexOf('/') + 1)
                    .replace(' ', '')
                    .replace(/%20/g, '')
                    .trim()
                    .toLowerCase();
    }

    //set active sidebar menu item
    function setActiveSidebarMenu({ activeMenu }) {
        const parent = activeMenu.closest('.menu-item');

        activeMenu.classList.add('active');

        if (parent) {
            const menuCollapse = parent.querySelector('.collapse');
            const menuCollapseTrigger = parent.querySelector('a[data-bs-toggle]');
            
            if (menuCollapse) {
                menuCollapse.classList.add(COLLAPSE_ACTIVE_CSS_CLASS);
            }

            if (menuCollapseTrigger) {
                menuCollapseTrigger.classList.remove(COLLAPSE_TRIGGER_CSS_CLASS);
                menuCollapseTrigger.setAttribute('aria-expanded', true);
            }
        }
        
    }

    function checkForActiveSidebarMenu() {
        const menuItems = document.querySelectorAll('.aside ul a');

        menuItems.forEach((item) => {
            const itemURL = getURLSegment(item.href);
            if (itemURL === pageURL) {
                setActiveSidebarMenu({ activeMenu: item });
            }
        })
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            hideDropDownChildMenus();
        });
    }

    // Monitor our breakpoint for changes to device width
    breakpoint.addListener(hideDropDownChildMenus);
    breakpoint.addListener(checkForActiveSidebarMenu);

    // call func to set active menu on page load
    document.addEventListener('DOMContentLoaded', () => {
        checkForActiveSidebarMenu();
    });

})();