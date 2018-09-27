/*
OBJECTS
*/

//let netflix = {
  //  id: 9,
    //name: "Super Store",
   // season1: {
     // seasonInfo: {
      //  episodeInfo: [
        //  { episode: 1, episodeName: "Pilot" },
          //{ episode: 2, episodeName: "Magazine Profile" },
  //        { episode: 3, episodeName: "Shots and Salsa" },
    //      { episode: 4, episodeName: "Mannequin" },
      //    { episode: 5, episodeName: "Shoplifter" },
        //  { episode: 6, episodeName: "Secret Shopper" },
 //         { episode: 7, episodeName: "Color Wars" },
   //       { episode: 8, episodeName: "Wedding Day Sale" },
     //     { episode: 9, episodeName: "All-Nighter" },
       //   { episode: 10, episodeName: "Demotion" },
         // { episode: 11, episodeName: "Labor" }
     //   ]
      //}
   // },
//    season2: {},
 //   season3: {}
//};

//console.log(netflix.name);
//console.log(netflix.season1.seasonInfo.episodeInfo[0])

//console.log(netflix.season1.seasonInfo.episodeInfo[3].episode) //how to get the episode
//number only
//console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)// how to get the 
//title


//let spaceJam = {
//    toonSquad: {
 //     human: 'Michael Jordan',
  //    rabbit1: 'Bugs Bunny',
   //   rabbit2: 'Lola Bunny',
    //  duck: 'Daffy Duck',
   //   tDevil: 'Tasmanian Devil',
 //     bird: 'Tweety',
   //   cat: 'Sylvester',
   //   pig: 'Porky Pig'
  //  },
  //  monstars: {
    //  0: 'Bupkus',
  //    1: 'Bang',
    //  2: 'Nawt',
      //3: 'Pound',
  //    4: 'Blanko'
  //  },
 //   nbaPlayers: {
   //   phoenixSuns: 'Charles Barkley',
  //    newJerseyNets: 'Shawn Bradley',
    //  newYorkNicks: 'Patrick Ewing',
   //   charlotteHornets1: 'Larry Johnson',
     // charlotteHornets2: 'Muggsy Bogues'
  //  }
 // }

 // console.log(Object.keys(spaceJam)); //how to find the objects only
  //console.log(Object.keys(spaceJam.monstars));
  //console.log(spaceJam.nbaPlayers.phoenixSuns); //resulted as charles barkley

//  console.log(Object.values(spaceJam.nbaPlayers));

  //square bracket notation
  let garden = {
      vegetable: "zucchini",
      flower: "sunflower",
      fuit: "grape",
      water: true,
      sun: true,
      size: 10,
  };

//  console.log(garden.vegetable); //pulled out zucchini

//  let value = "vegetable";

 // console.log(garden.value, garden[value]);
 // console.log(garden.value, garden["vegetable"]);

 let baking = {};
 baking['zucchini'] = "better make som bread";
 baking.cauliflower = "throw some cheese on it";

console.log(Object.keys(baking)); //keep getting error

//let garden = {
  //  vegetable: "zucchini",
   // flower: "sunflower",
   // fuit: "grape",
   // water: true,
   // sun: true,
   // size: 10,
//};

let key = "water";

Object.keys(garden).forEach(g => {
    if (key ===  g) {
        console.log(garden[key]);
    }
})







