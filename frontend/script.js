const api_url = 'https://lamenarrowformats--prunelmel.repl.co'
const selectDep = document.querySelector("#dep")
url = api_url + '/dep'

//Dep
axios
    .get(url)
    .then(function (response) {
        // handle success
        if (response.status > 200 || response.status < 300) {

            let options = ''
            for (const item in response.data) {
                options += '<option value="' + response.data[item] + '">' + response.data[item] + '</option>'
            }
            document.querySelector("#dep").innerHTML = options
        } else {
            alert("Something went wrong")
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error)
        alert(error.toJSON())
    }).finally(function () { })