import {getTreeObject, transformTreeObject} from './tree-data';
import {drawTree} from './tree-drawing';

'use strict';


// TODO: edit template to match CSS
/**
 * @description A template used for generating tree structures
 * @param tree
 * @param data
 * @returns {string}
 * @constructor
 */
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

/**
 * @description Renders a tree card
 * @param treeData
 * @returns {string}
 */
function renderCard(treeData) {
	const tree = drawTree(treeData);

	return TEMPLATE(tree, treeData);
}

/**
 * @description Renders all the tree cards in the catalogue
 * @returns {string}
 */
function renderCards() {
	const treeObject = getTreeObject();
	const treeArray = transformTreeObject(treeObject);

	return treeArray
		.map(renderCard)
		.join('');
}


export {renderCards};
