var importedObjects = [];

function importObjects() {
    createObjectFromFile("teapot");
    createObjectFromFile("teddy");
}

function createObjectFromFile(object) {
    var req = new XMLHttpRequest();
    req.open('GET', '.\\' + object + '.obj', false);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status === 0) {
                var text = req.responseText;
                parseFile(text, object);
            }
        }
    };

    req.send(null);

}

function parseFile(text, name) {
    var newObject = {
        name: "",
        vertices: [],
        normals: [],
        indices: []
    };
    newObject.name = name;

    var textLines = text.split('\n');

    var vertices = [];
    var indices = [];

    var vidx = 0;
    var nidx = 0;
    var iidx = 0;


    for (let i = 0; i < textLines.length; ++i) {
        if (textLines[i].startsWith("v ")) {
            var rest1 = textLines[i].substr(2);
            vertices[vidx++] = rest1.split(" ");
        }

        else if (textLines[i].startsWith("f ")) {
            var rest2 = textLines[i].substr(2);
            indices[iidx++] = rest2.split(" ");
        }
    }

    if (vertices.length > 0) {

        for (let i = 0; i < vertices.length; ++i) {
            var set = [];
            set = vertices[i];
            let idx = set.indexOf("");
            if (idx > -1) {
                set.splice(idx, 1);
            }
            for (let j = 0; j < 3; ++j) {
                newObject.vertices.push(parseFloat(vertices[i][j]));
                newObject.normals.push(parseFloat(vertices[i][j]));
            }
        }
    }

    if (indices.length > 0) {
        for (let i = 0; i < indices.length; ++i) {
            var set = [];
            set = indices[i];
            let idx = set.indexOf("");
            if (idx > -1) {
                set.splice(idx, 1);
            }
            for (let j = 0; j < 3; ++j) {
                // var f = [];
                // f = indices[i][j].split("/");
                // floatIndices.push(parseFloat(f[0] - 1));
                newObject.indices.push(parseFloat(indices[i][j]) - 1);
            }
        }
    }

    importedObjects.push(newObject);
}