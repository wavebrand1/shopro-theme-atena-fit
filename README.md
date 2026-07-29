# Atena Fit — skórka Shopro

To niezależny pakiet skórki pierwszego klienta Shopro 4. Nie dodajemy jego
kodów, zdjęć ani komponentów do katalogu `symfony/` (Shopro Core).

## Wzorzec strony głównej

1. Hero z przekazem i zdjęciem treningowym.
2. Cennik/karnety.
3. Cztery kroki „Jak zacząć?”.
4. Sekcja motywacyjna i korzyści klubu.
5. Aplikacja mobilna.
6. Strefy, sprzęt i końcowe CTA.

Wszystkie obrazowe pola komponentów przyjmują URL pliku dodanego przez Menedżer
plików Shopro. Dzięki temu media są zoptymalizowane i nie są wiązane z kodem
skórki.

## Lokalne podłączenie do Shopro

W developerskiej kopii Shopro pakiet jest używany przez Composer jako lokalne
repozytorium `path` z symlinkiem. Zmiana w tym folderze jest wtedy od razu
widoczna w aplikacji:

```bash
cd ../symfony
composer require wavebrand/shopro-theme-atena-fit:"*@dev"
php bin/console assets:install public
php bin/console cache:clear
```

Bundle musi być dopisany w `config/bundles.php`:

```php
Wavebrand\ShoproTheme\AtenaFit\ShoproThemeAtenaFitBundle::class => ['all' => true],
```

Następnie w panelu Shopro wybieramy **Konfiguracja systemu → Szablon strony →
Atena Fit** i zapisujemy ustawienia.

Git nie jest wymagany do uruchomienia skórki. Używamy go tylko do bezpiecznego
wersjonowania kodu. Na serwerze produkcyjnym można zainstalować pakiet z
prywatnego repozytorium Composer/Git albo z przygotowanego artefaktu ZIP.
