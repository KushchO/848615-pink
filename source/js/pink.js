var burgerToggle = document.querySelector('.page-header__burger-menu');
var siteNavigation = document.querySelector('.site-navigation');
var pageHeader = document.querySelector('.page-header');
var navWrapper = document.querySelector('.page-header__nav-wrapper');

pageHeader.classList.remove('page-header--no-js');
pageHeader.classList.remove('page-header--open-menu');

burgerToggle.addEventListener('click', function() {
  if(siteNavigation.classList.contains('site-navigation--closed')){
    siteNavigation.classList.remove('site-navigation--closed');
    siteNavigation.classList.add('site-navigation--opened');
    burgerToggle.classList.add('page-header__burger-menu--opened');
    burgerToggle.classList.remove('page-header__burger-menu--closed');
    navWrapper.classList.add('page-header__nav-wrapper--no-opacity');
    pageHeader.classList.add('page-header--open-menu');
  } else {
    siteNavigation.classList.add('site-navigation--closed');
    siteNavigation.classList.remove('site-navigation--opened');
    burgerToggle.classList.remove('page-header__burger-menu--opened');
    burgerToggle.classList.add('page-header__burger-menu--closed');
    navWrapper.classList.remove('page-header__nav-wrapper--no-opacity');
    pageHeader.classList.remove('page-header--open-menu');
  }
});

