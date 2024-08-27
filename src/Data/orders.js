
export const orders = [
  {
    _id: "o1225",
    host: {
      hostId: "u102",
      hostName: "Ari Meir",
      hostImgUrl:""
    },
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
    loc: {
      country:"US",
      city:"New York"
    },
    msgs: [],
    status: "pending" // approved, rejected
  }
]
export const orders1 =
  {
    _id: "o1226",
    host: {
      hostId: "u102",
      hostName: "Ari Meir",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg",
    },
    buyer: {
      _id: "u101",
      fullname: "Einav Sharf",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg"
    },
    totalPrice: 160,
    startDate: "13/10/2025",
    endDate: "17/10/2025",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      id: "h102",
      name: "House Of Uncle My",
      price: 80.00,
      imgUrl:"https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg"
    },
    loc: {
      country:"US",
      city:"New York"
    },
    msgs: [],
    status: "pending" // approved, rejected, canceled
  }

export const orders2 =
  {
    _id: "o1227",
    host: {
      hostId: "u102",
      hostName: "Ari Meir",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg",
    },
    buyer: {
      _id: "u101",
      fullname: "Rita Ora",
      imgUrl:"https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/11.jpg"
    },
    totalPrice: 200,
    startDate: "12/10/2024",
    endDate: "15/10/2024",
    guests: {
      adults: 2,
      kids: 2
    },
    stay: {
      id: "h107",
      name: "House Of Joy",
      price: 80.00,
      imgUrl:"https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436827/znh7gqzbwb4wm6bdziy7.jpg"
    },
    loc: {
      country:"US",
      city:"LA"
    },
    msgs: [],
    status: "approved" // approved, rejected, canceled
  }

export const orders3 =
  {
    _id: "o1228",
    host: {
      hostId: "u102",
      hostName: "Ari Meir",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg",
    },
    buyer: {
      _id: "u201",
      fullname: "Tzvika Pik",
      imgUrl:"https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/67.jpg"
    },
    totalPrice: 400,
    startDate: "13/08/2024",
    endDate: "20/08/2024",
    guests: {
      adults: 2,
      kids: 3
    },
    stay: {
      id: "h103",
      name: "Apartment with view",
      price: 70.00,
      imgUrl:"https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436983/pivldxmrxssnhyzixhes.jpg"
    },
    loc: {
      country:"Canada",
      city:"Toronto"
    },
    msgs: [],
    status: "rejected" // approved, rejected, canceled
  }

export const orders4 =
  {
    _id: "o1338",
    host: {
      hostId: "u102",
      hostName: "Ari Meir",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg",
    },
    buyer: {
      _id: "u201",
      fullname: "Bibi Netaniahu",
      imgUrl:"https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/13.jpg"
    },
    totalPrice: 350,
    startDate: "02/09/2024",
    endDate: "08/09/2024",
    guests: {
      adults: 2,
      kids: 3
    },
    stay: {
      id: "h108",
      name: "Apartment near the sea",
      price: 105.00,
      imgUrl:"https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436509/rii32aibnhkoeejsohie.jpg"
    },
    loc: {
      country:"Brazil",
      city:"Sau Paulo"
    },
    msgs: [],
    status: "canceled" // approved, rejected, canceled
  }
