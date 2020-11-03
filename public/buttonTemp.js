var id = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Please enter your first name, last name, and CUSD Student ID.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var idEnter = "<div class = 'col-2' style='height:80px'></div> <div class = 'col-3' style='height:80px'></div> <div class = 'col-6 user-bubble' style=''>Type ID here<input class = 'text-center col-12 form-control my-auto' id='idInput' type='text'></input> </div><div class = 'col-1' style='height:80px'></div>";
var submit = "<div class = 'col-2' style='height:50px'></div> <div class = 'col-5' style='height:50px'></div> <div class = 'col-4 user-bubble' style=''> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> <button class= 'btn btn-light' id='submitBtn' onclick='appendStuff(-1)'>Submit.</button> <div class='row'> <div class = 'col-12' style = 'height:5px'></div></div> </div><div class = 'col-1' style='height:50px'></div>";
var firstNameEnter = "<div class = 'col-1' style='height:105px'></div> <div class = 'col-3' style='height:105px'></div> <div class = 'col-7 user-bubble' style=''>Type first name here (first 10 characters only)<input class = 'text-center col-12 form-control my-auto' id='firstNameInput' type='text'></input> </div><div class = 'col-1' style='height:105px'></div>";
var lastNameEnter = "<div class = 'col-1' style='height:105px'></div> <div class = 'col-3' style='height:105px'></div> <div class = 'col-7 user-bubble' style=''>Type last name here (first 10 characters only)<input class = 'text-center col-12 form-control my-auto' id='lastNameInput' type='text'></input> </div><div class = 'col-1' style='height:105px'></div>";
var errorResponse = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Please correctly enter your first name, your last name, and a number for your ID.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var firstQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>On a scale from 1-10, rate your level of well-being/ability to cope with stress.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var firstQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendStuff(1)'>1 - I'm functioning well both at home and at school</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(2)'>2</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button2' onclick='appendStuff(3)'>3</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button3' onclick='appendStuff(4)'>4</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button4' onclick='appendStuff(5)'>5 - I'm able to do most tasks but have lost motivation.</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(6)'>6</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(7)'>7</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(8)'>8</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(9)'>9</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(10)'>10 - I'm not functioning well (not motivated at all/self-isolating/loss of enjoyment in most things)</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var stressGenResponse = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here are some resources that may help with this stress: </div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var stress12Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 speech-bubble' style=''>These are some potential mental health apps that can help you manage your stress.</div> <div class = 'col-3' style='height:40px'></div>";
var stress345Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 speech-bubble' style=''>Here is a link to contact peer counseling: <br><a href='https://google.com' target='_blank'>google.com</a><br> Here is a link to contact student services: <br><a href='https://google.com' target='_blank'>google.com</a><br> Here is a link to contact the nurse: <br><a href='https://google.com' target='_blank'>google.com</a><br> Here is a link to contact the counselours: <br><a href='https://google.com' target='_blank'>google.com</a><br> They can really help you out!</div>  <div class = 'col-3' style='height:40px'></div>";
var stress678Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 speech-bubble' style=''>Here is a link to contact CSI: <br><a href='https://google.com' target='_blank'>google.com</a><br> Here is a link to contact the transition team: <br><a href='https://google.com' target='_blank'>google.com</a><br> Here is a link to contact school psychologists: <br><a href='https://google.com' target='_blank'>google.com</a></div> <div class = 'col-3' style='height:40px'></div>";
var stress910Response = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-6 speech-bubble' style=''>Sending an email to Ms. Barrett, she'll contact you through CUSD student email. Here is a link to a social-emotional scanner: <br><a href='https://google.com' target='_blank'>google.com</a></div> <div class = 'col-3' style='height:40px'></div>";
var secondQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>What is the main source of your struggles?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var secondQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-4' style=''></div><div class = 'col-5 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendStuff(0)'>COVID-19</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendStuff(1)'>Family Issues</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button2' onclick='appendStuff(2)'>Friendship Problems</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button3' onclick='appendStuff(3)'>Remote Learning</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button4' onclick='appendStuff(4)'>Overall Social-Emotional Wellness</button></div><div class = 'col-1' style=''></div>";
var thirdQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>In relation to COVID-19, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirdQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Fear of contracting it</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Scared for a family member/friend</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Worried about dying</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Parent/caregiver has lost a job</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var fourthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>In relation to family, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Separation or divorce</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Illness or death</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Moving</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Financial issues</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var fifthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>In relation to friends, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Conflict</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Nervousness in relation to making new friends</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Communication difficulties</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Staying in touch online</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var sixthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>In relation to online school, what is causing you the most stress? Check all that apply:</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-3' style=''></div><div class = 'col-6 user-bubble' style='' id='bubbleCheckBox'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='checkBox0' onclick='appendNo(0)'>Internet stability and access to technology</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox2'  onclick='appendNo(2)'>Difficulty of Classes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox1'  onclick='appendNo(1)'>Accessibility to academic help</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light'  id='checkBox3'  onclick='appendNo(3)'>Distractions at home</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='submitBtn' onclick='appendStuff()'>Submit.</button></div><div class = 'col-1' style=''></div>";
var seventhQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you be interested in reading about how to protect yourself from COVID-19?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var seventhQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(71)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(72)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var eighthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you be interested in learning how to keep your household clean and safe from COVID-19?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eighthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(81)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(82)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var ninthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to read facts about COVID-19 infection and mortality rates?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var ninthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(91)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(92)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var tenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to learn about a confidential program called Clovis Support and Intervention that helps with drug/alcohol abuse, anger management, pregnancy, grief and loss, divorce, teen and family issues?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var tenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(101)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(102)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var eleventhQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to contact your school�s transition program, which helps students who are new to the school?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eleventhQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(111)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(112)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var twelfthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to contact your school�s peer counseling team, which helps students come up with good solutions for various problems? </div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var twelfthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(121)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(122)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var thirteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to learn how to stay in touch with friends and family virtually?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(131)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(132)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var fourteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to access the CUSD technology support webpage?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(141)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(142)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var fifteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to learn about an option for free online tutoring?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(151)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(152)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var sixteenthQuestionText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Would you like to learn about how to stay focused during distance learning?</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixteenthQuestionChoices = "<div class = 'col-2' style=''></div><div class = 'col-2' style=''></div><div class = 'col-7 user-bubble' style='' id='bubbleAnswer'><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button0' onclick='appendLast(161)'>Yes</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div><button class= 'btn btn-light' id='button1' onclick='appendLast(162)'>No</button><div class='row'><div class = 'col-12' style = 'height:5px'></div></div></div><div class = 'col-1' style=''></div>";
var seventhResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to learn about<a href='https://google.com' target='_blank'> staying clean and safe </a>, about <a href='https://google.com' target='_blank'>handwashing</a> and about <a href='https://google.com' target='_blank'>wearing masks.</a> </div><div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eighthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to learn about<a href='https://google.com' target='_blank'> staying clean and safe. </a></div><div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var ninthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to learn about<a href='https://google.com' target='_blank'> coronavirus statistics.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var tenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to contact <a href='https://google.com' target='_blank'>CSI.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var eleventhResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to contact <a href='https://google.com' target='_blank'>the transition program.</a></div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";;
var twelfthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to contact <a href='https://google.com' target='_blank'>peer counseling.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thirteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to get <a href='https://google.com' target='_blank'>social help.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fourteenthResource= "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to contact <a href='https://google.com' target='_blank'>CUSD Tech Support.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var fifteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to get <a href='https://google.com' target='_blank'>tutoring.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var sixteenthResource = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Here is a hyperlink to learn about <a href='https://google.com' target='_blank'>distance focusing</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";





