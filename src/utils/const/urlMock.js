/**
 * Objet contenant des fonctions pour générer des URL d'accès aux données mockées d'un utilisateur.
 */

export const urlMock = {
    /**
     * Génère l'URL pour les données principales d'un utilisateur.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @returns {string} - L'URL d'accès aux données principales.
     */
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