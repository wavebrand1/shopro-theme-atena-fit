<?php

declare(strict_types=1);

namespace Wavebrand\ShoproTheme\AtenaFit;

use App\Cms\Application\PageBuilder\PageBuilderComponentDefinition;
use App\Cms\Application\PageBuilder\ThemePageBuilderComponentProvider;

final class AtenaFitComponentProvider implements ThemePageBuilderComponentProvider
{
    public function themeCode(): string { return 'atena_fit'; }

    public function components(): iterable
    {
        yield new PageBuilderComponentDefinition('atena_homepage', null, 'Cała strona główna Atena Fit', 'Wstawia kompletny układ strony głównej z komponentami Atena Fit.', 'A', preset: true);
        yield new PageBuilderComponentDefinition('atena_hero', null, 'Baner główny', 'Pełnoekranowy baner treningowy z logo, przyciskami i korzyściami.', 'A', template: '@ShoproThemeAtenaFit/block/hero.html.twig', htmlFields: ['content']);
        yield new PageBuilderComponentDefinition('atena_pricing', null, 'Cennik Atena Fit', 'Karty pakietów i karnetów.', 'C', template: '@ShoproThemeAtenaFit/block/pricing.html.twig');
        yield new PageBuilderComponentDefinition('atena_steps', null, 'Jak zacząć', 'Cztery kroki rozpoczęcia treningów.', '1', template: '@ShoproThemeAtenaFit/block/steps.html.twig');
        yield new PageBuilderComponentDefinition('atena_story', null, 'Sekcja motywacyjna', 'Tekst, zdjęcie i atuty klubu.', 'M', template: '@ShoproThemeAtenaFit/block/story.html.twig', htmlFields: ['content']);
        yield new PageBuilderComponentDefinition('atena_benefits', null, 'Pas korzyści Atena Fit', 'Cztery najważniejsze korzyści w dolnym pasku.', '✦', template: '@ShoproThemeAtenaFit/block/benefits.html.twig');
        yield new PageBuilderComponentDefinition('atena_app', null, 'Aplikacja mobilna', 'Korzyści, odnośniki do sklepów oraz ekrany aplikacji.', 'P', template: '@ShoproThemeAtenaFit/block/app.html.twig');
        yield new PageBuilderComponentDefinition('atena_gallery', null, 'Strefy klubu', 'Galeria stref Atena Fit.', 'G', template: '@ShoproThemeAtenaFit/block/gallery.html.twig');
        yield new PageBuilderComponentDefinition('atena_equipment', null, 'Sprzęt', 'Lista lub karuzela urządzeń.', 'S', template: '@ShoproThemeAtenaFit/block/equipment.html.twig');
        yield new PageBuilderComponentDefinition('atena_cta', null, 'CTA Atena Fit', 'Końcowe wezwanie do działania.', '→', template: '@ShoproThemeAtenaFit/block/cta.html.twig', htmlFields: ['content']);
    }
}
