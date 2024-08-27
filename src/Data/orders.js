
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
      fullname: "Einav Sharf",
      imgUrl:"https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg"
    },
    totalPrice: 200,
    startDate: "13/10/2024",
    endDate: "17/10/2024",
    guests: {
      adults: 1,
      kids: 2
    },
    stay: {
      id: "h102",
      name: "House Of Uncle My",
      price: 80.00,
      imgUrl:"https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436827/znh7gqzbwb4wm6bdziy7.jpg"
    },
    loc: {
      country:"US",
      city:"New York"
    },
    msgs: [],
    status: "approved" // approved, rejected, canceled
  }
