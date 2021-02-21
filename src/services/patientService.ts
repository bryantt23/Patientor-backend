import patientData from '../../data/patients.json';

import { Patient, NonSensitivePatient } from '../../types';

const patients: Array<Patient> = patientData as Array<Patient>;

const getNonSensitiveEntries = (): Array<NonSensitivePatient> => {
    console.log('object', patients);
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
    console.log(patients)
    const patient = patients.find(patient => patient.id === id)

    console.log("patient", patient)

    if (!patient) {
        throw new Error("No patient found")
    }

    return patient;
    // console.log(patients[id])
}

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    getPatientInfo
};
