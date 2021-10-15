let statistics = {
    red: 21,
    blue: 45,
    green: 12,
    race: 5,
    black: 40,
    rare: 2
  };
  
for (const car in statistics) {
    if ((car[0] == 'r') | (statistics[car] % 2 != 0)){
        console.log(statistics[car]);
    }
}