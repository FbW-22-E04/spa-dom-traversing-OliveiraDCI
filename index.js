"use strict";
const heading = document.querySelector("h1");
const header = heading.closest("header");
header.style.borderBottom = "5px solid green";

const infoSection = document.querySelector(".info");
const packages = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");
if (infoSection.contains(packages)) {
  packageTitles.forEach((title) => {
    title.previousElementSibling.style.display = "block";
    title.previousElementSibling.style.border = "5px solid black";
  });
}

const labels = document.querySelectorAll(".info label");
labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "2px solid yellow";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "2px solid orange";
  } else {
    label.style.borderBottom = "2px solid red";
  }
});

const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;
for (let i = 0; i < listItems.length; i++) {
  const item = document.createElement("li");
  item.innerText = listItems[i].innerText;
  siteMap.append(item);
}
