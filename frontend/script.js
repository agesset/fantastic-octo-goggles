const api_url = 'https://lamenarrowformats--prunelmel.repl.co'
const selectDep = document.querySelector("#dep")
const selectCom = document.querySelector("#com")

//Dep
doApiLogic('dep')
//Com
selectDep.addEventListener("change", (event) => {
    doApiLogic('com', { resource: 'dep', value: event.target.value })
});

/**
 * Do API async call and dom manipulation
 * @param {string} resource Resource to fetch from API Ex. dep, com, arr or qr
 * @param {JSON} parent Resource parent object Ex. To fetch com, parent object must be {resource: 'dep', value: 'ALIBORI'}
 */
function doApiLogic(resource, parent = { resource: '', value: '' }) {
    let url
    /**
     * @description Test if parent object or parent resource or parent value not present
     */
    if (!parent || !parent?.resource || !parent?.value) {
        /**
         * @description Just join api base url to resource sub path to obtain for example 'https://lamenarrowformats--prunelmel.repl.co/dep'
         */
        url = api_url + '/' + resource
    } else {
        /**
         * @description Join api base url, resource sub path, parent resource and parent value to obtain for example 'https://lamenarrowformats--prunelmel.repl.co/com?dep=ALIBORI'
         */
        url = api_url + '/' + resource + '?' + parent.resource + '=' + parent.value
    }

    axios.get(url)
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