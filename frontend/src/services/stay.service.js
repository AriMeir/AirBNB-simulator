
import { stay1,stay2,stay3,stay4,stay5,stay6,stay7,stay8,stay9,stay10,stay11,stay12,stay13,stay14 } from '../Data/stays'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'
import axios from 'axios';


const STORAGE_KEY = 'stay'
const URL = process.env.NODE_ENV === "production" ? 'api/stay' : 'http://localhost:3030/api/stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay
}
window.cs = stayService



async function query(filterBy) {
    
    const { category, location, checkIn, checkOut, totalGuests } = filterBy;
    const url = `${URL}?category=${category}&location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&totalGuests=${totalGuests}`;
    const response = await axios.get(url);
    return response.data

    /* if (filterBy) {
        if (filterBy.category) {
            stays = stays.filter(stay => stay.labels.includes(filterBy.category))
        }
        if (filterBy.location && filterBy.location !== "I'm Flexible") {
            stays = stays.filter(stay => stay.loc.region &&
                stay.loc.region.toLowerCase().includes(filterBy.location.toLowerCase()))
        }
        if (filterBy.totalGuests) {
            stays = stays.filter(stay => stay.capacity >= filterBy.totalGuests)
        }
        if (filterBy.isWish) {
            stays = stays.filter(stay => stay.likedByUsers.length > 0)
        }
    }
    return stays */
}

async function getById(stayId) {
    const response = await axios.get(`${URL}/${stayId}`)
    return response.data
    
}

async function remove(stayId) {
    return storageService.delete(STORAGE_KEY,stayId)
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
