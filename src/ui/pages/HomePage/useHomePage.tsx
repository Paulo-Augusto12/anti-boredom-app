import React, { useState, useEffect } from "react";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";
import { getARandomActivity } from "../../../domain/api/getARandomActivity";
import { useNavigate } from "react-router-dom";
export function useHomePage() {
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  const navigate = useNavigate();
  const options = [
    {
      title: "Tarefa Aleatória",
      subtitle: "Gere  tarefas dentro de um escopo aleatório",
      button_title: "Gerar Agora",
      navigation: () => {
        navigate("/random/task");
      },
    },
    {
      title: "Foque em uma área",
      subtitle: "Gere  tarefas com base em um filtro que você definir",
      button_title: "Defina seu filtro",
      navigation: () => {
        navigate("/filtered/task");
      },
    },
  ];

  async function handleGetARandomActivity() {
    const apiResponse = await getARandomActivity();

    setActivity(apiResponse);
  }
  return {
    handleGetARandomActivity,
    activity,
    options,
  };
}
