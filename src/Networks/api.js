import { axiosPrivate } from "./axios";

export const getSkills = async () => {
    let res = await axiosPrivate.get("/skill/getskills");
    return res.data;
}
export const getProjects = async () => {
    let res = await axiosPrivate.get("/project/getlist");
    return res.data;
}