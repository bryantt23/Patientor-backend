import patientData from '../../patients';

import { Patient, NonSensitivePatient, Entry } from '../../types';

const patients: Array<Patient> = patientData;

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

const addPatientEntry = (id: string, newEntry: Entry): Patient | Error => {

    const updatePatient = patients.find(patient => patient.id === id);
    if (!updatePatient) {
        return new Error("Something went wrong");
    }
    updatePatient?.entries.push(newEntry);
    return updatePatient;
};

const getPatientInfo = (id: string): Patient | undefined => {
    const patient = patients.find(patient => patient.id === id);

    if (!patient) {
        throw new Error("No patient found");
    }

    return patient;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    getPatientInfo,
    addPatientEntry
};
