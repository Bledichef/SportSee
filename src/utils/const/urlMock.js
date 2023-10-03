export const urlMock = {
    userMainData(id) {
        return `../data/${id}_main_data.json`
    },
    userActivity(id) {
        return `../data/${id}/user_activity.json`
    },
    userAverageSessions(id) {
        return `../data/${id}/user_average_sessions.json`
    },
    userPerformances(id) {
        return `../data/${id}/user_performance.json`
    }

}