const displayModel = document.getElementById("add-modal");
const button = document.querySelector("header button");
const cancelBtn = document.querySelector(".btn")
const backdrop = document.body.firstElementChild;
const addMovieBtn = cancelBtn.nextElementSibling;
//arrray of all inputs in display modal div...
const inputSelection = document.querySelectorAll("input");
const inputArray = [];



function displayModalToggle() {

    displayModel.classList.toggle("visible");
    backdropToggle();
}

function backdropToggle() {

    backdrop.classList.toggle("visible");
}

function cancelToggleBtn() {

    backdrop.className = "";
    displayModel.classList.toggle("visible");
}

function backdropToggleClick() {
    backdrop.className = "";
    displayModel.classList.toggle("visible");


}


function TakingOutput() {


    let titleVar = inputSelection[0].value;
    let imgaeUrlVar = inputSelection[1].value;
    let ratingVar = inputSelection[2].value;


    if (titleVar.trim() === ""
        || imgaeUrlVar.trim() === ""
        || ratingVar < 1
        || ratingVar > 5
    ) {
        alert("Pllease enter a valid number and rating between (1 and 5)");
        return;
    }

    //now making some logic of array input data in console.log
    let objectsData = {
        Id: Math.random().toString(),
        title: titleVar,
        image: imgaeUrlVar,
        rating: ratingVar
    };

    //passing objects data in an array:
    inputArray.push(objectsData);
    console.log(inputArray);
    cancelToggleBtn();
    //calling clear function on add button click
    clearInputs();
    clearSection();
    renderFinalData(objectsData.Id, objectsData.title, objectsData.image, objectsData.rating);

}


function clearSection() {
    const section01 = document.getElementById("entry-text");
    if (inputArray.length === 0) {
        section01.style.display = "block"
    }
    else {
        section01.style.display = "none";
    }
}


function clearInputs() {

    for (const clear of inputSelection) {
        clear.value = "";
    }

}




function deleteHandlerFunc(index) {

    const listRoot = document.getElementById("movie-list");
    const listElements = document.createElement("li");

    let movieIndex = 0;
    for (const movie of inputArray) {

        if (movie.Id === index) {
            break;
        }
        movieIndex++;
    }
    inputArray.splice(movieIndex, 1);
    listRoot.children[movieIndex].remove()

}


function renderFinalData(identifier, tt, mm, rr) {
    const listElements = document.createElement("li");
    const listRoot = document.getElementById("movie-list");

    listElements.innerHTML =

        `
        <div class = "movie-element">
<div class = "movie-element__image">
<img src = "${mm}" alt = "${tt}">
</div>

<div class = "movie-element__info" >
<h2>${tt} </h2>
<p>Rating : ${rr}/5 </p>
</div>

`;//innerhtml ends over here

    listRoot.append(listElements);
    listElements.addEventListener("click", deleteHandlerFunc.bind(null, identifier));

}



button.addEventListener("click", displayModalToggle);
cancelBtn.addEventListener("click", cancelToggleBtn);
backdrop.addEventListener("click", backdropToggleClick)
addMovieBtn.addEventListener('click', TakingOutput);













