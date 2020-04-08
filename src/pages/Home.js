import getData from '../utils/getData';

const Home = async () => {
    const Characters = await getData();
    console.log(Characters);

    const view =  `
    <div class="Characters">

        ${Characters.results.map ( child => `
            <article class="Characters-item">
                <a href="#/${child.id}/">
                    <img src="${child.image}" alt="${child.name}" />
                    <h2> ${child.name} </h2>
                </a>
            </article>
            `).join('') }
        
    </div>
    `;

    return view;
}

export default Home;