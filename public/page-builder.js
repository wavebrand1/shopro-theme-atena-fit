window.ShoproThemeComponents = {
    atena_hero: {
        label: 'Baner główny', itemLabel: 'korzyść',
        fields: [
            {label: 'Nadtytuł', key: 'eyebrow', type: 'text'}, {label: 'Nagłówek — linia 1', key: 'headingLineOne', type: 'text'},
            {label: 'Nagłówek — linia 2', key: 'headingLineTwo', type: 'text'}, {label: 'Nagłówek czerwony', key: 'accent', type: 'text'},
            {label: 'Nagłówek niebieski', key: 'blueAccent', type: 'text'}, {label: 'Treść', key: 'content', type: 'richtext'},
            {label: 'Zdjęcie tła', key: 'image', type: 'media'}, {label: 'Znak wodny po prawej (PNG lub SVG)', key: 'watermark', type: 'media'}, {label: 'Tekst przycisku głównego', key: 'primaryLabel', type: 'text'},
            {label: 'Adres przycisku głównego', key: 'primaryUrl', type: 'text'}, {label: 'Tekst drugiego przycisku', key: 'secondaryLabel', type: 'text'},
            {label: 'Adres drugiego przycisku', key: 'secondaryUrl', type: 'text'}
        ],
        normalizeData(data) {
            if (data.headingLineOne === undefined && data.heading !== undefined) {
                if (String(data.heading).trim().toLowerCase() === 'twoja przestrzeń.') {
                    data.headingLineOne = 'Twoja'; data.headingLineTwo = 'przestrzeń.';
                } else {
                    data.headingLineOne = data.heading; data.headingLineTwo = data.headingLineTwo ?? '';
                }
            }
            if (data.blueAccent === undefined && String(data.accent || '').trim().toLowerCase() === 'twój trening. twój cel.') {
                data.accent = 'Twój trening.'; data.blueAccent = 'Twój cel.';
            }
        },
        itemFields: [{label: 'Ikona', key: 'icon', type: 'select', options: [['Hantle', 'equipment'], ['Dostęp 24/7', 'availability'], ['Grupa osób', 'people'], ['Cel', 'target']]}, {label: 'Tekst przy ikonie', key: 'title', type: 'text'}],
        defaults: {eyebrow: 'Atena Fit', headingLineOne: 'Twoja', headingLineTwo: 'przestrzeń.', accent: 'Twój trening.', blueAccent: 'Twój cel.', content: '<p>Korzystaj sam<br>lub z przyjaciółmi.</p><p><strong>Skup się na treningu.</strong></p>', primaryLabel: 'Zobacz ofertę', primaryUrl: '#cennik', secondaryLabel: 'Zobacz siłownię', secondaryUrl: '#klub', items: [{icon: 'equipment', title: 'Nowoczesny sprzęt'}, {icon: 'availability', title: 'Dostęp 24/7'}, {icon: 'people', title: 'Trenuj sam lub z innymi'}, {icon: 'target', title: 'Skup się na celu'}]}
    },
    atena_pricing: {
        label: 'Cennik Atena Fit', itemLabel: 'karnet',
        fields: [
            {label: 'Kotwica sekcji', key: 'anchor', type: 'text'}, {label: 'Nagłówek', key: 'heading', type: 'text'}, {label: 'Opis pod nagłówkiem', key: 'intro', type: 'text'},
            {label: 'Tekst linku po prawej', key: 'allPlansLabel', type: 'text'}, {label: 'Adres linku po prawej', key: 'allPlansUrl', type: 'text'}, {label: 'Domyślny tekst przycisku', key: 'buttonLabel', type: 'text'},
            {label: 'Korzyść 1', key: 'benefit1', type: 'text'}, {label: 'Korzyść 2', key: 'benefit2', type: 'text'}, {label: 'Korzyść 3', key: 'benefit3', type: 'text'}, {label: 'Korzyść 4', key: 'benefit4', type: 'text'}
        ],
        itemFields: [{label: 'Nazwa', key: 'name', type: 'text'}, {label: 'Cena', key: 'price', type: 'text'}, {label: 'Opis', key: 'description', type: 'textarea'}, {label: 'Ikona', key: 'icon', type: 'select', options: [['Bilet wejścia', 'ticket'], ['Kalendarz karnetu', 'calendar']]}, {label: 'Tekst przycisku', key: 'buttonLabel', type: 'text'}, {label: 'Adres przycisku', key: 'url', type: 'text'}, {label: 'Wyróżnienie', key: 'badge', type: 'text'}],
        normalizeData(data) {
            const defaults = [
                {name: 'Wejście jednorazowe', price: '25 zł', description: 'Jednorazowe wejście na siłownię', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'ticket'},
                {name: 'Karnet 1 miesiąc', price: '99 zł / m-c', description: 'Nielimitowany dostęp przez 30 dni', url: '#kontakt', buttonLabel: 'Kup teraz', badge: 'Najpopularniejszy', icon: 'calendar'},
                {name: 'Karnet 3 miesiące', price: '89 zł / m-c', description: 'Nielimitowany dostęp przez 90 dni', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'calendar'},
                {name: 'Karnet 12 miesięcy', price: '69 zł / m-c', description: 'Nielimitowany dostęp przez 12 miesięcy', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'calendar'}
            ];
            data.items = Array.isArray(data.items) ? data.items : [];
            data.items = defaults.map((plan, index) => ({...plan, ...(data.items[index] || {})}));
        },
        defaults: {anchor: 'cennik', heading: 'Cennik', intro: 'Prosto i transparentnie. Bez ukrytych kosztów.', allPlansLabel: 'Zobacz wszystkie opcje', allPlansUrl: '#kontakt', buttonLabel: 'Kup teraz', benefit1: 'Bez umów i zobowiązań', benefit2: 'Zamrażanie karnetu', benefit3: 'Przenieś karnet na inną osobę', benefit4: 'Dostęp 24/7', items: [{name: 'Wejście jednorazowe', price: '25 zł', description: 'Jednorazowe wejście na siłownię', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'ticket'}, {name: 'Karnet 1 miesiąc', price: '99 zł / m-c', description: 'Nielimitowany dostęp przez 30 dni', url: '#kontakt', buttonLabel: 'Kup teraz', badge: 'Najpopularniejszy', icon: 'calendar'}, {name: 'Karnet 3 miesiące', price: '89 zł / m-c', description: 'Nielimitowany dostęp przez 90 dni', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'calendar'}, {name: 'Karnet 12 miesięcy', price: '69 zł / m-c', description: 'Nielimitowany dostęp przez 12 miesięcy', url: '#kontakt', buttonLabel: 'Kup teraz', icon: 'calendar'}]}
    },
    atena_steps: {
        label: 'Jak zacząć',
        itemLabel: 'krok',
        fields: [
            {label: 'Kotwica sekcji', key: 'anchor', type: 'text'},
            {label: 'Nagłówek', key: 'heading', type: 'text'},
            {label: 'Opis pod nagłówkiem', key: 'intro', type: 'text'},
            {label: 'Grafika po prawej', key: 'image', type: 'media'},
            {label: 'Opis alternatywny grafiki', key: 'imageAlt', type: 'text'}
        ],
        itemFields: [
            {label: 'Nagłówek kroku', key: 'title', type: 'text'},
            {label: 'Opis kroku', key: 'text', type: 'textarea'},
            {label: 'Ikona', key: 'icon', type: 'select', options: [['Telefon / aplikacja', 'phone'], ['Użytkownik / konto', 'user'], ['Karta / płatność', 'card'], ['Drzwi / wejście', 'door']]},
            {label: 'Kolor numeru', key: 'color', type: 'select', options: [['Czerwony', 'red'], ['Niebieski', 'blue']]}
        ],
        normalizeData(data) {
            const defaults = this.defaults.items;
            const oldTexts = ['Pobierz aplikację Atena Fit.', 'Zarejestruj się.', 'Wybierz pakiet.', 'Otwórz drzwi aplikacją.'];
            data.items = defaults.map((step, index) => {
                const stored = data.items[index] || {};
                return {...step, ...stored, ...(oldTexts.includes(stored.text) ? {text: step.text} : {})};
            });
        },
        defaults: {
            anchor: 'jak-zaczac',
            heading: 'Jak zacząć?',
            intro: '4 proste kroki do Twojego pierwszego treningu.',
            imageAlt: 'Aplikacja Atena Fit na telefonie',
            items: [
                {title: 'Pobierz aplikację', text: 'Pobierz aplikację Atena Fit z App Store lub Google Play.', icon: 'phone', color: 'red'},
                {title: 'Załóż konto', text: 'Zarejestruj się w aplikacji i zweryfikuj swój numer telefonu.', icon: 'user', color: 'blue'},
                {title: 'Kup karnet', text: 'Wybierz karnet i dokonaj płatności w aplikacji.', icon: 'card', color: 'red'},
                {title: 'Wejdź i trenuj', text: 'Otwórz drzwi aplikacją i ciesz się treningiem!', icon: 'door', color: 'blue'}
            ]
        }
    },
    atena_story: {
        label: 'Sekcja motywacyjna', itemLabel: 'atut',
        fields: [
            {label: 'Kotwica sekcji', key: 'anchor', type: 'text'}, {label: 'Nadtytuł', key: 'eyebrow', type: 'text'},
            {label: 'Nagłówek — część ciemna', key: 'heading', type: 'text'}, {label: 'Nagłówek — część czerwona', key: 'highlight', type: 'text'},
            {label: 'Pierwsza linia wyróżniona', key: 'lead', type: 'text'}, {label: 'Druga linia wyróżniona', key: 'leadHighlight', type: 'text'},
            {label: 'Treść opisowa', key: 'content', type: 'richtext'}, {label: 'Tekst obietnicy', key: 'promise', type: 'text'},
            {label: 'Wyróżnienie obietnicy', key: 'promiseHighlight', type: 'text'}, {label: 'Końcówka obietnicy', key: 'promiseEnding', type: 'text'},
            {label: 'Tekst przycisku', key: 'buttonLabel', type: 'text'}, {label: 'Adres przycisku', key: 'url', type: 'text'},
            {label: 'Tytuł informacji o dostępie', key: 'scheduleTitle', type: 'text'}, {label: 'Opis informacji o dostępie', key: 'scheduleText', type: 'text'},
            {label: 'Główne zdjęcie treningowe', key: 'image', type: 'media'}, {label: 'Opis alternatywny głównego zdjęcia', key: 'imageAlt', type: 'text'},
            {label: 'Zdjęcie społeczności', key: 'secondaryImage', type: 'media'}, {label: 'Opis alternatywny zdjęcia społeczności', key: 'secondaryImageAlt', type: 'text'},
            {label: 'Karta na zdjęciu — wiersz 1', key: 'cardLine1', type: 'text'}, {label: 'Karta na zdjęciu — wiersz 2', key: 'cardLine2', type: 'text'},
            {label: 'Karta na zdjęciu — wiersz 3', key: 'cardLine3', type: 'text'}, {label: 'Karta na zdjęciu — wyróżnienie', key: 'cardHighlight', type: 'text'}
        ],
        itemFields: [{label: 'Tytuł atutu', key: 'title', type: 'text'}, {label: 'Opis atutu', key: 'text', type: 'textarea'}, {label: 'Ikona', key: 'icon', type: 'select', options: [['Sprzęt', 'equipment'], ['Atmosfera', 'user'], ['Dostęp 24/7', 'clock']]}],
        normalizeData(data) { const defaults = this.defaults.items; data.items = defaults.map((item, index) => ({...item, ...(data.items[index] || {})})); },
        defaults: {anchor: 'o-nas', eyebrow: 'Zrób pierwszy krok', heading: 'Każda zmiana zaczyna się od', highlight: 'jednej decyzji.', lead: 'Nie musisz być w formie, żeby zacząć.', leadHighlight: 'Musisz zacząć, żeby zbudować formę.', content: '<p>Niezależnie od tego, czy chcesz schudnąć, poprawić kondycję, zbudować siłę, wrócić do aktywności po długiej przerwie czy po prostu zadbać o swoje zdrowie — najtrudniejszy jest pierwszy krok.</p><p>W Atena Fit stworzyliśmy miejsce, do którego możesz wejść bez presji i trenować we własnym tempie. Nowoczesny sprzęt, komfortowa przestrzeń i prosty dostęp sprawiają, że możesz skupić się wyłącznie na swoim celu.</p>', promise: 'Za kilka miesięcy możesz wyglądać i czuć się', promiseHighlight: 'zupełnie inaczej.', promiseEnding: 'Wszystko zaczyna się od jednej wizyty.', buttonLabel: 'Umów pierwszy trening', url: '#kontakt', scheduleTitle: 'Trenujesz kiedy chcesz', scheduleText: 'Dostęp 24/7, bez ograniczeń', imageAlt: 'Trening w Atena Fit', secondaryImageAlt: 'Społeczność Atena Fit', cardLine1: 'Twoje cele.', cardLine2: 'Twoja droga.', cardLine3: 'My dajemy', cardHighlight: 'przestrzeń.', items: [{title: 'Nowoczesny sprzęt', text: 'Strefa siłowa, cardio, funkcjonalna i więcej.', icon: 'equipment'}, {title: 'Przyjazna atmosfera', text: 'Bez presji, bez oceniania. Tu liczy się Ty.', icon: 'user'}, {title: 'Dostęp 24/7', text: 'Trenuj, kiedy chcesz. Zawsze, gdy masz czas.', icon: 'clock'}]}},
    atena_benefits: {label: 'Pas korzyści Atena Fit', itemLabel: 'korzyść', fields: [{label: 'Kotwica sekcji', key: 'anchor', type: 'text'}], itemFields: [{label: 'Tytuł', key: 'title', type: 'text'}, {label: 'Opis', key: 'text', type: 'textarea'}, {label: 'Ikona', key: 'icon', type: 'select', options: [['Tarcza', 'shield'], ['Telefon', 'phone'], ['Grupa osób', 'people'], ['Parking', 'parking']]}], normalizeData(data) { const defaults = this.defaults.items; data.items = defaults.map((item, index) => ({...item, ...(data.items[index] || {})})); }, defaults: {anchor: 'korzysci', items: [{title: 'Bez umów i zobowiązań', text: 'Kupujesz karnet wtedy, kiedy chcesz.', icon: 'shield'}, {title: 'Wszystko w aplikacji', text: 'Zakup, dostęp, historia i wiele więcej.', icon: 'phone'}, {title: 'Dla każdego', text: 'Niezależnie od wieku i poziomu zaawansowania.', icon: 'people'}, {title: 'Wygodny dojazd', text: 'Darmowy parking tuż przy siłowni.', icon: 'parking'}]}},
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
            {container: 'full', components: ['atena_benefits']},
            {container: 'full', components: ['atena_app']},
            {container: 'full', components: ['atena_gallery']},
            {container: 'full', components: ['atena_equipment']},
            {container: 'full', components: ['atena_cta']}
        ]
    }
};
