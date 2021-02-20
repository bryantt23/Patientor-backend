import patientData from '../../data/patients.json';

import { Patient, NonSensitivePatient } from '../../types';

const patients: Array<Patient> = patientData as Array<Patient>;

const getNonSensitiveEntries = (): Array<NonSensitivePatient> => {
    console.log('object', patients);
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({ id, name, dateOfBirth, gender, occupation }));
};

const getEntries = (): Array<Patient> => {
    return patients;
};

const addPatient = (newPatient: Patient): Patient => {
    patients.push(newPatient);
    return newPatient;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient
};
