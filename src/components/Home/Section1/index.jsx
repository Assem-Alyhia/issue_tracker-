import { useEffect } from 'react';
import * as THREE from 'three';
import './section1.css';

const Section1 = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('space'),
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 5;

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0x3a3595, size: 3 });
        const starVertices = [];

        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(starVertices, 3)
        );

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        function animate() {
            requestAnimationFrame(animate);
            stars.rotation.x += 0.0003;
            stars.rotation.y += 0.0003;
            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <div className="hero-container">
                <canvas id="space"></canvas>
                <div className="hero-content-home">
                    <span className="heroSpan">Our Platform Your Success</span>
                    <h1>issue tracker </h1>
                    <div className="features">
                        <div className="feature-item">
                            <img
                                src="/images/profit-split-feature.svg"
                                alt="Profit Split"
                            />
                            <h3>Up to 95%</h3>
                            <p>of Profit Split</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="/images/upto-account-feature.svg"
                                alt="Account"
                            />
                            <h3>Up to $300k</h3>
                            <p>Trading Accounts</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="/images/addons-feature.svg"
                                alt="Add-ons"
                            />
                            <h3>Add-Ons</h3>
                            <p>to Enhance Trading</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="/images/time-limit-feature.svg"
                                alt="Time Limit"
                            />
                            <h3>No time limit</h3>
                            <p>in Challenge Phase</p>
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="btnBlock">
                            <div className="buttonContainer">
                                <button className="buttonFree">Start Challenge</button>
                                <div className="animatedBackground"></div>
                                <div className="innerBlurEffect"></div>
                            </div>
                        </div>
                        <div className="btnBlock">
                            <div className="buttonContainer buttonContainer2">
                                <button className="buttonFree">Free Trial</button>
                                <div className="animatedBackground"></div>
                                <div className="innerBlurEffect innerBlurEffect2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="containerStar">
                        <div className="trust-section">
                            <span className=" ">Excellent</span>
                            <div className="trust-stars">
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                                <div className="cardStar">
                                    <img src="/images/star.png" alt="Star" />
                                </div>
                            </div>
                            <span className="review-count" style={{ fontSize: '0.9rem' }}>
                                21,653 reviews on
                            </span>
                            <span className="trust-logo" style={{ fontSize: '0.9rem' }}>
                                <img src="/images/star.png" width="20rem" alt="star" />
                            </span>
                            <p style={{ fontSize: '0.9rem', color:'#fff'}}>
                                Trustpilot
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Section1;
