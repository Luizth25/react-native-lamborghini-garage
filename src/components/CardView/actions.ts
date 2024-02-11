import { fetchGetCarData } from "../../api/getCars";
import { TCarModel } from "./types";

export const handlePreviousItem = async (
  carsData: [
    TCarModel | null,
    React.Dispatch<React.SetStateAction<TCarModel | null>>
  ]
) => {
  try {
    if (carsData[0] && carsData[0]?.id > 1) {
      const response = await fetchGetCarData(carsData[0].id - 1);
      if (response) {
        carsData[1](response);
      }
    }
  } catch (error) {
    console.log("Erro ao chamar api", error);
  }
};

export const handleNextItem = async (
  carsData: [
    TCarModel | null,
    React.Dispatch<React.SetStateAction<TCarModel | null>>
  ]
) => {
  try {
    if (carsData[0] && carsData[0]?.id < 10) {
      const response = await fetchGetCarData(carsData[0].id + 1);
      if (response) {
        carsData[1](response);
      }
    }
  } catch (error) {
    console.log("Erro ao chamar api", error);
  }
};

//Fazer uma solicitação para API
export const LoadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<TCarModel | null>>
) => {
  const response = await fetchGetCarData(id);
  try {
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Erro ao buscar da API", error);
  }
};
