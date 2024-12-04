import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (!config.__isRetryRequest) {
      config.__isRetryRequest = true;
      try {
        console.warn("Повторный запрос из-за ошибки:", error.message);
        return axiosInstance(config);
      } catch (retryError: any) {
        console.error("Ошибка после повторного запроса:", retryError.message);
        return Promise.reject(retryError);
      }
    }

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`📤 Отправка запроса на ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Ошибка при отправке запроса:", error.message);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`📥 Ответ получен с ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error(
      `Ошибка с ${error.config?.url || "неизвестный URL"}:`,
      error.message,
    );
    return Promise.reject(error);
  },
);

export default axiosInstance;
