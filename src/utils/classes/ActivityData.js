/**
 * Représente les données d'activité d'un utilisateur.
 */
export default class ActivityData {
    /**
     * Crée une instance de ActivityData.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @param {array} sessions - Les données d'activité de l'utilisateur.
     */
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}
