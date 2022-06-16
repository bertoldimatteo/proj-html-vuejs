import Vue from 'vue';

export default Vue.observable ({
    links: [
        {
            navLink: 'Home',
            status: 'multiLink',
            id: 1,
        },
        {
            navLink: 'Courses',
            status: 'multiLink',
            id: 2,
        },
        {
            navLink: 'About Us',
            status: 'monoLink',
            id: 3,
        },
        {
            navLink: 'News',
            status: 'multiLink',
            id: 4,
        },
        {
            navLink: 'Pages',
            status: 'multiLink',
            id: 5,
        },
        {
            navLink: 'Contact',
            status: 'monoLink',
            id: 6,
        },
        {
            navLink: 'Purchase',
            status: 'monoLink',
            id: 7,
        }
    ],
    data: {
        hero: {
            title: 'Key to your success',
            paragraph: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary school etc.',
            firstButton: 'Search courses',
            secondButton: 'Apply for university',
            id: 8,
        },
        section1:
            {
                title: 'Thousands of courses for any type of student',
                paragraph: "At EduPrime, it doesn't matter what domain you wish to pursue a carrer in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.",
                firstButton: 'Browse through courses',
        },
        section2:
            {
                title: 'Faculties available at EduPrime',
                paragraph: "A single university with a load of courses, tailored to satisfy any student's needs.",
                firstButton: 'Browse through courses',
                id: 10,
        },
        section3:
            {
                title: 'Law Faculty',
                paragraph: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
                firstButton: 'Read More',
                id: 11,
        },
        section4: [
            {
                title: 'Demo Classes',
                paragraph:  'In the first week, students try to accomodate with the teaching style and choose their optional courses.',
            },
            {
                title: 'Graduation Day',
                paragraph:  'On the day of graduation, all students gather for the ceremony and then network and party among others.',
            },
            {
                title: 'Orientation',
                paragraph:  'First day of the univerity year, all students gather for the opening ceremony and then network woth others.', 
            },
            {
                title: 'Evaluation',
                paragraph:  "At the end of a semester, students take a general evaluation test for every subject they're learning.", 
            },
        ],
        section5: [
            {
                title: 'Coaching Sessions',
                date: '20 May 21:30 PM',
                paragraph:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]',
                button: 'Find More',
            },
            {
                title: 'Coaching Sessions',
                date: '14 Mar 18:00 PM',
                paragraph:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]',
                button: 'Find More',
            },
            {
                title: 'Coaching Sessions',
                date: '12 Feb 13:30 PM',
                paragraph:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]',
                button: 'Find More', 
            },
        ],
        section6: [
            {
                image: require('@/assets/reference/img/Decisions-icon.png'),
                title: 'Make Better Decisions',
                teacher: 'James Colins',
                price:  '$21.00',
                button: 'View Course',
            },
            {   
                image:  require('@/assets/reference/img/Speaker-icon.png'),
                title: 'How to be a speaker',
                teacher: 'James Colins',
                price:  'Free',
                button: 'View Course',
            },
            {   
                image:  require('@/assets/reference/img/Network-icon.png'),
                title: 'Network Introductions',
                teacher: 'James Colins',
                price:  'Free',
                button: 'View Course',
            },
            {   
                image:  require('@/assets/reference/img/Brand-icon.png'),
                title: 'Brand Management',
                teacher: 'James Colins',
                price:  'Free',
                button: 'View Course',
            },
        ],
        section7:
            {
                title: 'The most efficent examination method',
                paragraph: 'EduPime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.',
                firstButton: 'Discover the Method',
        },
        section8:
            {
                title: 'Variable fees for international students',
                paragraph: 'EduPime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.',
                firstButton: 'List of Fees',
        },
    }
})