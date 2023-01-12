// console.log("Hello world");




const pageSize = 10;
let currPage = 1;

async function tableRender(page = 1) {
    await callApi()

    if (page == 1) {
        prevButton.style.visibility = "hidden";
    } else {
        prevButton.style.visibility = "visible";
    }

    if (page == numPages()) {
        nextButton.style.visibility = "hidden"
    }
    else {
        nextButton.style.visibility = "visible"
    }
}


function previousPage() {
    if (currPage > 1) {
        currPage--;
        tableRender(currPage);
    }
}

function nextPage() {
    if ((currPage * pageSize) < result.length) {
        currPage++;
        tableRender(currPage);
    }
}
tableRender()

function numPages() {
    return Math.ceil(result.length / pageSize);
}

document.querySelector("#nextButton").addEventListener('click', nextPage, false);
document.querySelector("#prevButton").addEventListener('click', previousPage, false);

async function callApi() {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    result = await result.json()
    // console.log(result)
    document.getElementById("postContent").innerHTML = result
        .map((post) =>

            `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        </tr>`
        ).join("")
}

// callApi()