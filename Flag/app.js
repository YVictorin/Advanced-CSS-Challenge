const stripeContainer = document.querySelector('.stripes-container');

for(let i = 0; i < 13; i++) {
    const stripes = document.createElement('div');
    stripes.classList.add('stripe',  `stripe-${i}`);

    stripeContainer.appendChild(stripes);
}