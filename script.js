const technologies = [
    'SAP',
    'Salesforce',
    'ServiceNow',
    'ERPNext',
    'Shopify',
    'WooCommerce',
    'Full Stack Development',
    'DevOps',
    'Cloud Engineers'
];

const CONTACT_EMAIL = 'kollinear.consultants@zohomail.in';

function generateMailto(tech) {
    const subject = encodeURIComponent(`Hiring Request – ${tech}`);
    const body = encodeURIComponent(`Hi Team,

We are looking for resources with the following details:

Technology: ${tech}
Experience Required:
Budget Range:
Location:
Contract Duration:

Please share available profiles so we can connect.

Thanks`);
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const techGrid = document.getElementById('tech-grid');

technologies.forEach(tech => {
    const card = document.createElement('div');
    card.className = 'tech-card';
    card.innerHTML = `
        <h3>${tech}</h3>
        <p>Expert developers and consultants ready to join your team.</p>
        <a href="${generateMailto(tech)}" class="hire-link">
            Hire ${tech} <i data-lucide="chevron-right"></i>
        </a>
    `;
    techGrid.appendChild(card);
});

// Re-run lucide icons for dynamic content
if (window.lucide) {
    window.lucide.createIcons();
}
