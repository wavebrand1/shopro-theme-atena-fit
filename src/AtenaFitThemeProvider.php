<?php

declare(strict_types=1);

namespace Wavebrand\ShoproTheme\AtenaFit;

use App\Theme\Application\ThemeDefinition;
use App\Theme\Application\ThemeProvider;

final class AtenaFitThemeProvider implements ThemeProvider
{
    public function themes(): iterable
    {
        yield new ThemeDefinition(
            code: 'atena_fit', name: 'Atena Fit', version: '1.0.3',
            variants: [
                'signature' => ['pl' => 'Atena — czerwień i granat', 'en' => 'Atena — red and navy'],
                'contrast' => ['pl' => 'Atena — wysoki kontrast', 'en' => 'Atena — high contrast'],
            ],
            // Keep the package stylesheet versioned independently from core
            // assets. Theme releases must never depend on the browser cache of
            // a previously installed version.
            frontStylesheet: '/bundles/shoprothemeatenafit/theme.css?v=1.0.3',
            frontJavascript: '/bundles/shoprothemeatenafit/theme.js?v=1.0.3',
            builderJavascript: '/bundles/shoprothemeatenafit/page-builder.js',
            frontLayoutTemplate: '@ShoproThemeAtenaFit/layout.html.twig',
            settings: [
                'footer_menu_links' => ['label' => 'Linki kolumny „Menu”', 'type' => 'textarea', 'default' => '', 'help' => 'Jeden link w wierszu w formacie: Nazwa | /adres. Ta lista jest niezależna od menu nagłówka.'],
                'footer_information_title' => ['label' => 'Nagłówek kolumny informacji', 'type' => 'text', 'default' => 'Informacje'],
                'footer_information_links' => ['label' => 'Linki kolumny „Informacje”', 'type' => 'textarea', 'default' => '', 'help' => 'Jeden link w wierszu w formacie: Nazwa | /adres.'],
                'footer_logo_file' => ['label' => 'Logo stopki', 'type' => 'file', 'asset_key' => 'footer_logo', 'help' => 'Opcjonalne logo używane tylko w stopce. Obsługiwane: SVG, PNG, JPG, WebP.'],
                'footer_logo_remove' => ['label' => 'Usuń własne logo stopki', 'type' => 'checkbox', 'remove_asset_key' => 'footer_logo', 'help' => 'Po zapisie stopka ponownie użyje logo z konfiguracji globalnej.'],
                'footer_availability_icon_file' => ['label' => 'Ikona dostępności 24/7', 'type' => 'file', 'asset_key' => 'footer_availability_icon', 'help' => 'Opcjonalna ikona w prawej części stopki. Obsługiwane: SVG, PNG, JPG, WebP.'],
                'footer_availability_icon_remove' => ['label' => 'Usuń własną ikonę 24/7', 'type' => 'checkbox', 'remove_asset_key' => 'footer_availability_icon', 'help' => 'Po zapisie zostanie użyty domyślny znak 24/7.'],
                'header_cta_label' => ['label' => 'Tekst przycisku w nagłówku', 'type' => 'text', 'default' => 'Zacznij teraz'],
                'header_cta_url' => ['label' => 'Adres przycisku w nagłówku', 'type' => 'text', 'default' => '#kontakt'],
                'footer_menu_title' => ['label' => 'Nagłówek menu stopki', 'type' => 'text', 'default' => 'Menu'],
                'footer_hours_title' => ['label' => 'Nagłówek godzin otwarcia', 'type' => 'text', 'default' => 'Godziny otwarcia'],
                'footer_hours' => ['label' => 'Godziny otwarcia', 'type' => 'textarea', 'default' => "Całodobowo\n7 dni w tygodniu", 'help' => 'Każdy wiersz będzie wyświetlany osobno.'],
                'footer_copyright' => ['label' => 'Tekst praw autorskich', 'type' => 'text', 'default' => 'Wszelkie prawa zastrzeżone.'],
                'footer_show_socials' => ['label' => 'Pokaż social media w stopce', 'type' => 'checkbox', 'default' => true],
                'footer_show_contact' => ['label' => 'Pokaż dane kontaktowe w stopce', 'type' => 'checkbox', 'default' => true],
                'footer_show_hours' => ['label' => 'Pokaż godziny otwarcia w stopce', 'type' => 'checkbox', 'default' => true],
            ],
        );
    }
}
