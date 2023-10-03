export const urlApi = {
    userMainData(id) {
        return `http://localhost:3000/user/${id}`
    },
    userActivity(id) {
        return `http://localhost:3000/user/${id}/activity`
    },
    userAverageSessions(id) {
        return `http://localhost:3000/user/${id}/average-sessions`
    },
    userPerformances(id) {
        return `http://localhost:3000/user/${id}/performance`
    }
}