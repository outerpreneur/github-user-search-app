// DARK / LIGHT THEME

const darkModeButton = document.getElementById("dark-mode");
const whiteModeButton = document.getElementById("white-mode");
const searchBox = document.querySelector(".search-box");
const profileCard = document.querySelector(".profile-card");
const stats = document.querySelector(".stats");
const body = document.body;

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const headerH1 = document.querySelector("h1");

if (prefersDarkMode) {
  // Code for dark mode
  document.addEventListener("DOMContentLoaded", function () {
    darkModeButton.classList.add("hidden");
    whiteModeButton.classList.remove("hidden");
    darkModeButton.addEventListener("click", function () {
      headerH1.style.color = "#fefefe";
      userName.style.color = "#fefefe";
      bioDescription.style.color = "#fefefe";
      profileCard.style.color = "#fefefe";
      locationTag.style.color = "#fefefe";
      companyTag.style.color = "#fefefe";
      websiteTag.style.color = "#fefefe";
      twitterTag.style.color = "#fefefe";
      userDate.style.color = "#fefefe";
      statsSpan.forEach((span) => {
        span.style.color = "#fefefe";
      });

      completeDate.style.color = "#fefefe";
      reposNumber.style.color = "#fefefe";
      followingNumber.style.color = "#fefefe";
      followersNumber.style.color = "#fefefe";
      body.style.backgroundColor = "#141d2f";
      searchBox.style.backgroundColor = "#1E2A47";
      profileCard.style.backgroundColor = "#1E2A47";
      stats.style.backgroundColor = "#141d2f";
      darkModeButton.classList.add("hidden");
      whiteModeButton.classList.remove("hidden");
    });

    whiteModeButton.addEventListener("click", function () {
      body.style.color = "black";
      body.style.backgroundColor = "#f6f8ff";
      searchBox.style.backgroundColor = "#fefefe";
      profileCard.style.backgroundColor = "#fefefe";
      stats.style.backgroundColor = "#f6f8ff";
      darkModeButton.classList.remove("hidden");
      whiteModeButton.classList.add("hidden");
    });
  });
} else {
  // Code for light mode
  document.addEventListener("DOMContentLoaded", function () {
    darkModeButton.addEventListener("click", function () {
      headerH1.style.color = "#fefefe";
      userName.style.color = "#fefefe";
      bioDescription.style.color = "#fefefe";
      profileCard.style.color = "#fefefe";
      locationTag.style.color = "#fefefe";
      companyTag.style.color = "#fefefe";
      websiteTag.style.color = "#fefefe";
      twitterTag.style.color = "#fefefe";
      userDate.style.color = "#fefefe";
      statsSpan.forEach((span) => {
        span.style.color = "#fefefe";
      });
      completeDate.style.color = "#fefefe";
      reposNumber.style.color = "#fefefe";
      followingNumber.style.color = "#fefefe";
      followersNumber.style.color = "#fefefe";
      body.style.backgroundColor = "#141d2f";
      searchBox.style.backgroundColor = "#1E2A47";
      profileCard.style.backgroundColor = "#1E2A47";
      stats.style.backgroundColor = "#141d2f";
      darkModeButton.classList.add("hidden");
      whiteModeButton.classList.remove("hidden");
    });

    whiteModeButton.addEventListener("click", function () {
      body.style.color = "black";
      body.style.backgroundColor = "#f6f8ff";
      searchBox.style.backgroundColor = "#fefefe";
      profileCard.style.backgroundColor = "#fefefe";
      stats.style.backgroundColor = "#f6f8ff";
      darkModeButton.classList.remove("hidden");
      whiteModeButton.classList.add("hidden");
    });
  });
}

// UPDATE USER

const inputUser = document.querySelector("input");
const searchButton = document.querySelector(".search-box button");
const imageAvatar = document.querySelector(".avatar");
const userName = document.querySelector(".name");
const userHandle = document.querySelector(".handle");
const completeDate = document.querySelector(".date");
const userDate = document.querySelector(".date-join");
const bioDescription = document.querySelector(".bio-description");
const reposNumber = document.querySelector(".repos-number");
const followersNumber = document.querySelector(".followers-number");
const followingNumber = document.querySelector(".following-number");
const locationTag = document.querySelector(".location");
const twitterTag = document.querySelector(".twitter");
const websiteTag = document.querySelector(".website");
const companyTag = document.querySelector(".company");
const statsSpan = document.querySelectorAll(".stats span");

searchButton.addEventListener("click", async () => {
  const inputUserValue = inputUser.value;
  const urlTag = "https://api.github.com/users/";
  const userUrl = urlTag + inputUserValue;
  console.log(userUrl);

  try {
    const response = await fetch(userUrl);
    const data = await response.json();
    console.log(data);
    imageAvatar.src = data.avatar_url;
    userName.innerText = capitalizeFirstLetter(data.login);
    userHandle.innerText = "@" + data.login;
    userDate.innerText = " " + formatDate(data.created_at);
    reposNumber.innerText = data.public_repos;
    followersNumber.innerText = data.followers;
    followingNumber.innerText = data.following;
    locationTag.innerText = data.location;
    twitterTag.innerText = data.twitter_username;
    websiteTag.innerText = data.organizations_url;
    companyTag.innerText = data.company;
    if (data.bio == null) {
      bioDescription.innerText =
        "Lorem karisious ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
    } else {
      bioDescription.innerText = data.bio;
    }
    inputUser.value = "";
  } catch (error) {
    console.error("An error occurred:", error);
    adviceText.innerText = error;
  }
});

// FORMAT DATE

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

// CAPITALIZE

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function searchUser(user) {}
