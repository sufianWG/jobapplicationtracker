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
const availableJobsCount = document.getElementById("available-jobs");
const availableJobsP = document.getElementById("available-jobs-p");
const filterJobsPinterview = document.getElementById("available-jobs-filter-interview-p");
const filterJobsPrejected = document.getElementById("available-jobs-filter-p-rejected"); 
const filterAvailableJobsCountInterview = document.getElementById("available-jobs-filter-interview"); 
const filterAvailableJobsCountRejected = document.getElementById("available-jobs-filter-rejected"); 
const jobsAvailableof1 = document.getElementById("jobs-avaialble-of1");
const jobsAvailableof2 = document.getElementById("jobs-avaialble-of2");



// console.log(noJobAvailableSection);
// console.log( "total Count:", totalCountElement.innerText, "InterView Count:", interViewElement.innerText, "RejectedCount:", rejectedElement.innerText)
// console.log( "Toggler All btn:", allTogglerBtn.innerText, "|", "InterView Toggler Btn:", InterViewTogglerBtn.innerText, "|", "Rejected Toggler Btn:", rejectedTogglerBtn.innerText)
// console.log( "All Job Card Data:", allJobCards.innerText, "|", "Filter Section Data:", filteredSection.innerText, "|", "Main Container Data:", mainContainer.innerText)

let totalJobList = [];
let interViewList = [];
let rejectedList = [];
let currentActiveBtn = "all-filter-btn";

// console.log(allJobCards.children.length) ;

function calculateCount() {
    totalCountElement.innerText = totalJobList.length;
    availableJobs.innerText = totalJobList.length;
    jobsAvailableof1.innerText = totalJobList.length;
    jobsAvailableof2.innerText = totalJobList.length;
    interViewElement.innerText = interViewList.length;
    rejectedElement.innerText = rejectedList.length;
    filterAvailableJobsCountInterview.innerText = interViewList.length;
    filterAvailableJobsCountRejected.innerText = rejectedList.length;

}
calculateCount()

function toggler(id) {
   
    currentActiveBtn = id;
    // console.log(currentActiveBtn);

    allTogglerBtn.classList.add('bg-white', 'text-gray-700');
    InterViewTogglerBtn.classList.add('bg-white', 'text-gray-700');
    rejectedTogglerBtn.classList.add('bg-white', 'text-gray-700');

    allTogglerBtn.classList.remove('bg-blue-600', 'text-white');
    InterViewTogglerBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedTogglerBtn.classList.remove('bg-blue-600', 'text-white');



    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'text-gray-700');
    selected.classList.add('bg-blue-600', 'text-white');

    if (id == "all-filter-btn") {
        allJobCards.classList.remove("hidden");
        noJobAvailableSection.classList.add("hidden");
        filteredSection.classList.add("hidden");
        availableJobsP.classList.remove("hidden");
        filterJobsPinterview.classList.add("hidden");
        filterJobsPrejected.classList.add("hidden");
        calculateCount()
    } else if (id == "all-filter-btn" && (interViewList.length > 0 || rejectedList.length > 0)) {
        allJobCards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        noJobAvailableSection.classList.add("hidden");
        availableJobsP.classList.remove("hidden");
        filterJobsPinterview.classList.add("hidden");
        filterJobsPrejected.classList.add("hidden");
    } 
    else if (id == "interview-filter-btn" && interViewList.length > 0) {
        noJobAvailableSection.classList.add("hidden");
        allJobCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        availableJobsP.classList.add("hidden");
        filterJobsPinterview.classList.remove("hidden");
        filterJobsPrejected.classList.add("hidden");
        updateInterviewDataUI()
    } else if (id == "rejected-filter-btn" && rejectedList.length > 0) {
        noJobAvailableSection.classList.add("hidden");
        allJobCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        availableJobsP.classList.add("hidden");
        filterJobsPinterview.classList.add("hidden");
        filterJobsPrejected.classList.remove("hidden");
        updateRejectedDataUI()
    } else if (id == "interview-filter-btn" && interViewList.length == 0) {
        noJobAvailableSection.classList.remove("hidden");
        allJobCards.classList.add("hidden");
        filteredSection.classList.add("hidden");
        availableJobsP.classList.add("hidden");
        filterJobsPinterview.classList.remove("hidden");
        filterJobsPrejected.classList.add("hidden");
    }else if(id == "rejected-filter-btn" && rejectedList.length == 0){
        noJobAvailableSection.classList.remove("hidden");
        allJobCards.classList.add("hidden");
        filteredSection.classList.add("hidden");
        availableJobsP.classList.add("hidden");
        filterJobsPinterview.classList.add("hidden");
        filterJobsPrejected.classList.remove("hidden");
    }
}

// console.log(currentActiveBtn);


