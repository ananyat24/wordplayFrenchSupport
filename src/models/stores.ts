import { get, writable, type Writable } from 'svelte/store';
import { examples, makeProject } from '../examples/examples';
import type { StreamChange } from '../runtime/Evaluator';
import type Step from '../runtime/Step';
import type Project from './Project';

// A global store that contains the project currently being viewed.
export const project: Writable<Project> = writable<Project>();

// A global store that contains the current step of the evaluator.
export const currentStep: Writable<Step | undefined> = writable<Step | undefined>(undefined);

// A global store that contains the play/pause mode of the evaluator.
export const playing: Writable<boolean> = writable<boolean>(true);

// A global store that contains the stream history of the evaluator.
export const streams: Writable<StreamChange[]> = writable<StreamChange[]>([]);

function updateEvaluatorStores() {
    const evaluator = get(project)?.evaluator;
    if(evaluator) {
        currentStep.set(evaluator.getCurrentStep());
        playing.set(evaluator.isPlaying())
        streams.set(evaluator.changedStreams);
    }
}

export function updateProject(newProject: Project) {

    const oldProject = get(project);
    if(oldProject) {
        oldProject.cleanup();
        oldProject.evaluator.ignore(updateEvaluatorStores);
    }

    newProject.evaluator.observe(updateEvaluatorStores);
    project.set(newProject);

    if(typeof window !== "undefined")
        window.localStorage.setItem("project", newProject.name);
}

let defaultProject = examples[0].name;
if(typeof window !== "undefined") {
    const priorProject = window.localStorage.getItem("project");
    if(priorProject !== null)
        defaultProject = priorProject;
}

updateProject(makeProject(examples.find(ex => ex.name === defaultProject) ?? examples[0]));