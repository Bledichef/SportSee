/**
 * Représente les performances d'un utilisateur pour un certain type.
 */
export default class UserPerformances {
    /**
     * Crée une instance de UserPerformances.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @param {string} kind - Le type de performances (par exemple, "Cardio").
     * @param {any} data - Les données de performances spécifiques pour ce type.
     */
    constructor(userId, kind, data) {
        this.userId = userId;
        this.kind = kind;
        this.data = data;
    }
}
