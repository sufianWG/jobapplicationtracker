// console.log("js file connected");
const totalCountElement = document.getElementById("total-count");
const interViewElement = document.getElementById("interview-count");
const rejectedElement = document.getElementById("rejected-count");

const allTogglerBtn = document.getElementById("all-filter-btn");
const InterViewTogglerBtn = document.getElementById("interview-filter-btn");
const rejectedTogglerBtn = document.getElementById("rejected-filter-btn");


const allJobCards = document.getElementById("all-job-cards");
const filteredSection = document.getElementById("filtered-section");
const mainContainer = document.querySelector("main");

const availableJobs = document.getElementById("available-jobs");

// console.log( "total Count:", totalCountElement.innerText, "InterView Count:", interViewElement.innerText, "RejectedCount:", rejectedElement.innerText)
// console.log( "Toggler All btn:", allTogglerBtn.innerText, "|", "InterView Toggler Btn:", InterViewTogglerBtn.innerText, "|", "Rejected Toggler Btn:", rejectedTogglerBtn.innerText)
// console.log( "All Job Card Data:", allJobCards.innerText, "|", "Filter Section Data:", filteredSection.innerText, "|", "Main Container Data:", mainContainer.innerText)

let totalCountList = [];
let interViewList = [];
let rejectedList = [];

// console.log(allJobCards.children.length) ;

function calculateCount(){
    totalCountElement.innerText = allJobCards.children.length;
    availableJobs.innerText = allJobCards.children.length
}
calculateCount()