

function submitData(user, email) {
  const body = document.querySelector('body');
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({"name": user, "email": email}),
  })
  .then(res => res.json())
  .then(data => body.append(data.id))
  .catch(err => body.append(`Problem: ${err.message}!`));
}

submitData('pete', 'fowler.pete@gmail.com');