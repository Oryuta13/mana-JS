const heading = document.querySelector('#heading');

const keyframes = {
    color: ['#f66', '#fc2', '#0c6', '#0db']
};

const option = {
    duration: 8000,
    direction: 'alternate',
}

heading.animate(keyframes, option);