export default {

    data() {
        return {

            learning_sections : {

                coding_section : {

                    id : 'section-0',

                    title: 'PRACTICE',

                    cards: [

                        {
                            id: 'shapes',
                            title: 'SHAPES AND COLORS',
                            description: [
                                'Draw triangles, rectangles.',
                                'Draw regular polygons and circles.',
                                'Set position and size with units',
                                'Define color patterns',
                            ],
                            links: {
                                repository: 'https://github.com/under-the-hood-learning/web-labs/tree/main/webGL2/01_shapes',
                                video:'https://www.youtube.com/@CodingWithClodo-tw5gg',
                                article:'https://medium.com/',
                                online_demo: 'https://under-the-hood-learning.github.io/web-labs/webGL2/01_shapes/index.html',
                            }
        
        
                        },
        
                        {
                            id: 'motion',
                            title: 'MOTION',
                            description: [
                                'Draw triangles, rectangles.',
                                'Draw regular polygons and circles.',
                                'Set position and size with units',
                                'Define color patterns',
                            ],
                            links: {
                                repository: 'https://github.com/under-the-hood-learning/web-labs/tree/main/webGL2/02_motion',
                                video:'https://www.youtube.com/@CodingWithClodo-tw5gg',
                                article:'https://medium.com/',
                                online_demo: 'https://under-the-hood-learning.github.io/web-labs/webGL2/02_motion/index.html',
                            }
        
        
                        },
                        
                        {
                            id: '3D',
                            title: '3D PRINCIPLES',
                            description: [
                                'Draw triangles, rectangles.',
                                'Draw regular polygons and circles.',
                                'Set position and size with units',
                                'Define color patterns',
                            ],
                            links: {
                                repository: 'https://github.com/under-the-hood-learning/web-labs/tree/main/webGL2/03_3D',
                                video:'https://www.youtube.com/@CodingWithClodo-tw5gg',
                                article:'https://medium.com/',
                                online_demo: 'https://under-the-hood-learning.github.io/web-labs/webGL2/03_3D/index.html',
                            }
        
        
                        },

                    ]
                   
                },

                theory_section : {

                    id : 'section-1',

                    title: 'THEORY',

                    cards: [

                    ]
                   
                },

                history_section : {

                    id : 'section-1',

                    title: 'HISTORY',

                    cards: [

                    ]
                   
                },

            }

        }
    },

    template: 
        /*html*/
        `
        <headerA></headerA>

        <librarySelector></librarySelector>

        <learningSection v-for="section in learning_sections" :section="section"></learningSection>

        <recommendations></recommendations>

        <footerA></footerA>
        `

}
