import axios from 'axios';

const API_URL = 'https://moodguard-api.onrender.com/chat';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data;
  } catch (error) {
    console.error('Error al enviar el mensaje:', error.response || error.message || error);
    throw error;
  }
};
