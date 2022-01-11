/**
 * In a 1D array, consider a pair of tiles (a, b),
 * if "a" appears before "b" and the value of "a" > value of "b",
 * then we have an inversion
 *
 * Ex: 1 8 2 0 4 3 7 6 5
 * 6 inversions for the 8
 * 1 inversion for the 4
 * 2 inversions for the 7
 * 1 inversion for the 6
 * Total 10
 */
function getInversionCount(initialState) {
  const puzzleWidth = initialState.length
  const flatInitialState = initialState.reduce(
    (acc, row) => [...acc, ...row],
    [],
  )
  let inversionCount = 0

  for (let i = 0; i < puzzleWidth * puzzleWidth - 1; i++) {
    for (let j = i + 1; j < puzzleWidth * puzzleWidth; j++) {
      if (
        flatInitialState[i] !== 0 &&
        flatInitialState[j] !== 0 &&
        flatInitialState[i] > flatInitialState[j]
      )
        inversionCount++
    }
  }

  return inversionCount
}

function isEven(val) {
  return val % 2 === 0
}

/**
 * Finds the row number(1 based index) where the blank is located, starting from the bottom
 */
function getBlankRowNumber(initialState) {
  const puzzleWidth = initialState.length

  for (let i = puzzleWidth - 1; i >= 0; i--) {
    if (initialState[i].includes(0)) {
      return puzzleWidth - i
    }
  }
}

/**
 * Formula:
 * https://www.geeksforgeeks.org/check-instance-15-puzzle-solvable/
 * https://web.archive.org/web/20180617081657/https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html
 */
function isSolvable(initialState) {
  let isSolvable = true
  const puzzleWidth = initialState.length
  const inversionCount = getInversionCount(initialState)
  const blankInversedX = getBlankRowNumber(initialState)

  if (isEven(puzzleWidth)) {
    if (isEven(inversionCount)) {
      isSolvable = !isEven(blankInversedX)
    } else {
      isSolvable = isEven(blankInversedX)
    }
  } else {
    isSolvable = isEven(inversionCount)
  }

  return isSolvable
}

module.exports = function slidePuzzle(initialState) {
  const res = []

  if (!isSolvable(initialState)) return null

  return res
}
