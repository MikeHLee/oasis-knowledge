declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"concepts/computer-science/checksums.md": {
	id: "concepts/computer-science/checksums.md";
  slug: "concepts/computer-science/checksums";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"concepts/computer-science/operating-systems.md": {
	id: "concepts/computer-science/operating-systems.md";
  slug: "concepts/computer-science/operating-systems";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"concepts/computer-science/surveillance.md": {
	id: "concepts/computer-science/surveillance.md";
  slug: "concepts/computer-science/surveillance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"concepts/computer-science/uart-usart.md": {
	id: "concepts/computer-science/uart-usart.md";
  slug: "concepts/computer-science/uart-usart";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"concepts/physics-chemistry/volatility.md": {
	id: "concepts/physics-chemistry/volatility.md";
  slug: "concepts/physics-chemistry/volatility";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/light-emitting-diodes.md": {
	id: "hardware/interfaces/light-emitting-diodes.md";
  slug: "hardware/interfaces/light-emitting-diodes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/media-interfaces.md": {
	id: "hardware/interfaces/media-interfaces.md";
  slug: "hardware/interfaces/media-interfaces";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/pin-connectors.md": {
	id: "hardware/interfaces/pin-connectors.md";
  slug: "hardware/interfaces/pin-connectors";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/serial-communications.md": {
	id: "hardware/interfaces/serial-communications.md";
  slug: "hardware/interfaces/serial-communications";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/signal-types-analog-and-digital.md": {
	id: "hardware/interfaces/signal-types-analog-and-digital.md";
  slug: "hardware/interfaces/signal-types-analog-and-digital";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/wire-connections.md": {
	id: "hardware/interfaces/wire-connections.md";
  slug: "hardware/interfaces/wire-connections";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/interfaces/wireless-wifi-bluetooth-lora.md": {
	id: "hardware/interfaces/wireless-wifi-bluetooth-lora.md";
  slug: "hardware/interfaces/wireless-wifi-bluetooth-lora";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/platforms/atmega328-boards.md": {
	id: "hardware/platforms/atmega328-boards.md";
  slug: "hardware/platforms/atmega328-boards";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/platforms/esp-32-boards.md": {
	id: "hardware/platforms/esp-32-boards.md";
  slug: "hardware/platforms/esp-32-boards";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/platforms/esp-8266-boards.md": {
	id: "hardware/platforms/esp-8266-boards.md";
  slug: "hardware/platforms/esp-8266-boards";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/platforms/pi-zero-boards.md": {
	id: "hardware/platforms/pi-zero-boards.md";
  slug: "hardware/platforms/pi-zero-boards";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/bmp-280-atmospheric-pressure.md": {
	id: "hardware/sensors/bmp-280-atmospheric-pressure.md";
  slug: "hardware/sensors/bmp-280-atmospheric-pressure";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/guva-s12sd-uv-light.md": {
	id: "hardware/sensors/guva-s12sd-uv-light.md";
  slug: "hardware/sensors/guva-s12sd-uv-light";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/mq-135-volatile-gasses.md": {
	id: "hardware/sensors/mq-135-volatile-gasses.md";
  slug: "hardware/sensors/mq-135-volatile-gasses";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/ov-2640-esp32-camera.md": {
	id: "hardware/sensors/ov-2640-esp32-camera.md";
  slug: "hardware/sensors/ov-2640-esp32-camera";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/ov-5647-pi-camera.md": {
	id: "hardware/sensors/ov-5647-pi-camera.md";
  slug: "hardware/sensors/ov-5647-pi-camera";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/scd-41-co2-temp-humidity.md": {
	id: "hardware/sensors/scd-41-co2-temp-humidity.md";
  slug: "hardware/sensors/scd-41-co2-temp-humidity";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/sps-30-particulate-matter.md": {
	id: "hardware/sensors/sps-30-particulate-matter.md";
  slug: "hardware/sensors/sps-30-particulate-matter";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/tcs-34725-rgb-color.md": {
	id: "hardware/sensors/tcs-34725-rgb-color.md";
  slug: "hardware/sensors/tcs-34725-rgb-color";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"hardware/sensors/veml-7700-visible-light.md": {
	id: "hardware/sensors/veml-7700-visible-light.md";
  slug: "hardware/sensors/veml-7700-visible-light";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
