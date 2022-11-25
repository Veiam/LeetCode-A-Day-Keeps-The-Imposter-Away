// You're working on a new component for"Your Space", a brand new social media application for finding friends. This component displays a user's top five friends.

// Given some JSON, dynamically generate thumbnails for the top five friends. You can append these thumbnails to the `<div id="timeline"></div>`.

const getUsers = async() => {
  let people = await fetch("https://randomuser.me/api/?results=5");
  let data = await people.json();

  const timeline = doucment .querySelector('#timeline');

  data.results.forEach(person => {
    let image = document.createElement('img');
    image.src = person.picture.medium;
    timeline.appendChild(image);
  })
}

getUsers();