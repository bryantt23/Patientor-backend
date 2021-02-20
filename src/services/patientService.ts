import patientData from '../../data/patients.json';

import { Patient } from '../../types';

const patients: Array<Patient> = patientData as Array<Patient>;

const getEntries = (): Array<Patient> => {
    return patients;
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    addEntry
};
