import React, { ReactNode } from 'react';
import ClientLayout from './clientLayout';
import { i18n } from '../../i18n-config';
import { LangParam } from '../../types/langParam';
import { getTranslation } from '../../translations/getTranslations';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
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
