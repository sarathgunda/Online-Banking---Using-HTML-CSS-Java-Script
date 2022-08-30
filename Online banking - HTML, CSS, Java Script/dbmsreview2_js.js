/*let username = document.getElementById("uname").value;
let password = document.getElementById("pass").value;
let cpassword = document.getElementById("cpass").value;

let a=0;
let b=0;
let c=0;

if(username.length<3)
  {
      text = "Please Enter valid User Name";
  document.getElementById('e_uname').innerHTML = text
  document.getElementById('uname').style.borderColor = "red";
  }
  else if(username.length >=3)
{
  text = "";
  document.getElementById('e_uname').innerHTML = text
  document.getElementById('uname').style.borderColor = "green";
  a=1;
}
if(password.length<8)
  {
    text = "Please Enter valid password (greater than 8 characters)";
    document.getElementById('e_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "red";
    
  }
  else if(!(password.length<8))
  {
    text = "";
    document.getElementById('e_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "green";
    b=1;
  }
  if(cpassword!=password || cpassword.length<8)
  {
    text = "Passwords do not match";
    document.getElementById('e_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "red";
    
  }
  else if(cpassword==password)
  {
    text = "";
    document.getElementById('e_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "green";
    c=1;
  } */


  function forgetpassword()
{
  let forgotpass=document.getElementById("forgot").value;
  let a=0;
  if(forgotpass.indexOf("@") == -1 || forgotpass.length < 4)
  {
    text = "Please Enter valid Email";
    document.getElementById('e_forgot').innerHTML = text
    document.getElementById('forgot').style.borderColor = "red";
    
  }
  else if(forgotpass.indexOf("@") == 1 || forgotpass.length > 4)
  {
    text = "";
    document.getElementById('e_forgot').innerHTML = text
    document.getElementById('forgot').style.borderColor = "green";
    a=1;
  }

  if (a==1)
  {
    alert("A link has been sent your email id mentioned above to reset your password.");
    return true;
  }
  else
  return false;
}

function loginpage()
{
  let luser=document.getElementById("login_user_name").value;
  let lpass=document.getElementById("loginpass").value;
  let a=0;
  let b=0;
  
  if(luser.length<3)
  {
    text = "Please Enter valid User Name";
  document.getElementById('e_login_user_name').innerHTML = text
  }
  else if(luser.length >=3)
{
  text = "";
  document.getElementById('e_login_user_name').innerHTML = text
  b=1;
}

if(lpass.length<8)
  {
    text = "Please Enter valid password (greater than 8 characters)";
    document.getElementById('e_loginpass').innerHTML = text
    
  }
  else if(!(lpass.length<8))
  {
    text = "";
    document.getElementById('e_loginpass').innerHTML = text
    a=1;
  }

  if(a==1 && b==1)
  {
    alert("Successfully Logged-In!")
    return true;
  }
  else
  return false;
}
