/** Declaration file generated by dts-gen */

declare module 'cssnano' {

  export = cssnano;

}

declare function cssnano(...args: any[]): any;

declare namespace cssnano {
    const prototype: {
    };

    function process(css: any, ...args: any[]): any;

    namespace postcss {
        const plugins: any[];

        const postcssPlugin: string;

        const postcssVersion: string;

        const version: string;

        function normalize(plugins: any): any;

        function process(css: any, ...args: any[]): any;

        function use(plugin: any): any;

        namespace normalize {
            const prototype: {
            };

        }

        namespace process {
            const prototype: {
            };

        }

        namespace use {
            const prototype: {
            };

        }

    }

    namespace process {
        const prototype: {
        };

    }

}

