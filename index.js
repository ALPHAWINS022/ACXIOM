const logout = () => {
    window.location.href = "login.html";
  };

  const currentDate = new Date();
  const name=localStorage.getItem('username')
  document.getElementById("username").innerHTML = `Welcome  ${name} to the Reminder Application for Acxiom, `
  document.getElementById("date").innerHTML = "Date: " + currentDate.toDateString();
  