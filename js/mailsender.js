async function send_email(name,email,subject,body){
    try {
        const response =await fetch('http://localhost:81/sendemail',{method:"POST", headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({"name":name,"email":email,"subject":subject,"body":body})});
        if(response.status==200){
        alert("I Recived Your Email i'll Contact you Soon")
        }else{
            alert("Something went wrong please try again later")
        }
    } catch (error) {
        console.log(error)
        alert("Something went wrong please try again later")
    }
}

function handleFormSubmit(event) {
    const regx=/^[a-zA-Z]+$/
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var erroraray=[]
    if(!name){
        erroraray.push("Name")
    }
    if(!email){
        erroraray.push("Email")
    }
    if(!subject){
        erroraray.push("Subject")
    }
    if(!message){
        erroraray.push("Message")
    }
    console.log(erroraray)
    if(erroraray.length>1){
    var error=erroraray.join(",")+" Are Mandatory"
    }else if(erroraray.length==1){
       var error=erroraray.join(",")+" Is Mandatory"
    }
    if(error){
        console.log(error)
        console.log(name,email,message,subject)
        alert(error)
    }else{
        send_email(name,email,subject,subject)
    }
}
var form = document.getElementById('contactForm');
form.addEventListener('submit', handleFormSubmit);
