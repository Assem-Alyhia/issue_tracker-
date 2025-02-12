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
                    <h1>Welcome to Issue Tracker</h1>
                    <div className="features">
                        <div className="feature-item">
                            <h2>Welcome to the Smart Issue Management Platform!</h2><br />
                            <h3>Issue Tracker is an integrated interactive application that helps teams manage issues efficiently and easily. </h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Section1;