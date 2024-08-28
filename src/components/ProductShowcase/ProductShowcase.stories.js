import React from 'react';
import ProductShowcase from './ProductShowcase';
import GreenMagic from './Green-Magic.png';
import Cleanse from './Cleanse.jpg.jxl'

export default {
    title: 'Components/ProductShowcase',
    component: ProductShowcase,
    argTypes: {
    },
};

const Template = (args) => <ProductShowcase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    products: [
        {
            name: "Product 1",
            image: GreenMagic
        },
        {
            name: "Product 2",
            image: Cleanse
        }
    ]
};

export const Secondary = Template.bind({});
Secondary.args = {
    products: [
        {
            name: "Product 1",
            image: "https://example.com/product1.jpg"
        },
        {
            name: "Product 2",
            image: "https://example.com/product2.jpg"
        },
        {
            name: "Product 3",
            image: "https://example.com/product3.jpg"
        }
    ]
};
