document.documentElement.classList.add('atena-fit-ready');

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
