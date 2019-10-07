# Collegiate Basketball Program Database for Prospective Athletes and Parents
<br>
<br>

### Team 32 - Entity/Relationship Diagram
<br>

#### Team Members:
* Quang "Lance" Ngo
* Sandro Sallenbach
* Chris Douglas
<br>
<br>

### Entity/Relationship Diagram
<br>
![Image of E/R Diagram](https://i.imgur.com/ZqYHxU8.jpg)
<br>

Figure 1: E/R Diagram
<br>
<br>
<br>

### Definition of Entities and Relationships

#### School
Uses the name of the school and the conference attended as the key and holds stats such as attendance, tuition, and school mascot.
<br>

#### City
The city the school (university) is located in. This includes population, zip code, state, and weather of the location.
<br>

#### Championship
...
<br>

#### Head Coach
Head coaches are stored with their name and number of titles won as attributes.
<br>

#### Record
...
<br>

#### NBA Player
...
<br>

#### Home Stadium
Home stadium are stored with the stadium name, has a number of people that it can hold, and if they’re on or off campus.
<br>

#### Admin
Controls who’s allowed to access to add/edit data on the site. Uses the string Username as the key and has a password
<br>
<br>

### Definition of Relationships

#### Located In
This is the relationship connecting City and School. It will display which school is located in which zip code.
<br>

#### Coaching at
The relationship between head coach and school will help us identify who is currently coaching which team. The attributes will include headcoachName, schoolName, and Conference.
<br>

#### Played for
...
<br>

#### Plays in
Plays in is the relationship between a School and a Home Stadium. Every school can have exactly one Home Stadium.
<br>

#### Won & Achieved
These two relationships will not be converted into a relation, as they are a weak relationship and would only introduce duplicate knowledge already covered in the weak entities.
