function displayUsers(users) {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = '';

  const userCards = users.map((user) => `
    <div class="user-card">
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
      <p id="name">${user.name.first} ${user.name.last}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Location: ${user.location.city}, ${user.location.country}</p>
    </div>
  `);

  userContainer.innerHTML = userCards.join('');
}

function pickRandomUsers(numOfUsers) {
  const allUsers = data.results;

  if (numOfUsers >= 1 && numOfUsers <= 30) {
    // Generate random users
    const randomUsers = [];
    for (let i = 0; i < numOfUsers; i++) {
      const randomIndex = Math.floor(Math.random() * allUsers.length);
      randomUsers.push(allUsers[randomIndex]);
    }

    displayUsers(randomUsers);
  } else {
    alert('Please enter a number between 1 and 30.');
  }
}

//Button
let button = document.getElementById('generate-button')
button.onclick = function(event) {
    const numOfUsers = parseInt(document.getElementById('num-of-users').value, 10);
  pickRandomUsers(numOfUsers);
}

// 3 peple when page just load in
const initialRandomUsers = [];
const allUsers = data.results;
for (let i = 0; i < 3; i++) {
  const randomIndex = Math.floor(Math.random() * allUsers.length);
  initialRandomUsers.push(allUsers[randomIndex]);
}

displayUsers(initialRandomUsers);
