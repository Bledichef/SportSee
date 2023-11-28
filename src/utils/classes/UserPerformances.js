
export default class UserPerformances {
    /**
     * Crée une instance de UserPerformances.
     * @param {string} userId - L'identifiant de l'utilisateur.
     * @param {number} kind - Le type de performances (par exemple, 6 pour "Cardio").
     * @param {any} data - Les données de performances spécifiques pour ce type.
     */
    constructor(userId, kind, data) {
        this.userId = userId;
        
        this.kind = kind;
        this.data = data;
    }

 /**
     * Énumération des types de performances avec l'ordre souhaité.
     */
 static PerformanceOrder = {
    Intensite: 1,
    Vitesse: 2,
    Force: 3,
    Endurance: 4,
    Energie: 5,
    Cardio: 6,
     
   
};
    
}
