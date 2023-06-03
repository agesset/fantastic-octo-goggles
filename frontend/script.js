const api_url = 'https://lamenarrowformats--prunelmel.repl.co'
const selectDep = document.querySelector("#dep")

//Dep


/**
 * Do API async call and dom manipulation
 * @param {string} resource Resource to fetch from API
*/
function doApiLogic(resource) {
    url = api_url + '/' + resource
    axios
        .get(url)
        .then(function (response) {
            // handle success
            if (response.status > 200 || response.status < 300) {

                let options = ''
                for (const item in response.data) {
                    options += '<option value="' + response.data[item] + '">' + response.data[item] + '</option>'
                }
                document.querySelector("#" + resource).innerHTML = options
            } else {
                alert("Something went wrong")
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            alert(error.toJSON())
        }).finally(function () { })
}