// Collapsible section functionality
document.querySelectorAll('.collapsible').forEach(header => {
    header.addEventListener('click', function () {
        const section = this.nextElementSibling;
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('#toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const sectionToExpand = targetSection.nextElementSibling;

        if (sectionToExpand.style.display !== 'block') {
            sectionToExpand.style.display = 'block';
        }

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
