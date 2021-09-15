const addCard = () => {
    const newTaskDetails = {
        id: `${Date.now()}`,
        url: document.getElementById("imageURL").value,
        title: document.getElementById("taskTitle").value,
        type: document.getElementById("taskType").value,
        description: document.getElementById("taskDescription").value
    };

    taskContents = document.getElementById("taskContentsrow");
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));
}

const generateTaskCard = ({id, url, title, type, description}) => {
    return (`<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-info">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <img src=${url} class="card-img-top" alt="image"/>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <span class="badge bg-primary">${type}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary float-end">OPEN TASK</button>
            </div>
        </div>
    </div>`)
}