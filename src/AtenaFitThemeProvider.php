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
            code: 'atena_fit', name: 'Atena Fit', version: '1.0.0-dev',
            variants: [
                'signature' => ['pl' => 'Atena — czerwień i granat', 'en' => 'Atena — red and navy'],
                'contrast' => ['pl' => 'Atena — wysoki kontrast', 'en' => 'Atena — high contrast'],
            ],
            frontStylesheet: '/bundles/shoprothemeatenafit/theme.css',
            frontJavascript: '/bundles/shoprothemeatenafit/theme.js',
            builderJavascript: '/bundles/shoprothemeatenafit/page-builder.js',
            frontLayoutTemplate: '@ShoproThemeAtenaFit/layout.html.twig',
            settings: [
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
