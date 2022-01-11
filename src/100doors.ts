/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Solutions for https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors
 */

/**
 * Brute-force solution
 * Just open and close the doors
 */
function getFinalOpenedDoorsBruteForce(numDoors: number) {
  const doors = new Array<boolean>(numDoors).fill(true)

  for (let i = 1; i < numDoors; i++) {
    for (let j = i; j < numDoors; j += i + 1) {
      doors[j] = !doors[j]
    }
  }

  return doors.reduce((acc, curr, index) => {
    if (curr) return [...acc, index + 1]

    return acc
  }, [] as number[])
}

/**
 * Smarter solution
 * Noticed a pattern in the solution from the getFinalOpenedDoorsBruteForce output
 * Doors with perfect square indexes all end up open
 */
function getFinalOpenedDoorsSmarter(numDoors: number) {
  const doors = [] as number[]

  for (let i = 1; i * i <= numDoors; i++) {
    doors.push(i * i)
  }

  return doors
}
