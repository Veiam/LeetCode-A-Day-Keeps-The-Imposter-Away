// Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of
// its vertices such that for every directed edge (U, V) from vertex U to vertex V, U comes before V in the ordering.

function topological_sort(vertices, edges) {
    const sortedOrder = [];
    if (vertices <= 0) {
        return sortedOrder;
    }

    // a. Initialize the graph
    // We will store the graph in Adjacency Lists, which means each parent vertex will have a list containing all of its children.
    // We will do this using a HashMap where the ‘key’ will be the parent vertex number and the value will be a List containing children vertices.
    const graph = Array(vertices).fill(0).map(() => Array()); // adjacency list graph
    // To find the sources, we will keep a HashMap to count the in-degrees
    // i.e., count of incoming edges of each vertex. Any vertex with ‘0’ in-degree will be a source.
    const inDegree = Array(vertices).fill(0); // count of incoming edges

    // b. Build the graph
    // We will build the graph from the input and populate the in-degrees HashMap.
    edges.forEach((edge) => {
        let parent = edge[0],
            child = edge[1];
        graph[parent].push(child); // put the child into it's parent's list
        inDegree[child]++; // increment child's inDegree
    });
    console.log(graph);
    console.log(inDegree);
    // c. Find all sources
    // All vertices with ‘0’ in-degrees will be our sources and we will store them in a Queue.
    const sources = [];
    for (i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }
    console.log(sources);
    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
        const vertex = sources.shift();
        // Add it to the sorted list.
        sortedOrder.push(vertex);
        // Get all of its children from the graph.
        graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
            // Decrement the in-degree of each child by 1.
            inDegree[child] -= 1;
            // If a child’s in-degree becomes ‘0’, add it to the sources Queue.
            if (inDegree[child] === 0) {
                sources.push(child);
            }
        });
    }

    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) {
        return [];
    }

    return sortedOrder;
}


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