mainContainer.addEventListener("click", function (event) {
    // currentActiveBtn = "active btn found"
    // console.log(currentActiveBtn);
    
    if (event.target.classList.contains("interview-btn")) {
        // console.log(event.target.parentNode.parentNode);
        // console.log("inside the condition:", currentActiveBtn);
        // console.log("Main Container Running");
        const jobId = Number(event.target.parentNode.parentNode.parentNode.getAttribute("data-id"));
        // console.log(jobId);
        const parentDivInterview = event.target.parentNode.parentNode.parentNode;
        const companyName = event.target.parentNode.parentNode.querySelector('.company-name').innerText;
        const positionName = event.target.parentNode.parentNode.querySelector('.position-name').innerText;
        const jobTypeAndSalary = event.target.parentNode.parentNode.querySelector('.type-salary').innerText;
        let jobStatusElementInterview = event.target.parentNode.parentNode.querySelector('.application-status')
        jobStatusElementInterview.innerText = "INTERVIEW"
        if(jobStatusElementInterview.innerText = "INTERVIEW"){
            jobStatusElementInterview.classList.remove("bg-[#EEF4FF]", "text-blue-950");
            jobStatusElementInterview.classList.remove("text-red-600", "border-red-600", "border", "font-bold");
            parentDivInterview.classList.remove("border-l-5", "border-red-600");
            jobStatusElementInterview.classList.add("text-green-600", "border-green-600", "border", "font-bold");
            parentDivInterview.classList.add("border-l-5", "border-green-600");
        }
        const jobDescription = event.target.parentNode.parentNode.querySelector('.job-description').innerText;

        const jobInfo = {
            jobId,
            companyName,
            positionName,
            jobTypeAndSalary,
            jobStatus: "INTERVIEW",
            jobDescription
        }
        // console.log("company Name:", jobInfo.companyName, "|", "Position:", jobInfo.positionName, "|", "Job Type & Salary:", jobInfo.jobTypeAndSalary, "|", "Job Status:", jobInfo.jobStatus, "|", "Job Description:", jobInfo.jobDescription);

        // const jobCompanyExist = interViewList.find(item => item.companyName === jobInfo.companyName);


        const jobIdExist = interViewList.find(item => item.jobId === jobInfo.jobId);
        if (!jobIdExist) {
            interViewList.push(jobInfo);
        }
        // console.log("Bfore filter:",interViewList);

        rejectedList = rejectedList.filter(rejected => rejected.jobId != jobInfo.jobId);
        // console.log("AFter filter:", interViewList);
        
        // renderInterView()
        calculateCount()
        // if (currentActiveBtn == "interview-filter-btn") {

        // }

        // console.log(interViewList.length);


    } else if (event.target.classList.contains("rejected-btn")) {

        const parentDivRejected = event.target.parentNode.parentNode.parentNode;
        const jobId = Number(event.target.parentNode.parentNode.parentNode.getAttribute("data-id"));
        // console.log(jobId);
        const companyName = event.target.parentNode.parentNode.querySelector('.company-name').innerText;
        const positionName = event.target.parentNode.parentNode.querySelector('.position-name').innerText;
        const jobTypeAndSalary = event.target.parentNode.parentNode.querySelector('.type-salary').innerText;
        let jobStatusElementRejected = event.target.parentNode.parentNode.querySelector('.application-status')
        jobStatusElementRejected.innerText = "REJECTED"
        if(jobStatusElementRejected.innerText = "REJECTED"){
            jobStatusElementRejected.classList.remove("bg-[#EEF4FF]", "text-blue-950");
            jobStatusElementRejected.classList.remove("text-green-600", "border-green-600", "border", "font-bold");
            jobStatusElementRejected.classList.remove("border-l-5", "border-green-600");
            jobStatusElementRejected.classList.add("text-red-600", "border-red-600", "border", "font-bold");
            parentDivRejected.classList.add("border-l-5", "border-red-600");
        }
        
        const jobDescription = event.target.parentNode.parentNode.querySelector('.job-description').innerText;

        const jobInfo = {
            jobId,
            companyName,
            positionName,
            jobTypeAndSalary,
            jobStatus: "REJECTED",
            jobDescription
        }
        // console.log("company Name:", jobInfo.companyName, "|", "Position:", jobInfo.positionName, "|", "Job Type & Salary:", jobInfo.jobTypeAndSalary, "|", "Job Status:", jobInfo.jobStatus, "|", "Job Description:", jobInfo.jobDescription);

        // const jobCompanyExist = rejectedList.find(item => item.companyName === jobInfo.companyName);
        const jobIdExist = rejectedList.find(item => item.jobId === jobInfo.jobId);
        if (!jobIdExist) {
            rejectedList.push(jobInfo);
        }
        // console.log(rejectedList[0].companyName);

        interViewList = interViewList.filter(interview => interview.jobId != jobInfo.jobId);

        // renderRejected()
        // console.log(currentActiveBtn);
        // updateRejectedDataUI()
        calculateCount()
        // if (currentActiveBtn == "rejected-filter-btn") {

        // }

    }
    if (event.target.classList.contains("delete-btn")){
        const jobCard = event.target.closest(".job-card");
        // console.log(jobCard)
        const targetJobId= Number(jobCard.getAttribute("data-id"));
        // console.log(jobId);
        if(currentActiveBtn == "interview-filter-btn"){
            
        }

        interViewList = interViewList.filter(item => item.jobId !== targetJobId);
        calculateCount()

        rejectedList = rejectedList.filter(item => item.jobId !== targetJobId);
        calculateCount()
        jobCard.classList.add("hidden");
        
        
        // console.log(totalJobList[2]);
        // console.log(currentActiveBtn);
        if(currentActiveBtn == "all-filter-btn"){
            // totalJobList = totalJobList.filter(item => item !== targetJobId);
            // console.log(targetJobId);
            totalJobList = totalJobList.filter(item => item !== targetJobId);

            calculateCount()
            jobCard.classList.add("hidden");
            // console.log("yes, current activate id is true as I expected");
        }
        // console.log(interViewList)
        // console.log(interViewList.jobId);
        
    }
})

