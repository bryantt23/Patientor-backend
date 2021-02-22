/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import diagnosisService from './src/services/diagnosisService';
import patientService from './src/services/patientService';
import { toNewPatient, toNewEntry } from "./utils";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
    res.send(diagnosisService.getEntries());
});

app.get('/api/patients', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

app.get('/api/patients/:id', (_req, res) => {
    try {
        const { id } = _req.params;
        const patientInfo = patientService.getPatientInfo(id);
        res.send(patientInfo);
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.status(400).send(error.message);
    }
});

app.post('/api/patients', (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.status(400).send(error.message);
    }
});

app.post('/api/patients/:id/entries', (req, res) => {
    try {
        const { id } = req.params;
        const patientInfo = patientService.getPatientInfo(id);
        if (!patientInfo) {
            // return new Error("Patient ID does not exist");
            res.status(400).send("Patient ID does not exist");

        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const newEntry = toNewEntry(req.body);
        if (newEntry instanceof Error) {
            // return new Error("Bad entry");
            res.status(400).send("Bad entry");
        }
        else {
            const updatedPatient = patientService.addPatientEntry(id, newEntry);
            res.json(updatedPatient);
        }

    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
