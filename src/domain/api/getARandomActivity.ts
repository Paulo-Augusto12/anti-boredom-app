import axios from "axios";

export async function getARandomActivity() {
  try {
    const baseUrl = `https://www.boredapi.com/api/activity/`;
    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    console.log("Erro na requisição de uma chamada aleatória", error);
  }
}
