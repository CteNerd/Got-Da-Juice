import React from 'react';
import JuiceImageGrid from './JuiceImageGrid';
import OwnerGUS from '../../assets/images/Owner GUS.jpg' 

export default {
    title: 'Components/JuiceImageGrid',
    component: JuiceImageGrid,
    argTypes: {
        images: {
            control: 'object',
            description: 'Array of image objects with src and alt properties',
            defaultValue: [
                { src: 'path-to-image1.jpg', alt: 'Image 1' },
                { src: 'path-to-image2.jpg', alt: 'Image 2' },
                { src: 'path-to-image3.jpg', alt: 'Image 3' },
                { src: 'path-to-image4.jpg', alt: 'Image 4' },
                { src: 'path-to-image5.jpg', alt: 'Image 5' },
            ]
        }
    },
};

const images = [
    { src: OwnerGUS, alt: 'Juice Image 1' },
    { src: OwnerGUS, alt: 'Juice Image 2' },
    { src: OwnerGUS, alt: 'Juice Image 3' },
    { src: OwnerGUS, alt: 'Juice Image 4' },
    { src: OwnerGUS, alt: 'Juice Image 5' },
];

const Template = (args) => <JuiceImageGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    images: images
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     images: [
//         { src: OwnerGUS, alt: 'Juice Image 1' },
//         { src: 'path-to-image2.jpg', alt: 'Juice Image 2' },
//         { src: 'path-to-image3.jpg', alt: 'Juice Image 3' },
//         { src: 'path-to-image4.jpg', alt: 'Juice Image 4' },
//         { src: 'path-to-image5.jpg', alt: 'Juice Image 5' },
//     ]
// };
