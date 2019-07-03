
window.onload = function(){
(function(){
    let Person = function(name, lastName, phone, email, notifications, message){
    	this.name = name;
    	this.phone = phone;
    	this.email = email;
    	this.notifications = notifications;
    	this.message = message;
    }

    let personArray = [];

    document.getElementById('form-contact').onsubmit = function(e){
    	e.preventDefault();
    	let name = $('#name').val();
    	let lastName = $('#last-name').val();
    	let phone = $('#phone').val();
        let email = $('#email').val();
        let notifications= document.getElementsByName('notifications');
        for (var i=0; i < notifications.length; i++){ 
            if (notifications[i].checked){ 
                alert('Em breve você receberá mais notificações sobre o projeto!');
            }
        }
    
    	let message = $('#message').val();
    	let person = new Person(name, lastName, phone, email, notifications, message);

        personArray.push(person);

        confirm('Are you sure you want to submit the form?');
        if(confirm)
        nickname = prompt("How would you like to be called?")
        alert('Thank you for registering: ' + nickname);
    }

    $("#form-contact").hide();

    $("#feedback").click(function(){
        $("#form-contact").slideToggle("slow");
      });

      $("#showJoinTeam").hide();
      
        $("#joinTeam").click(function(){
        $("#showJoinTeam").slideToggle("slow");
      });

      document.getElementById('save').onclick = function(e){
        e.preventDefault();
        var arrayUser=[]
        if(JSON.parse(localStorage.getItem("user")) != null){
          arrayUser.push(JSON.parse(localStorage.getItem("user")));
        }
        var name = document.getElementById("inputNome").value;
      
        var user = {name: name};
        console.log(user);
        arrayUser.push(user);
        var userJson = JSON.stringify(arrayUser);
        localStorage.setItem("Users", userJson);
      
      alert("Success, thank you for the send your interest to join us, " + user.name);
    }
  })();
}
