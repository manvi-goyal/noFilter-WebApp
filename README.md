#noFilter 

noFilter is a social networking app for small communities. Here you can see some the static files on this project. Many of the Python files have not been uploaded for security. 

If you would like to view the complete set of files for this project, please contact me at manvi.goyal@tufts.edu

#Leg 1: Explanation of Data Schema

## Users
Alexandra expressed that she wanted to be able to show off her work.  Because of this, we decided that users should be able to associate their real names with their posts so that they could get credit for their work.  

She also mentioned she wanted people to get notifications when she posted new content.  In order to accomplish this, we decided that users should be able to “Favorite” other uses in order to see more of their content.

We also added Internet Points, because of Alexandra’s love of internet points.

##Timeline
We decided that we would display our content on a timeline as per project specs. The most recent posts will be displayed at the top.

##Post
A post will have the content, user who posted, time of post, and internet points of the post.  Alexandra mentioned she wanted to post text, and images so the content will be an image, text, or both. Each post is associated with a user so that the user can edit their previous posts, and for people to follow the users they like.  The time of the post is used to organize the order of the posts in the timeline.  Internet points are used as a rating system for the content, and can be both positive and negative.

#Leg 2: Implementing the MVP

1. Python Packages Used: 
	- Django 
	- Pillow

2. All other APIs or dependencies
	- We use Bootstrap and custom CSS for front-end 

3. Approximate number of hours my team spent learning Python and Django
	- 8 hours 

4. Approximate number of hours my team spent implementing the MVP
	- 16 hours

5. The challenges my team faced working on this leg
	- We had a hard time figuring out how to post images using Django 
	- We also had some difficulty learning about Foreign Keys but were able to figure it out with online resources and Tyler's help. 

#Leg 3: Performance Plan 
You can find our Performance Plan at this path: 
comp120-spring2015-team17/Assignments/PerformancePlan/presentation.pdf

#Leg 4: Optimization

##Optimization Techniques Used 
- Distributed memory caching system: memcached
- HTML5 application cache 
- JavaScript and CSS minification 
- Moving scripts to bottom of html
- Expiry 

##Tools Used to Test Performance
- Google Developer Tools 

##Improved Performance Aspects 
- Tested with 28 instances of the same picture.
- Initially, the page loads in ~600ms.
- After implementing memcached, the page loads in ~560ms.
- Minified business-casual.css with http://cssminifier.com/ 
- File is too small to make a difference in download time, but we know that minifying future .css and .js and combining those files is a best-practice technique for future work.
- Moving JavaScript files to bottom makes it ~300ms.
- Keeping the css and js files in the app cache makes it ~260ms.
- HTML page expires after a long time so the higher speeds from the cache will result in prolonged caching.

##Remaining Performance Issues
- No s3/CDN yet
- We are using a minimum viable product so it still needs to be scaled up.

#Leg 5: Writing the API

##Django REST framework
We decided to use **Django REST framework** because:
- It was easily accessibly (no need for any plug-ins or installations)
- It has great documentation on serializers, views, and URLs and how these elements fit together
- It has a very comprehensive tutorial and is a framework that has been largely used, and therefore, there are a lot of resources dedicated to supporting its functionality
- We found that the framework structure was largely similar to how we set up our models in terms of defining serializers and this made for a smooth transition into creating an effective API.

We decided not to use TastyPie because of its extra installations and configurations needs. 

##Implementation
- We have the ability to create multiple users and have also implemented a Log-In page. 
- We use S3 for online hosting and have preserved an organized file system.
- Our Django database allows a User to see the posts they posted, how many internet points they have and what activity is associated to them ,including Favorites. 
- We are using Bootstrap and custom Javascript and CSS for front-end development.
##RESTful Endpoints
- We have implemented RESTful endpoints for adding posts and users. We also have a restful endpoint for adding "Internet Points" to posts. 
##Serializers
- We have serializers for our 5 classes: User Settings, Posts, Internet Points, Favorites, and Contents.
- This allows us to define GET, POST, PUT, and DELETE functions for all the classes so that there are views in which you can directly interact with the API.

##Authentication and Authorization
- We will use Django REST framework's basic authentication schema to make sure users are authorized. 
- We will also use Unauthorized and Forbidden responses to implement error codes such as: "HTTP 401 Unauthorized" and "HTTP 403 Permission Denied". We will use the WWW-Authenticate header to do this.

##Security
- Users should only be able to enter and edit their own data, not other users' data. 
- We can check their authentication using the session that a particular user is on and compare it with the user ID. 

#Leg 6: Polling

##Implementation

- Implemented in one jQuery file (real-time.js, referred from index.html)
- On page load, set the number of posts to a global
- Every 5 seconds, check the number of posts in the database using the API
- Inject new HTML if there is any to inject

#Leg 7: Authentication & Authorization 
- We used the built-in authentication in the Django User object
- Our Authentication method consists of verification of user and password
- We have a Login Page that allows for the creation of a new user and password, and verifies pre-existing users. 

#Leg 8: Final Project
##Proposal
- We will use our previous iOS development experience to implement an iOS app with full functionality including the ability to make posts, give out points and create new users. 
- Our app will also allow for posting photos through the phone's camera, and camera roll.
