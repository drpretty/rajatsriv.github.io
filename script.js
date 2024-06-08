// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// SPA navigation
$(document).ready(function() {
    $('nav a').click(function() {
        var target = $(this).attr('href');
        $('section').hide();
        $(target).show();
    });

    // Show the home section by default
    $('section').hide();
    $('#home').show();
});

// Experience Section content
const experiences = [
    {
        title: 'Senior Associate Consultant at Whatfix',
        period: 'June 2020 - August 2022',
        description: 'Worked with customers to identify target audience needs and understand customer applications...',
        icon: 'path/to/icon.png'
    },
    {
        title: 'Procurement Analyst at Zycus',
        period: 'July 2018 - February 2020',
        description: 'Enabled project kickoff by packaging data, perception documents, and configuration materials for clients...',
        icon: 'path/to/icon.png'
    },
    {
        title: 'Consulting Intern at Cushman & Wakefield',
        period: 'January 2018 - February 2018',
        description: 'Collected information regarding clients\' business through shadowing, interviewing, and surveying...',
        icon: 'path/to/icon.png'
    }
];

experiences.forEach(exp => {
    $('.chessboard').append(`
        <div class="experience-card">
            <img src="${exp.icon}" alt="Experience Icon">
            <h3>${exp.title}</h3>
            <p>${exp.period}</p>
            <p>${exp.description}</p>
        </div>
    `);
});
