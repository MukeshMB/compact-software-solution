import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://compactsoftwares.com'

    const publicPages = [
        { path: '', changefreq: 'daily', priority: 1.0, lastmod: '2025-04-13' },
        { path: '/about', changefreq: 'monthly', priority: 0.9, lastmod: '2025-04-01' },
        { path: '/blogs', changefreq: 'weekly', priority: 0.9, lastmod: '2025-04-05' },
        { path: '/contacts', changefreq: 'monthly', priority: 1.0, lastmod: '2025-03-01' },
        { path: '/features', changefreq: 'monthly', priority: 1.0, lastmod: '2025-03-20' },
        { path: '/pricing', changefreq: 'monthly', priority: 1.0, lastmod: '2025-04-07' },
        { path: '/privacy-policy', changefreq: 'yearly', priority: 1.0, lastmod: '2025-01-01' },
        { path: '/signin', changefreq: 'monthly', priority: 0.9, lastmod: '2025-03-15' },
        { path: '/terms-condition', changefreq: 'yearly', priority: 1.0, lastmod: '2025-01-01' },
    ]

    const privatePages = [
        { path: '/dashboard', changefreq: 'daily', priority: 0.9, lastmod: '2025-04-09' },
        { path: '/automations', changefreq: 'weekly', priority: 0.7, lastmod: '2025-04-01' },
        { path: '/connect', changefreq: 'weekly', priority: 0.7, lastmod: '2025-04-03' },
        { path: '/my-contacts', changefreq: 'weekly', priority: 0.8, lastmod: '2025-04-02' },
        { path: '/settings', changefreq: 'monthly', priority: 0.6, lastmod: '2025-04-01' },
    ]

    const allPages = [...publicPages, ...privatePages]

    return allPages.map(({ path, changefreq, priority }) => ({
        url: `${baseUrl}${path}`,
        changeFrequency: changefreq as "daily" | "monthly" | "weekly" | "yearly" | "always" | "hourly" | "never",
        priority,
    }))
}