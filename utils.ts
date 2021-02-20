/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Patient, NewPatient } from './types';

const parseName = (name: any): string => {
    if (!name || !isString(name)) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        throw new Error("Incorrect or missing name: " + name);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return name;
};

const isString = (text: any): boolean => {
    return typeof text === 'string' || text instanceof String;
};

const toNewPatient = (object: NewPatient): Patient => {


    const newPatient: Patient = {
        id: `${Date.now()}`,
        ...object,
        name: parseName(object.name),
    };

    return newPatient;
};

export default toNewPatient;
