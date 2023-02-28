import React, { useState, useEffect } from "react";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";
import { getARandomActivity } from "../../../domain/api/getARandomActivity";
import { useNavigate } from "react-router-dom";
export function useHomePage() {
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  const navigate = useNavigate();
  const options = [
    {
      title: "Random Task",
      subtitle: "Get tasks based on a random scope",
      button_title: "Create now",
      navigation: () => {
        navigate("/random/task");
      },
    },
    {
      title: "Focus on a specific area",
      subtitle: "Define a filter and receive tasks based on that",
      button_title: "Define a filter",
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
