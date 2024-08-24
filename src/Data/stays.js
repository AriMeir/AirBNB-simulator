const reviews = [
  {
    "id": "r1",
    "txt": "Amazing place! Super clean and great location.",
    "rate": 5,
    "by": {
      "id": "u101",
      "fullname": "user1",
      "imgUrl": "/img/img1.jpg"
    }
  },
  {
    "id": "r2",
    "txt": "The hosts were very welcoming. Would definitely stay again.",
    "rate": 4,
    "by": {
      "id": "u102",
      "fullname": "user2",
      "imgUrl": "/img/img2.jpg"
    }
  },
  {
    "id": "r3",
    "txt": "Good value for money. Close to public transport.",
    "rate": 4,
    "by": {
      "id": "u103",
      "fullname": "user3",
      "imgUrl": "/img/img3.jpg"
    }
  },
  {
    "id": "r4",
    "txt": "The apartment was a bit small but very cozy.",
    "rate": 3,
    "by": {
      "id": "u104",
      "fullname": "user4",
      "imgUrl": "/img/img4.jpg"
    }
  },
  {
    "id": "r5",
    "txt": "Fantastic view from the balcony. Highly recommend!",
    "rate": 5,
    "by": {
      "id": "u105",
      "fullname": "user5",
      "imgUrl": "/img/img5.jpg"
    }
  },
  {
    "id": "r6",
    "txt": "Nice place, but a bit noisy at night.",
    "rate": 3,
    "by": {
      "id": "u106",
      "fullname": "user6",
      "imgUrl": "/img/img6.jpg"
    }
  },
  {
    "id": "r7",
    "txt": "The kitchen was fully equipped and very clean.",
    "rate": 4,
    "by": {
      "id": "u107",
      "fullname": "user7",
      "imgUrl": "/img/img7.jpg"
    }
  },
  {
    "id": "r8",
    "txt": "Beautiful decor and very comfortable bed.",
    "rate": 5,
    "by": {
      "id": "u108",
      "fullname": "user8",
      "imgUrl": "/img/img8.jpg"
    }
  },
  {
    "id": "r9",
    "txt": "The wifi was a bit slow, but everything else was great.",
    "rate": 4,
    "by": {
      "id": "u109",
      "fullname": "user9",
      "imgUrl": "/img/img9.jpg"
    }
  },
  {
    "id": "r10",
    "txt": "Perfect location, right in the city center.",
    "rate": 5,
    "by": {
      "id": "u110",
      "fullname": "user10",
      "imgUrl": "/img/img10.jpg"
    }
  },
  {
    "id": "r11",
    "txt": "Hosts were very responsive and helpful.",
    "rate": 5,
    "by": {
      "id": "u111",
      "fullname": "user11",
      "imgUrl": "/img/img11.jpg"
    }
  },
  {
    "id": "r12",
    "txt": "Great place for a weekend getaway.",
    "rate": 4,
    "by": {
      "id": "u112",
      "fullname": "user12",
      "imgUrl": "/img/img12.jpg"
    }
  },
  {
    "id": "r13",
    "txt": "The place was exactly as described. Very pleased.",
    "rate": 5,
    "by": {
      "id": "u113",
      "fullname": "user13",
      "imgUrl": "/img/img13.jpg"
    }
  },
  {
    "id": "r14",
    "txt": "Comfortable stay, but could use better lighting.",
    "rate": 3,
    "by": {
      "id": "u114",
      "fullname": "user14",
      "imgUrl": "/img/img14.jpg"
    }
  },
  {
    "id": "r15",
    "txt": "Wonderful experience! The hosts were amazing.",
    "rate": 5,
    "by": {
      "id": "u115",
      "fullname": "user15",
      "imgUrl": "/img/img15.jpg"
    }
  },
  {
    "id": "r16",
    "txt": "Good place, but a bit far from main attractions.",
    "rate": 3,
    "by": {
      "id": "u116",
      "fullname": "user16",
      "imgUrl": "/img/img16.jpg"
    }
  },
  {
    "id": "r17",
    "txt": "Spotlessly clean and very stylish.",
    "rate": 5,
    "by": {
      "id": "u117",
      "fullname": "user17",
      "imgUrl": "/img/img17.jpg"
    }
  },
  {
    "id": "r18",
    "txt": "Good for the price, but could be better maintained.",
    "rate": 3,
    "by": {
      "id": "u118",
      "fullname": "user18",
      "imgUrl": "/img/img18.jpg"
    }
  },
  {
    "id": "r19",
    "txt": "The host provided great local recommendations.",
    "rate": 4,
    "by": {
      "id": "u119",
      "fullname": "user19",
      "imgUrl": "/img/img19.jpg"
    }
  },
  {
    "id": "r20",
    "txt": "Lovely place with a beautiful garden.",
    "rate": 5,
    "by": {
      "id": "u120",
      "fullname": "user20",
      "imgUrl": "/img/img20.jpg"
    }
  }
]

