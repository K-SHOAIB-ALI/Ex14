
import React from 'react';
import Navbar from './Navbar';
import StudentForm from './StudentForm';

function App() {
    return (
        <div>
            <Navbar />

            <h1 style={{ textAlign: 'center' }}>
                Welcome to Student Application
            </h1>

            <StudentForm />
        </div>
    );
}

export default App;
