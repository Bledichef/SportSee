
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

// const dataKind = {
//     1: { name: 'Cardio', order: 6 },
//     2: { name: 'Energie', order: 5 },
//     3: { name: 'Endurance', order: 4 },
//     4: { name: 'Force', order: 3 },
//     5: { name: 'Vitesse', order: 2 },
//     6: { name: 'Intensité', order: 1 },
//   }
  
//   /**
//    * Class representing the user's performance.
//    */
//   class Performance {
  
//       /**
//        * Creates the user's performance data.
//        * @param   {Number}    data.userId The user's id.
//        * @param   {Object[]}  data.data   The user's performance data.
//        * @param   {Object}    data.kind   Performance kind.
//        */
//       constructor(data) {
//         this.dataKind = dataKind
//         this.performances = data.data.map((item) => {
//           const kind = dataKind[item.kind]
//           return { ...item, ...kind }
//         })
//         .sort((a, b) => (a.order < b.order ? -1 : 1))
//       }
//     }
   
//     export default Performance