const imgUrls = ["https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg", "https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436827/znh7gqzbwb4wm6bdziy7.jpg","https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436281/doubvhbpwjfx81yfzpxq.jpg","	https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436453/ndl8odasqgnyquvsbalp.jpg","https://res.cloudinary.com/dmtlr2viw/image/upload/v1663437040/oarfkdxx7gyyvcynvwko.jpg"]

export const stay1 = {
  _id: "s101",
  name: "Luxury Urban Loft",
  type: "House",
  imgUrls: imgUrls,
  price: 325,
  summary: "Luxury Urban Loft - This chic loft in a trendy neighborhood boasts high ceilings, industrial decor, and a rooftop terrace with cityscape views.",
  capacity: 4,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Bed & breakfasts","Luxe","Top of the world"
  ],
  host: {
    id: "u101",
    fullname: "Laura Martinez",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Portugal",
    countryCode: "PT",
    city: "Lisbon",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],
  likedByUsers: ['mini-user']
}

export const stay2 = {
  _id: "s102",
  name: "Cozy Downtown Apartment",
  type: "Apartment",
  imgUrls: imgUrls,
  price: 203,
  summary: "Cozy Downtown Apartment - Located in the heart of the city, this modern apartment offers stunning skyline views, a fully equipped kitchen, and easy access to local attractions.",
  capacity: 2,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Farms","Skiing","Amazing pools"
  ],
  host: {
    _id: "u101",
    fullname: "Emily Johnson",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "United States",
    country: "United States",
    countryCode: "PT",
    city: "LA",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: ['mini-user']
}

