declare module '@emoji-mart/data' {
  const data: Record<string, unknown>;
  export default data;
}

declare module '@emoji-mart/data/sets/*/*.json' {
  const data: Record<string, unknown>;
  export default data;
}
