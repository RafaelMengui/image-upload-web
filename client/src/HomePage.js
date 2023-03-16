import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import "./style.css";

function HomePage() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get("http://localhost:3000/images", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                        "Access-Control-Allow-Headers": "Content-Type",
                    },
                });
                setImageUrls(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h1 className="homepage-header">Uploaded Images</h1>
            <div className="image-container">
                {imageUrls.map((url) => (
                    <img src={url.file_src} alt="" key={url.file_src} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
