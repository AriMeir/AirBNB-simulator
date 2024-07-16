
import { stay1,stay2,stay3,stay4,stay5,stay6,stay7,stay8,stay9,stay10,stay11,stay12,stay13,stay14 } from '../Data/stays'
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
    return storageService.get(stayId)
}

async function remove(stayId) {
    return storageService.delete(stayId)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        console.log(stay._id);
        savedStay = await storageService.put(STORAGE_KEY, stay)
    } else {
        savedStay = await storageService.post(STORAGE_KEY, stay)
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
        stays = [stay1,stay2,stay3,stay4,stay5,stay6,stay7,stay8,stay9,stay10,stay11,stay12,stay13,stay14];

        utilService.saveToStorage(STORAGE_KEY, stays);
    }
}
