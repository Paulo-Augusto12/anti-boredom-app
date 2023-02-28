import React, { useState, useEffect } from "react";
import { getAFilteredActivity } from "../../../domain/api/getAFilteredActivity";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";

export function useFilteredActivitiesPage() {
  const apiAvailableTypes = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  async function generateATypeFilteredActivity(type: string) {
    const response = await getAFilteredActivity(type);

    setActivity(response);
  }

  return {
    activity,
    generateATypeFilteredActivity,
    apiAvailableTypes,
  };
}
