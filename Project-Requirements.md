Chris, and Lance, your stuff comes here
don't forget the title page...



# Functional Requirements

## Users

The target audience of the Collegiate Basketball Program Database web application will consist of parents of current high school basketball players as well as the players themselves. The application can also be used for informational purposes for all collegiate basketball fans. Users can access the application through any regular web browser and access the feature described below. The core audience will interact with the site on a read-only basis. They will not be able to modify or update the data.

There will be a login functionality for administrators only, which will grant authenticated admins read and write permissions. This includes updating the database, adding new entries, as well as deleting outdated records.


## Features

### Search functionality
- The Collegiate Basketball Program Database web application will aid current highschool basketball players and their parents to search for universities that are a great academic and athletic fit for their college careers.
- All that information will be accessible through a search functionality that lets users find their preferred school.

### Order Universities
- The user shall be able to view the search results and order them based on various criteria.
- After applying a filter, the results we rearrange, showing the user the desired order.

### Display Additional University Info
- The user shall be able to select a university to get further information about the organization.
- The additional information ranges from general college facts & numbers to historical basketball data.



### Top Universities
- Top universities are marked with a special emblem, emphasizing their achievements and popularity.

### NBA Outlook
- The application will provide data on the chances of making it into the NBA. It will also provide data on the length of players’ NBA careers, as well as the salary outlooks.

### Positional Outlook
- As different positions in basketball require very different skill sets, it is our goal to differentiate NBA chances, career lengths and salary outlooks by position. 

### Administrator Login
- Administrators will be able to log in to gain access to admin-only features (as listed below)

### Add, Update, Delete
- After authentication, administrators will be able to update the database. Every year, a full draft class of college players enters the NBA and needs to be added to the database.
- In order to keep a historically accurate record, deletions of records is not recommended but will be possible.
- As players progress through their careers in the National Basketball Association, team affiliations, salaries, as well as achievements need frequent updates. Our application will provide means to update and modify the database.

### Collegiate Basketball Research
- The database can also provide interesting insights to fans of collegiate basketball. As a research tool, it provides various statistics about college basketball and its various teams.
- As no sign up will be required for the usage of the application, it will be accessible and available to everybody.



# Non-functional Issues

## Graphical User Interface

### Interface
The Collegiate Basketball Program Database’s interface shall be a web application, accessible through standard web browsers.

### Implementation
The frontend of the web application shall be built with the React.js framework. This includes HTML, CSS, as well as Javascript.


## Non-functional Requirements

### Usability
The Collegiate Basketball Program Database web application must be intuitive to navigate. All buttons and links shall be uniform and easy to understand. The search functionality shall be intuitive, even to first time users.

### Performance
Latency for user operations such as search shall be less than two seconds. The web application shall also support multiple hundred concurrent users.

### Security & Access Control
Basic user operations such as search shall be accessible to everybody. Database manipulation such as deletion or manipulation shall only be accessible to authenticated administrators.

### Supportability
The website shall be compatible with all contemporary browsers (like Chrome, Firefox, Safari). The web application is designed for usage on desktop computers or laptops.

### Reliability
Errors or crashes on the backend shall not have any effect on previous user actions. It shall only affect the current action and not interfere with other users’ experience.
