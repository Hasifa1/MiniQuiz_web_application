function c_check()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
        }
    if(document.getElementById('correct4').checked)
		{	score++;
		}
	if(document.getElementById('correct5').checked)
		{	score++;
        }

		document.writeln('<h1 id="sc">YOUR SCORE</h1>');
		sc.style.color='violet';
		

   if(score<=3)
   {
	document.writeln("<input type='button' value='reveal Answers' onClick='c_ans()'");
	document.write('<br>');
	document.writeln('<h1 id="e">'+"You scored "+score+" out of 5"+'</h1>');
	e.style.color='red';
	document.writeln('<h1 id="e1">Practice more :-(</h1>');
	e1.style.color='blue';
   }
   else{
	document.write("<input type='button' value='reveal Answers' onClick='c_ans()'");
	document.write('<br>');
	document.writeln('<h1>'+"You scored "+score+ " out of 5"+'</h1>');
	
	document.writeln('<h1 id="e1">Well Done :-)</h1>');
	e1.style.color='blue';
}
   }
  

function c_ans()
{
	window.location.assign("c_ans.html")
}
function coa_check()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
        }
    if(document.getElementById('correct4').checked)
		{	score++;
		}
	if(document.getElementById('correct5').checked)
		{	score++;
        }

		document.writeln('<h1 id="sc">YOUR SCORE</h1>');
		sc.style.color='violet';
		

   if(score<=3)
   {
	document.write("<input type='button' value='reveal Answers' onClick='coa_ans();'");
	document.write('<br>');
	document.writeln('<h1 id="e">'+"You scored "+score+" out of 5"+'</h1>');
	e.style.color='red';
	document.writeln('<h1 id="e1">Practice more :-(</h1>');
	e1.style.color='blue';
   }
   else{
	document.write("<input type='button' value='reveal Answers' onClick='coa_ans();'");
	document.write('<br>');
	   document.writeln('<h1>'+"You scored "+score+ " out of 5"+'</h1>');
	   
	   document.writeln('<h1 id="e1">Well Done :-)</h1>');
	   e1.style.color='blue';
   }
  
} 
function coa_ans()
{
	window.location.assign("coa_ans.html")
}
function dms_check()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
        }
    if(document.getElementById('correct4').checked)
		{	score++;
		}
	if(document.getElementById('correct5').checked)
		{	score++;
        }

		document.writeln('<h1 id="sc">YOUR SCORE</h1>');
		sc.style.color='violet';
		

   if(score<=3)
   {
	document.write("<input type='button' value='reveal Answers' id='re' onClick='dms_ans();'");
	document.write('<br>');
	document.writeln('<h1 id="e">'+"You scored "+score+" out of 5"+'</h1>');
	e.style.color='red';
	document.writeln('<h1 id="e1">Practice more :-(</h1>');
	e1.style.color='blue';
   }
   else{
	document.write("<input type='button' value='reveal Answers' onClick='dms_ans();'");
	document.write('<br>');
	   document.writeln('<h1>'+"You scored "+score+ " out of 5"+'</h1>');
	   
	   document.writeln('<h1 id="e1">Well Done :-)</h1>');
	   e1.style.color='blue';
   }
   }
  

function dms_ans()
{
	window.location.assign("dms_ans.html")
}


