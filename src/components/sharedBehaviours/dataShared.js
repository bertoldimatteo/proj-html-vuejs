import Vue from 'vue';

export default Vue.observable ({
    data: [
        {
            navLink: 'Home',
            status: 'multiLink',
        },
        {
            navLink: 'Courses',
            status: 'multiLink',
        },
        {
            navLink: 'About Us',
            status: 'monoLink',
        },
        {
            navLink: 'News',
            status: 'multiLink',
        },
        {
            navLink: 'Pages',
            status: 'multiLink',
        },
        {
            navLink: 'Contact',
            status: 'monoLink',
        },
        {
            navLink: 'Purchase',
            status: 'monoLink',
        }
    ]
})