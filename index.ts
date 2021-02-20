import express from 'express';
import diagnosisService from "./src/services/diagnosisService";
import patientService from "./src/services/patientService";

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
    res.send(patientService.getEntries());
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
