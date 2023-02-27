import React, { useState, useEffect } from "react";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";
import { getARandomActivity } from "../../../domain/api/getARandomActivity";

export function useHomePage() {
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  async function handleGetARandomActivity() {
    const apiResponse = await getARandomActivity();

    setActivity(apiResponse);
  }
  return {
    handleGetARandomActivity,
    activity,
  };
}
