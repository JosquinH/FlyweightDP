const factory = new FlyweightTreeFactory() 

class Tree {
    constructor (x,y,treeName) {
        this.x = x
        this.y = y
        this.flyweight = factory.getFlyweightTree(treeName)
    }

    drawTree() {
        this.flyweight.drawTree(this.x, this.y)
    }

}

const treeName = ['classique','fruitier','baobab','palmier','sapin','sakura']
const treeNameSize = treeName.length

const TREE_NUMBER = ((CANVAS_WIDTH*CANVAS_HEIGHT)/1024) * 4

const forest = []

for (let i = 0; i < TREE_NUMBER; ++i) {
    const tree = new Tree(Math.floor(Math.random() * CANVAS_WIDTH),Math.floor(Math.random() * CANVAS_HEIGHT),treeName[Math.floor(Math.random() * treeNameSize)])
    tree.drawTree()
    forest.push(tree)
}

console.log('Factory : ', factory)
console.log('Forest : ', forest)


