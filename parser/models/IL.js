export default class IL {
  /** * @type {string}*/
  $type;
  /** * @type {string} */
  core;
  /** * @type {string}*/
  name;
  /** * @type {string|array|object}*/
  content;
  /** * @type {IL[]} */
  Commands;
  /** @type {object} */
  "extra-attribute" = {};
  addExtraAttribute(key, value) {
    this["extra-attribute"][key] = value;
  }
  addCustomProperty(key, value) {
    this[key] = value;
  }
  pushToFaces(face) {
    if (!this.faces) {
      this.addCustomProperty(faces, []);
    }
    this.faces.push(face);
  }
  filter(obj = this){
    const res = {}
    const Commands = obj.Commands
    delete obj.Commands
    for (const prop in obj){
      
      if(!obj[prop] || obj[prop] == {} || obj[prop] ==[]|| obj[prop] ==""){
        continue
      }
      res[prop] = obj[prop]
    }
    const finalCommands = []
    if(Commands){
        Commands.forEach((element)=>{
       if(element ){
        const object =this.toFilteredObject(element)
        finalCommands.push(object)
       }
     })
     res.Commands = finalCommands
     
    }else{
      res.Commands =[]
    }return res

  }
  toFilteredObject(obj = this) {
    const filteredObject = {};

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const value = obj[prop];

        // Check if the value is an empty object or an empty array
        if (
          (typeof value === "object" && Object.keys(value).length === 0) || // Check for empty object
          (Array.isArray(value) && value.length === 0) // Check for empty array
        ) {
          continue; // Skip this property and do not include it in the filtered object
        }

        // If the value is an object or array, recursively filter its properties or elements
        if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length>0) {
          filteredObject[prop] = this.toFilteredObject(value);
        } else if (Array.isArray(value)) {
          filteredObject[prop] = value.map((item) => {
            if (typeof item === "object" && Object.keys(item).length>0 ) {
              return this.toFilteredObject(item);
            }
            return item;
          });
        } else {
          // For non-empty primitive values, include them in the filtered object
          filteredObject[prop] = value;
        }
      }
    }

    return filteredObject;
  }
  
}
