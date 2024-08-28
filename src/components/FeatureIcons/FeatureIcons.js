import React from 'react';
import './FeatureIcons.css';

const FeatureIcons = () => {
    const features = [
        { icon: '🚚', title: 'We Deliver', text: 'We offer delivery to your door' },
        { icon: '🌱', title: '100% Vegan', text: 'All natural ingredients' },
        { icon: '📞', title: 'Customer Support', text: 'You are always our top priority' },
        { icon: '💳', title: 'Flexible Payment', text: 'Multiple Payment Options' },
    ];

    return (
        <div className="feature-icons">
            {features.map((feature, index) => (
                <div key={index} className="feature">
                    <span className="icon">{feature.icon} {feature.title}</span>
                    <p>{feature.text}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureIcons;
