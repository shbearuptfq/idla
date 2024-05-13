// Define the 'Amy' object with an 'id' property
const Amy = {
  id: 3
};

// Function to safely access properties of an object
function safeLogProperty(obj, propName) {
  if (obj && typeof obj === 'object' && propName in obj) {
    console.log(obj[propName]);
  } else {
    console.error(`Property '${propName}' not found on the object.`);
  }
}

// Safely log the 'id' property of the 'Amy' object
safeLogProperty(Amy, 'id');
