import type Context from "../nodes/Context";
import type Reaction from "../nodes/Reaction";
import { TRANSLATE } from "../nodes/Translations";
import type Evaluator from "./Evaluator";
import Stream from "./Stream";
import type Value from "./Value";

export default class ReactionStream extends Stream {

    readonly reaction: Reaction;

    constructor(evaluator: Evaluator, reaction: Reaction, initialValue: Value) {
        super(
            {
                eng: "A stream of values based on other streams.",
                "😀": TRANSLATE
            }, 
            {
                eng: "reaction",
                "😀": "∆"
            },
            evaluator, 
            initialValue
        );

        this.reaction = reaction;
    }

    start(): void {}
    stop() {}
    getType(context: Context) { return this.values[0].getType(context); }

}