const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    tree = null;

    root() {
        return this.tree;
    }

    add(data) {
        const node = new Node(data);

        if (!this.tree) {
            this.tree = node;
            return;
        }

        let current = this.tree;

        while (current) {
            if (data < current.data) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = node;
                    return;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = node;
                    return;
                }
            }
        }
    }

    has(data) {
        return !!this.find(data) || false;
    }

    find(data) {
        let current = this.tree;

        while (current) {
            if (current.data === data) {
                return current;
            }

            current = data < current.data ? current.left : current.right;
        }

        return null;
    }

    remove(data) {
        if (!this.tree) {
            return;
        }

        if (this.tree.data === data) {
            this.tree = this.mergeTrees(this.tree.left, this.tree.right);
            return;
        }

        let current = this.tree;

        while (current) {
            if (current.left?.data === data) {
                current.left = this.mergeTrees(current.left.left, current.left.right);
                return;
            }

            if (current.right?.data === data) {
                current.right = this.mergeTrees(current.right.left, current.right.right);
                return;
            }

            current = data < current.data ? current.left : current.right;
        }
    }

    mergeTrees(left, right) {
        if (!left || !right) {
            return left || right;
        }

        let current = right;
        while (current.left) {
            current = current.left;
        }

        current.left = left;

        return right;
    }

    min() {
        let current = this.tree;

        while (current.left) {
            current = current.left;
        }

        return current.data;
    }

    max() {
        let current = this.tree;

        while (current.right) {
            current = current.right;
        }

        return current.data;
    }
}

module.exports = {
    BinarySearchTree
};
