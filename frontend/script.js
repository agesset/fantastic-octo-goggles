const api_url = 'https://lamenarrowformats--prunelmel.repl.co'
const selectDep = document.querySelector("#dep")
const selectCom = document.querySelector("#com")
const selectArr = document.querySelector("#arr")
const selectQr = document.querySelector("#qr")

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.container select:not(#dep)').forEach((select) => {
        select.classList.add('display-none')
    })
})
//After page loaded, hide selects
document.addEventListener('DOMContentLoaded', () => {
    toggleNodeVisibility()
})
//Dep
doApiLogic('dep')
//Com
selectDep.addEventListener("change", (event) => {
    doApiLogic('com', { resource: 'dep', value: event.target.value })
});
//Arr
selectCom.addEventListener("change", (event) => {
    doApiLogic('arr', { resource: 'com', value: event.target.value })
});
//Qr
selectArr.addEventListener("change", (event) => {
    doApiLogic('qr', { resource: 'arr', value: event.target.value })
});

/**
* Manipulate DOM to toggle selected node visibility
* @param {string} resource Resource to hide Default 'all'
* @param {boolean} hide Hide or Show this resource ? Default true
*/
function toggleNodeVisibility(hide = true) {
    document.querySelectorAll('.container select:not(#dep)').forEach((select) => {
        if (hide) {
            select.classList.add('display-none')
        } else {
            select.classList.remove('display-none')
        }
    })
}
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

                /**
                 * @description Or we can avoid repeating query selector use since we already querySelect #dep, #com, #arr and #qr nodes and store it in variables (constants) [see line 2 to line 5]. So we can dynamically reuse this variables (constants)
                 * 
                 * @example window[`select${resource.charAt(0).toUpperCase() + resource.slice(1)}`].innerHTML = options
                 */
                document.querySelector("#" + resource).innerHTML = options
                document.querySelector("#" + resource).classList.remove('display-none')
            } else {
                alert("Something went wrong")
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            alert(error.message)
        }).finally(function () { })
}