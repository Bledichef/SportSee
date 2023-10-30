/**
 * Objet contenant des fonctions pour générer des URL d'accès aux données via une API.
 */

export const urlApi = {
    /**
     * Génère l'URL pour accéder aux données principales d'un utilisateur via une API.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @returns {string} - L'URL d'accès aux données principales via l'API.
     */
    userMainData(id) {
        return `http://localhost:3000/user/${id}`
    },

     /**
     * Génère l'URL pour accéder aux données d'activité d'un utilisateur via une API.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @returns {string} - L'URL d'accès aux données d'activité via l'API.
     */

    userActivity(id) {
        return `http://localhost:3000/user/${id}/activity`
    },

     /**
     * Génère l'URL pour accéder aux données de sessions moyennes d'un utilisateur via une API.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @returns {string} - L'URL d'accès aux données de sessions moyennes via l'API.
     */
    userAverageSessions(id) {
        return `http://localhost:3000/user/${id}/average-sessions`
    },

     /**
     * Génère l'URL pour accéder aux données de performances d'un utilisateur via une API.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @returns {string} - L'URL d'accès aux données de performances via l'API.
     */

    userPerformances(id) {
        return `http://localhost:3000/user/${id}/performance`
    }
}