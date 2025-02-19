import React from "react";
import "../public/styles/LatestCase.css";

const LatestCase = () => {
    return (
            <>
            <div className="full-body">
                <div className="header">
                    <h1>See Our Clients Latest Case Studies</h1>
                    <div className="header-buttons">
                        <a href="#" className="btn btn-black">Free Consultation →</a>
                        <a href="#" className="btn btn-outline">View All Case Studies →</a>
                    </div>
                </div>

                <div className="container">
                    <div className="text-content">
                        <p><strong>FAMILY LAW | 14 JUNE, 2022</strong></p>
                        <h2>Divorcing Case Handle</h2>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Ipsum Feugiat Turpis Pellentesque Aliquam Vel Enim. Erat Mi In Tincidunt Fusce Sed Ante Mi. Fames Vel Pellentesque Dolor Sem Orci Adipiscing Tincidunt Dolor.</p>
                        <p>Ipsum Feugiat Turpis Pellentesque Aliquam Vel Enim. Lorem Ipsum Dolor Sit Amet Consectetur.</p>
                    </div>
                    <div className="image-section">
                            <img src="./images/img-1.webp" alt="Random Image 1"/>
                            <img src="./images/img-3.jpg" alt="Random Image 2"/>
                    </div>
                </div>
            </div>
            </>
            );
};

export default LatestCase;