/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { Patient, NewPatient, Gender, Entry, BaseEntry } from './types';
// import { Patient, NewPatient, Gender, Entry, EntryTypes, BaseEntry } from './types';

const parseInput = (input: any, property: string): string => {
    if (!input || !isString(input)) {
        throw new Error("Incorrect or missing input: " + input + ' for property ' + property);
    }
    return input;
};

const isGender = (param: any): boolean => {
    return Object.values(Gender).includes(param);
};

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

export const toNewPatient = (object: NewPatient): Patient => {
    const newPatient: Patient = {
        id: `${Date.now()}`,
        gender: parseGender(object.gender),
        name: parseInput(object.name, "name"),
        occupation: parseInput(object.occupation, "occupation"),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        entries: []
    };

    return newPatient;
};

const throwError = (property: string) => {
    throw new Error(`Missing required property: ${property}`);
};

export const toNewEntry = (object: Entry): Entry | Error => {
    if (!object.date) {
        return throwError('date');
    }
    if (!object.description) {
        return throwError('description');
    }

    const newEntry: BaseEntry = {
        id: `${Date.now()}`,
        date: object.date,
        specialist: object.specialist,
        description: object.description,
        diagnosisCodes: object.diagnosisCodes ? object.diagnosisCodes : []
    };

    switch (object.type) {
        case 'HealthCheck':
            if (object.healthCheckRating === undefined) {
                return throwError('healthCheckRating');
            }
            return { ...newEntry, type: 'HealthCheck', healthCheckRating: object.healthCheckRating };
        case 'Hospital':
            if (object.discharge === undefined) {
                return throwError('discharge');
            }
            return { ...newEntry, type: 'Hospital', discharge: object.discharge };
        case 'OccupationalHealthcare':
            if (object.employerName === undefined) {
                return throwError('employerName');
            }
            return {
                ...newEntry, type: 'OccupationalHealthcare',
                employerName: object.employerName,
                sickLeave: object.sickLeave ? object.sickLeave : undefined
            };
        default:
            throw new Error("Something went wrong");
    }

};