export const stay3 = {
  _id: "s103",
  name: "Beachfront Bungalow",
  type: "House",
  imgUrls: imgUrls,
  price: 194,
  summary: "Beachfront Bungalow - Enjoy the serene sound of waves in this charming bungalow right on the beach. Perfect for a romantic getaway or a relaxing vacation.",
  capacity: 3,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Lakefront","Islands","Tropical"
  ],
  host: {
    id: "u101",
    fullname: "Michael Brown",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "United States",
    country: "United States",
    countryCode: "PT",
    city: "New York",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay4 = {
  _id: "s104",
  name: "Mountain Cabin Retreat",
  type: "Apartment",
  imgUrls: imgUrls,
  price: 387,
  summary: "Mountain Cabin Retreat - Nestled in the mountains, this rustic cabin features a wood-burning fireplace, hiking trails, and breathtaking views of the valley below.",
  capacity: 7,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Vineyards","Mansions","Lake"
  ],
  host: {
    id: "u101",
    fullname: "Sarah Davis",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Canada",
    countryCode: "PT",
    city: "Toronto",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay5 = {
  _id: "s105",
  name: "Historic Victorian Home",
  type: "Villa",
  imgUrls: imgUrls,
  price: 444,
  summary: "Historic Victorian Home - Experience a piece of history in this beautifully restored Victorian house, complete with antique furnishings and a lush garden.",
  capacity: 12,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Beach","Beachfront","Vineyards","Mansions"
  ],
  host: {
    id: "u101",
    fullname: "David Wilson",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "South America",
    country: "Brazil",
    countryCode: "PT",
    city: "São Paulo",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay6 = {
  _id: "s106",
  name: "Countryside Cottage",
  type: "House",
  imgUrls: imgUrls,
  price: 98,
  summary: "Countryside Cottage - Escape to the peaceful countryside in this quaint cottage surrounded by rolling hills and picturesque farmland.",
  capacity: 6,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Surfing","Bed & breakfasts","Luxe"
  ],
  host: {
    id: "u101",
    fullname: "James Anderson",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "South America",
    country: "Argentina",
    countryCode: "PT",
    city: "Buenos Aires",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay7 = {
  _id: "s107",
  name: "Modern Studio Apartment",
  type: "Apartment",
  imgUrls: imgUrls,
  price: 153,
  summary: "Modern Studio Apartment - Ideal for solo travelers or couples, this sleek studio offers all the modern amenities, including a smart TV and high-speed Wi-Fi.",
  capacity: 2,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Earth homes","Amazing views","Desert"
  ],
  host: {
    id: "u101",
    fullname: "Davit Pok",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "France",
    country: "France",
    countryCode: "PT",
    city: "Paris",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay8 = {
  _id: "s108",
  name: "Tropical Villa with Pool",
  type: "Villa",
  imgUrls: imgUrls,
  price: 100,
  summary: "Tropical Villa with Pool - Luxurious villa in a tropical paradise, featuring a private pool, lush gardens, and close proximity to sandy beaches.",
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
    "Skiing","Amazing pools","Earth homes"
  ],
  host: {
    id: "u101",
    fullname: "James Anderson",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Germany",
    countryCode: "PT",
    city: "Berlin",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay9 = {
  _id: "s109",
  name: "Family-Friendly Suburban House",
  type: "House",
  imgUrls: imgUrls,
  price: 300,
  summary: "Family-Friendly Suburban House - Spacious home in a quiet suburb, perfect for families with children. Features a large backyard, play area, and nearby parks.",
  capacity: 6,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Lake","Treehouses","Farms"
  ],
  host: {
    id: "u101",
    fullname: "Sarah Davis",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "Italy",
    country: "Italy",
    countryCode: "PT",
    city: "Rome",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay10 = {
  _id: "s1010",
  name: "Elegant Downtown Condo",
  type: "Apartment",
  imgUrls: imgUrls,
  price: 230,
  summary: "Elegant Downtown Condo - Stylish condo in the city center, with access to a pool, gym, and concierge services. Close to shopping and dining options.",
  capacity: 4,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Earth homes","Amazing views","Desert"
  ],
  host: {
    id: "u101",
    fullname: "Laura Martinez",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Spain",
    countryCode: "PT",
    city: "Madrid",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay11 = {
  _id: "s1011",
  name: "Spacious Downtown Penthouse",
  type: "Villa",
  imgUrls: imgUrls,
  price: 425,
  summary: "Spacious Downtown Penthouse - This expansive penthouse offers panoramic city views, a gourmet kitchen, and stylish decor, perfect for an upscale urban experience.",
  capacity: 10,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Earth homes","Amazing views","Desert"
  ],
  host: {
    id: "u101",
    fullname: "Michael Brown",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Thailand",
    countryCode: "PT",
    city: "Bangkok",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay12 = {
  _id: "s1012",
  name: "Eco-Friendly Tiny House",
  type: "House",
  imgUrls: imgUrls,
  price: 322,
  summary: "Eco-Friendly Tiny House - Stay green in this eco-friendly tiny house made from sustainable materials, with solar power and a minimalist design.",
  capacity: 3,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Islands","Tropical","Camping"
  ],
  host: {
    id: "u101",
    fullname: "Olivia Young",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: "Middle East",
    country: "Israel",
    countryCode: "PT",
    city: "Tel Aviv",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay13 = {
  _id: "s1013",
  name: "Lakefront Log Cabin",
  type: "House",
  imgUrls: imgUrls,
  price: 260,
  summary: "Lakefront Log Cabin - Unwind in this cozy log cabin right on the lake, with opportunities for fishing, kayaking, and enjoying the great outdoors.",
  capacity: 2,
  amenities: [
    "TV",
    "Wifi",
    "Kitchen",
    "Smoking allowed",
    "Pets allowed",
    "Cooking basics"
  ],
  labels: [
    "Surfing","Bed & breakfasts","Luxe","Top of the world"
  ],
  host: {
    id: "u101",
    fullname: "Olivia Young",
    imgUrls: imgUrls,
  },
  loc: {
    region: null,
    country: "Holand",
    countryCode: "PT",
    city: "Amsterdam",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}

export const stay14 = {
  _id: "s1014",
  name: "Tropical Villa with Pool",
  type: "Villa",
  imgUrls: imgUrls,
  price: 200,
  summary: "Tropical Villa with Pool - Luxurious villa in a tropical paradise, featuring a private pool, lush gardens, and close proximity to sandy beaches.",
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
    "Surfing","Bed & breakfasts","Luxe","Top of the world"
  ],
  host: {
    id: "u101",
    fullname: "Davit Pok",
    imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
  },
  loc: {
    region: null,
    country: "Japan",
    countryCode: "PT",
    city: "Tokyo",
    address: "17 Kombo st",
    lat: -8.61308,
    lng: 41.1413
  },
  reviews: [reviews],

  likedByUsers: []
}



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
