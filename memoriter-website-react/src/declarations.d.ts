//This file is needed to specify the types of some items linke images in typescript.

declare module '*.jpeg' {
    const path: string;
    export default path;
};