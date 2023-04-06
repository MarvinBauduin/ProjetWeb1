const fs = require('fs');

module.exports = {
    meta: {
    },
    create: function (context) {
        return {
            ExpressionStatement(node) {
                const filename = context.getFilename();
                //console.log(context.getFilename());
                if (filename.includes("routes")) {
                    //console.log(filename);
                    if ((node.expression.callee != null) && (node.expression.callee.property.name.toLowerCase() === "render"))
                    //(node.expression.callee.object.name === "router")
                    {
                        //console.log("RENDER FOUND : \n" + context.getSourceCode().getText(node));
                        let nameofView = node.expression.arguments[0].value;
                        let pathProjectRoot = filename.substring(0, filename.lastIndexOf("/"));
                        // remove /routes
                        pathProjectRoot = pathProjectRoot.substring(0, pathProjectRoot.lastIndexOf("/"));
                        //console.log(viewpath);
                        if (!nameofView.endsWith(".hbs")) {
                            nameofView = nameofView + ".hbs";
                        }
                        const viewpath = pathProjectRoot + "/views/" + nameofView;
                        if (node.expression.arguments[1] !== undefined) {
                            for (const property of node.expression.arguments[1].properties) {
                                //console.log(property.key.name);
                                try {
                                    const data = fs.readFileSync(viewpath, 'utf8');
                                    if (!data.includes(property.key.name)) {
                                        context.report({
                                            node,
                                            message: "VARIABLE : " + property.key.name + " NOT FOUND IN VIEW : " + nameofView + " -> Check spelling of variables",
                                        });
                                    }
                                } catch (err) {
                                    console.error(err);
                                }
                            }
                        }




                        // test if variable exists in view file

                        /*if (context.getSourceCode().getText(node).includes("req.body")) {
                            context.report({
                                node,
                                message : "Use of req.body with GET ! Use req.query instead ",
                            });
                        }*/
                    }
                }
            }

        }
    }
}

