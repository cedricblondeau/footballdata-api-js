import axios from 'axios';

const get = async (axiosInstance, resource, params = {}) => {
  const response = await axiosInstance.get(resource, { params });
  return response.data;
};

const getAPIWrapper = apiKey => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': apiKey },
  });

  return {
    getCompetitions: (params = {}) =>
      get(axiosInstance, 'competitions', params),

    getCompetitionStandings: (competitionCode, params = {}) =>
      get(axiosInstance, `competitions/${competitionCode}/standings`, params),

    getCompetitionMatches: (competitionCode, params = {}) =>
      get(axiosInstance, `competitions/${competitionCode}/matches`, params),

    getCompetitionTeams: (competitionCode, params = {}) =>
      get(axiosInstance, `competitions/${competitionCode}/teams`, params),

    getTeamMatches: (teamId, params = {}) =>
      get(axiosInstance, `teams/${teamId}/matches`, params),
  };
};

export { getAPIWrapper };
export default getAPIWrapper;
