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

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
};
