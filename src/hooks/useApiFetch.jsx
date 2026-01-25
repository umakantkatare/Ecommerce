import axios from "axios";
import { useState } from "react";

export const useApiFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const get = async (url, params = {}, limit) => {
    setIsLoading(true);
    try {
      return (await axios.get(url, { params:{
        ...params,
        limit
      } })).data;
    } catch (error) {
      console.log(error);
      throw error
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (url, data) => {
    try {
      return axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const patch = async (url, data) => {
    try {
      return axios.patch(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (url, data) => {
    try {
      return axios.delete(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const put = async (url, data) => {
    try {
      return axios.put(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    get,
    post,
    del,
    patch,
    put,
    isLoading,
  };
};
