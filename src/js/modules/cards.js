import { getTreeObject, transformTreeObject } from './tree-data';
import { drawTree } from './tree-drawing';

'use strict';


// TODO: edit template to match CSS
const TEMPLATE = (tree, data) => {
    return `
        <div class="card">
            <div>
                <div class="tree">
                    ${tree}
                </div>

                <div class="info">
                    <h2>
                        ${data.name}
                    </h2>

                    <div>
                        ${data.description}
                    </div>
                </div>
            </div>
        </div>
    `;
};


function renderCard (treeData) {
    const tree = drawTree(treeData);

    return TEMPLATE(tree, treeData);
}

function renderCards () {
    const treeObject = getTreeObject();
    const treeArray = transformTreeObject(treeObject);

    const cards = treeArray.map(renderCard);

    return cards.join('');
}


export { renderCards };
