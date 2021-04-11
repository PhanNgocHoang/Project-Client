import { useEffect } from "react";
import { useAsync } from "react-hook-async";
import { useDispatch } from "react-redux";
import axios from "axios";

const fetchMeApi = (jwt) => {
  return axios
    .get("https://e-libraryapi.azurewebsites.net/auth/me", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + jwt,
      },
      proxy: {
        host: "103.82.24.170",
        port: 3000,
      },
    })
    .then((res) => res.data);
};
export const useAuth = () => {
  const dispatch = useDispatch();
  const [fetchMeApiData, executeFetchMe] = useAsync({}, fetchMeApi);
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    executeFetchMe(jwt).then((user) => {
      dispatch({ type: "DATA_LOGIN", payload: user });
      localStorage.setItem("_id", user._id);
    });
  }, [executeFetchMe, dispatch]);
  return fetchMeApiData;
};
