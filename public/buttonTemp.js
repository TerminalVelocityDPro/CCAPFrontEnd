var id = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Please enter your CUSD Student ID.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var idEnter = "<div class = 'col-2' style='height:80px'></div> <div class = 'col-3' style='height:80px'></div> <div class = 'col-6 user-bubble' style=''>Type here<input class = 'text-center col-12 form-control my-auto' id='idInput' type='text'></input> </div><div class = 'col-1' style='height:80px'></div>";
var submit = "<div class = 'col-2' style='height:50px'></div> <div class = 'col-5' style='height:50px'></div> <div class = 'col-4 user-bubble' style=''> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> <button class= 'btn btn-light' id='submitBtn' onclick='appendStuff(-1)'>Submit.</button> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> </div><div class = 'col-1' style='height:50px'></div>";
var firstQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>On a scale from 1-10, rate your level of well-being/ability to cope with stress.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var firstQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendStuff(0)'>1 - I'm functioning well both at home and at school</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>2</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button2' onclick='appendStuff(2)'>3</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button3' onclick='appendStuff(3)'>4</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button4' onclick='appendStuff(4)'>5</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>6</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>7</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>8</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>9</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>10</button></div><div class = 'col-1' style=''></div>";
var secondQuestionText;
var secondQuestionChoices;
var thirdQuestionText;
var thirdQuestionChoices;
var fourthQuestionText;
var fourthQuestionChoices;
var fifthQuestionText;
var fifthQuestionChoices;
var sixthQuestionText;
var sixthQuestionChoices;
var seventhQuestionText;
var seventhQuestionChoices;
var eighthQuestionText;
var eighthQuestionChoices;
var ninthQuestionText;
var ninthQuestionChoices;
var tenthQuestionText;
var tenthQuestionChoices;
var eleventhQuestionText;
var eleventhQuestionChoices;
var twelfthQuestionText;
var twelfthQuestionChoices;
var thirteenthQuestionText;
var thirteenthQuestionChoices;
var fourteenthQuestionText;
var fourteenthQuestionChoices;
var fifteenthQuestionText;
var fifteenthQuestionChoices;
var sixteenthQuestionText;
var sixteenthQuestionChoices;
var endingText;
var ques = [];

d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble").transition().duration(2000).style("opacity", "1");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".user-bubble").transition().duration(2000).style("opacity", "1");

var smooth_scroll_to = function(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;

    var start_top = element.scrollTop;
    var distance = target - start_top;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previous_top = element.scrollTop;

        // This is like a think function from a game loop
        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if(now >= end_time) {
                resolve();
                return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
}

function appendStuff(num){

	ques.push(num);
	console.log("----------------");
	console.log(num);
	console.log("----------------");

	//storeData(num);


	var ques0 = [0];
	var ques1 = [1];



	if(ques.length == 1 && ques[0] == ques0[0]){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").selectAll("button").attr("onclick", "");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style=''>Great!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(id);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(idEnter);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(submit);
		console.log("First Round Choices!")
	}

	if(ques.length == 2){
		var input = document.getElementById("idInput").value;
		console.log(input);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(firstQuestionText);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(firstQuestionChoices);
	}

	//if(ques.length == 2 && ques)





if(ques[0] == ques1[0]){
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style=''>Have a good day!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#yesButton").attr("onclick"," ");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#noButton").attr("onclick"," ");
}






d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble").transition().duration(2000).style("opacity", "1");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".user-bubble").transition().duration(2000).style("opacity", "1");
var element = document.getElementById("survey");
//element.scrollTop = (element.scrollHeight - element.clientHeight) - 100;
smooth_scroll_to(element, (element.scrollHeight - element.clientHeight), 1500);


}


