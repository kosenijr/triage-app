const BASE_URL = 'https://cw4ccp3r5d.execute-api.us-east-2.amazonaws.com';
const ENV = '/Prod';
export const ROUTES = {
    GET_ALL_PATIENTS: `${BASE_URL}${ENV}/patients`,
    GET_EACH_PATIENT: `${BASE_URL}${ENV}/patient`
}