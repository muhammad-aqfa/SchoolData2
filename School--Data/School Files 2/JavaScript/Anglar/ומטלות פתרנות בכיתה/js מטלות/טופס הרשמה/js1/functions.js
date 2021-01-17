function israelCities() {
    const datalist = document.querySelector(`#datalist`)
    let list = ``
    cities.forEach(city => {
        list += `<option value="${city.engName}">${city.engName}</option>`
    })
    datalist.innerHTML = list
}