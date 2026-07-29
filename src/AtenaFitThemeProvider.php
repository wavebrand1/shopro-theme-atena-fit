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
        );
    }
}
