const axios = require('axios');

async function test() {
  try {
    const reg = await axios.post('https://car-blink-backend.onrender.com/api/auth/register', {
      fullName: "Test User",
      email: "test.user@example.com",
      phone: "9988776655",
      password: "Password@123",
      role: "CUSTOMER"
    });
    console.log("Register response:", reg.data);
  } catch(e) {
    console.log("Register error:", e.response?.data || e.message);
  }

  try {
    const login = await axios.post('https://car-blink-backend.onrender.com/api/auth/login', {
      identifier: "test.user@example.com",
      password: "Password@123"
    });
    console.log("Login response:", login.data);
  } catch(e) {
    console.log("Login error:", e.response?.data || e.message);
  }
}

test();
