const slidePuzzle = require('./npuzzle')

describe('slidePuzzle', () => {
  describe('Solvable puzzles', () => {
    it('should return a list of moves', () => {
      let puzzle1 = [
        [4, 1, 3],
        [2, 8, 0],
        [7, 6, 5],
      ]
      let puzzle2 = [
        [10, 3, 6, 4],
        [1, 5, 8, 0],
        [2, 13, 7, 15],
        [14, 9, 12, 11],
      ]
      let puzzle3 = [
        [3, 7, 14, 15, 10],
        [1, 0, 5, 9, 4],
        [16, 2, 11, 12, 8],
        [17, 6, 13, 18, 20],
        [21, 22, 23, 19, 24],
      ]

      expect(slidePuzzle(puzzle1)).not.toBe(null)
      expect(slidePuzzle(puzzle2)).not.toBe(null)
      expect(slidePuzzle(puzzle3)).not.toBe(null)
    })
  })

  describe('Non solvable puzzles', () => {
    it('should return null for a puzzle with an odd width and an odd inversion count', () => {
      const puzzle1 = [
        [4, 1, 3],
        [2, 8, 6],
        [7, 0, 5],
      ]
      const puzzle2 = [
        [3, 7, 14, 15, 10],
        [1, 11, 5, 9, 4],
        [16, 2, 0, 12, 8],
        [17, 6, 13, 18, 20],
        [21, 22, 23, 19, 24],
      ]

      expect(slidePuzzle(puzzle1)).toBe(null)
      expect(slidePuzzle(puzzle2)).toBe(null)
    })

    it('should return null for a puzzle with an even width, an even inversion count and blank is on an even row', () => {
      let puzzle = [
        [0, 3, 6, 4],
        [1, 10, 5, 8],
        [2, 13, 7, 15],
        [14, 9, 12, 11],
      ]

      expect(slidePuzzle(puzzle)).toBe(null)
    })

    it('should return null for a puzzle with an even width, an odd inversion count and blank is on an odd row', () => {
      let puzzle = [
        [10, 3, 6, 4],
        [1, 2, 8, 0],
        [5, 13, 7, 15],
        [14, 9, 12, 11],
      ]

      expect(slidePuzzle(puzzle)).toBe(null)
    })
  })
})
