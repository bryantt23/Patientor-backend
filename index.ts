import express from 'express';
import diagnosisService from './src/services/diagnosisService';
import patientService from './src/services/patientService';

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

app.post('/api/patients', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { dateOfBirth, gender, name, occupation, ssn } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newPatient = patientService.addPatient({ dateOfBirth, gender, name, occupation, ssn })

    res.json(newPatient);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
