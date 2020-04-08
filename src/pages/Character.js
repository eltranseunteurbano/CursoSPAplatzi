import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const child = await getData( id );

    const view = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${child.image}" alt="${child.id}" />
                <h2>${child.name}</h2>
            </article>
            <article class="Character-card">
                <h3>Episodes: <span>${child.episode.length}</span></h3>
                <h3>Status: <span>${child.status}</h3>
                <h3>Species: <span>${child.species}</h3>
                <h3>Gender: <span>${child.gender}</span></h3>
                <h3>Origin: <span>${child.origin.name}</span></h3>
                <h3>Last Location: <span>${child.location.name}</span></span></h3>
            </article>
        </div>
    `;

    return view;
}

export default Character;