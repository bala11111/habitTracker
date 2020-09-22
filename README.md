<h1>Habit Tracker Website</h1>

<h3>This is a Habit tracker where we can</h3>

<ul>
  <li>Create</li>
  <li>Delete</li>
  <li>Maintain</li>
</ul> the status the habits. <br> <br>

---->  We have used the MVC structure to build the website. <br>
---->  We have used EJS in the views part of the website. <br>
---->  We have used MongoDb to store the habits and its relevent data's. <br>


<h3>This website contains 6 routes</h3>
<ol>
  <li> / ---> The homepage route </li>
  <li> /go_back ---> To go back to the homepage</li>
  <li /create-habit ---> To create a new habit </li>
  <li> /delete-habit/:id ---> To delete a certain habit </li>
  <li> /details/:id ---> To show the details of that particular habit </li>
  <li> /save/:id ---> To update the status of the habit </li>
</ol> 

<h3>The habit details basically contains the following</h3>
<ul>
  <li> Habit name</li>
  <li> Description about the habit </li>
  <li> The Start date of that habit</li>
  <li> The status of that particular habit of the past 7 days</li>
  <li> Streak during the past 7 days</li>
</ul>
