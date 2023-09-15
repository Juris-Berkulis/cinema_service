export interface Banner {
    src: string,
    title: string,
    description: string,
};

export interface Actor {
    id: number,
    movieHero: string,
    actorName: string,
    description: string,
    src: string,
};

export interface Stills {
    id: number, 
    src: string,
};

export interface Movie {
    banner: Banner,
    actors: Array<Actor>,
    stills: Array<Stills>,
};

export const movie: Movie = {
    banner: {
        src: '/src/assets/img/vedmak/main/001.png',
        title: 'Сериал Ведьмак',
        description: 'Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.',
    },
    actors: [
        {
            id: 1,
            movieHero: 'Геральт',
            actorName: 'Генри Кавилл',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/001.png',
        },
        {
            id: 2,
            movieHero: 'Лютик',
            actorName: 'Джои Бэти',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/002.png',
        },
        {
            id: 3,
            movieHero: 'Йеннифэр',
            actorName: 'Аня Чалотра',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/003.png',
        },
        {
            id: 4,
            movieHero: 'Цири',
            actorName: 'Фрейя Аллан',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/004.png',
        },
        {
            id: 5,
            movieHero: 'Эмгыр вар Эмрейс',
            actorName: 'Барт Эдвардс',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/005.png',
        },
        {
            id: 6,
            movieHero: 'Цири',
            actorName: 'Фрейя Аллан',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/src/assets/img/vedmak/actors/006.png',
        },
    ],
    stills: [
        {id: 1, src: '/src/assets/img/vedmak/stills/001.png',},
        {id: 2, src: '/src/assets/img/vedmak/stills/002.png',},
        {id: 3, src: '/src/assets/img/vedmak/stills/003.png',},
        {id: 4, src: '/src/assets/img/vedmak/stills/004.png',},
        {id: 5, src: '/src/assets/img/vedmak/stills/005.png',},
    ],
};
