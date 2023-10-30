/**
 * Représente les données principales d'un utilisateur.
 */
export default class MainData {
    /**
     * Crée une instance de MainData.
     * @param {string} id - L'identifiant de l'utilisateur.
     * @param {object} userInfos - Les informations sur l'utilisateur.
     * @param {number} score - Le score de l'utilisateur.
     * @param {number} todayScore - Le score de l'utilisateur aujourd'hui.
     * @param {object} keyData - Les données clés de l'utilisateur.
     */
    constructor(id, userInfos, score, todayScore, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.score = score;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }
}
