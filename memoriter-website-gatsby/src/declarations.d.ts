// This file is needed to specify the types of some items (like images) in typescript.

declare module '*.scss' { // stylesheets
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' { // vector graphics
    const path: string;
    export default path;
};

declare module '*.png' { // png images
    const path: string;
    export default path;
};

declare module '*.jpg' { // jpg images
    const path: string;
    export default path;
};