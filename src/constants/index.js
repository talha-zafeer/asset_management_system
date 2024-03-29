export const apiEndPoints = {
  CREATE_ALL_DAY_EVENT: "/events/create-all-day-event",
  GET_EVENTS: "http://localhost:8000/events",
  LOGIN: "http://localhost:8000/users/login",
  LOG_OUT: "http://localhost:8000/logout",
  DELETE: "http://localhost:8000/events/delete",
  UPDATE: "http://localhost:8000/events/update",
};

export const apiMethods = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const apiHeaders = {
  HEADERS: { "Content-Type": "application/json" },
  LOGIN_HEADERS: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
};
