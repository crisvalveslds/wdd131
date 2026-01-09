let today = new Date();
const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")
currentYear.innerHTML = `<span id="currentYear">${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span id="lastModified">Last Modification: ${document.lastModified}</span>`;