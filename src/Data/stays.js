const reviews = [
  {
    "id": "r1",
    "txt": "Amazing place! Super clean and great location. The host was very accommodating and provided us with all the necessary information for our stay. The neighborhood is quiet and safe, with easy access to public transportation. Highly recommended for anyone looking for a comfortable and hassle-free stay.",
    "rate": 5,
    "by": {
      "id": "u101",
      "fullname": "Klodet",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg"
    }
  },
  {
    "id": "r2",
    "txt": "The hosts were very welcoming. They provided us with a map of the area and recommended some great local restaurants. The place itself was exactly as described, clean and cozy. Would definitely stay again if we're in the area.",
    "rate": 4,
    "by": {
      "id": "u102",
      "fullname": "Chris",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg"
    }
  },
  {
    "id": "r3",
    "txt": "Good value for money. The apartment is close to public transport, making it easy to get around the city. The host was very responsive and answered all our questions quickly. The only downside was the slightly small bathroom, but it wasn't a major issue.",
    "rate": 4,
    "by": {
      "id": "u103",
      "fullname": "Yoav",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/45.jpg"
    }
  },
  {
    "id": "r4",
    "txt": "The apartment was a bit small but very cozy. It had everything we needed for a short stay, including a fully equipped kitchen. The location is fantastic, with several shops and cafes within walking distance. The host was also very friendly and made sure we had everything we needed.",
    "rate": 3,
    "by": {
      "id": "u104",
      "fullname": "Kim",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/64.jpg"
    }
  },
  {
    "id": "r5",
    "txt": "Fantastic view from the balcony. The apartment is well-decorated and has a very homey feel. We spent a lot of time just relaxing and enjoying the view. The bed was comfortable, and the place was spotless. Highly recommend this place to anyone looking for a relaxing getaway.",
    "rate": 5,
    "by": {
      "id": "u105",
      "fullname": "Binh",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/44.jpg"
    }
  },
  {
    "id": "r6",
    "txt": "Nice place, but a bit noisy at night. The apartment is located in a busy area, so there was some street noise, especially on the weekends. However, the apartment itself was very comfortable and clean. The host was helpful and provided earplugs, which was a nice touch.",
    "rate": 3,
    "by": {
      "id": "u106",
      "fullname": "Duyan",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/32.jpg"
    }
  },
  {
    "id": "r7",
    "txt": "The kitchen was fully equipped and very clean. We were able to cook our meals without any issues. The location is great, with several grocery stores and markets nearby. The apartment was also very quiet, which was a big plus.",
    "rate": 4,
    "by": {
      "id": "u107",
      "fullname": "Kimber",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/4.jpg"
    }
  },
  {
    "id": "r8",
    "txt": "Beautiful decor and very comfortable bed. The apartment felt like a home away from home. The host was very thoughtful and even left us a bottle of wine to welcome us. We had a great time staying here and would definitely come back.",
    "rate": 5,
    "by": {
      "id": "u108",
      "fullname": "Jess",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/23.jpg"
    }
  },
  {
    "id": "r9",
    "txt": "The wifi was a bit slow, but everything else was great. The apartment was clean, well-furnished, and in a convenient location. The host was very responsive and did their best to address the wifi issue during our stay.",
    "rate": 4,
    "by": {
      "id": "u109",
      "fullname": "Irena",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/35.jpg"
    }
  },
  {
    "id": "r10",
    "txt": "Perfect location, right in the city center. We could walk to all the major attractions. The apartment was clean and well-maintained. The host provided us with all the necessary information for our stay and was very friendly.",
    "rate": 5,
    "by": {
      "id": "u110",
      "fullname": "Quantin",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/28.jpg"
    }
  },
  {
    "id": "r11",
    "txt": "Hosts were very responsive and helpful. They provided us with detailed information about the apartment and the surrounding area. The place itself was very comfortable and clean. We had a great stay and would definitely recommend it.",
    "rate": 5,
    "by": {
      "id": "u111",
      "fullname": "Matthew",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/41.jpg"
    }
  },
  {
    "id": "r12",
    "txt": "Great place for a weekend getaway. The apartment is cozy and well-furnished, with a lovely balcony where we could enjoy our morning coffee. The host was very accommodating and even allowed us to check out late. Highly recommend!",
    "rate": 4,
    "by": {
      "id": "u112",
      "fullname": "Yossi",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/11.jpg"
    }
  },
  {
    "id": "r13",
    "txt": "The place was exactly as described. We were very pleased with our stay. The apartment was clean, comfortable, and in a great location. The host was very helpful and provided us with all the information we needed. We would definitely stay here again.",
    "rate": 5,
    "by": {
      "id": "u113",
      "fullname": "Tal",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/12.jpg"
    }
  },
  {
    "id": "r14",
    "txt": "Comfortable stay, but could use better lighting. The apartment was a bit dim, especially in the evenings. Other than that, everything was great. The host was friendly and provided us with extra blankets when we requested them.",
    "rate": 3,
    "by": {
      "id": "u114",
      "fullname": "Meir",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/13.jpg"
    }
  },
  {
    "id": "r15",
    "txt": "Wonderful experience! The hosts were amazing. They went out of their way to make sure we were comfortable and had everything we needed. The apartment was clean, stylish, and in a great location. We would definitely stay here again.",
    "rate": 5,
    "by": {
      "id": "u115",
      "fullname": "James",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/14.jpg"
    }
  },
  {
    "id": "r16",
    "txt": "Good place, but a bit far from main attractions. We had to take public transport to get to the city center, which was a bit inconvenient. However, the apartment itself was very nice and well-maintained. The host was also very friendly.",
    "rate": 3,
    "by": {
      "id": "u116",
      "fullname": "Jean",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/15.jpg"
    }
  },
  {
    "id": "r17",
    "txt": "Spotlessly clean and very stylish. The apartment was beautifully decorated and had everything we needed for a comfortable stay. The host was very accommodating and even provided us with a list of local restaurants and cafes. We had a wonderful time here.",
    "rate": 5,
    "by": {
      "id": "u117",
      "fullname": "Klodet",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/11.jpg"
    }
  },
  {
    "id": "r18",
    "txt": "Good for the price, but could be better maintained. The apartment was a bit dated and could use some upgrades. However, it was clean and comfortable, and the host was very responsive. We enjoyed our stay overall.",
    "rate": 3,
    "by": {
      "id": "u118",
      "fullname": "Kim",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/12.jpg"
    }
  },
  {
    "id": "r19",
    "txt": "The host provided great local recommendations. We tried several of the restaurants they suggested and were not disappointed. The apartment was comfortable and well-located. We had a great time exploring the area.",
    "rate": 4,
    "by": {
      "id": "u119",
      "fullname": "Hadar",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/13.jpg"
    }
  },
  {
    "id": "r20",
    "txt": "Lovely place with a beautiful garden. We spent a lot of time outside enjoying the peaceful surroundings. The apartment was clean, comfortable, and well-equipped. The host was very welcoming and made us feel right at home.",
    "rate": 5,
    "by": {
      "id": "u120",
      "fullname": "Kaodia",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/14.jpg"
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
