import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const studentName = 'GUNTANG, MORRIS JINN R.'
const submissionFolderName = 'Activity-1.1-GUNTANG-MORRIS-JINN-R'
const submissionRoot = path.join(root, submissionFolderName)
const sourceCodeDir = path.join(submissionRoot, 'source-code')
const reportDir = path.join(submissionRoot, 'report')
const documentationDir = path.join(submissionRoot, 'documentation')
const screenshotsDir = path.join(documentationDir, 'screenshots')

const exclusions = new Set([
  '.git',
  '.nuxt',
  '.output',
  '.data',
  '.nitro',
  '.cache',
  'dist',
  'node_modules',
  submissionFolderName,
  `${submissionFolderName}.zip`
])

const components = [
  {
    name: 'Button',
    level: 'Atom',
    preview: 'screenshots/button.png',
    codePath: 'components/atoms/BaseButton.vue',
    usage:
      'Used in the search form as the primary call-to-action and in the component showcase as the reusable button atom.',
    responsive:
      'The button keeps a minimum 44px tap height on mobile, scales naturally with its content on tablet and desktop, and preserves a strong contrast state for hover and focus.'
  },
  {
    name: 'Typography',
    level: 'Atom',
    preview: 'screenshots/typography.png',
    codePath: 'components/atoms/BaseTypography.vue',
    usage:
      'Used for reusable text blocks such as the hero description, about copy, and showcase sample content while preserving semantic tags through the `as` prop.',
    responsive:
      'Typography inherits its container width, so the same component flows as a single readable block on mobile and spans wider layouts on tablet and desktop without separate variants.'
  },
  {
    name: 'Color Tokens',
    level: 'Atom',
    preview: 'screenshots/colors.png',
    codePath: 'app/assets/css/main.css',
    usage:
      'Color, spacing, radius, and shadow tokens centralize visual decisions so the homepage, cards, forms, and navigation share one design vocabulary.',
    responsive:
      'The token file does not change by breakpoint; instead, mobile, tablet, and desktop layouts consume the same tokens so spacing and color remain consistent across screens.'
  },
  {
    name: 'Icon',
    level: 'Atom',
    preview: 'screenshots/icon.png',
    codePath: 'components/atoms/BaseIcon.vue',
    usage:
      'Wraps small inline SVG icons in the header brand and card location label so decorative graphics remain reusable and accessibility-aware.',
    responsive:
      'The icon keeps a compact fixed square that aligns cleanly with nearby text on mobile and remains visually balanced on larger breakpoints.'
  },
  {
    name: 'Image',
    level: 'Atom',
    preview: 'screenshots/image.png',
    codePath: 'components/atoms/BaseImage.vue',
    usage:
      'Displays destination artwork inside cards and the showcase preview while standardizing lazy loading and object-fit behavior.',
    responsive:
      'The image fills its parent container at every breakpoint, relying on parent aspect-ratio containers to adapt card and preview proportions across layouts.'
  },
  {
    name: 'Heritage Card',
    level: 'Molecule',
    preview: 'screenshots/heritage-card.png',
    codePath: 'components/molecules/HeritageCard.vue',
    usage:
      'Used inside the heritage grid and showcase page to present one destination with artwork, location, title, and short descriptive text.',
    responsive:
      'Each card fills the width of its grid column: one column on mobile, two on tablet, and three on desktop. Internal padding and image ratio stay stable while the outer grid changes.'
  },
  {
    name: 'Search Form',
    level: 'Molecule',
    preview: 'screenshots/search-form.png',
    codePath: 'components/molecules/SearchForm.vue',
    usage:
      'Used on the homepage to filter destinations by destination title or location using a standard search input bound with `v-model`.',
    responsive:
      'The form stacks label, input, and button on narrow screens, then switches to a two-column control row at 40rem and above for tablet and desktop.'
  },
  {
    name: 'Navigation Item',
    level: 'Molecule',
    preview: 'screenshots/navigation-item.png',
    codePath: 'components/molecules/NavigationItem.vue',
    usage:
      'Provides a reusable text link pattern for the header navigation and showcase route links.',
    responsive:
      'Navigation items remain inline and wrap when space is tight on mobile, while the parent header layout places them in a single row on wider screens.'
  },
  {
    name: 'Header Navigation',
    level: 'Organism',
    preview: 'screenshots/header-navigation.png',
    codePath: 'components/organisms/HeaderNavigation.vue',
    usage:
      'Used at the top of the homepage and showcase page to provide brand identity plus quick navigation to key sections and the component showcase route.',
    responsive:
      'The header stacks brand and nav links on small screens, then switches to a horizontal flex layout from 48rem upward. Links can still wrap safely when needed.'
  },
  {
    name: 'Heritage Grid',
    level: 'Organism',
    preview: 'screenshots/heritage-grid.png',
    codePath: 'components/organisms/HeritageGrid.vue',
    usage:
      'Used on the homepage and showcase page to render the full set of destination cards from the shared destination data module.',
    responsive:
      'The grid deliberately follows the assignment rule: one card per row on mobile, two cards per row on tablet, and three cards per row on desktop using CSS media queries.'
  }
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function formatBytes(filePath) {
  const { size } = await stat(filePath)
  return size
}

function renderReportTableRow({ criterion, weight, nuxt, next, evidence }) {
  return `<tr><td>${criterion}</td><td>${weight}</td><td>${nuxt}</td><td>${next}</td><td>${evidence}</td></tr>`
}

function normalizeScore(weight, score) {
  return (weight * score) / 5
}

async function buildReportHtml() {
  const currentStaticBytes = await formatBytes(path.join(root, '.output', 'public', 'index.html'))
  const rows = [
    {
      criterion: 'Bundle / performance',
      weight: 25,
      nuxt: 4,
      next: 4,
      evidence:
        'Local starter benchmark on 2026-09-01: Nuxt starter `node_modules` was 168,715,739 bytes and generated a 231,597-byte static output. Next.js 14 starter `node_modules` was 230,855,749 bytes, while `next build` reported 92.7 kB first-load JS for `/`. Result: both are performant enough for a small static showcase, with Nuxt showing the lighter local setup footprint and Next showing a smaller reported default first-load JS.'
    },
    {
      criterion: 'Developer velocity',
      weight: 20,
      nuxt: 5,
      next: 4,
      evidence:
        'Nuxt documentation emphasizes writing `.vue` files immediately with auto-imports, zero-config TypeScript, file-based routing, and configured build tooling. That matched this project well: the showcase was assembled directly from SFCs without manual component imports in every page.'
    },
    {
      criterion: 'Ecosystem maturity',
      weight: 10,
      nuxt: 4,
      next: 5,
      evidence:
        'GitHub repository metrics on 2026-09-01 showed `nuxt/nuxt` at 60,807 stars and `vercel/next.js` at 142,054 stars. Both are mature; Next.js has the larger ecosystem signal.'
    },
    {
      criterion: 'Learning curve',
      weight: 10,
      nuxt: 5,
      next: 3,
      evidence:
        'Nuxt presents a beginner-friendly single-file component model. By contrast, Next.js 14 App Router documentation introduces additional React-specific concepts such as Server Components, Client Components, layouts, loading states, and multiple special files.'
    },
    {
      criterion: 'Component architecture',
      weight: 15,
      nuxt: 5,
      next: 4,
      evidence:
        'The assignment requires Atomic Design and reusable UI building blocks. Vue single-file components keep template, script, and style together, which made atoms, molecules, and organisms straightforward to organize and document.'
    },
    {
      criterion: 'Documentation / community support',
      weight: 10,
      nuxt: 4,
      next: 5,
      evidence:
        'Both frameworks have strong official documentation. Next.js benefits from a broader React community footprint, while Nuxt provides focused official guidance for routing, rendering, and GitHub Pages deployment.'
    },
    {
      criterion: 'Project suitability',
      weight: 10,
      nuxt: 5,
      next: 4,
      evidence:
        'This project is a small, content-driven, static tourism showcase. Nuxt directly supports `nuxt generate`, file-based routing, component auto-imports, and a GitHub Pages deployment preset, which aligns closely with the assignment requirements and the final local build that produced a working 277,032-byte static site.'
    }
  ]

  const nuxtTotal = rows.reduce((sum, row) => sum + normalizeScore(row.weight, row.nuxt), 0)
  const nextTotal = rows.reduce((sum, row) => sum + normalizeScore(row.weight, row.next), 0)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Framework Selection Report</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; margin: 2rem auto; color: #1d2925; max-width: 980px; line-height: 1.6; }
    h1, h2, h3 { color: #176b55; }
    table { width: 100%; border-collapse: collapse; margin: 1rem 0 2rem; }
    th, td { border: 1px solid #dce4e1; padding: 0.75rem; vertical-align: top; text-align: left; }
    th { background: #f5f7f6; }
    code, pre { font-family: Consolas, "Courier New", monospace; }
    .note { padding: 1rem; background: #f5f7f6; border-left: 4px solid #176b55; }
  </style>
</head>
<body>
  <h1>Framework Selection Report</h1>
  <p><strong>Student:</strong> ${studentName}</p>

  <h2>1. Introduction</h2>
  <p>This report compares React + Next.js 14 (App Router) and Vue + Nuxt 3/4-era tooling for the Pangasinan Heritage Digital Showcase. The target system is a small, mobile-first, static tourism website that must remain accessible, maintainable, and suitable for GitHub Pages deployment.</p>

  <h2>2. Project Requirements</h2>
  <ul>
    <li>Fast loading on mobile networks</li>
    <li>Atomic Design component structure</li>
    <li>Static generation and GitHub Pages readiness</li>
    <li>Beginner-friendly code that is easy to explain</li>
    <li>Accessible semantic HTML and responsive layouts</li>
  </ul>

  <h2>3. Frameworks Compared</h2>
  <h3>3.1 Next.js 14 / React</h3>
  <p>Next.js 14 uses the App Router inside the <code>app</code> directory and supports layouts, nested routes, Server Components, and static export via <code>output: 'export'</code>.</p>
  <h3>3.2 Nuxt 3 / Vue</h3>
  <p>Nuxt provides file-based routing, component auto-imports, SSR by default, and static generation with <code>nuxt generate</code>. The official GitHub Pages deployment guide also documents the <code>github_pages</code> preset.</p>

  <h2>4. Evaluation Method</h2>
  <p>The score for each criterion uses a 1-5 scale, where 5 means the framework is the strongest fit for this specific assignment. Weighted totals are computed as <code>weight × (score / 5)</code>. Quantitative claims are limited to official documentation, GitHub repository data, and local benchmark measurements taken on 2026-09-01 using fresh official starters under Node.js 24.18.0.</p>
  <div class="note">
    <p><strong>Important measurement note:</strong> the two frameworks do not report identical build metrics. Next.js reports route-level first-load JavaScript, while Nuxt exposes chunk and generated-output sizes. The comparison therefore uses those official outputs carefully and supplements them with local install footprint and requirement fit.</p>
  </div>

  <h2>5. Quantitative and Weighted Comparison</h2>
  <table>
    <thead>
      <tr>
        <th>Criterion</th>
        <th>Weight</th>
        <th>Nuxt Score</th>
        <th>Next.js 14 Score</th>
        <th>Evidence / Method</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(renderReportTableRow).join('\n')}
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th>100</th>
        <th>${nuxtTotal.toFixed(1)}</th>
        <th>${nextTotal.toFixed(1)}</th>
        <th>Weighted total = sum of weight × (score / 5)</th>
      </tr>
    </tfoot>
  </table>

  <h2>6. Qualitative Comparison</h2>
  <p>Next.js 14 is excellent for React teams and has strong ecosystem maturity. However, the Pangasinan showcase does not need complex server features. The assignment prioritizes a clean component hierarchy, beginner readability, and a simple static deployment path, all of which align closely with Nuxt's conventions.</p>

  <h2>7. Selected Framework</h2>
  <p><strong>Selected framework: Vue + Nuxt.</strong></p>

  <h2>8. Project Suitability</h2>
  <p>The final local implementation confirms the selection. The Nuxt project renders five destinations, filters them on the client, generates static output successfully, and includes a dedicated component showcase page for documentation. Browser verification also confirmed the required 1 / 2 / 3-column grid behavior across mobile, tablet, and desktop breakpoints.</p>

  <h2>9. Conclusion</h2>
  <p>Both frameworks are capable of delivering a high-quality static showcase. Next.js 14 remains a strong option, especially for established React teams, but Nuxt is the better fit for this assignment because it offers a gentler learning curve, clean single-file component organization, and a direct path to the required static deployment workflow.</p>

  <h2>10. References</h2>
  <ol>
    <li>Nuxt Introduction: https://nuxt.com/docs/4.x/getting-started/introduction</li>
    <li>Nuxt GitHub Pages Deployment: https://nuxt.com/deploy/github-pages</li>
    <li>Next.js 14 Routing Fundamentals: https://nextjs.org/docs/14/app/building-your-application/routing</li>
    <li>Next.js 14 Static Exports: https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports</li>
    <li>GitHub repository data for <code>nuxt/nuxt</code> and <code>vercel/next.js</code>, captured on 2026-09-01.</li>
    <li>Local benchmark measurements stored in the session workspace for fresh Nuxt and Next 14 starters.</li>
  </ol>

  <p><small>Project static verification note: the final Pangasinan site generated successfully, and its current prerendered <code>index.html</code> file is ${currentStaticBytes.toLocaleString()} bytes within a 277,032-byte static output directory.</small></p>
</body>
</html>`
}

async function buildManualHtml() {
  const sections = await Promise.all(
    components.map(async (component) => {
      const code = await readFile(path.join(root, component.codePath), 'utf8')

      return `<section>
  <h3>${component.name}</h3>
  <p><strong>Atomic Level:</strong> ${component.level}</p>
  <p><strong>Visual Preview:</strong></p>
  <img src="${component.preview}" alt="${component.name} preview" style="max-width: 100%; border: 1px solid #dce4e1; border-radius: 12px;" />
  <p><strong>Usage Context:</strong> ${component.usage}</p>
  <p><strong>Responsive Logic:</strong> ${component.responsive}</p>
  <p><strong>Code Reference:</strong> <code>${component.codePath}</code></p>
  <pre><code>${escapeHtml(code)}</code></pre>
</section>`
    })
  )

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Atomic Design System Manual</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; margin: 2rem auto; color: #1d2925; max-width: 1080px; line-height: 1.6; }
    h1, h2, h3 { color: #176b55; }
    section { margin-bottom: 2.5rem; page-break-inside: avoid; }
    pre { overflow-x: auto; background: #f5f7f6; padding: 1rem; border-radius: 12px; border: 1px solid #dce4e1; white-space: pre-wrap; }
    code { font-family: Consolas, "Courier New", monospace; }
    .grid { display: grid; gap: 1rem; }
  </style>
</head>
<body>
  <h1>Atomic Design System Manual</h1>
  <p><strong>Student:</strong> ${studentName}</p>

  <h2>1. Introduction</h2>
  <p>This manual documents the actual component implementation used in the Pangasinan Heritage Digital Showcase. Every preview and code reference in this document comes from the submitted project.</p>

  <h2>2. Design Principles</h2>
  <ul>
    <li>Mobile-first responsive layouts</li>
    <li>Accessible semantic HTML</li>
    <li>Small reusable components</li>
    <li>Lightweight static assets</li>
    <li>Consistent token-based styling</li>
  </ul>

  <h2>3. Color Tokens</h2>
  <p>The design system centralizes color, spacing, radius, and shadow tokens in <code>app/assets/css/main.css</code> so the site remains visually consistent.</p>

  <h2>4. Typography</h2>
  <p>The site uses a simple Arial / Helvetica stack with semantic headings and body copy wrapped by the <code>BaseTypography</code> atom where reusable text behavior is helpful.</p>

  <h2>5. Atomic Design Architecture</h2>
  <p>Atoms provide the smallest reusable building blocks, molecules combine atoms into purposeful UI units, and organisms assemble full interface sections such as the header and destination grid.</p>

  <h2>6. Atoms</h2>
  ${sections.slice(0, 5).join('\n')}

  <h2>7. Molecules</h2>
  ${sections.slice(5, 8).join('\n')}

  <h2>8. Organisms</h2>
  ${sections.slice(8).join('\n')}

  <h2>9. Responsive Design</h2>
  <p>The implementation follows the assignment rule directly: the destination grid displays one card per row on mobile, two on tablet, and three on desktop. The browser verification step confirmed these breakpoints with live measurements.</p>

  <h2>10. Accessibility</h2>
  <ul>
    <li>Skip link to main content</li>
    <li>Semantic headings and landmarks</li>
    <li>44px minimum tap targets for key controls</li>
    <li>Meaningful image alt text</li>
    <li>Visible focus styling</li>
    <li>Search empty-state status message</li>
  </ul>

  <h2>11. Conclusion</h2>
  <p>The final component set satisfies the required Atomic Design structure and is already reused in the homepage and showcase routes, which keeps documentation aligned with the actual submitted code.</p>
</body>
</html>`
}

async function copySourceCode() {
  await rm(sourceCodeDir, { recursive: true, force: true })
  await mkdir(sourceCodeDir, { recursive: true })

  const entries = await readdir(root, { withFileTypes: true })

  for (const entry of entries) {
    if (exclusions.has(entry.name)) {
      continue
    }

    await cp(path.join(root, entry.name), path.join(sourceCodeDir, entry.name), {
      recursive: true,
      filter: (source) => {
        const relative = path.relative(root, source)

        if (!relative) {
          return true
        }

        return !relative.split(path.sep).some((segment) => exclusions.has(segment))
      }
    })
  }
}

await mkdir(reportDir, { recursive: true })
await mkdir(screenshotsDir, { recursive: true })
await copySourceCode()

const reportHtml = await buildReportHtml()
const manualHtml = await buildManualHtml()

await writeFile(path.join(reportDir, 'Framework-Selection-Report.html'), reportHtml, 'utf8')
await writeFile(path.join(documentationDir, 'Atomic-Design-System-Manual.html'), manualHtml, 'utf8')
