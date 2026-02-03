const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  storageLocation: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Good', 'Low Stock', 'Out of Stock', 'Expired'],
    default: 'Good'
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inventory', inventorySchema);