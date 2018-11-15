// https://learn.freecodecamp.org/coding-interview-prep/algorithms/no-repeats-please/
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
  function getPermutations(str) {
    let perms = [];

    for (let i = 0; i < str.length; i++) {
      if (str.length === 1) {
        perms.push(str);
        
        break;
      }

      let firstChar = str[i]
      
      let remainingChars = str.substring(0, i) + str.substring(i+1);
      
      let innerPerms = getPermutations(remainingChars);
      
      for (let j = 0; j < innerPerms.length; j++) {
        let newStr = firstChar + innerPerms[j];
        
        perms.push(newStr);
      }
    }

    return perms;
  }

  let allPerms = getPermutations(str);

  let permsWithoutRepeats = [];
  for (let i = 0; i < allPerms.length; i++) {
    let prevLetter;
    let repeat = false;
    for (let j = 0; j < allPerms[i].length; j++) {
      if (prevLetter === allPerms[i][j]) {
        repeat = true;

        break;
      } else {
        prevLetter = allPerms[i][j];
      }
    }

    if (repeat === true) {
      continue;
    } else {
      permsWithoutRepeats.push(allPerms[i]);
    }
  }

  return permsWithoutRepeats.length;
}

permAlone('aab');
