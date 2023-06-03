const api_url = 'https://lamenarrowformats--prunelmel.repl.co'
const selectDep = document.querySelector("#dep")

//Dep
axios
    .get(api_url + '/dep')
    .then(function (response) {
        // handle success
        if (response.status > 200 || response.status < 300) {

            let options = ''
            for (const item in response.data) {
                options += '<option value="' + response.data[item] + '">' + response.data[item] + '</option>'
            }
            selectDep.innerHTML = options
        } else {
            console.log(response)
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error)
    }).finally(function () { })