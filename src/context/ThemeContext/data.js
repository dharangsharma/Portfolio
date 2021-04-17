import openstack from "../../assets/OpenStack.png";
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.jpg';
import aws from '../../assets/aws.jpg';
import django from '../../assets/django.png';

export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'aws': {
        backgroundImage: aws,
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'django': {
        backgroundImage: django,
        linearGradient: createLinearGradient('#49D191', '#33475F'),
        primaryColor: '#33475F',
        color: '#49D191'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'openstack': {
        backgroundImage: openstack,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'openstack': {
        backgroundImage: openstack,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
