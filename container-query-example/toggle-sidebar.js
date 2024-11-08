let isFullscreen = false;

function updateSidebarStyles() {
    const sidebar = document.querySelector('.sidebar');
    if (isFullscreen) {
        sidebar.classList.add('expanded');
        sidebar.classList.remove('collapsed');
    } else {
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('expanded');
    }
}

document.getElementById('toggleSidebar').addEventListener('click', () => {
    isFullscreen = !isFullscreen;
    updateSidebarStyles();
});

// Update styles on window resize
window.addEventListener('resize', updateSidebarStyles);

// Initial update
updateSidebarStyles();