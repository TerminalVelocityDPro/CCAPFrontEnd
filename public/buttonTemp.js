var id = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Please enter your first name, last name, and CUSD Student ID.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var idEnter = "<div class = 'col-2' style='height:80px'></div> <div class = 'col-3' style='height:80px'></div> <div class = 'col-6 user-bubble text-white' style=''>Type ID here<input class = 'text-center col-12 form-control my-auto' id='idInput' type='text'></input> </div><div class = 'col-1' style='height:80px'></div>";
var submit = "<div class = 'col-2' style='height:50px'></div> <div class = 'col-5' style='height:50px'></div> <div class = 'col-4 user-bubble text-white' style=''> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> <button class= 'btn btn-light' id='submitBtn' onclick='appendStuff(-1)'>Submit.</button> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> </div><div class = 'col-1' style='height:50px'></div>";
var firstNameEnter = "<div class = 'col-1' style='height:105px'></div> <div class = 'col-3' style='height:105px'></div> <div class = 'col-7 user-bubble text-white' style=''>Type first name here<input class = 'text-center col-12 form-control my-auto' id='firstNameInput' type='text'></input> </div><div class = 'col-1' style='height:105px'></div>";
var lastNameEnter = "<div class = 'col-1' style='height:105px'></div> <div class = 'col-3' style='height:105px'></div> <div class = 'col-7 user-bubble text-white' style=''>Type last name here<input class = 'text-center col-12 form-control my-auto' id='lastNameInput' type='text'></input> </div><div class = 'col-1' style='height:105px'></div>";
var errorResponse = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Please correctly enter your first name, your last name, and a number for your ID.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var firstQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>On a scale from 1-10, rate your level of well-being/ability to cope with stress.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var firstQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendStuff(1)'>1 - I'm functioning well both at home and at school</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(2)'>2</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button2' onclick='appendStuff(3)'>3</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button3' onclick='appendStuff(4)'>4</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button4' onclick='appendStuff(5)'>5 - I'm able to do most tasks but have lost motivation.</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(6)'>6</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(7)'>7</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(8)'>8</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(9)'>9</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(10)'>10 - I'm not functioning well (not motivated at all/self-isolating/loss of enjoyment in most things)</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var stressGenResponse = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Here are some resources that may help with this stress: </div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var stress12Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 border border-primary rounded text-black text-center' style=''><div class='text-black'>These are some potential mental health apps that can help you manage your stress:</div> <a href='https://www.calm.com/' target='_blank'>Calm</a>, <a href='https://depressionpedia.com/mobile-apps/breathe2relax/#:~:text=%20%20%201%20Description.%20Breathe2Relax%20is%20a,giving%20into%20your%20emotions%20rather%20than...%20More%20' target='_blank'>Breathe2Relax</a>, <a href='https://www.dailyburst.com/' target='_blank'>Daily Burst</a>, <a href='https://www.thinkup.me/' target='_blank'>ThinkUp</a>, <a href='https://www.sanvello.com/' target='_blank'>Sanvello.</a></div> <div class = 'col-3' style='height:40px'></div>";
var stress345Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 border border-primary rounded text-black text-center' style=''>Here is a link to contact peer counseling: <br><a href='mailto:michellemiller@cusd.com' target='_blank'>michellemiller@cusd.com</a><br> Here is a link to contact student services: <br><a href='mailto:tomwright@cusd.com' target='_blank'>tomwright@cusd.com</a><br> Here is a link to contact the nurse: <br><a href='mailto:lorettarochanewman@cusd.com' target='_blank'>lorettarocha newman@cusd.com</a><br> Here is a link to contact the counselours: <br><a href='mailto:garyomi@cusd.com' target='_blank'>garyomi@cusd.com </a><br> They can really help you out!</div>  <div class = 'col-3' style='height:40px'></div>";
var stress678Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 border border-primary rounded text-black text-center' style=''>Here is a link to contact CSI: <br><a href='https://docs.google.com/forms/d/e/1FAIpQLSffLdku0_Jcw-JRmvJaLqfMGofQq4tXUPOmaJ-nuQ2pmZ00Yw/viewform' target='_blank'>CSI</a><br> Here is a link to contact the transition team: <br><a href='mailto:rkevinmiller@cusd.com ' target='_blank'>kevinmiller@cusd.com </a><br> Here is a link to contact school psychologists: <br><a href='mailto:denisesegal@cusd.com,hollyensign@cusd.com' target='_blank'>Denise Segal & Holly Ensign</a></div> <div class = 'col-3' style='height:40px'></div>";
var stress910Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 border border-primary rounded text-black text-center' style=''>Sending an email to Ms. Barrett, she'll contact you through CUSD student email. Here is a link to a social-emotional scanner: <br><a href='https://docs.google.com/forms/d/e/1FAIpQLSc28mvH8Zyvf_Jk_dURzILSMuNZb3iD1j0hPPnQb1rv4zI_LQ/viewform?usp=sf_link' target='_blank'>Social Emotional Scanner</a></div> <div class = 'col-3' style='height:40px'></div>";
var secondQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>What is the main source of your struggles?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var secondQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-4' style=''></div><div class = 'col-5 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendStuff(0)'>COVID-19</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>Family Issues</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button2' onclick='appendStuff(2)'>Friendship Problems</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button3' onclick='appendStuff(3)'>Remote Learning</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button4' onclick='appendStuff(4)'>Overall Social-Emotional Wellness</button></div><div class = 'col-1' style=''></div>";
var thirdQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>In relation to COVID-19, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirdQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble text-white' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Fear of contracting it</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Scared for a family member/friend</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Worried about dying</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Parent/caregiver has lost a job</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var fourthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>In relation to family, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble text-white' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Separation or divorce</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Illness or death</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Moving</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Financial issues</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var fifthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>In relation to friends, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble text-white' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Conflict</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Nervousness in relation to making new friends</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Communication difficulties</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Staying in touch online</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var sixthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>In relation to online school, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble text-white' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Internet stability and access to technology</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Difficulty of Classes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Accessibility to academic help</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Distractions at home</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var seventhQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you be interested in reading about how to protect yourself from COVID-19?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var seventhQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(71)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(72)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var eighthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you be interested in learning how to keep your household clean and safe from COVID-19?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eighthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(81)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(82)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var ninthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to read facts about COVID-19 infection and mortality rates?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var ninthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(91)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(92)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var tenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to learn about a confidential program called Clovis Support and Intervention that helps with drug/alcohol abuse, anger management, pregnancy, grief and loss, divorce, teen and family issues?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var tenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(101)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(102)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var eleventhQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to contact your school's transition program, which helps students who are new to the school?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eleventhQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(111)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(112)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var twelfthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to contact your school's peer counseling team, which helps students come up with good solutions for various problems? </div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var twelfthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(121)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(122)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var thirteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to learn how to stay in touch with friends and family virtually?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(131)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(132)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var fourteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to access the CUSD technology support webpage?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(141)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(142)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var fifteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to learn about an option for free online tutoring?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(151)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(152)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var sixteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Would you like to learn about how to stay focused during distance learning?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble text-white' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(161)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(162)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var seventhResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to learn about<a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html' target='_blank'> staying clean and safe </a>, about <a href='https://www.cdc.gov/handwashing/index.html' target='_blank'>handwashing</a> and about <a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html' target='_blank'>wearing masks.</a> </div><div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eighthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to learn about<a href='https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html' target='_blank'> staying clean and safe. </a></div><div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var ninthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to learn about<a href='https://www.worldometers.info/coronavirus/' target='_blank'> coronavirus statistics.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var tenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to contact <a href='mailto:lauraquall@cusd.com' target='_blank'>CSI.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eleventhResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to contact <a href='mailto:kevinmiller@cusd.com' target='_blank'>the transition program.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";;
var twelfthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to contact <a href='mailto:michellemiller@cusd.com' target='_blank'>peer counseling.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to get <a href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/personal-social-activities.html' target='_blank'>social help.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourteenthResource= "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to contact <a href='https://www.cusd.com/TechnologyHelpforStudents.aspx#additionalAssistance' target='_blank'>CUSD Tech Support.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to get <a href='https://www.tutornirvana.com' target='_blank'>tutoring.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to learn about <a href='https://www.iconschool.org/blog/4-tips-to-stay-focused-while-earning-your-online-high-school-diploma' target='_blank'>distance focusing</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var generalTips = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 border border-primary rounded text-black text-center' style=''>Here is a link to learn about some <a href='https://www.cdc.gov/violenceprevention/suicide/copingwith-stresstips.html' target='_blank'>general tips for coping with stress.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";

