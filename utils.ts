/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Patient, NewPatient, Gender } from './types';

const parseInput = (input: any, property: string): string => {
    if (!input || !isString(input)) {
        throw new Error("Incorrect or missing input: " + input + ' for property ' + property);
    }
    return input;
};

const isGender = (param: any): Boolean => {
    return Object.values(Gender).includes(param);
}

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const isString = (text: any): boolean => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const isNumeric = (num: any): boolean => {
    return !isNaN(num);
};

const parseSsn = (ssn: any): string => {
    if (!isNumeric(ssn)) throw new Error('Incorrect not numeric: ' + ssn);
    if (!isString(ssn)) return ssn + "";

    return ssn;
};

const toNewPatient = (object: NewPatient): Patient => {
    const newPatient: Patient = {
        id: `${Date.now()}`,
        gender: parseGender(object.gender),
        name: parseInput(object.name, "name"),
        occupation: parseInput(object.occupation, "occupation"),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseSsn(object.ssn)
    };

    return newPatient;
};

export default toNewPatient;
