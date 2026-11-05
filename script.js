
let pendingCargoes = document.getElementById("pendingCargoes")
let deliveredCargoes = document.getElementById("deliveredCargoes")

let cargoOwners = []
let trackingNumbers = []
let cargoDates = []
let cargoStatuses = []

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function generateTrackingNo(){
    let tenDigitNumber = Math.floor((Math.random() * 9000000000) + 1000000000)
    return tenDigitNumber
}

function hideName(name){
    let remainingChars = name.substring(2)
    name = name.substring(0,2)
    let onlyAsterisks = ""
    for(let i = 0; i < remainingChars.length; i++){
        onlyAsterisks += "*"
    }
    name = name + onlyAsterisks
    return name
}

function addNewCargo(name, status){
    let cargoOwner = hideName(name)
    let trackingNo = generateTrackingNo()
    let year = new Date().getFullYear()
    let month = months[new Date().getMonth()]
    let day = new Date().getDate()
    let cargoDate = `${day} ${month} ${year}`
    
    cargoOwners.push(cargoOwner)
    trackingNumbers.push(trackingNo)
    cargoDates.push(cargoDate)
    cargoStatuses.push(status)
}

function displayCargoes(){
    cargoOwners.forEach((cargoOwner, index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "cargoBox")
        div.style.padding = "10px"
        div.style.marginBottom = "20px"
        div.style.borderBottom = "1px solid black"
        
        let h3 = document.createElement("h3")
        h3.setAttribute("class", "cargoName")
        h3.textContent = `Cargo Owner : ${cargoOwner} | Cargo Status : ${cargoStatuses[index]}`
        
        let h4 = document.createElement("h4")
        h4.setAttribute("class", "trackingNo")
        h4.textContent = `Tracking No: ${trackingNumbers[index]}`
        
        let p = document.createElement("p")
        p.setAttribute("class", "date")
        p.textContent = `Cargo Date : ${cargoDates[index]}`
        // let hr = document.createElement("hr")
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(p)
        // div.appendChild(hr)
        pendingCargoes.appendChild(div)
        
        switch (cargoStatuses[index]) {
            case "Normal":
                div.classList.add("success")
                break;
            case "Delayed":
                div.classList.add("danger")
                break
            case "Cancelled":
                div.classList.add("dark")
                break
            case "Damaged Cargo":
                div.classList.add("gray")
                break
            default:
                break;
        }
    })
}

function preventCodeDuplication(){
    let cargoesChildren = pendingCargoes.children
    console.log(cargoesChildren)
    let arrayCargoesChildren = [...cargoesChildren]
    return arrayCargoesChildren
}

function deliverCargo(searchedTrackingNo){
    let returnArrayCargoesChildren = preventCodeDuplication()
    returnArrayCargoesChildren.forEach((arrCargoesChildren) => {
        let trackingNo = arrCargoesChildren.firstElementChild.nextElementSibling.textContent;
        if (trackingNo.includes(searchedTrackingNo)) {
            deliveredCargoes.appendChild(arrCargoesChildren)
        }
    })
}

function cancelCargo(searchedTrackingNo){
    let returnArrayCargoesChildren = preventCodeDuplication()
    returnArrayCargoesChildren.forEach((arrCargoesChildren) => {
        let trackingNo = arrCargoesChildren.firstElementChild.nextElementSibling.textContent;
        if(trackingNo.includes(searchedTrackingNo)){
            arrCargoesChildren.remove()
        }
    })
}

function reportDamagedCargo(searchedTrackingNo){
    let returnArrayCargoesChildren = preventCodeDuplication()
    returnArrayCargoesChildren.forEach((arrCargoesChildren) => {
        let trackingNo = arrCargoesChildren.firstElementChild.nextElementSibling.textContent;
        if(trackingNo.includes(searchedTrackingNo)){
            let div = document.createElement("div")
            div.textContent = `This Cargo is Damaged !`
            div.classList.add("danger")
            div.style.padding = "10px"
            pendingCargoes.replaceChild(div, arrCargoesChildren)
        }
    })
}

addNewCargo("Mustafa", "Normal")
addNewCargo("Ahmet", "Delayed")
addNewCargo("John", "Cancelled")
addNewCargo("Maria", "Damaged Cargo")

displayCargoes()