var firstName;
var lastName;
var id;
var stress;
var struggle;
var covid;
var family;
var friend;
var school;
var interestProtect;
var householdClean;
var stats;
var csi;
var transition;
var peer;
var socialHelp;
var techSupport;
var tutor;
var distanceFocus;

function allLetter(inputtxt){
	var letters = /^[A-Za-z]+$/;
	if(inputtxt.match(letters)){
		//alert('correct');
		return true;
	}else{
		//alert('Please input alphabet characters only');
		return false;
	}
}

function idLength(inputtxt){
	var letters = /^[0-9]{9}/;
	if(inputtxt.match(letters)){
		//alert('correct');
		return true;
	}else{
		//alert('Please input alphabet characters only');
		return false;
	}
}






function postingMethod(){
	var firstNameCheck = allLetter(firstName);
	var lastNameCheck = allLetter(lastName);
	var idCheck = idLength(id);
	//const url = 'control.php';
	// var myRe = /^[a-zA-Z.-]/;
	// var myReID = /^[0-9]{9}/;
	// var firstNameCheck = firstName.matchAll(myRe);
	// //var firstNameCheck = myRe.exec(firstName);
	// var lastNameCheck = myRe.exec(lastName);
	// var idCheck = myRe.exec(id);
	// console.log(firstNameCheck);
	//console.log(lastNameCheck);
	// console.log("******REGEX CHECK******");
	// console.log("FIRST NAME CHECK");
	//console.log(firstNameCheck);
	// console.log("LAST NAME CHECK");
	// console.log(lastNameCheck);
	// console.log("ID CHECK");
	// console.log(idCheck);
	// console.log("******REGEX CHECK******");
	if(firstNameCheck && lastNameCheck && idCheck){
		const url = 'control.php';
	var data = {
		firstNameAns: firstName,
        lastNameAns: lastName,
        idAns: id,
        stressAns: stress,
	    struggleAns: struggle,
	  covidAns: covid,
	  familyAns: family,
	  friendAns: friend,
	  schoolAns: school,
	  interestProtectAns: interestProtect,
	  householdCleanAns: householdClean,
	  statsAns: stats,
	  csiAns: csi,
	  transAns: transition,
	  peerAns: peer,
	  socialHelpAns: socialHelp,
	  techSupportAns: techSupport,
	  tutorAns: tutor,
	  distanceFocusAns: distanceFocus  
	};
	
	//["Deepro", "Pasha", "150079759", "Stressed Out"];

	var jsonData = JSON.stringify(data);

	fetch(url, {
		method: 'POST',
		body: jsonData
	}).then((response) => {
		console.log(response);
	}
	);

	}

	
	//axios({
  //method: 'post',
  //url: '/',
  //data: {
   //   firstNameAns: firstName,
   //   lastNameAns: lastName,
   //   idAns: id,
   //   stressAns: stress,
//	  struggleAns: struggle,
//	  covidAns: covid,
//	  familyAns: family,
//	  friendAns: friend,
//	  schoolAns: school,
//	  interestProtectAns: interestProtect,
//	  householdCleanAns: householdClean,
//	  statsAns: stats,
//	  csiAns: csi,
//	  transAns: transition,
//	  peerAns: peer,
//	  socialHelpAns: socialHelp,
//	  techSupportAns: techSupport,
//	  tutorAns: tutor,
//	  distanceFocusAns: distanceFocus  
  //}
//});

}















