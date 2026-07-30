document.documentElement.classList.add('atena-fit-ready');

/** Mobilna nawigacja motywu Atena Fit. */
const atenaMenuToggle = document.querySelector('[data-atena-menu-toggle]');
const atenaNavigation = document.querySelector('[data-atena-navigation]');
if (atenaMenuToggle && atenaNavigation) {
    const closeMenu = () => {
        atenaMenuToggle.setAttribute('aria-expanded', 'false');
        atenaNavigation.classList.remove('atena-nav--open');
        document.documentElement.classList.remove('atena-menu-open');
    };

    atenaMenuToggle.addEventListener('click', () => {
        const opening = atenaMenuToggle.getAttribute('aria-expanded') !== 'true';
        atenaMenuToggle.setAttribute('aria-expanded', opening ? 'true' : 'false');
        atenaNavigation.classList.toggle('atena-nav--open', opening);
        document.documentElement.classList.toggle('atena-menu-open', opening);
    });

    atenaNavigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 520) closeMenu(); }, {passive: true});
}

/**
 * Reusable, dependency-free horizontal carousel.
 * Any future theme component only needs data-atena-carousel, a viewport and
 * controls carrying data-atena-carousel-previous / data-atena-carousel-next.
 */
document.querySelectorAll('[data-atena-carousel]').forEach((carousel) => {
    const viewport = carousel.querySelector('[data-atena-carousel-viewport]');
    const previous = carousel.querySelector('[data-atena-carousel-previous]');
    const next = carousel.querySelector('[data-atena-carousel-next]');

    if (!viewport || !previous || !next) return;

    const step = () => Math.max(Math.round(viewport.clientWidth * 0.78), 260);
    const updateControls = () => {
        const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth - 2);
        previous.disabled = viewport.scrollLeft <= 2;
        next.disabled = viewport.scrollLeft >= max;
    };
    const move = (direction) => viewport.scrollBy({left: direction * step(), behavior: 'smooth'});

    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    viewport.addEventListener('scroll', updateControls, {passive: true});
    window.addEventListener('resize', updateControls, {passive: true});
    updateControls();
});
