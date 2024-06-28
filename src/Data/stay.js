export const stay = {
  _id: "s101",
  name: "Ribeira Charming Duplex",
  type: "House",
  imgUrls: ["https://e26e9b.jpg", "otherImg.jpg"],
  price: 80.00,
  summary: "Fantastic duplex apartment...",
  capacity: 8,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  host: {
    id: "u101",
    fullname: "Davit Pok",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    country: "Portugal",
    countryCode: "PT",
    city: "Lisbon",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [
    {
      id: "madeId",
      txt: "Very helpful hosts. Cooked traditional...",
      rate: 4,
      by: {
        _id: "u102",
        fullname: "user2",
        imgUrl: "/img/img2.jpg"
      }
    }
  ],
  likedByUsers: ['mini-user']
}

export const stay1 = {
  _id: "s102",
  name: "Ribeira Charming Duplex",
  type: "House",
  imgUrls: ["https://e26e9b.jpg", "otherImg.jpg"],
  price: 80.00,
  summary: "Fantastic duplex apartment...",
  capacity: 8,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  host: {
    _id: "u101",
    fullname: "Davit Pok",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    country: "Portugal",
    countryCode: "PT",
    city: "Lisbon",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [
    {
      id: "madeId",
      txt: "Very helpful hosts. Cooked traditional...",
      rate: 4,
      by: {
        _id: "u102",
        fullname: "user2",
        imgUrl: "/img/img2.jpg"
      }
    }
  ],
  likedByUsers: ['mini-user']
}

export const stay2 = {
  _id: "s103",
  name: "Ribeira Charming Duplex",
  type: "House",
  imgUrls: ["https://e26e9b.jpg", "otherImg.jpg"],
  price: 80.00,
  summary: "Fantastic duplex apartment...",
  capacity: 8,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Top of the world",
    "Trending",
    "Play",
    "Tropical"
  ],
  host: {
    id: "u101",
    fullname: "Davit Pok",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    country: "Portugal",
    countryCode: "PT",
    city: "Lisbon",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [
    {
      id: "madeId",
      txt: "Very helpful hosts. Cooked traditional...",
      rate: 4,
      by: {
        id: "u102",
        fullname: "user2",
        imgUrl: "/img/img2.jpg"
      }
    }
  ],
  likedByUsers: ['mini-user']
}

export const orders = [
  {
    _id: "o1225",
    hostId: "u102",
    buyer: {
      _id: "u101",
      fullname: "User 1"
    },
    totalPrice: 160,
    startDate: "2025/10/15",
    endDate: "2025/10/17",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      id: "h102",
      name: "House Of Uncle My",
      price: 80.00
    },
    msgs: [],
    status: "pending" // approved, rejected
  }
]
export const orders1 = 
  {
    _id: "o1226",
    hostId: "u102",
    buyer: {
      _id: "u101",
      fullname: "User 1"
    },
    totalPrice: 160,
    startDate: "2025/10/16",
    endDate: "2025/10/17",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      id: "h102",
      name: "House Of Uncle My",
      price: 80.00
    },
    msgs: [],
    status: "pending" // approved, rejected
  }

export const orders2 = 
  {
    _id: "o1227",
    hostId: "u102",
    buyer: {
      _id: "u101",
      fullname: "User 1"
    },
    totalPrice: 160,
    startDate: "2024/10/15",
    endDate: "2024/10/17",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      id: "h102",
      name: "House Of Uncle My",
      price: 80.00
    },
    msgs: [],
    status: "complete" // approved, rejected
  }


export const users = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    username: "user1",
    password: "secret"
  },
  {
    _id: "u102",
    fullname: "User 2",
    imgUrl: "/img/img2.jpg",
    username: "user2",
    password: "secret",
  }
]
// Homepage: TOP categories: Best Rate / Houses / Kitchen  - show all - link to Explore
// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// stayService.query({type: 'House'})

// UserDetails
//  basic info
//  visitedStays => orderService.query({userId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})

// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering



// Example - figuring up if the user is an owner:
// userService.login()
  //  const userStays = stayService.query({ownerId: loggeinUser._id})
  //  loggeinUser.isOwner = userStays.length > 0
