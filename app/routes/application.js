import Route from '@ember/routing/route';
import { service } from '@ember/service';
import storage from 'dynint/lib/storage';

export default class ApplicationRoute extends Route {
  @service intl;

  getLocale(locale) {
    let locales = new Map([
      ['en', 'en'],
      ['en-us', 'en'],
      ['en-US', 'en'],
      ['es-MX', 'es-MX'],
      ['es-mx', 'es-MX'],
      ['de-DE', 'de-DE'],
      ['de-de', 'de-DE'],
      ['fr-FR', 'fr-FR'],
      ['fr-fr', 'fr-FR'],
      ['pt-BR', 'pt-BR'],
      ['pt-br', 'pt-BR'],
      ['ja', 'ja'],
    ]);

    return locales.get(locale) || 'en';
  }

  async beforeModel(transition) {
    let queryParams = transition.to.queryParams;
    let locale = this.getLocale(queryParams.locale || 'en');

    try {
      if (queryParams.locale || !storage.get('locale')) {
        storage.set('locale', {
          key: locale,
        });
      }
      this.intl.setLocale([storage.get('locale').key, 'en']);
    } catch (e) {
      this.intl.setLocale([locale, 'en']);
    }

    try {
      const response = await fetch(`/translations/${locale}.json`);
      const translations = await response.json();
      this.intl.addTranslations(locale, translations);
    } catch (localeFetchError) {
      console.error(
        'could not fetch translations for locale',
        locale,
        'falling back to en',
        localeFetchError
      );
      try {
        const response = await fetch('/translations/en.json');
        const translations = await response.json();
        this.intl.addTranslations('en', translations);
      } catch (englishTranslationFetchError) {
        console.error(
          'if we get here we are in trouble with no fallback translation strings'
        );
      }
    }
  }
}
