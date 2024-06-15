import axios from "axios";

export const TesisApi= axios.create({
     baseURL:'https://localhost:7211/api/'
})