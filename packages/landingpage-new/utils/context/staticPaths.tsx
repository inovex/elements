export const getStaticLanguagePaths = () => {
  return {
    paths: ['en', 'de'].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};
