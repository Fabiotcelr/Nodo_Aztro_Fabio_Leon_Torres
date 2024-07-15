function showContent(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Mostrar la primera sección por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showContent('section1');
});