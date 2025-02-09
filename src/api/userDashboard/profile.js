import axiosInstance from '../axiosInstance';
import apiEndpoints from '../apiEndpoints';


const getProfileData = () => axiosInstance.get(apiEndpoints.profile);


export default {
    getProfileData,
}