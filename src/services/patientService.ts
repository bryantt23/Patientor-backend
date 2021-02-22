import patientData from '../../data/patients.json';

import { Patient, NonSensitivePatient } from '../../types';

const patients: Array<Patient> = patientData as Array<Patient>;

const getNonSensitiveEntries = (): Array<NonSensitivePatient> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({ id, name, dateOfBirth, gender, occupation, entries }));
};

const getEntries = (): Array<Patient> => {
    return patients;
};

const addPatient = (newPatient: Patient): Patient => {
    patients.push(newPatient);
    return newPatient;
};

const getPatientInfo = (id: string): Patient | undefined => {
    const patient = patients.find(patient => patient.id === id)

    if (!patient) {
        throw new Error("No patient found");
    }

    return patient;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    getPatientInfo
};
