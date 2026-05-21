// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Docs & Tutorials',
			description: 'Learn how to use AI to improve your technical documents and tutorials.',
			social: [],
			sidebar: [
				{
					label: 'Foundation',
					items: [
						{ label: 'Introduction', slug: '' },
						{ label: 'Set up your environment', slug: 'get-started' },
					],
				},
				{
					label: 'Quality & accuracy',
					items: [
						{ label: 'Enforce a style guide', slug: 'tutorials/style-guide-check' },
						{ label: 'Increase content accuracy', slug: 'tutorials/increase-content-accuracy' },
						{ label: 'Verify URLs', slug: 'tutorials/link-checker' },
						{ label: 'Validate code examples', slug: 'tutorials/validate-code-examples' },
							{ label: 'Create for a target audience', slug: 'tutorials/create-for-a-target-audience' },
							{ label: 'Measure content improvement', slug: 'tutorials/measure-content-improvement' },
					],
				},
				{
					label: 'Discovery & reach',
					items: [
						{ label: 'Increase SEO visibility', slug: 'tutorials/seo' },
						{ label: 'Optimize for AI discovery', slug: 'tutorials/llm-optimization' },
					],
				},
				{
					label: 'Completeness',
					items: [
						{ label: 'Write comprehensive content', slug: 'tutorials/write-comprehensive-content' },
					{ label: 'Pre-publication check', slug: 'tutorials/pre-publication-check' },
					],
				},
			],
		}),
	],
});
