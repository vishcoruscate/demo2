import { apis } from "service";

const COMMON_URL = `https://63ea16373363c87003613c2e.mockapi.io/`;

const API_URLS = { GET_COMPANIES: `${COMMON_URL}companies` };

export const getCompanies = (payload) =>
  apis.get(API_URLS.GET_COMPANIES, payload);
