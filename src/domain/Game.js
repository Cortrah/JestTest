import Actor from './Actor';

export default class Game {

  constructor(options) {

    this.store = {
      name:'Waypoint Crucible Game X',
      status:'PREPARING',
      winner:'',
      rules: {
        maxMana: 10,
        maxHealth: 30,
        startingDeck: [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8],
        startingHandSize: 0,
        maxCards: 5,
        gameTickInterval: 1000,
        manaGrowthInterval: 1000,
        manaReplentishInterval: 1000,
        drawInterval: 1000,
        fireInterval: 500,
        bleedoutInterval: 1000,
        flightTime: 4000,
        shieldsUpTime: 1000,
        shieldDecayRate: 1000
      },
      actorCount:10,
      actors:[],
      mistles:[],
      shields:[],
      gameIntervalId: null,
      manaIntervalId: null,
      timeStarted: 0,
      timeRunning: 0,
    };

    // init actors
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.round(Math.random() * 4);
      let avatarImg = '../static/robot' + randomIndex + '.png';
      let team = "Bad Guys";
      if (i >= this.store.actorCount / 2) {
        team = 'Good Guys';
      }
      // ToDo: figure out why require constructor doesn't get arguments
      let newActor = new Actor(i);
      newActor.team = team;
      newActor.avatarImg = avatarImg;
      this.store.actors.push(newActor);
    }
  }
};
