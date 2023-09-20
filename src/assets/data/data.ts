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
        src: '/assets/img/vedmak/main/001.png',
        title: 'Сериал Ведьмак',
        description: 'Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.',
    },
    actors: [
        {
            id: 1,
            movieHero: 'Геральт',
            actorName: 'Генри Кавилл',
            description: 'Главный герой, ведьмак из Школы Волка, профессиональный охотник на монстров, один из лучших фехтовальщиков Севера',
            src: '/assets/img/vedmak/actors/001.png',
        },
        {
            id: 2,
            movieHero: 'Лютик',
            actorName: 'Джои Бэти',
            description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
            src: '/assets/img/vedmak/actors/002.png',
        },
        {
            id: 3,
            movieHero: 'Йеннифэр',
            actorName: 'Аня Чалотра',
            description: 'Возлюбленная Геральта из Ривии, талантливая и могущественная чародейка, фактически приёмная мать Цириллы',
            src: '/assets/img/vedmak/actors/003.png',
        },
        {
            id: 4,
            movieHero: 'Цири',
            actorName: 'Фрейя Аллан',
            description: 'Дочь цинтрийской принцессы Паветты и князя Дани, внучка Калантэ и Рёгнера из Эббинга, королей Цинтры',
            src: '/assets/img/vedmak/actors/004.png',
        },
        {
            id: 5,
            movieHero: 'Эмгыр вар Эмрейс',
            actorName: 'Барт Эдвардс',
            description: 'император Нильфгаарда из династии Эмрейсов, правивший во второй половине XIII века',
            src: '/assets/img/vedmak/actors/005.png',
        },
        {
            id: 6,
            movieHero: 'Кагыр',
            actorName: 'Эймон Фаррен',
            description: 'Нильфгаардский рыцарь, сын сенешаля Нильфгаардской империи Кеаллаха аэп Груффыда, порученец императора Эмгыра вар Эмрейса',
            src: '/assets/img/vedmak/actors/006.png',
        },
    ],
    stills: [
        {id: 1, src: '/assets/img/vedmak/stills/001.png',},
        {id: 2, src: '/assets/img/vedmak/stills/002.png',},
        {id: 3, src: '/assets/img/vedmak/stills/003.png',},
        {id: 4, src: '/assets/img/vedmak/stills/004.png',},
        {id: 5, src: '/assets/img/vedmak/stills/005.png',},
        {id: 6, src: '/assets/img/vedmak/stills/006.png',},
        {id: 7, src: '/assets/img/vedmak/stills/007.png',},
        {id: 8, src: '/assets/img/vedmak/stills/008.png',},
        {id: 9, src: '/assets/img/vedmak/stills/009.png',},
        {id: 10, src: '/assets/img/vedmak/stills/010.png',},
    ],
};
