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
            name: "Bespoke Suits",
            description: "Individually crafted suits tailored to your exact measurements and style.",
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

    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
        
            const phoneNumber = '2349125102828'; // WhatsApp number (Nigerian format)
        
            const encodedMessage = encodeURIComponent(
                `Hello, my name is ${name}.\n\nI'd like to request a quote or appointment.\n\nService: ${service}\nEmail: ${email}\nDetails: ${message}`
            );
        
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
            window.open(whatsappURL, '_blank'); // Opens WhatsApp chat
        });
        
        
    }
});