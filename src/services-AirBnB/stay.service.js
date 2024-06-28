
import { stay1, stay2 } from '../Data/stay'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'


const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay
    // addStayMsg
}
window.cs = stayService
_createStays()

async function query(filterBy /* = { location:'', dates: '', Adults: 0, Children:0, Infants:0, Pets: 0 } */) {
    let stays = await storageService.query(STORAGE_KEY);
    if (filterBy) {
        return storageService.get(STORAGE_KEY, filterBy) 
    } else {
        return stays
    }
   
}

function getById(stayId) {
    return storageService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    return storageService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await storageService.put(`stay/${stay._id}`, stay)

    } else {
        savedStay = await storageService.post('stay', stay)
    }
    return savedStay
}

// async function addStayMsg(stayId, txt) {
//     const savedMsg = await httpService.post(`stay/${stayId}/msg`, {txt})
//     return savedMsg
// }


function getEmptyStay() {
    return {
        _id: utilService.makeId(),
        name: "",
        type: "",
        imgUrls: [],
        price: utilService.getRandomIntInclusive(200, 1000),
        summary: "",
        capacity: utilService.getRandomIntInclusive(2, 10),
        amenities: utilService.getRandomAmenities(),
        labels: [],
        host: {},
        loc: {},
        reviews: [{},{}],
        likedByUsers: []
    }
}
function _createStays() {
    let stays = utilService.loadFromStorage(STORAGE_KEY);
    if (!stays || !stays.length) {
        stays = [stay1,stay2];
        
        utilService.saveToStorage(STORAGE_KEY, stays);
    }
}
