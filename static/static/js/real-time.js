$(document).ready(function(){
	//number of posts
	var currNum;

	//Initialize currNum global
	$.getJSON('http://nofilter120.herokuapp.com/API/Posts/?format=json', function(json) {
		setInit(json.length);
	});

	//Work around function to access global from asynchronous function
	function setInit(numPosts) {
		currNum = numPosts;
	}
	
	/*setInterval(log, 2000);
	function log () {
		console.log(currNum);
	}*/

	//Check number of posts every 5 seconds
	setInterval(function(){$.getJSON('http://nofilter120.herokuapp.com/API/Posts/?format=json', function(json, numPosts) {
		checkNum(json.length, json[json.length-1]);
	})}, 5000);

	//if more than what it was, update page and variable
	function checkNum(newNum, newPost) {
		if (newNum > currNum) {
			currNum = newNum;
			update(newPost);
		}
	}

	//Create and prepend html to add to page
	function update(newPost) {
		//STILL HAVE TO GET IMAGES
		var template = '<div class="row">';
		template += '<div class="box col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">';
		template += '<div class="col-lg-12 text-center">';
		template += '<a href = "./post/'+newPost.id+'"> <p>' +newPost.text+'</p></a>';
		template += '</div>';
		template += '</div>';
		template += '</div>';
		console.log(template);
		$("#real_holder").prepend(template);
	}

	/*{%block content%}
            {% for post in my_posts %}
            <div class="row" >
                <div class="box col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                    
                        <div class="col-lg-12 text-center">
                            <a href = "./post/{{post.id}}">
                                <p>{{post.text}}</p>
                            </a>

                            {%for content in my_content%}
                                {% ifequal post content.post_id %}
                                    <img class="img-responsive img-border img-full img-poloroid" src="{{content.image.url}}"/>
                                {% endifequal %}
                            {% endfor %}
                            
                            <div class="internet-points">
                                <form action='/' method ='POST'>{% csrf_token %}
                                    <div class="form-group">
                                        {% for field in internet_point %}
                                            <div class = "input-group">
                                                <span class="input-group-addon">Internet Points: {{post.points}}</span>
                                                <input class="form-control" id ="{{field.id_for_label}}" name="{{field.html_name}}" value=""type="{{text}}"/>
                                                {{field.errors}}
                                                <span class="input-group-btn">
                                                    <button type="submit" class="btn btn-primary" name="Post" value="Add Value to Post {{post.id}}">~Add</button>
                                                </span>
                                            </div>
                                        {% endfor %}
                                    </div>
                                </form>
                            </div>
                        </div>
                    <!--<div class="clearfix"></div>-->
                </div>
            </div>
            {% endfor %}
        {%endblock%} */   
});