document.addEventListener("DOMContentLoaded", function(){
    const allCards = document.querySelectorAll(".job-card");
    allCards.forEach(card => {
        const cardId = Number(card.getAttribute("data-id"));
        totalJobList.push(cardId);
    });
    calculateCount()
})

function renderInterView() {
    filteredSection.innerHTML = '';

    for (interview of interViewList) {

        let filterNewDiv = document.createElement("div");
        // filterNewDiv.className = "flex justify-between bg-white rounded-xl p-6"
        filterNewDiv.innerHTML = `
        <div class="job-card border-l-5 border-green-600 mb-4 flex justify-between bg-white rounded-xl p-4 gap-1 sm:gap-2 sm:p-6 lg:gap-3" data-id="${interview.jobId}">
	        <div class="div-left space-y-5 w-[95%] sm:w-[85%] lg:w-[70%]">
                        <div class="company-and-position">
                            <h4 class="text-blue-950 text-xl font-bold company-name">${interview.companyName}</h4>
                            <p class="text-[#64748B] position-name">${interview.positionName}</p>
                        </div>
                        <div class="type-and-salary">
                            <p class="text-[#64748B] type-salary">${interview.jobTypeAndSalary}</p>
                        </div>
                        <div class="status">
                            <button class="text-green-600 border-green-600 border font-bold px-3 py-2 rounded-md application-status">${interview.jobStatus}</button>
                        </div>
                        <div class="job-desc">
                            <p class="text-gray-900 job-description">${interview.jobDescription}.</p>
                        </div>
                        <div class="action-btns flex flex-col justify-center gap-2 sm:flex-row sm:justify-start lg:gap-5">
                            <button
                                class="text-green-600 px-3 py-2 border-green-600 border rounded-md font-bold interview-btn">INTERVIEW</button>
                            <button
                                class="text-red-600 px-3 py-2 border-red-600 border rounded-md font-bold rejected-btn">REJECTED</button>
                        </div>
                    </div>
                    <div class="div-right">
                        <button
                            class="bg-white border border-[#F1F2F4] p-2 w-8 h-8 rounded-full flex justify-center align-middle"><i
                                class="fa-regular fa-trash-can delete-btn"></i></button>
            </div> 
        </div>       
            `
        filteredSection.appendChild(filterNewDiv);
    }
}
function renderRejected() {
    filteredSection.innerHTML = '';

    for (rejected of rejectedList) {

        let filterNewDiv = document.createElement("div");
        // filterNewDiv.className = "flex justify-between bg-white rounded-xl p-6"
        filterNewDiv.innerHTML = `
        <div class="job-card border-l-5 border-red-600 mb-4 flex justify-between bg-white rounded-xl p-4 gap-1 sm:gap-2 sm:p-6 lg:gap-3" data-id="${rejected.jobId}">
            <div class="div-left space-y-5 w-[95%] sm:w-[85%] lg:w-[70%]">
                        <div class="company-and-position">
                            <h4 class="text-blue-950 text-xl font-bold company-name">${rejected.companyName}</h4>
                            <p class="text-[#64748B] position-name">${rejected.positionName}</p>
                        </div>
                        <div class="type-and-salary">
                            <p class="text-[#64748B] type-salary">${rejected.jobTypeAndSalary}</p>
                        </div>
                        <div class="status">
                            <button class="text-red-600 border-red-600 border font-bold px-3 py-2 rounded-md application-status">${rejected.jobStatus}</button>
                        </div>
                        <div class="job-desc">
                            <p class="text-gray-900 job-description">${rejected.jobDescription}.</p>
                        </div>
                        <div class="action-btns flex flex-col justify-center gap-2 sm:flex-row sm:justify-start lg:gap-5">
                            <button
                                class="text-green-600 px-3 py-2 border-green-600 border rounded-md font-bold interview-btn">INTERVIEW</button>
                            <button
                                class="text-red-600 px-3 py-2 border-red-600 border rounded-md font-bold rejected-btn">REJECTED</button>
                        </div>
                    </div>
                    <div class="div-right">
                        <button
                            class="bg-white border border-[#F1F2F4] p-2 w-8 h-8 rounded-full flex justify-center align-middle"><i
                                class="fa-regular fa-trash-can delete-btn"></i></button>
            </div>
        </div>        
            `
        filteredSection.appendChild(filterNewDiv);
    }
}

// delete item from interview tab


function updateInterviewDataUI() {
    calculateCount()
    renderInterView()
}
function updateRejectedDataUI() {
    calculateCount()
    renderRejected()
}


