<?php

declare(strict_types=1);

namespace Wavebrand\ShoproTheme\AtenaFit;

use App\Cms\Domain\Entity\Page;
use App\Theme\Application\ThemeContentSynchronizer;
use Doctrine\ORM\EntityManagerInterface;

/** Adds new required Atena components to pages created by an earlier theme release. */
final class AtenaFitContentSynchronizer implements ThemeContentSynchronizer
{
    public function __construct(private readonly EntityManagerInterface $entityManager) {}

    public function themeCode(): string { return 'atena_fit'; }

    public function synchronize(): int
    {
        $updated = 0;
        foreach ($this->entityManager->getRepository(Page::class)->findBy(['homePage' => true]) as $page) {
            $blocks = $this->decode($page->getBuilderData());
            if ($blocks === [] || $this->contains($blocks, 'atena_benefits')) continue;

            $storyIndex = $this->indexOf($blocks, 'atena_story');
            if ($storyIndex === null) continue;

            array_splice($blocks, $storyIndex + 1, 0, [[
                'id' => 'atena-benefits-section-'.$page->getId(),
                'type' => 'layout_section',
                'data' => [
                    'container' => 'full',
                    'columns' => [[[
                        'id' => 'atena-benefits-'.$page->getId(),
                        'type' => 'atena_benefits',
                        'data' => [],
                    ]]],
                    'widths' => [100],
                ],
            ]]);
            $page->setBuilderData(json_encode($blocks, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
            ++$updated;
        }

        if ($updated > 0) $this->entityManager->flush();

        return $updated;
    }

    private function decode(string $builderData): array
    {
        try {
            $blocks = json_decode($builderData, true, 64, JSON_THROW_ON_ERROR);
            return is_array($blocks) ? $blocks : [];
        } catch (\JsonException) {
            return [];
        }
    }

    private function contains(array $blocks, string $type): bool
    {
        return $this->indexOf($blocks, $type) !== null;
    }

    private function indexOf(array $blocks, string $type): ?int
    {
        foreach ($blocks as $index => $section) {
            foreach (($section['data']['columns'] ?? []) as $column) {
                foreach (is_array($column) ? $column : [] as $component) {
                    if (is_array($component) && ($component['type'] ?? null) === $type) return $index;
                }
            }
        }

        return null;
    }
}