var endingText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Thanks for taking the survey!</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thanks = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble text-white' style=''>Thank you.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var ques = [];
var ques2 = [];

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


    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }
    return new Promise(function(resolve, reject) {
        var previous_top = element.scrollTop;
        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;
            if(now >= end_time) {
                resolve();
                return;
            }
            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;
            setTimeout(scroll_frame, 0);
        }
        setTimeout(scroll_frame, 0);
    });
}


function appendNo(num){
	console.log("pushed me " + num);
	ques.push(num);
	console.log(ques.length);
	//storeData(num);
	//d3.select("#checkBox0").attr("class","btn btn-light border border-danger");
	if(num == 0){
		d3.select("#checkBox0").attr("class","btn btn-light border border-danger");
		d3.select("#checkBox0").attr("onclick"," ");
	}
	if(num == 1){
		d3.select("#checkBox1").attr("class","btn btn-light border border-danger");
		d3.select("#checkBox1").attr("onclick"," ");
	}
	if(num == 2){
		d3.select("#checkBox2").attr("class","btn btn-light border border-danger");
		d3.select("#checkBox2").attr("onclick"," ");
	}
	if(num == 3){
		d3.select("#checkBox3").attr("class","btn btn-light border border-danger");
		d3.select("#checkBox3").attr("onclick"," ");
	}

}

