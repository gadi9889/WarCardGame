# WarCardGame

War Card Game created using react, express, bootstrap, animeJs sql and nodes

The game: 
There are 52 cards in a deck and each cards has a value.
2 is the lowest value Ace is the highest value (color doesn't matter)
We split 52 cards between each player and play 26 rounds.
Each player draws a card and the highest value drawn side gets a point.
After 26 rounds a winner is decided.

The app:
The app idea is to create a game with users that compete for the kingdom with the most points and the region with the most points.
There are 4 regions: clubs, spades, hearts and diamonds.
Each player chooses which region to associate with.

There are 4 pages
Login:
Requires kingdom name and password
Incorrect credentials will show a bootstrap alert

Sign up:
Requires kingdom name(minimum 5 letters),password(minimum 5 chars) and a region from a drop down.
Incorrect credentials will show a bootstrap alert with what went wrong.

Game:
2 buttons: hit and leaderboard.
Leaderboard directs to the leaderboard page.
Hit the game begins. At the end the button switches to again to create a new game.

Leaderboard:
2 tables:
1. for the top players (order by points)
2. ascending order of the regions(order by points -the sum of the points from the players in that region)


