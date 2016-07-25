import { getTreeObject, transformTreeObject } from './modules/tree-data';
import { drawTree } from './modules/tree-drawing';

'use strict';


// TODO: edit template
const TEMPLATE = (tree, data) => {
    return `
        <div class="card">
            <div id="tree">
                ${tree}
            </div>

            <div class="info">
                <h2>
                    ${data.title}
                </h2>

                <div>
                    ${data.description}
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

    treeArray.map(renderCard);

    return tree.join('');
}


export { renderCards };
