window.addEventListener('DOMContentLoaded', () => {

    this.addEventListener('resize', event => {
        const navContainer = document.getElementById('nav__right');
        navContainer.classList.remove('nav__right--expanded');
    });

    console.log('event-handling.js script was successfully loaded');
    // const cogIcon = document.querySelector('.fas.fa-cog');
    // cogIcon.addEventListener('click', event => {
    //     console.log('Gear clicked');
    //     event.stopPropagation();
    //     document.querySelector('.pref').classList.remove('pref--hidden');
    // });

    // window.addEventListener('click', () => {
    //     console.log('HTML document clicked');
    //     document.querySelector('.pref').classList.add('pref--hidden');
    // });

    // const searchIcon = document.querySelector('.fa.fa-search');
    // searchIcon.addEventListener('click', () => {
    //     console.log('Search clicked');
    //     const modal = document.querySelector('.search-modal');
    //     modal.classList.toggle('search-modal--hidden');
    // });
    const menuDropdown = document.getElementById('nav__menu-icon');
    menuDropdown.addEventListener('click', event => {
        console.log('Menu dropdown clicked');
        const navContainer = document.getElementById('nav__right');
        navContainer.classList.toggle('nav__right--expanded');
    });
});
