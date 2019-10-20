# hex-conways

Conway's game of life is a well known cellular automaton, where 4 rules result in emergent behaviour depending on the initial pattern.
The automaton traditionally runs on a square grid, with the following rules:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Since square grids are quite straightforward to produce digitally, I wanted to challenge myself by building a hex grid, applying the rules of conways, and potentially making an adjusted automaton for the hex grid where each cell would have 6 neighbours instead of 8.


