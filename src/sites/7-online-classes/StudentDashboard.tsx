import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';

interface EnrolledCourse {
    id: number;
    title: string;
    instructor: string;
    nextClass: string;
    progress: number;
    labStatus: 'Pending' | 'Completed' | 'In-Progress';
}

interface StudentProfileState {
    name: string;
    batch: string;
    enrolledCount: number;
}

const StudentDashboard: React.FC = () => {
    const { user, loading: authLoading } = useAuth();

    const [studentProfile, setStudentProfile] = useState<StudentProfileState>({
        name: "Student",
        batch: "Nexus-555 Tech Matrix",
        enrolledCount: 0
    });

    const [myCourses] = useState<EnrolledCourse[]>([
        {
            id: 1,
            title: "Embedded Systems & IoT Core Architecture",
            instructor: "Anchal Koshta",
            nextClass: "Today at 04:00 PM (ESP8266 WiFi Logic)",
            progress: 65,
            labStatus: 'In-Progress'
        },
        {
            id: 2,
            title: "Advanced Web Microservices & Excel VBA Automation",
            instructor: "Anchal Koshta",
            nextClass: "Tomorrow at 11:00 AM (API Security & Macros)",
            progress: 35,
            labStatus: 'Pending'
        }
    ]);

    useEffect(() => {
        if (user) {
            setStudentProfile({
                name: user.name || "Student",
                batch: (user as any).batch || "Nexus-555 Tech Matrix",
                enrolledCount: (user as any).enrolledCount ?? 2
            });
        }
    }, [user]);

    if (authLoading) {
        return <div className="loading">Loading Real-Time Matrix Logs...</div>;
    }

    return (
        <section className="student-dashboard">
            <div className="welcome-banner">
                <div className="welcome-text">
                    <h1>Welcome Back, <span className="orange">{studentProfile.name}</span></h1>
                    <p>Batch: <span className="neon-green">{studentProfile.batch}</span> | Transformation Journey In Progress</p>
                </div>
                <div className="quick-badge">
                    <span className="badge-num">{studentProfile.enrolledCount}</span>
                    <span className="badge-txt">Active Labs</span>
                </div>
            </div>

            <div className="student-grid">
                <div className="courses-section">
                    <h2>My Learning Pipelines</h2>
                    <div className="course-list-wrapper">
                        {myCourses.map((course) => (
                            <div className="student-course-card" key={course.id}>
                                <div className="card-top">
                                    <span className="instructor-tag">Mentor: {course.instructor}</span>
                                    <span className={`lab-tag ${course.labStatus.toLowerCase()}`}>
                                        Lab: {course.labStatus}
                                    </span>
                                </div>
                                <h3 className="course-headline">{course.title}</h3>

                                <div className="progress-wrapper">
                                    <div className="progress-metrics">
                                        <span>Syllabus Covered</span>
                                        <span className="percentage-text">{course.progress}%</span>
                                    </div>
                                    <div className="progress-bar-base">
                                        <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                </div>

                                <div className="card-footer-stream">
                                    <p className="next-stream-time">
                                        <span className="pulse-icon"></span> Next Session: {course.nextClass}
                                    </p>
                                    <button className="join-btn-primary">Enter Lab Matrix</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-card">
                        <h3>Hardware & Logic Hub</h3>
                        <ul className="hub-links">
                            <li>
                                <span className="link-icon">⚙️</span>
                                <div className="link-info">
                                    <h4>Download Schematics</h4>
                                    <p>PCB Layouts & ESP8266 Codes</p>
                                </div>
                            </li>
                            <li>
                                <span className="link-icon">⚡</span>
                                <div className="link-info">
                                    <h4>VBA Macro Repository</h4>
                                    <p>Automation Workbooks & Triggers</p>
                                </div>
                            </li>
                            <li>
                                <span className="link-icon">📜</span>
                                <div className="link-info">
                                    <h4>Verified Certificates</h4>
                                    <p>Unlocked upon 100% compilation</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-card notice-board">
                        <h3>Notice Board</h3>
                        <div className="notice-item">
                            <span className="notice-date">June 12, 2026</span>
                            <p>Mega Pan-India Hackathon registration starts next week for all 26 network colleges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentDashboard;
