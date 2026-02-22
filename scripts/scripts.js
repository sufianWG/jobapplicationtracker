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
const noJobAvailableSection = document.getElementById("no-job-available");
// console.log(noJobAvailableSection);
// console.log( "total Count:", totalCountElement.innerText, "InterView Count:", interViewElement.innerText, "RejectedCount:", rejectedElement.innerText)
// console.log( "Toggler All btn:", allTogglerBtn.innerText, "|", "InterView Toggler Btn:", InterViewTogglerBtn.innerText, "|", "Rejected Toggler Btn:", rejectedTogglerBtn.innerText)
// console.log( "All Job Card Data:", allJobCards.innerText, "|", "Filter Section Data:", filteredSection.innerText, "|", "Main Container Data:", mainContainer.innerText)

let totalCountList = [];
let interViewList = [];
let rejectedList = [];
let currentStatus = 'all';

// console.log(allJobCards.children.length) ;

function calculateCount(){
    totalCountElement.innerText = allJobCards.children.length;
    availableJobs.innerText = allJobCards.children.length
}
calculateCount()

function toggler(id){
    // currentStatus = id;
    // console.log(id);
    allTogglerBtn.classList.add('bg-white', 'text-gray-700');
    InterViewTogglerBtn.classList.add('bg-white', 'text-gray-700');
    rejectedTogglerBtn.classList.add('bg-white', 'text-gray-700');

    allTogglerBtn.classList.remove('bg-blue-600', 'text-white');
    InterViewTogglerBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedTogglerBtn.classList.remove('bg-blue-600', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-gray-700');
    selected.classList.add('bg-blue-600', 'text-white');

    

}