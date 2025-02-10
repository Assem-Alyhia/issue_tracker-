import axiosInstance from './axiosInstance';
import apiEndpoints from './apiEndpoints';

const getIssues = () => axiosInstance.get(apiEndpoints.fetchIssues);
const getIssueById = (id) => axiosInstance.get(`${apiEndpoints.getIssueById}${id}`);
const createIssue = (data) => axiosInstance.post(apiEndpoints.createIssue, data);
const editIssue = (id, data) => axiosInstance.put(`${apiEndpoints.editIssue}${id}`, data);
const deleteIssue = (id) => axiosInstance.delete(`${apiEndpoints.deleteIssue}${id}`);

export default {
    getIssues,
    getIssueById,
    createIssue,
    editIssue,
    deleteIssue,
};
