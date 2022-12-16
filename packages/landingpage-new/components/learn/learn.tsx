import useTranslation from 'utils/hooks/useTranslation';

function LearnComp() {
  const { t, locale } = useTranslation();
  return <h1>{t('title')}</h1>;
}

export default LearnComp;
