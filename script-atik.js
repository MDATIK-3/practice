function CreateCourse(URL, courseTitle, time1, time2) {
    let randomHours = Math.floor(Math.random() * 10000); // Generate a random integer up to 10000
    let html = `
    
<div class="content">
        <div class="course">
            <img src="${URL}" alt="photo">
            <div class="course-title">${courseTitle}</div>
            <div class="duration">
                <div class="first-part">
                    <span class="fa-regular fa-clock"></span>
                    <span>${time1}</span>
                </div>
                <div class="second-part">
                    <span><i class="fa-sharp fa-solid fa-graduation-cap"></i></span>
                    <span>${randomHours} ${time2}</span>
                </div>
            </div>
            <div class="button-part">
                <button class="button-1">More info</button>
                <button class="button-2">Start Learning</button>
            </div>
        </div>
         </div>
       
    `;
    document.querySelector(".scroll-content").innerHTML += html;
}
CreateCourse('images-atik/image-3.GIF', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-1.jpeg', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-2.jpg', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-4.png', "Computer Architecture and Organization", "20-25 hrs", "learners");

CreateCourse('images-atik/image-5.jpg', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-1.jpeg', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-2.jpg', "Computer Architecture and Organization", "20-25 hrs", "learners");
CreateCourse('images-atik/image-3.GIF', "Computer Architecture and Organization", "20-25 hrs", "learners");



let scrollContainer = document.querySelector(".scroll-content");
let left = document.querySelector(".left-icon");
let right = document.querySelector(".right-icon");

scrollContainer.innerHTML += scrollContainer.innerHTML; // Duplicate content to create the illusion of infinite scrolling

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        // If halfway through the content, reset to the beginning
        scrollContainer.scrollLeft = 0;
    } else if (scrollContainer.scrollLeft <= 0) {
        // If at the beginning, reset to the end
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }
});

left.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 500;
    
});

right.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 500;
});
