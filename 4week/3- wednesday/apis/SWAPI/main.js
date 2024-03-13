const button = document.querySelector('button');

function clickedButton() {
    console.log('Button was clicked');
    axios.get("https://swapi.tech/api/films").then((response) => {
        let charArr = response.data.result[0].properties.characters;
        charArr.forEach((char) => {
            axios.get(char)
                .then((response) => {
                    console.log(response.data.result.properties.name);
                    let name = document.createElement('h2')
                    name.innerHTML = response.data.result.properties.name;
                    document.body.appendChild(name);
            });
        });
    });
}

button.addEventListener('click', clickedButton);

