module.exports = {
    meta: {
    },
    create: function(context) {
        return {
           ExpressionStatement(node){
                const filename = context.getFilename();
                //console.log(context.getFilename());
                if (filename.includes("routes")) {
                    //console.log(filename);
                    if (( node.expression.callee != null) && (node.expression.callee.property.name.toLowerCase() === "post")) 
                    //(node.expression.callee.object.name === "router")
                    {
                        //console.log("GET FOUND : \n" + context.getSourceCode().getText(node));
                        if (context.getSourceCode().getText(node).includes("req.query")) {
                            context.report({
                                node,
                                message : "Use of req.query with POST ! Use req.body instead ",
                            });
                        }
                    }
                }
            }
        
        }
    }
}

