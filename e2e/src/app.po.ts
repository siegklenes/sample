import { Element } from '@wdio/sync';

export class AppPage {
    async navigateTo() {
        // return browser.get('/');
    }

    // Quando uma pagina é substituida, buscar por tag-name pode trazer uma versão não visível
    getPageTitle(): Element {
        return $('ion-title');
    }
    // Alternativa 1, buscar a lista de elementos e pegar o último( deve ser a instância mais recente)
    getPageTitleLast() {
        return $$('ion-title').pop();
    }

    getTabTwoButton() {
        return $('[tab="tab2"]');
    }
    getTabThreeButton() {
        return $('[tab="tab3"]');
    }
}
