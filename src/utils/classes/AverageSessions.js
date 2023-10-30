/**
 * Représente les sessions moyennes d'un utilisateur.
 */
export default class AverageSessions {
    /**
     * Crée une instance de AverageSessions.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @param {array} sessions - Les sessions moyennes de l'utilisateur.
     */
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
    }
}
