import React from 'react';
import './JuiceImageGrid.css';
import OwnerGUS from '../../assets/images/Owner GUS.png'
import GreenMagicProfile from '../../assets/images/Green Magic (Profile).png'
import ThreeJuiceSetProfile from '../../assets/images/Three Juice Set (Profile).png'
import BeetJuiceProfile from '../../assets/images/Beet Juice (Profile).png'
import CarrotJuiceProfile from '../../assets/images/Carrot Juice (Profile).png'

const images = [
    { src: OwnerGUS, alt: 'Juice Image 1' },
    { src: GreenMagicProfile, alt: 'Juice Image 2' },
    { src: BeetJuiceProfile, alt: 'Juice Image 3' },
    { src: ThreeJuiceSetProfile, alt: 'Juice Image 4' },
    { src: CarrotJuiceProfile, alt: 'Juice Image 5' },
];

const JuiceImageGrid = () => {
    return (
        <div className="juice-image-container">
        <section className="juice-image-grid">
            <div className="image-item image-item-1">
                <img src={images[0].src} alt={images[0].alt} />
            </div>
            <div className="image-item image-item-2">
                <img src={images[1].src} alt={images[1].alt} />
            </div>
            <div className="image-item image-item-3">
                <img src={images[2].src} alt={images[2].alt} />
            </div>
            <div className="image-item image-item-4">
                <img src={images[3].src} alt={images[3].alt} />
            </div>
            <div className="image-item image-item-5">
                <img src={images[4].src} alt={images[4].alt} />
            </div>
        </section>
        </div>
    );
};

export default JuiceImageGrid;
