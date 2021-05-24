# Node-Bootcamp

This API is desinged using Node.js and Mongo Atlas
- puropse of API is to register user and teacher for online courses 
-teacher can post the online course details and user can purchase it 

Registration and login is done using data migartion 

Use command to run: npm run dev (still in development mode)

MapQuest is connected to get location access so its easier for user to find courses in nearby location

All completed functionalities has been tested using postman

Completed Functionalities:
Login
Registration 
Course CRUD functionalities 
Data sorting
Pagination
Validitation 
Search by location radius : {{URL}}/api/v1/bootcamps/radius/02118/10 (02118 is zipcode search within 10 miles of radius)
