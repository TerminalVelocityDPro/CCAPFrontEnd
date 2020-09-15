


var firstRoundChoice ="<div class = 'col-3' style='height:270px'></div><div class = 'col-5' style='height:270px'></div><div class = 'col-3 user-bubble' style='height:270px' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(0)'>COVID-19</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(1)'>Family</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(2)'>Friends</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(3)'>Online School</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' onclick='appendStuff(4)'>Other</button></div><div class = 'col-1' style='height:270px'></div>";
var secondRoundChoice = "<div class = 'col-2' style='height:430px'></div><div class = 'col-5' style='height:430px'></div><div class = 'col-4 user-bubble' style='height:430px' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Fear of contracting it</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Scared for a family member/friend</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox4'  onclick='appendNo(4)'>Worried about dying</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Parent/caregiver has lost a job</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox3'  onclick='appendNo(3)'>Not knowing how we are going to pay bills</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style='height:430px'></div>";

var ques = [];

//Resources
var SBA_gov = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>SBA.gov.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var COVID_Resource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID Resource Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var CARES_Act_Website = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CARES Act.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var COVID_House_Clean = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>COVID House Cleaning.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var Worldometer = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Worldometer.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var CSI_Page = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CSI Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var School_Transition_Program = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:80px'>School Transition Program Page.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var Peer_Counseling = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Peer Counseling.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var CUSD_Tech_Support = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>CUSD Tech Support.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var Online_Tutoring = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Free Online Tutoring.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var Staying_in_Touch = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:100px'>Staying in Touch with Friends Tips.</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";


//Fades in new buttons
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
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
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_Resource);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 1){
			//append CARES Act
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 2){
			//append COVID House Cleaning
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_House_Clean);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 3){
			//append SBA.gov
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(SBA_gov);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 0 && ques[2] == 4){
			//append Worldometer.info
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Worldometer);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 0){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 1){
			//append School Transition Program Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 2){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 1 && ques[2] == 3){
			//append CARES Act Website
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 0){
			//append Peer Counseling
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 1){
			//append Peer Counseling
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 2){
			//append School Transition Program Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 2 && ques[2] == 3){
			//append Staying in Touch with Friends Tips Website
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Staying_in_Touch);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 0){
			//append CUSD Tech Support Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CUSD_Tech_Support);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 1){
			//append Free Online Tutoring Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 2){
			//append Free Online Tutoring Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
		if(ques[1] == 3 && ques[2] == 3){
			//append CSI Page
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==5){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0)){
					//append COVID Resource Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_Resource);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1)){
					//append CARES Act
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2)){
					//append COVID House Cleaning
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_House_Clean);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3)){
					//append SBA.gov
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(SBA_gov);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4)){
					//append Worldometer.info
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Worldometer);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1)){
					//append School Transition Program Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3)){
					//append CARES Act Website
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0)){
					//append Peer Counseling
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1)){
					//append Peer Counseling
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2)){
					//append School Transition Program Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3)){
					//append Staying in Touch with Friends Tips Website
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Staying_in_Touch);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0)){
					//append CUSD Tech Support Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CUSD_Tech_Support);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1)){
					//append Free Online Tutoring Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2)){
					//append Free Online Tutoring Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
				}
				if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3)){
					//append CSI Page
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==6){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append COVID Resource Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_Resource);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append CARES Act
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append COVID House Cleaning
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_House_Clean);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append SBA.gov
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(SBA_gov);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4 || ques[4] == 4)){
							//append Worldometer.info
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Worldometer);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append School Transition Program Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append CARES Act Website
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append Peer Counseling
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append Peer Counseling
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append School Transition Program Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append Staying in Touch with Friends Tips Website
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Staying_in_Touch);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0)){
							//append CUSD Tech Support Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CUSD_Tech_Support);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1)){
							//append Free Online Tutoring Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2)){
							//append Free Online Tutoring Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
						}
						if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3)){
							//append CSI Page
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
							d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==7){
		if(ques[1] == 0 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append COVID Resource Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_Resource);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append CARES Act
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append COVID House Cleaning
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_House_Clean);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append SBA.gov
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(SBA_gov);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 0 && (ques[2] == 4 || ques[3] == 4 || ques[4] == 4 || ques[5] == 4)){
									//append Worldometer.info
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Worldometer);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append School Transition Program Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 1 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append CARES Act Website
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append Peer Counseling
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append Peer Counseling
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append School Transition Program Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 2 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append Staying in Touch with Friends Tips Website
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Staying_in_Touch);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 0 || ques[3] == 0 || ques[4] == 0 || ques[5] == 0)){
									//append CUSD Tech Support Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CUSD_Tech_Support);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 1 || ques[3] == 1 || ques[4] == 1 || ques[5] == 1)){
									//append Free Online Tutoring Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 2 || ques[3] == 2 || ques[4] == 2 || ques[5] == 2)){
									//append Free Online Tutoring Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
								}
								if(ques[1] == 3 && (ques[2] == 3 || ques[3] == 3 || ques[4] == 3 || ques[5] == 3)){
									//append CSI Page
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
									d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
		}
	}
	if(ques.length ==8){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_Resource);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CARES_Act_Website);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(COVID_House_Clean);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append SBA.gov
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(SBA_gov);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Worldometer.info
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Worldometer);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append CSI Page
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CSI_Page);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append School Transition
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(School_Transition_Program);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Peer Counseling
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Peer_Counseling);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Staying in Touch
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Staying_in_Touch);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append CUSD Tech Support
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(CUSD_Tech_Support);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

		//append Free Online Tutoring
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(Online_Tutoring);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");

	}



}



if(ques[0] == ques1[0]){
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style='height:50px'>Have a good day!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-secondary").style("height", "10px");
}

}