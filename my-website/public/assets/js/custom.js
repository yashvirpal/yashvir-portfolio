document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: false,
    freeMode: false,
});

function switchMainTab(el) {
    const filter = el.dataset.filter;
    // Remove active styling from all main tabs
    document.querySelectorAll('.tablinks').forEach(tab => tab.classList.remove('text-blue-400', 'font-bold'));
    el.classList.add('text-blue-400', 'font-bold');

    // Hide sub-tabs
    document.getElementById('js-sub-tabs').classList.add('hidden');
    document.getElementById('php-sub-tabs').classList.add('hidden');

    // Hide all projects
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));

    if (filter === '') {
        // Show all projects
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('hidden'));
    } else {
        // Show sub-tabs if necessary
        if (filter === 'javascript') document.getElementById('js-sub-tabs').classList.remove('hidden');
        if (filter === 'php') document.getElementById('php-sub-tabs').classList.remove('hidden');

        // Show filtered main tab projects (excluding sub-categories)
        document.querySelectorAll(`.tab-panel.${filter}`).forEach(p => p.classList.remove('hidden'));
    }
}

function switchSubTab(el, subFilter) {
    const parent = el.parentElement;

    // Remove active styling from all sibling sub-tab buttons
    parent.querySelectorAll('.tablinks').forEach(tab => tab.classList.remove('text-blue-400', 'font-bold'));
    el.classList.add('text-blue-400', 'font-bold');

    // Hide all projects
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));

    // Show only matching sub-filter projects
    document.querySelectorAll(`.tab-panel.${subFilter}`).forEach(p => p.classList.remove('hidden'));
}

// Auto-click on "All" tab on page load
window.onload = () => {
    document.querySelector('[data-filter=""]').click();
};