function appendLast(num){
	ques2.push(num);
	interestProtect = "nothing";
	householdClean = "nothing";
	stats = "nothing";
	csi = "nothing";
	transition = "nothing";
	peer = "nothing";
	socialHelp = "nothing";
	techSupport = "nothing";
	tutor = "nothing";
	distanceFocus = "nothing";
	if(num == 71){
		interestProtect = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhResource);
		appendStuff();
	}
	if(num == 72){
		interestProtect = "No";
		appendStuff();
	}
	if(num == 81){
		householdClean = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthResource);
		appendStuff();
	}
	if(num == 82){
		householdClean = "No";
		appendStuff();
	}
	if(num == 91){
		stats = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthResource);
		appendStuff();
	}
	if(num == 92){
		stats = "No";
		appendStuff();
	}
	if(num == 101){
		csi = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(tenthResource);
		appendStuff();
	}
	if(num == 102){
		csi = "No";
		appendStuff();
	}
	if(num == 111){	
		transition = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhResource);
		appendStuff();
	}
	if(num == 112){
		transition = "No";
		appendStuff();
	}
	if(num == 121){
		peer = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthResource);
		appendStuff();
	}
	if(num == 122){
		peer = "No";
		appendStuff();
	}
	if(num == 131){
		socialHelp = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthResource);
		appendStuff();
	}
	if(num == 132){
		socialHelp = "No";
		appendStuff();
	}
	if(num == 141){
		techSupport = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthResource);
		appendStuff();
	}
	if(num == 142){
		techSupport = "No";
		appendStuff();
	}
	if(num == 151){
		tutor = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthResource);
		appendStuff();
	}
	if(num == 152){
		tutor = "No";
		appendStuff();
	}
	if(num == 161){
		distanceFocus = "Yes";
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthResource);
		appendStuff();
	}
	if(num == 162){
		distanceFocus = "No";
		appendStuff();
	}
	

}




