import {drawTree} from './tree-drawing';

/**
 * @description A template used for generating tree structures
 * @param tree
 * @param data
 * @returns {string}
 * @constructor
 */
const template = (tree, data) => {
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

/**
 * @description Renders a tree card
 * @param treeData
 * @returns {string}
 */
function renderCard(treeData) {
    const tree = drawTree(treeData);

    return template(tree, treeData);
}

/**
 * @description Renders all the tree cards in the catalogue
 * @param treeArray
 * @returns {string}
 */
function renderCards(treeArray) {
    return treeArray
		.map(renderCard)
		.join('');
}

export {renderCards};
