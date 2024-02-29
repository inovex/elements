import React, { ReactNode } from 'react';
import ClientLayout from './clientLayout';
import { LangParam, languages } from 'translations/i18n';
import { getTranslation } from '../../translations/getTranslations';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

type RootLayoutParams = { children: ReactNode; params: LangParam };

export default async function RootLayout({
  children,
  params,
}: RootLayoutParams) {
  const lang = params.lang ?? 'en';
  const translations = await getTranslation(lang);
  return (
    <ClientLayout lang={lang} translations={translations}>
      {children}
    </ClientLayout>
  );
}
