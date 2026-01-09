import React, { useEffect } from 'react';
import './ReliabilitySection.css';

const ReliabilitySection: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.reliability-text').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="reliability-section">
            <div className="container">
                <div className="reliability-content">
                    <h2 className="reliability-text">Global Reach.</h2>
                    <h2 className="reliability-text delay-1">Unmatched Reliability.</h2>
                    <p className="reliability-desc reliability-text delay-2">
                        We source the finest footwear from every corner of the globe.
                        From the streets of <span className="highlight">Tokyo</span> to the workshops of <span className="highlight">Italy</span>,
                        and the hubs of <span className="highlight">Turkey</span>, <span className="highlight">China</span>, and <span className="highlight">Poland</span>.
                        Authenticity guaranteed, delivered to your doorstep.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReliabilitySection;
