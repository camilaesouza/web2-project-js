window.addEventListener("load", function (event) {
  (function () {
    $(document).ready(function () { 
      $('.phone_with_ddd').mask('(00) 0000-0000');

     });

     function muda(){
      document.getElementById('text-class').style.color="#ffff00";
    }

    let Person = function (name, lastName, phone, email, notifications, message) {
      this.name = name;
      this.lastName = lastName;
      this.phone = phone;
      this.email = email;
      this.notifications = notifications;
      this.message = message;
    }

    let personArray = [];

    addPerson = () => {
      document.getElementById('form-contact').onsubmit = function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let lastName = $('#last-name').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let notifications = document.getElementsByName('notifications');
        for (var i = 0; i < notifications.length; i++) {
          if (notifications[i].checked) {
            alert('Soon you will receive more notifications about the project!');
          }
        }

        let message = $('#message').val();
        let person = new Person(name, lastName, phone, email, notifications, message);

        personArray.push(person);
        var array = personArray.slice();

        confirm('Are you sure you want to submit the form, ' + array[0].name + '?');
        if (confirm) {
          nickname = prompt("How would you like to be called?")
          alert('Thank you for registering: ' + nickname);
        }
      }
    }

    addPerson();

    slideDownToform = function () {

      $("#form-contact").hide();

      $("#feedback").click(function () {
        $("#form-contact").slideToggle("slow");
        $("#name").focus();
        $("#inputName").blur();
      })

      $("#showJoinTeam").hide();

      $("#joinTeam").click(function () {
        $("#showJoinTeam").slideToggle("slow");
        $("#inputName").focus();
        $("#name").blur();
      });
    }

    slideDownToform();

    userFormId = document.getElementById('save');
    userFormId.addEventListener("click", function () {
      var arrayUser = []
      if (JSON.parse(localStorage.getItem("user")) != null) {
        arrayUser.push(JSON.parse(localStorage.getItem("user")));
      }
      var name = document.getElementById("inputName").value;

      var user = {
        name: name
      };
      arrayUser.push(user);
      var userJson = JSON.stringify(arrayUser);
      localStorage.setItem("Users", userJson);

      var numberOfNames = arrayUser.length;

      getUser = function (userName) {
        return alert(`thank you for the send your interest to join us, ${userName}`);
      }
      getUser(user.name);

      alert(`We have ${numberOfNames} interest to join us, is funny`);
    });

  })();
});