import api from "./config";

const getAllDigimons = async () => {
    const {data} = await api.get("digimon")
    return data
}

export default getAllDigimons