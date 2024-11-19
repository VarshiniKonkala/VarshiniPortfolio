import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/two.png'
import three from '../assets/svg/projects/three.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'MAKEITBIG',
        projectDesc: 'This is a gaming web application which resembles 2048 game. The only difference is Images are used instead of numbers to be more user-interactive.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/VarshiniKonkala/MAKEITBIG',
        demo: 'https://varshinikonkala.github.io/MAKEITBIG/',
        image: one
    },
    {
        id: 2,
        projectName: 'NewsForU',
        projectDesc: "This web application displays daily news category wise and gives user's most interested feed under the ForU. User's history is also stored in user's account",
        tags: ['MongoDB', 'NodeJS','ExpressJS','ReactJs',"Machine Learning",'Flask'],
        code: 'https://github.com/VarshiniKonkala/NewsForU',
        demo: 'https://varshinikonkala.github.io/NewsForU/',
        image: two
    },
    {
        id: 3,
        projectName: 'PersonalBookshelf',
        projectDesc: 'Allows users to search for books and store them in local storage. The stored books are displayed in their account.',
        tags: ['ReactJs'],
        code: 'https://github.com/VarshiniKonkala/PersonalBookshelf',
        demo: 'https://varshinikonkala.github.io/PersonalBookshelf/',
        image: three
    }
]