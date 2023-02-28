import { useEffect, useState } from "react";
import { IDefaultBoredApiResponse } from "../../../domain/interfaces/IDefaultBoredApiResponse";
import { getARandomActivity } from "../../../domain/api/getARandomActivity";

export function useRandomActivityPage() {
  const [activity, setActivity] = useState<IDefaultBoredApiResponse>();

  async function handleGetARandomActivity() {
    const apiResponse = await getARandomActivity();

    setActivity(apiResponse);
  }

  useEffect(() => {
    handleGetARandomActivity();
  }, []);
  return {
    handleGetARandomActivity,
    activity,
  };
}
