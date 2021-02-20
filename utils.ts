/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Patient, NewPatient } from './types';

const parseInput = (input: any, property: string): string => {
    if (!input || !isString(input)) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        throw new Error("Incorrect or missing input: " + input + ' for property ' + property);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return input;
};

const isString = (text: any): boolean => {
    return typeof text === 'string' || text instanceof String;
};

const toNewPatient = (object: NewPatient): Patient => {

    for (let x in object) {
        console.log(x);
    }

    const newPatient: Patient = {
        id: `${Date.now()}`,
        ...object,
        name: parseInput(object.name, "name"),
        occupation: parseInput(object.occupation, "occupation"),

    };

    return newPatient;
};

export default toNewPatient;
