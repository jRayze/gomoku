class gomokuTools {
    constructor(){
        this.stonesArray = Array;
        this.activePlayer = String;
        this.eatenBlackStones = Number;
        this.eatenWhiteStones = Number;
        
    }
}

let singleton = gomokuTools;
export function getGomokuTools() {
    if(singleton !== undefined) {
        return singleton;
    }
    else {
        singleton = new gomokuTools();
        return singleton;
    }   
}

