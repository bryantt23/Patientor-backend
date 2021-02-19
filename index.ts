import express from 'express';
import diagnosisService from "./src/services/diagnosisService";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.get('/api/patients', (_req, res) => {
    console.log('someone pinged here');
    console.log('patients pong');
    res.send(JSON.stringify(
        [{
            "id": "d2773336-f723-11e9-8f0b-362b9e155667",
            "name": "John McClane",
            "dateOfBirth": "1986-07-09",
            "ssn": "090786-122X",
            "gender": "male",
            "occupation": "New york city cop"
        }]
    ));
});


app.get('/api/diagnoses', (_req, res) => {
    res.send(diagnosisService.getEntries());
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
