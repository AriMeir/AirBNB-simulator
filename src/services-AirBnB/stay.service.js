
// import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'


const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg
}
window.cs = stayService


async function query(filterBy = { location:'', dates: '', Adults: 0, Children:0, Infants:0, Pets: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await httpService.put(`stay/${stay._id}`, stay)

    } else {
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    const savedMsg = await httpService.post(`stay/${stayId}/msg`, {txt})
    return savedMsg
}


function getEmptyStay() {
    return {
        _id: utilService.makeId(),
        name: "",
        type: "",
        imgUrls: [],
        price: utilService.getRandomIntInclusive(200, 1000),
        summary: "",
        capacity: 0,
        amenities: utilService.getRandomAmenities(),
        labels: [],
        host: {},
        loc: {},
        reviews: [{},{}],
        likedByUsers: []
    }
}
