declare module "#vue-email" {
  export type CompilerResult = {
    html: string;
    text?: string;
  };

  export function useCompiler(
    templatePath: string,
    options?: {
      props?: Record<string, any>;
    },
  ): Promise<CompilerResult>;

  const _default: {
    useCompiler: typeof useCompiler;
  };

  export default _default;
}
