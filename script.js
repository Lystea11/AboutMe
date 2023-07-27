// <script>
//     function redirectTo(url) {
//         window.location.href = url;
//   }

//   // Custom data list [text, image_url]
//   const dataList = [
//     ["Item", "https://ibb.co/MML6rNS"],
//     ["Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"],
//     "Item", "https://ibb.co/MML6rNS"]
 
//   ];

//   // Function to update the items with custom data
//   function updateItems() {
//     const items = document.querySelectorAll('.item');
//     items.forEach((item, index) => {
//       const textElement = item.querySelector('.item-text');
//       const imageElement = item.querySelector('.item-image');
//       const [text, imageUrl] = dataList[index];
//       textElement.textContent = text;
//       imageElement.src = imageUrl;
//       imageElement.alt = text;
//     });
//   }

//   // Call the function to populate the items when the page loads
//   window.addEventListener('load', updateItems);
// </script>