var endingText = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Thanks for taking the survey!</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
var thanks = "<div class = 'col-1' style='height:40px'></div> <div class = 'col-4 speech-bubble' style=''>Thank you.</div> <div class = 'col-2' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>";
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
	if(num == 71){
		
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(seventhResource);
		appendStuff();
	}
	if(num == 72){
		appendStuff();
	}
	if(num == 81){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eighthResource);
		appendStuff();
	}
	if(num == 82){
		
		appendStuff();
	}
	if(num == 91){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(ninthResource);
		appendStuff();
	}
	if(num == 92){
		
		appendStuff();
	}
	if(num == 101){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(tenthResource);
		appendStuff();
	}
	if(num == 102){
		
		appendStuff();
	}
	if(num == 111){	
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhResource);
		appendStuff();
	}
	if(num == 112){
		
		appendStuff();
	}
	if(num == 121){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthResource);
		appendStuff();
	}
	if(num == 122){
		appendStuff();
	}
	if(num == 131){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thirteenthResource);
		appendStuff();
	}
	if(num == 132){
		appendStuff();
	}
	if(num == 141){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fourteenthResource);
		appendStuff();
	}
	if(num == 142){
		appendStuff();
	}
	if(num == 151){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(fifteenthResource);
		appendStuff();
	}
	if(num == 152){
		appendStuff();
	}
	if(num == 161){
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(sixteenthResource);
		appendStuff();
	}
	if(num == 162){
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
		d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html("<div class = 'col-1' style='height:40px'></div> <div class = 'col-3 speech-bubble' style=''>Great!</div> <div class = 'col-3' style='height:40px'></div> <div class = 'col-3' style='height:40px'></div>");
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
		var firstNameInput = document.getElementById("firstNameInput").value;
		var lastNameInput = document.getElementById("lastNameInput").value;
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
			d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html();
		}
	}

	if(ques.length > 4){
		if(ques[3] == 0){
			console.log("COVID-19 QUESTIONS");
			if((ques.length) == 8){
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
					}
				}
				if(!flag1){
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
					}
				}
				if(!flag2){
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
					}
				
				}
				if(!flag3){
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
					}
				
				}
				if(!flag0 && !flag2){
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
					}
				
				}
				if(!flag0 && !flag3){
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
					}
				
				}
				if(!flag1 && !flag2){
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
					}
				
				}
				if(!flag1 && !flag3){
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
					}
				
				}
				if(!flag2 && !flag3){
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
					}
				}
				if(flag1){
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
					}
				}
				if(flag2){
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
					}
				}
				if(flag3){
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
					}
				}
			}
		}
		if(ques[3] == 1){
			console.log("FAMILY QUESTIONS");
			if((ques.length) == 8){
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
					}
			}
			if(ques.length == 7){
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
				if((!flag0 && !flag2)){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(eleventhQuestionChoices);
					}	
				}else if(!flag1 && !flag3){
					if(ques2.length == 0){
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(thanks);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionText);
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").append("div").attr("class", "col-12 bg-white").style("height", "10px");
						d3.select("body").select("#mainContainer").select("#rowContainingSurveyInfoButtons").select("#survey").append("div").attr("class", "row").html(twelfthQuestionChoices);
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
					}
				}
			}
		}
		if(ques[3] == 2){
			console.log("FRIENDS QUESTIONS");
			if((ques.length) == 8){
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
					}
				}
			}
		}
		if(ques[3] == 3){
			console.log("ONLINE SCHOOL QUESTIONS");
			if((ques.length) == 8){
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
					}
				}
			}
		}
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
smooth_scroll_to(element, (element.scrollHeight - element.clientHeight), 3000);


}


