
import React, { useState } from 'react';

function StudentForm() {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || rollNo.trim() === '') {
            alert('Please enter both Name and Roll No.');
            return;
        }

        alert('Student Registered Successfully!');
        setName('');
        setRollNo('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <input
                        type="text"
                        placeholder="Enter Roll Number"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default StudentForm;
