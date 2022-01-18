const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});


rl.question(`What's an activity you like doing?`, (activity) => {
  rl.question(`What do you listen to while doing that?`, (music) => {
    rl.question(`Which meal is your favorite (eg: dinner, brunch, etc.)`, (meal) => {
      rl.question(`What's your favorite thing to eat for that meal?`, (eat) => {
        rl.question(`Which sport is your absolute favorite?`, (sport) => {
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (power) => {
            rl.question(`Finally, what's your name? Nicknames are also acceptable :)`, (name) => {
              rl.setPrompt(`${name}'s Profile - \n ${name} loves listening to ${music} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}. \n`);
              rl.prompt();
              rl.close();
            });
          });
        });
      });
    });
  });
});