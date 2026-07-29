window.ShoproThemeComponents = {
    atena_hero: {
        label: 'Hero Atena Fit', itemLabel: 'Baner główny',
        fields: [
            {label: 'Nadtytuł', key: 'eyebrow', type: 'text'}, {label: 'Nagłówek — linia 1', key: 'headingLineOne', type: 'text'},
            {label: 'Nagłówek — linia 2', key: 'headingLineTwo', type: 'text'}, {label: 'Nagłówek czerwony', key: 'accent', type: 'text'},
            {label: 'Nagłówek niebieski', key: 'blueAccent', type: 'text'}, {label: 'Treść', key: 'content', type: 'richtext'},
            {label: 'Zdjęcie tła', key: 'image', type: 'media'}, {label: 'Tekst przycisku głównego', key: 'primaryLabel', type: 'text'},
            {label: 'Adres przycisku głównego', key: 'primaryUrl', type: 'text'}, {label: 'Tekst drugiego przycisku', key: 'secondaryLabel', type: 'text'},
            {label: 'Adres drugiego przycisku', key: 'secondaryUrl', type: 'text'}
        ],
        itemFields: [{label: 'Ikona', key: 'icon', type: 'text'}, {label: 'Opis korzyści', key: 'title', type: 'text'}],
        defaults: {eyebrow: 'Atena Fit', headingLineOne: 'Twoja', headingLineTwo: 'przestrzeń.', accent: 'Twój trening.', blueAccent: 'Twój cel.', content: '<p>Korzystaj sam lub z przyjaciółmi.<br>Skup się na treningu.</p>', primaryLabel: 'Zobacz ofertę', primaryUrl: '#cennik', secondaryLabel: 'Zobacz siłownię', secondaryUrl: '#klub', items: [{icon: '▣', title: 'Nowoczesny sprzęt'}, {icon: '◷', title: 'Dostęp 24/7'}, {icon: '◉', title: 'Trenuj sam lub z innymi'}, {icon: '◎', title: 'Skup się na celu'}]}
    },
    atena_pricing: {label: 'Cennik Atena Fit', itemLabel: 'karnet', fields: [{label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Opis', key: 'intro', type: 'text'}], itemFields: [{label: 'Nazwa', key: 'name', type: 'text'}, {label: 'Cena', key: 'price', type: 'text'}, {label: 'Opis', key: 'description', type: 'textarea'}, {label: 'Adres przycisku', key: 'url', type: 'text'}, {label: 'Wyróżnienie', key: 'badge', type: 'text'}], defaults: {heading: 'Cennik', intro: 'Prosto i transparentnie.', items: [{name: 'Wejście jednorazowe', price: '25 zł', description: 'Jednorazowe wejście na siłownię', url: '#kontakt'}, {name: 'Karnet miesięczny', price: '99 zł / m-c', description: 'Nielimitowany dostęp', url: '#kontakt', badge: 'Najpopularniejszy'}]}},
    atena_steps: {label: 'Jak zacząć', itemLabel: 'krok', fields: [{label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Opis', key: 'intro', type: 'text'}, {label: 'Zdjęcie', key: 'image', type: 'media'}], itemFields: [{label: 'Nagłówek', key: 'title', type: 'text'}, {label: 'Opis', key: 'text', type: 'textarea'}], defaults: {heading: 'Jak zacząć?', intro: '4 proste kroki do Twojego pierwszego treningu.', items: [{title: 'Pobierz aplikację', text: 'Pobierz aplikację Atena Fit.'}, {title: 'Załóż konto', text: 'Zarejestruj się.'}, {title: 'Kup karnet', text: 'Wybierz pakiet.'}, {title: 'Wejdź i trenuj', text: 'Otwórz drzwi aplikacją.'}]}},
    atena_story: {label: 'Sekcja motywacyjna', itemLabel: 'motywacja', fields: [{label: 'Nadtytuł', key: 'eyebrow', type: 'text'}, {label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Treść', key: 'content', type: 'richtext'}, {label: 'Zdjęcie', key: 'image', type: 'media'}, {label: 'Tekst przycisku', key: 'buttonLabel', type: 'text'}, {label: 'Adres przycisku', key: 'url', type: 'text'}], defaults: {eyebrow: 'Zrób pierwszy krok', heading: 'Każda zmiana zaczyna się od jednej decyzji.', content: '<p>Nie musisz być w formie, żeby zacząć.</p>', buttonLabel: 'Umów pierwszy trening', url: '#kontakt'}},
    atena_app: {label: 'Aplikacja mobilna', itemLabel: 'ekran', fields: [{label: 'Nadtytuł', key: 'eyebrow', type: 'text'}, {label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Treść', key: 'content', type: 'richtext'}], itemFields: [{label: 'Zdjęcie ekranu', key: 'image', type: 'media'}, {label: 'Opis alternatywny', key: 'alt', type: 'text'}], defaults: {eyebrow: 'Aplikacja', heading: 'Wszystko w Twoim telefonie', content: '<p>Aplikacja Atena Fit daje Ci pełną kontrolę nad treningiem.</p>', items: []}},
    atena_gallery: {label: 'Strefy klubu', itemLabel: 'strefę', fields: [{label: 'Nagłówek', key: 'heading', type: 'text'}], itemFields: [{label: 'Nazwa', key: 'name', type: 'text'}, {label: 'Zdjęcie', key: 'image', type: 'media'}], defaults: {heading: 'Poznaj Atena Fit', items: [{name: 'Strefa siłowa'}, {name: 'Strefa cardio'}, {name: 'Strefa wolnych ciężarów'}, {name: 'Strefa funkcjonalna'}]}},
    atena_equipment: {label: 'Sprzęt', itemLabel: 'urządzenie', fields: [{label: 'Nagłówek', key: 'heading', type: 'text'}], itemFields: [{label: 'Nazwa', key: 'name', type: 'text'}, {label: 'Opis', key: 'text', type: 'textarea'}, {label: 'Zdjęcie', key: 'image', type: 'media'}], defaults: {heading: 'Sprzęt', items: [{name: 'Hammer Strength'}, {name: 'Technogym'}, {name: 'Matrix'}]}},
    atena_cta: {label: 'CTA Atena Fit', itemLabel: 'CTA', fields: [{label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Treść', key: 'content', type: 'richtext'}, {label: 'Zdjęcie', key: 'image', type: 'media'}, {label: 'Tekst przycisku', key: 'buttonLabel', type: 'text'}, {label: 'Adres przycisku', key: 'url', type: 'text'}], defaults: {heading: 'Gotowy na zmianę?', content: '<p>Dołącz do Atena Fit i zacznij trenować już dziś.</p>', buttonLabel: 'Zacznij teraz', url: '#kontakt'}}
};

// Presets are intentionally data only. The Core builder creates fresh IDs and
// uses each component's defaults, so a preset can safely be inserted many times.
window.ShoproThemePresets = {
    atena_homepage: {
        sections: [
            {container: 'full', components: ['atena_hero']},
            {container: 'full', components: ['atena_pricing']},
            {container: 'full', components: ['atena_steps']},
            {container: 'full', components: ['atena_story']},
            {container: 'full', components: ['atena_app']},
            {container: 'full', components: ['atena_gallery']},
            {container: 'full', components: ['atena_equipment']},
            {container: 'full', components: ['atena_cta']}
        ]
    }
};
