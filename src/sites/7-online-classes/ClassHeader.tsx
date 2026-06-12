import React, { useState } from 'react';

interface Course {
    id: number;
    title: string;
    students: number;
    status: 'Live' | 'Upcoming' | 'Completed';
    progress: number;
}

const ClassDashboard: React.FC = () => {
    // 🚀 बुध की तीव्र गति: डेटा एरे जो भविष्य में Supabase से सीधा फ़ेच होगा
    const [courses] = useState<Course[]>([
        { id: 1, title: "Embedded Systems & IoT Core (ESP8266/Arduino)", students: 24500, status: 'Live', progress: 85 },
        { id: 2, title: "Full-Stack Web Architect (React, Node, Supabase)", students: 18200, status: 'Live', progress: 40 },
        { id: 3, title: "Advanced Automation Suite & Excel VBA Macros", students: 12840, status: 'Completed', progress: 100 },
        { id: 4, title: "Industrial PCB Design & Hardware Logic", students: 5400, status: 'Upcoming', progress: 0 }
    ]);

    const totalStudents = courses.reduce((acc, curr) => acc + curr.students, 0);

    return (
        <section className="dashboard-container">
            {/* 🪐 हेडर मैट्रिक्स */}
            <div className="dash-header">
                <h1 className="dash-title">Training Matrix <span className="orange">Control Panel</span></h1>
                <p className="dash-subtitle">Manage labs, webinars, and live streaming metrics pan-India.</p>
            </div>

            {/* 📊 शनि का कड़क और कंसिस्टेंट स्टैट्स ग्रिड (100% कंट्रास्ट ग्रीन टिक) */}
            <div className="stats-grid">
                <div className="stat-card">
                    <h4>Total Active Matrix</h4>
                    <p className="stat-number orange">{courses.length}</p>
                    <span className="stat-label">Modules Live</span>
                </div>
                <div className="stat-card">
                    <h4>Verified Impact</h4>
                    {/* तुम्हारी 55555+ की महा-ऊर्जा */}
                    <p className="stat-number neon-green">{totalStudents.toLocaleString()}+</p>
                    <span className="stat-label">Students Trained</span>
                </div>
                <div className="stat-card">
                    <h4>Pan-India Infrastructure</h4>
                    <p className="stat-number">26+</p>
                    <span className="stat-label">Colleges Network</span>
                </div>
            </div>

            {/* 📝 लाइव कोर्सेज की तालिका (Table Schema) */}
            <div className="matrix-table-wrapper">
                <h2 className="table-heading">Active Educational Streams</h2>
                <div className="table-scroll">
                    <table className="matrix-table">
                        <thead>
                            <tr>
                                <th>Course Blueprint</th>
                                <th>Enrolled Minds</th>
                                <th>Deployment Status</th>
                                <th>Syllabus Pipeline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id} className="table-row">
                                    <td className="course-title">{course.title}</td>
                                    <td className="course-students">{course.students.toLocaleString()}</td>
                                    <td>
                                        <span className={`status-badge ${course.status.toLowerCase()}`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar-fill" 
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                            <span className="progress-text">{course.progress}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ClassDashboard;
