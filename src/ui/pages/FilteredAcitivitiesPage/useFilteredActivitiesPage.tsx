import React, { useState, useEffect } from "react";
import { getARandomActivity } from "../../../domain/api/getARandomActivity";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";

export function useFilteredActivitiesPage() {
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  async function generateAActivity() {
    const response = await getARandomActivity();

    if (response) {
      setActivity(response);
    }
  }

  useEffect(() => {
    generateAActivity();
  }, []);

  return {
    activity,
    generateAActivity,
  };
}
