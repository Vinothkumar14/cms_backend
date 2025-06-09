// export default {
//   beforeCreate(event: { params: { data: any } }) {
//     const { data } = event.params;

//     if (!('publishedAt' in data) || data.publishedAt !== null) {
//       data.publishedAt = null;
//     }
//   },

//   beforeUpdate(event: { params: { data: any } }) {
//     const { data } = event.params;

//     if (!('publishedAt' in data) || data.publishedAt !== null) {
//       data.publishedAt = null;
//     }
//   },
// };
// // 