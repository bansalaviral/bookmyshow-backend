// - datetime
// - language
// - movie (rel)
// - theatre (rel)
// - seats: [{
//     category: enum
//     price: number
//     arrangement: [[{
//              seatNumber: String,
//              status: AVAILABLE/BOOKED/BLOCKED
//     }, {
//              seatNumber: String,
//              status: AVAILABLE/BOOKED/BLOCKED
//     }]],
//     totalSeats: number,
//     availableSeats: number
// }]

import { Schema, model } from "mongoose";

const ShowSchema = new Schema({
  datetime: {
    type: Date,
    required: true,
  },
  language: String,
  movie: {
    type: Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
  theatre: {
    type: Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
  totalSeats: {
    type: Number,
  },
  availableSeats: {
    type: Number,
  },
  seats: [
    {
      category: String, //30// Gold
      price: Number,
      arrangements: [
        [
          {
            seatNumber: String,
            status: String,
          },
        ],
      ],
    },
  ],
});

const Show = new model("show", ShowSchema);

export default Show;

// {
//     "datetime": "2023-11-06T06:16:34Z",
//     "language": "Hindi",
//     "movie": "65439bebbe4eaad14d9652d7",
//     "theatre": "654621f88725066e9bbd1ffe",
//     "seats": [
//       {
//         "category": "Gold",
//         "price": 250,
//         "arrangement": [
//           [
//             {
//               "seatNumber": "A1",
//               "status": "AVAILABLE"
//             },
//             {
//               "seatNumber": "A2",
//               "status": "AVAILABLE"
//             }
//           ],
//           [
//             {
//               "seatNumber": "B1",
//               "status": "AVAILABLE"
//             },
//             {
//               "seatNumber": "B2",
//               "status": "AVAILABLE"
//             }
//           ]
//         ]
//       },
//       {
//         "category": "Plat",
//         "price": 500,
//         "arrangement": [
//           [
//             {
//               "seatNumber": "C1",
//               "status": "AVAILABLE"
//             },
//             {
//               "seatNumber": "C2",
//               "status": "BLOCKED"
//             }
//           ],
//           [
//             {
//               "seatNumber": "D1",
//               "status": "AVAILABLE"
//             }
//           ]
//         ]
//       }
//     ],
//     "totalSeats": 6,
//     "availableSeats": 2
//   }
///NEW
// {
//   "datetime": "2024-01-26",
//   "language": "Hindi",
//   "movie": "6569b69b2269ad8ef056c43f",
//   "theatre": "6569b053c103c68c4a0dd757",
//   "totalSeats": 20,
//   "availableSeats": 8,
//   "seats": [
//       {
//           "category": "Gold",
//           "price": 500,
//           "arrangements": [
//               [
//                   {"seatNumber": "1A",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "2A",
//                   "status": "BOOKED"
//                   },
//                   {"seatNumber": "3A",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "4A",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "5A",
//                   "status": "BOOKED"
//                   }
//               ]
//           ]
//       },
//       {
//           "category": "Silver",
//           "price": 300,
//           "arrangements": [
//               [
//                   {"seatNumber": "1B",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "2B",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "3B",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "4B",
//                   "status": "AVAILABLE"
//                   }
//               ],
//               [
//                   {"seatNumber": "1C",
//                   "status": "AVAILABLE"
//                   },
//                   {"seatNumber": "2C",
//                   "status": "BOOKED"
//                   },
//                   {"seatNumber": "3C",
//                   "status": "AVAILABLE"
//                   }
//               ]
//           ]
//       }
//   ]
// }
