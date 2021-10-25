// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (pokemons) => {

    // to filter only the pokemons that include the "Fire" String within their types (type is an array)
    const firePokemons = pokemons.filter(eachPoke => {
      
      if (eachPoke.type.includes("Fire")) {
        return true
      }
      // return eachPoke.type.includes("Fire") // or a simple way to write it
    })
    
    return firePokemons // return the new array
  
    // simplified solution in one line
    // return pokemons.filter(eachPoke => eachPoke.type.includes("Fire"))
  }
  
  // Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
  
  const shortestPokemon = (pokemons) => {
  
    if (!pokemons.length) return 0; // condition to pass test in case array is empty
  
    // create two variables to help the loop check the correct pokemons
    let shotestPokeName = "" // Initialized as an empty string
    let shortestPokeHeight = Infinity // initialized as Infinity as we are trying to get the lowest value. Any value will be lower than this
  
    // rge forEach will iterate over every pokemon to try to find the shortest one
    pokemons.forEach(eachPoke => {
  
      // the next 3 lines are to modify the height from a string to a number
      const heightSplit = eachPoke.height.split(" ") // pokemon.height is a String (for example: "0.71 m"). The .split will convert the string into an array with two elements that were separated by a " ". ["0.71", "m"]
      const heightAsString = heightSplit[0] // to target the first element of the array which is the height as a string ("0.71")
      const heightAsNum = Number(heightAsString) // this will convert the string into a number (0.71)
  
      // Also possible to write the last 3 lines of code in a single line (bee below)
      // const heightAsNum = Number(eachPoke.height.split(" ")[0]) 
      
      // if the current pokemon height is loower than the default variable shortestPokeHeight then...
      if (heightAsNum < shortestPokeHeight) {
        shortestPokeHeight = heightAsNum // ... update the default height variable with the current pokemon height ...
        shotestPokeName = eachPoke.name // ... and update the default name variable with the current pokemon name 
      }
    });
    
    return shotestPokeName // return the last name the forEach found to be the shortest pokemon
  }
  
  // Iteration 3: candy_count average - average of `candy_count` for all the pokemons
  
  const candyAverage = (pokemons) =>  {
  
    if (!pokemons.length) return 0; // condition to pass test in case array is empty
  
    // reduce will sum all the candy_count of each pokemon only if the attribute exists
    const candyAvg = pokemons.reduce((acc, eachPoke) => {
      if (eachPoke.candy_count) {
        return acc + eachPoke.candy_count
      } else {
        return acc
      }
  
    }, 0) / pokemons.length // at the end, we divide what comes from the sum between the length of the array
  
    const candyAvgTwoDigits = Number(candyAvg.toFixed(2)) // toFixed(2) to get only the first two decimals, Number to convert the string to a number
  
    return candyAvgTwoDigits // return the number
  }
  
  // Iteration 4: images for the first 10 `Ground`  Pokemons
  
  const getGroundPokeImg = (pokemons) => {
  
    if (!pokemons.length) return 0; // condition to pass test in case array is empty
  
    // filter will create a new array only with the Ground type
    const groundPokemons = pokemons.filter(eachPoke => {
      return eachPoke.type.includes("Ground") // we use .includes because eachPoke.type is an array
    })
  
    // map will create a new array but only with the image urls. No pokemon objects.
    const groundPokeImages = groundPokemons.map(eachPoke => {
      return eachPoke.img
    })
  
    // slice will create a new array only with the first 10 elements
    const tenGroundPokeImages = groundPokeImages.slice(0, 10)
  
    // a short way to chain all 3 methods above (filter, map, slice) in a single line
    // const firstTwenty = pokemons.filter(eachPoke => eachPoke.type.includes("Ground")).map(eachPoke => eachPoke.img).slice(0, 10)
  
    return tenGroundPokeImages // return the new array
  }
  
  // Iteration 5: Find all pokemon names heavier than Pikachu
  
  const getHeavyPokemons = (pokemons) => {
  
    if (!pokemons.length) return 0; // condition to pass test in case array is empty
  
    // next 3 lines to get weight of Pikachu
    const pikachuArr = pokemons.filter(eachPoke => eachPoke.name === "Pikachu") // single line filter to get an array with the pikachu object
    const pikachu = pikachuArr[0] // to get the pikachu obj
    const pikachuWeight = Number(pikachu.weight.split(" ")[0]) // same approach we did in iteration 2
  
    // filter to get only the pokemons heavier than Pikachu
    const heavyPokemons = pokemons.filter(eachPoke => {
      const pokemonWeight = Number(eachPoke.weight.split(" ")[0]) // same approach we did in iteration 2
      return pokemonWeight > pikachuWeight // return a boolean and add the element only if true
    })
  
    const heavyPokeNames = heavyPokemons.map(eachPoke => eachPoke.name) // single line map to get a new array only with the names
  
    return heavyPokeNames // return new array
  }
  
  // Iteration 6: Alphabetic Order - Order by name and print the first 20 names
  
  const orderAlphabetically = (pokemons) => {
  
    let pokemonsCopy = JSON.parse(JSON.stringify(pokemons)) // to deep copy yhe array. Since we will use sort, we don't want to mutate original data
  
    // .sort to sort them by name
    pokemonsCopy.sort((a, b) => {
  
      // when the statement of the conditionals is one line, it is also accepted to write code like this.
      if (a.name > b.name) return 1
      else if (a.name < b.name) return -1
      else return 0
  
      // or using localeCompare is also acceptable for the sort method. The code below does the same as the 3 lines above
      // return a.name.localeCompare(b.name)
    })
  
    const sortedPokeNames = pokemonsCopy.map(eachPoke => eachPoke.name) // map to get only the names
    const firstTwentySortedPokeNames = sortedPokeNames.slice(0, 20) // splice to get only the first 20 names
  
    return firstTwentySortedPokeNames // return the new array
  }
  
  // Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
  
  const strongPokemons = (pokemons) => {
  
    // filter to create an array only with the pokemons only with one element in the weaknesses array
    const oneWeakPokemons = pokemons.filter(eachPoke => {
      return eachPoke.weaknesses.length === 1
    })
  
    const oneWeakPokeNames = oneWeakPokemons.map(eachPoke => eachPoke.name) // map to get only the names
    const firstFifteenOneWeakPokeNames = oneWeakPokeNames.slice(0, 15) // splice to get only the first 15 names
  
    return firstFifteenOneWeakPokeNames // return the new array
  }