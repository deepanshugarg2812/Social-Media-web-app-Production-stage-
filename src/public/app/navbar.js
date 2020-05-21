const navLinks = $('.navbar-nav .nav-link');

navLinks.click((event) => {
    const urlComponent = `/components/${$(event.target).attr('data-component')}.html`;

    $('#content').load(urlComponent);
})