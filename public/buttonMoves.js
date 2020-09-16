


var firstRoundChoice ="<div class = 'col-3' style='height:270px'></div><div class = 'col-5' style='height:270px'></div><div class = 'col-3 user-bubble' style='height:270px' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(0)'>COVID-19</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(1)'>Family</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(2)'>Friends</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(3)'>Online School</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(4)'>Other</button></div><div class = 'col-1' style='height:270px'></div>";
var secondRoundChoice = "<div class = 'col-2' style='height:430px'></div><div class = 'col-5' style='height:430px'></div><div class = 'col-4 user-bubble' style='height:430px' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Fear of contracting it</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Scared for a family member/friend</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox4'  onclick='appendNo(4)'>Worried about dying</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Parent/caregiver has lost a job</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox3'  onclick='appendNo(3)'>Not knowing how we are going to pay bills</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style='height:430px'></div>";



var ques = [];

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



function appendNo(num){

	console.log("pushed me " + num);
	ques.push(num);
	if(num == 0){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox0").attr("class","btn btn-light border border-danger");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox0").attr("onclick"," ");
	}
	if(num == 1){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox1").attr("class","btn btn-light border border-danger");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox1").attr("onclick"," ");
	}
	if(num == 2){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox2").attr("class","btn btn-light border border-danger");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox2").attr("onclick"," ");
	}
	if(num == 3){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox3").attr("class","btn btn-light border border-danger");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox3").attr("onclick"," ");
	}
	if(num == 4){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox4").attr("class","btn btn-light border border-danger");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#checkBox4").attr("onclick"," ");
	}

}

d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble").transition().duration(2000).style("opacity", "1");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".user-bubble").transition().duration(2000).style("opacity", "1");
//d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble:after").transition().duration(2000).style("opacity", "1");


function appendStuff(num){



ques.push(num);
console.log("----------------");
console.log(num);
console.log("----------------");




var ques0 = [0];
var ques1 = [1];


if(ques.length == 1 && ques[0] == ques0[0]){
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").selectAll("button").attr("onclick", "");

d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:30px'>Great!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:150px'>What is the source of your stress? Please select one.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(firstRoundChoice);

}

if(ques.length == 2){
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#firstSpecial").selectAll("button").attr("onclick", "");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:30px'>Thank you.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:150px'>In relation to COVID-19, what is causing you the most stress? Check all that apply.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id","special").html(secondRoundChoice);
}

if(ques.length > 3){
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#special").select("#bubbleCheckBox").select("#submitBtn").attr("onclick"," ");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:30px'>Thank you.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:150px'>Here are some resources that may help.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
	if(ques.length ==4){
		if(ques[1] == 0 && ques[2] == 0){
			//append COVID Resource Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 1){
			//append CARES Act
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 2){
			//append COVID House Cleaning
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 3){
			//append SBA.gov
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 4){
			//append Worldometer.info
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 0){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 1){
			//append School Transition Program Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 2){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 3){
			//append CARES Act Website
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 0){
			//append Peer Counseling
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 1){
			//append Peer Counseling
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 2){
			//append School Transition Program Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 3){
			//append Staying in Touch with Friends Tips Website
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch with Friends Tips.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 0){
			//append CUSD Tech Support Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 1){
			//append Free Online Tutoring Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 2){
			//append Free Online Tutoring Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 3){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==5){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0)){
					//append COVID Resource Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1)){
					//append CARES Act
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2)){
					//append COVID House Cleaning
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3)){
					//append SBA.gov
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4)){
					//append Worldometer.info
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1)){
					//append School Transition Program Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3)){
					//append CARES Act Website
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0)){
					//append Peer Counseling
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1)){
					//append Peer Counseling
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2)){
					//append School Transition Program Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3)){
					//append Staying in Touch with Friends Tips Website
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch with Friends Tips.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0)){
					//append CUSD Tech Support Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1)){
					//append Free Online Tutoring Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2)){
					//append Free Online Tutoring Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==6){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append COVID Resource Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append CARES Act
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append COVID House Cleaning
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append SBA.gov
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4 || ques[4] == 4)){
							//append Worldometer.info
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append School Transition Program Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append CARES Act Website
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append Peer Counseling
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append Peer Counseling
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append School Transition Program Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append Staying in Touch with Friends Tips Website
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch with Friends Tips.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append CUSD Tech Support Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append Free Online Tutoring Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append Free Online Tutoring Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==7){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append COVID Resource Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append CARES Act
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append COVID House Cleaning
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append SBA.gov
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4 || ques[4] == 4 || ques[5] == 4)){
									//append Worldometer.info
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append School Transition Program Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append CARES Act Website
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append Peer Counseling
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append Peer Counseling
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append School Transition Program Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append Staying in Touch with Friends Tips Website
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch with Friends Tips.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append CUSD Tech Support Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append Free Online Tutoring Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append Free Online Tutoring Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==8){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append SBA.gov
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Worldometer.info
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append CSI Page
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append School Transition
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Peer Counseling
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Staying in Touch
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch With Friends Tips Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append CUSD Tech Support
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:60px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Free Online Tutoring
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

	}



}



if(ques[0] == ques1[0]){
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Have a good day!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#yesButton").attr("onclick"," ");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#noButton").attr("onclick"," ");
}

d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble").transition().duration(2000).style("opacity", "1");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".user-bubble").transition().duration(2000).style("opacity", "1");
var element = document.getElementById("survey");
//element.scrollTop = (element.scrollHeight - element.clientHeight) - 100;
smooth_scroll_to(element, (element.scrollHeight - element.clientHeight), 1500);



}