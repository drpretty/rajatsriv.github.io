$(document).ready(function() {
    // SPA navigation
    $('nav a').click(function() {
        var target = $(this).attr('href');
        $('section').hide();
        $(target).show();
    });

    // Show the home section by default
    $('section').hide();
    $('#experience').show();

    // Show navbar on hover
    $('#site-title').hover(
        function() {
            $('#navbar').addClass('fade-in').show();
        },
        function() {
            setTimeout(function() {
                if (!$('#navbar').is(':hover')) {
                    $('#navbar').hide();
                }
            }, 300);
        }
    );

    // Load experience details into modal
    $('.experience-card').click(function() {
        var experience = $(this).data('experience');
        var experienceDetails = getExperienceDetails(experience);
        $('#experienceModalLabel').text(experienceDetails.title);
        $('#experienceModal .modal-body').html(experienceDetails.content);
        $('#experienceModal').modal('show');
    });
});

// Experience details
function getExperienceDetails(experience) {
    var details = {
        'wingify': {
            title: 'Wingify',
            content: `
                <h3>Senior Consultant</h3>
                <p><strong>Duration:</strong> Since 2023</p>
                <p>As a Senior Consultant at Wingify, I respond to technical queries and provide solutions to prospects, contributing to customer success and product adoption...</p>
            `
        },
        'leena-ai': {
            title: 'Leena AI',
            content: `
                <h3>Business Analyst</h3>
                <p><strong>Duration:</strong> September 2022 - April 2023</p>
                <p>Speaheaded IT projects, prioritized client needs and ensured timely delivery. Facilitated discussions with business clients to define project scope and requirements...</p>
            `
        },
        'whatfix': {
            title: 'Whatfix',
            content: `
                <h3>Senior Associate Consultant</h3>
                <p><strong>Duration:</strong> June 2020 - August 2022</p>
                <p>Worked with customers to identify target audience needs and understand customer applications...</p>
            `
        },
        'zycus': {
            title: 'Zycus',
            content: `
                <h3>Procurement Analyst</h3>
                <p><strong>Duration:</strong> July 2018 - February 2020</p>
                <p>Enabled project kickoff by packaging data, perception documents, and configuration materials for clients...</p>
            `
        }
    };
    return details[experience];
}
