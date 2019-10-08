![Project Entity Relation Diagram](https://i.imgur.com/FXIFeIf.jpg)

### Definition of Entities and Relationships

##### School
Uses the name of the school and the conference attended as the key and holds stats such as attendance, tuition, and school mascot.

##### City
The city the school (university) is located in. This includes population, zip code, state, and weather of the location.

##### Championship
A championship is a title that a school can win at the end of each season.  Championships are identified using the year it was won and the title of the championship.  Currently, we are considering only Conference champions and NCAA champions.

##### Head Coach
Head coaches are stored with their name and number of titles won as attributes.

##### Record
A record tracks the wins and losses recorded by a team in a given year.  Records are identified using the year and the name and conference of the school that achieved the record.

##### NBA Player
We track current NBA players that played for their respective colleges as a measure of how successful a college basketball program is.  NBA Players are identified by a unique ID key with attributes of name, team, position, salary, and career length.

##### Home Stadium
Home stadium identifies where a school’s basketball team plays its home games.  Home stadium is stored with the stadium name, has a number of people that it can hold, and if they’re on or off campus.

##### Admin
Controls who’s allowed to access to add/edit data on the site. Uses the string Username as the key and has a password


### Definition of Relationships

##### Located In
This is the relationship connecting City and School. It will display which school is located in which zip code.

##### Coaching at
The relationship between head coach and school will help us identify who is currently coaching which team. The attributes will include headcoachName, schoolName, and Conference.

##### Played for
A relation to connect and NBA player with the school or schools that he played for.

##### Won
A relation to connect a school with the championship titles it has won.  The WON relation uses the SCHOOL’s name+conference key and the CHAMPIONSHIP’s name+year key to uniquely identify an entity in WON.  The WON relation also has the opponent and score attributes to respectively show the losing school in the championship game and the final score.

##### Plays in
Plays in is the relationship between a School and a Home Stadium. Every school can have exactly one Home Stadium.

##### Achieved
The ACHIEVE relationship will not be converted into a relation, as it is a weak relationship and would only introduce duplicate knowledge already covered in the weak entities.