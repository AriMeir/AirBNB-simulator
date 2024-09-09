async function onGetCars() {
    const elPre = document.querySelector('pre')

    const res = await fetch('api/car')
    const cars = await res.json()

    elPre.innerText = JSON.stringify(cars, null, 2)
}