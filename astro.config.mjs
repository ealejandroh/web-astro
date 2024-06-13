import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: ["es", "en", "fr"],
        routing: {
            prefixDefaultLocale: true
        },
    },
    integrations: [icon()],
});
