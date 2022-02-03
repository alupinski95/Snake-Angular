
export class GamePlayEventModel {
    instructionName: string;
    instructionDate: number;
    constructor(instruction: string, timestamp: number) {
        this.instructionName = instruction;
        this.instructionDate = timestamp;
    }
}