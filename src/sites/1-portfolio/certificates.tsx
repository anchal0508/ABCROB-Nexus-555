import React, { useState } from 'react';
import ProfileImage from "./images/ProfileImage.jpeg"; // डिफ़ॉल्ट रूप से

interface EvidenceItem {
    id: number;
    category: 'letter' | 'certificate' | 'news';
    title: string;
    subHeading: string;
    desc: string;
    image: string;
}

interface GalleryImage {
    id: number;
    title: string;
    location: string;
    image: string;
}

const PortfolioCertificates: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    // 🚀 कड़क डेटा संरचना (स्पेलिंग 'Colleges' ठीक कर दी गई है)
    const evidenceData: EvidenceItem[] = [
        { id: 1, category: 'letter', title: "Letter of Thanks", subHeading: "Pan-India Lead", desc: "Official recognition from central universities for workshop leadership.", image: ProfileImage },
        { id: 2, category: 'certificate', title: "Academic Recognition", subHeading: "300+ Colleges", desc: "Certificate of excellence for hands-on technical sessions.", image: ProfileImage },
        { id: 3, category: 'letter', title: "Corporate Letter of Appreciation", subHeading: "Indore BPO Hub", desc: "Honoured for process optimization and Excel VBA Automation mastery.", image: ProfileImage },
        { id: 4, category: 'certificate', title: "IoT Mastery Validation", subHeading: "Embedded Lab", desc: "Industrial validation for Arduino & ESP8266 ecosystem architecture.", image: ProfileImage },
        { id: 5, category: 'news', title: "Tech Workshop Media Coverage", subHeading: "Dainik Bhaskar", desc: "Newspaper cutting highlighting 4-day physical lab sessions in Jabalpur.", image: ProfileImage },
        { id: 6, category: 'news', title: "National Webinar Feature", subHeading: "Patrika Chronicle", desc: "Press release covering the massive impact across 26 physical colleges.", image: ProfileImage },
    ];

    const galleryData: GalleryImage[] = [
        { id: 1, title: "IoT Hardware Session", location: "Jabalpur Engineering Cell", image: ProfileImage },
        { id: 2, title: "VBA Macro Corporate Training", location: "Indore Core Hub", image: ProfileImage },
        { id: 3, title: "PCB Design Live Lab", location: "Delhi Tech Network", image: ProfileImage },
        { id: 4, title: "Mega Robotics Webinar", location: "Pan-India Broadcast", image: ProfileImage },
    ];

    const filteredEvidence = activeFilter === 'all' 
        ? evidenceData 
        : evidenceData.filter(item => item.category === activeFilter);

    return (
        <section className="evidence-page-container">
            {/* 🪐 हेडर सेक्शन */}
            <div className="page-header">
                <h1 className="page-title">Verified <span className="orange">Credentials & Legacy</span></h1>
                <p className="page-subtitle">Tangible proofs of 10+ years in Embedded Systems, Cloud Infrastructure, and Automation.</p>
            </div>

            {/* 🎛️ बुध की 555 फ़ास्ट फ़िल्टर बार */}
            <div className="filter-bar">
                {['all', 'letter', 'certificate', 'news'].map((cat) => (
                    <button 
                        key={cat} 
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat === 'all' ? 'All Proofs' : `${cat}s`}
                    </button>
                ))}
            </div>

            {/* 📜 कड़क डॉक्यूमेंट्स ग्रिड (शनि का विजुअल बैलेंस) */}
            <div className="evidence-grid">
                {filteredEvidence.map((item) => (
                    <div className="evidence-card" key={item.id}>
                        <div className="img-wrapper">
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <span className={`category-tag ${item.category}`}>{item.category}</span>
                        </div>
                        <div className="card-content">
                            <h3 className="orange-title">{item.title}</h3>
                            <h4 className="sub-title">{item.subHeading}</h4>
                            <p className="desc-text">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 📸 लाइव वर्कशॉप फोटो गैलरी (GRAND GALLERY) */}
            <div className="gallery-section-wrapper">
                <div className="gallery-header">
                    <h2>Workshop <span className="neon-green">Live Glimpses</span></h2>
                    <p>Captures from 26 physical college bootcamps, hardware labs, and interactive forums.</p>
                </div>
                
                <div className="gallery-grid">
                    {galleryData.map((pic) => (
                        <div className="gallery-card" key={pic.id}>
                            <div className="gallery-img-box">
                                <img src={pic.image} alt={pic.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <h4>{pic.title}</h4>
                                    <p>{pic.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioCertificates;