function appendStuff(num){
	
	if(num != null){
		ques.push(num);
	}
	
	console.log("----------------");
	console.log(num);
	console.log("----------------");
	//console.log(ques.length);
	//storeData(num);
	var ques0 = [0];
	var ques1 = [1];
	//check if yes or no and put in entry fields
	if(ques.length == 1 && ques[0] == ques0[0]){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").selectAll("button").attr("onclick", "");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble text-white' style=''>Great!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(id);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(firstNameEnter);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(lastNameEnter);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(idEnter);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").attr("id", "firstSpecial").html(submit);
		console.log("First Round Choices!")
	}
	
	if(ques.length == 2){
		//get names and id
		var input = document.getElementById("idInput").value;
		id = input;
		var firstNameInput = document.getElementById("firstNameInput").value;
		firstName = firstNameInput;
		var lastNameInput = document.getElementById("lastNameInput").value;
		lastName = lastNameInput;
		console.log(firstNameInput);
		console.log(lastNameInput);
		console.log(input);
		//check if names and id are valid
		if(isNaN(input) || (!(firstNameInput.trim().length)) || (!(lastNameInput.trim().length)) || (!(input.trim().length))){
			console.log("ahhhhh");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(errorResponse);
			ques.pop();
		}
		else{
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(firstQuestionText);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(firstQuestionChoices);
		}
	}

	if(ques.length == 3){
		stress = ques[2];
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(stressGenResponse);
		if(ques[2] == 1 || ques[2] == 2){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(stress12Response);
		}
		if(ques[2] == 3 || ques[2] == 4 || ques[2] == 5){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(stress345Response);
		}
		if(ques[2] == 6 || ques[2] == 7 || ques[2] == 8){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(stress678Response);
		}
		if(ques[2] == 9 || ques[2] == 10){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(stress910Response);
		}
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(secondQuestionText);
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(secondQuestionChoices);
		//d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		//d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(firstQuestionChoices);
	}

	if(ques.length == 4){
		struggle = ques[3];
		if(ques[3] == 0){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirdQuestionText);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirdQuestionChoices);
		}
		if(ques[3] == 1){
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourthQuestionText);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourthQuestionChoices);
		}
		if(ques[3] == 2){
		    d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifthQuestionText);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifthQuestionChoices);
		}
		if(ques[3] == 3){
		    d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixthQuestionText);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixthQuestionChoices);
		}
		if(ques[3] == 4){
		    d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(generalTips);
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
			covid = "nothing";
			family = "nothing";
			friend = "nothing";
			school = "nothing";
			interestProtect = "nothing";
			householdClean = "nothing";
			stats = "nothing";
			csi = "nothing";
			transition = "nothing";
			peer = "nothing";
			socialHelp = "nothing";
			techSupport = "nothing";
			tutor = "nothing";
			distanceFocus = "nothing";
			postingMethod();
		}
	}

	if(ques.length > 4){
		if(ques[3] == 0){
			console.log("COVID-19 QUESTIONS");
			family = "nothing";
			friend = "nothing";
			school = "nothing";
			if((ques.length) == 8){
				if(ques2.length == 0){
					covid = "0123";
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
				}
				else if(ques2.length == 1){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
				}
				else if(ques2.length == 2){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
				}
				else if(ques2.length == 3){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
				}else{
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
					postingMethod();
				}
			}
			if(ques.length == 7){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 7; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0){
					covid = "123";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				if(!flag1){
					covid = "023";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				if(!flag2){
					covid = "013";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag3){
					covid = "012";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
			}
			if(ques.length == 6){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 6; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0 && !flag1){
					covid = "23";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag0 && !flag2){
					covid = "13";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag0 && !flag3){
					covid = "12";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag1 && !flag2){
					covid = "03";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag1 && !flag3){
					covid = "02";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				
				}
				if(!flag2 && !flag3){
					covid = "01";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 5){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(flag0){
					covid = "0";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				if(flag1){
					covid = "1";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				if(flag2){
					covid = "2";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				if(flag3){
					covid = "3";
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
		}
		if(ques[3] == 1){
			covid = "nothing";
			friend = "nothing";
			school = "nothing";
			console.log("FAMILY QUESTIONS");
			if((ques.length) == 8){
				family = "0123";
				if(ques2.length == 0){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
				}
				else if(ques2.length == 1){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
				}
				else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
			}
			if(ques.length == 7){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0){
					family = "123";
				}
				if(!flag1){
					family = "023";
				}
				if(!flag2){
					family = "013";
				}
				if(!flag3){
					family = "012";
				}
				if(ques2.length == 0){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
				}
				else if(ques2.length == 1){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
				}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
			}
			if(ques.length == 6){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0 && !flag1){
					family = "23";
				}
				else if(!flag0 && !flag2){
					family = "13";
				}
				else if(!flag0 && !flag3){
					family = "12";
				}
				else if(!flag1 && !flag2){
					family = "03";
				}
				else if(!flag1 && !flag3){
					family = "02";
				}
				else{
					family = "01";
				}
				if((!flag0 && !flag2)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}	
				}else if(!flag1 && !flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 5){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(flag0){
					family = "0";
				}
				if(flag1){
					family = "1";
				}
				if(flag2){
					family = "2";
				}
				if(flag3){
					family = "3";
				}
				if(flag0 || flag2){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
		}
		if(ques[3] == 2){
			covid = "nothing";
			family = "nothing";
			school = "nothing";
			console.log("FRIENDS QUESTIONS");
			if((ques.length) == 8){
				friend = "0123";
				if(ques2.length == 0){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
				}
				else if(ques2.length == 1){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
				}
				else if(ques2.length == 2){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
				}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
			}
			if(ques.length == 7){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0){
					friend = "123";
				}
				if(!flag1){
					friend = "023";
				}
				if(!flag2){
					friend = "013";
				}
				if(!flag3){
					friend = "012";
				}




				if(!flag0){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				else if(!flag2){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 6){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0 && !flag1){
					friend = "23";
				}
				else if(!flag0 && !flag2){
					friend = "13";
				}
				else if(!flag0 && !flag3){
					friend = "12";
				}
				else if(!flag1 && !flag2){
					friend = "03";
				}
				else if(!flag1 && !flag3){
					friend = "02";
				}
				else{
					friend = "01";
				}





				if(!flag1 && !flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
				else if(!flag0 && !flag2){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if((!flag0 && !flag1) || (!flag0 && !flag3)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if((!flag1 && flag2) || (!flag2 && !flag3)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 5){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(flag0){
					friend = "0";
				}
				if(flag1){
					friend = "1";
				}
				if(flag2){
					friend = "2";
				}
				if(flag3){
					friend = "3";
				}






				if(flag0){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
					}
					else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if(flag2){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
		}
		if(ques[3] == 3){
			covid = "nothing";
			friend = "nothing";
			family = "nothing";
			console.log("ONLINE SCHOOL QUESTIONS");
			if((ques.length) == 8){
				school = "0123";
				if(ques2.length == 0){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
				}
				else if(ques2.length == 1){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
				}
				else if(ques2.length == 2){
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
					d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
				}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
			}
			if(ques.length == 7){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0){
					school = "123";
				}
				if(!flag1){
					school = "023";
				}
				if(!flag2){
					school = "013";
				}
				if(!flag3){
					school = "012";
				}






				if(!flag0){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if(!flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}
					else if(ques2.length == 2){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 6){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(!flag0 && !flag1){
					school = "23";
				}
				else if(!flag0 && !flag2){
					school = "13";
				}
				else if(!flag0 && !flag3){
					school = "12";
				}
				else if(!flag1 && !flag2){
					school = "03";
				}
				else if(!flag1 && !flag3){
					school = "02";
				}
				else{
					school = "01";
				}

				if(!flag1 && !flag2){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if(!flag0 && !flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if((!flag0 && !flag1) || (!flag0 && !flag2)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if((!flag1 && !flag3) || (!flag2 && !flag3)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
					}
					else if(ques2.length == 1){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
			if(ques.length == 5){
				var flag0 = false;
				var flag1 = false;
				var flag2 = false;
				var flag3 = false;
				for(i = 4; i < 5; i++){
					if(ques[i] == 0){
						flag0 = true;
					}
					if(ques[i] == 1){
						flag1 = true;
					}
					if(ques[i] == 2){
						flag2 = true;
					}
					if(ques[i] == 3){
						flag3 = true;
					}	
				}
				if(flag0){
					school = "0";
				}
				if(flag1){
					school = "1";
				}
				if(flag2){
					school = "2";
				}
				if(flag3){
					school = "3";
				
				}






				if(flag0){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else if(flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}else{
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthQuestionChoices);
					}else{
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(endingText);
						postingMethod();
					}
				}
			}
		}
	}





	//if(ques.length == 2 && ques)





if(ques[0] == ques1[0]){
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble text-white' style=''>Have a good day!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#yesButton").attr("onclick"," ");
	d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").select("#answerChoicesDiv").select("#noButton").attr("onclick"," ");
}






d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".speech-bubble").transition().duration(2000).style("opacity", "1");
d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").selectAll(".user-bubble").transition().duration(2000).style("opacity", "1");
var element = document.getElementById("survey");
//element.scrollTop = (element.scrollHeight - element.clientHeight) - 100;
smooth_scroll_to(element, (element.scrollHeight - element.clientHeight), 5700);


}



