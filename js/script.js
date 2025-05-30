document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            name: "Traditional Wear",
            description: "Tailoring for native and cultural attire with precision fitting.",
        },
        {
            name: "Ready to Wear",
            description: "Pre-made stylish outfits tailored and ready for pickup.",
        },
        {
            name: "Suit Adjustment",
            description: "Refit or customize your suit for a perfect, professional look.",
        },
        {
            name: "Shirt Tailoring",
            description: "Bespoke shirt services for comfort and personal style.",
        },
    ];

    const container = document.getElementById('services-list-items');
    if (!container) {
        console.error('Element #services-list-items not found');
        return;
    }

    const list = document.createElement('ul');
    list.className = 'service-list';

    services.forEach(service => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${service.name}</strong>: ${service.description}`;
        list.appendChild(item);
    });

    container.appendChild(list);
});