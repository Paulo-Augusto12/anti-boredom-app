import axios from "axios";
export async function getAFilteredActivity(
  type?: string,
  participants?: number
) {
  try {
    const baseUrl = `http://www.boredapi.com/api/activity`;

    if (type) {
      const response = await axios.get(`${baseUrl}?type=${type}`);

      return response.data;
    }
    if (participants) {
      const response = await axios.get(
        `${baseUrl}?participants=${participants}`
      );
      return response.data;
    }
  } catch (err) {
    console.log("Erro durante a requisição para a rota filtrada", err);
  }
}
