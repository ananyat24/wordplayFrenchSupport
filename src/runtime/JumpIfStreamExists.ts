import type Reaction from "../nodes/Reaction";
import Bool from "./Bool";
import type Evaluator from "./Evaluator";
import Step from "./Step";
import type Value from "./Value";

export default class JumpIfStreamExists extends Step {

    readonly count: number;

    constructor(count: number, reaction: Reaction) {
        super(reaction);

        this.count = count;
    }
    
    evaluate(evaluator: Evaluator): Value | undefined {

        if(evaluator.hasReactionStream(this.node as Reaction))
            evaluator.jump(this.count);

        return undefined;

    }

    toString() { 
        return super.toString() + " " + this.count;
    }

}