// const Tabulator = require("./node_modules/tabulator-tables");
// require("./style.css");
// import Tabulator from "./node_modules/tabulator-tables";
// import "./style.css";

console.log("Hi...");

// const table = new Tabulator("#app", {
//   layout: "fitColumns",
//   columnDefaults: {
//     title: "",
//     resizable: false,
//   },
//   columns: [
//     { title: "App Name", field: "name", vertAlign: "middle" },
//     { title: "Theme", field: "theme", vertAlign: "middle" },
//     { title: "Sector", field: "sector", vertAlign: "middle" },
//   ],
//   sortMode: "remote",
//   columnHeaderSortMulti: false,
//   pagination: true,
//   paginationMode: "remote",
//   paginationInitialPage: 1,
//   paginationButtonCount: 3,
//   paginationSize: 10,
//   paginationSizeSelector: [10, 25, 50, 75, 100],
//   ajaxURL: "dummy_string_url",
//   ajaxRequestFunc: ajaxRequestFunc,
// });

// function ajaxRequestFunc(url, config, params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const response = {
//         totalPassengers: 87024,
//         last_page: 8703,
//         data: Array(params.size)
//           .fill(1)
//           .map((item, index) => {
//             const count = (
//               params.page * params.size -
//               params.size +
//               (index + 1)
//             )
//               ?.toString()
//               ?.padStart(4, "0");
//             item = {
//               name: "App #" + count,
//               theme: "Theme #" + count,
//               sector: "Sector #" + count,
//             };
//             return item;
//           }),
//       };
//       response.data = response.data.map((item, index) => {
//         const count = (params.page * params.size - params.size + (index + 1))
//           ?.toString()
//           ?.padStart(4, "0");
//         item.name = "App #" + count;
//         item.theme = "Theme #" + count;
//         item.sector = "Sector #" + count;
//         return item;
//       });

//       console.log(response);
//       resolve(response);
//     });
//   });
// }
