// Add your code here
function submitData(name, email) {
    let formData = {
        name,
        email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            // document.body.innerHTML = object["id"]
            // console.log(object["id"])
            const Id = object.id
            const toPrint = document.createElement('h1')
            toPrint.textContent = Id
            const bodyTag = document.querySelector('body')
            bodyTag.appendChild(toPrint)
        })
        .catch(function(error) {
            alert("Data did not post!");
            console.log(error.message);
            const bodyTag = document.querySelector('body')
            bodyTag.append(error.message)
        });
};

